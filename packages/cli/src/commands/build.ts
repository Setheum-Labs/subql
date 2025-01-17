// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {lstatSync, readFileSync} from 'fs';
import path from 'path';
import {Command, flags} from '@oclif/command';
import cli from 'cli-ux';
import {runWebpack} from '../controller/build-controller';
import Validate from './validate';

export default class Build extends Command {
  static description = 'Build this SubQuery project code';

  static flags = {
    location: flags.string({char: 'l', description: 'local folder'}),
    output: flags.string({char: 'o', description: 'output folder of build e.g. dist'}),
    mode: flags.enum({options: ['production', 'prod', 'development', 'dev'], default: 'production'}),
  };

  async run(): Promise<void> {
    const {flags} = this.parse(Build);

    const directory = flags.location ? path.resolve(flags.location) : process.cwd();
    const isDev = flags.mode === 'development' || flags.mode === 'dev';

    if (!lstatSync(directory).isDirectory()) {
      this.error('Argument `location` is not a valid directory');
    }

    // Check that we're in a valid project
    try {
      await Validate.run(['--silent', '--location', directory]);
    } catch (e) {
      this.error('Directory is not a valid project');
    }

    // Get the output location from the project package.json main field
    const pjson = JSON.parse(readFileSync(path.join(directory, 'package.json')).toString());

    const defaultEntry = path.join(directory, 'src/index.ts');
    const outputDir = path.resolve(directory, flags.output ?? 'dist');

    let buildEntries: {[key: string]: string} = {};
    buildEntries.index = defaultEntry;

    if (pjson.exports && typeof pjson.exports !== 'string') {
      buildEntries = {...buildEntries, ...pjson.exports};
    }

    for (const i in buildEntries) {
      if (typeof buildEntries[i] !== 'string') {
        this.warn(`Ignoring entry ${i} from build.`);
        delete buildEntries[i];
      }
    }

    cli.action.start('Building and packing code');
    await runWebpack(buildEntries, directory, outputDir, isDev, true);
    cli.action.stop();
  }
}
