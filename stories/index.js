import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Loader } from "../src/components/Loader/index.tsx"
import FileUpload from '../src/components/FileUpload/index'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Loader', module)
  .add('loading status', () => <Loader loader={true}/>)

storiesOf('UploadFile', module)
  .add('uploading status', () => <FileUpload/>)
  .add('uploaded status', () => <FileUpload
    uploadedImage="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"/>)
