import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
    accessToken: 'aVZ_hXoMCm8AAAAAAAACgWv0lXw7f59mTFyuUR1CEMnALuqq6F7zFWmGsaSPOdIZ',
    fetch
});

dbx.filesListFolder({
    path: '',
}).then(res => console.log(res.slice(0,100)));
