const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/project-one-server-two'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      transformers: [
        {
          name: '@nestjs/swagger/plugin',
          options: {
            dtoFileNameSuffix: ['.entity.ts', '.dto.ts'],
            controllerFileNameSuffix: ['.controller.ts'],
            classValidatorShim: true,
            classTransformerShim: false,
            dtoKeyOfComment: 'description',
            controllerKeyOfComment: 'description',
            introspectComments: true,
          },
        },
      ],
    }),
  ],
};
