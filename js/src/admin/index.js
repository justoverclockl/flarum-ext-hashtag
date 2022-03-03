import app from 'flarum/admin/app';


app.initializers.add('justoverclock-hashtag', () => {
  app.extensionData
    .for('justoverclock-hashtag')
    .registerSetting({
      setting: 'justoverclock-hashtag.regex',
      name: 'justoverclock-hashtag.regex',
      type: 'text',
      label: app.translator.trans('justoverclock-hashtag.admin.settings.regexlabel'),
      help: app.translator.trans('justoverclock-hashtag.admin.settings.regexdesc'),
    });
});
