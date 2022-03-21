import app from 'flarum/admin/app';

app.initializers.add('justoverclock-hashtag', () => {
  const oldRegex = app.data.settings['justoverclock-hashtag.regex.old'];

  app.extensionData.for('justoverclock-hashtag').registerSetting({
    setting: 'justoverclock-hashtag.regex',
    name: 'justoverclock-hashtag.regex',
    type: 'text',
    label: app.translator.trans('justoverclock-hashtag.admin.settings.regexlabel'),
    placeholder: String.raw`/\B#([\p{L}\p{N}_]+)(?!#)\b/u`,
    help: (
      <p>
        {app.translator.trans('justoverclock-hashtag.admin.settings.regexdesc')}

        {oldRegex && (
          <span>
            <br />
            {app.translator.trans('justoverclock-hashtag.admin.settings.oldregexdesc', { regex: oldRegex })}
          </span>
        )}
      </p>
    ),
  });
});
