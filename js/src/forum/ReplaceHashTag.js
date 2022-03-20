import app from 'flarum/forum/app';

export default function () {
  this.$('a.hasht')
    .attr('title', app.translator.trans('justoverclock-hashtag.forum.post.hashtag_link_tooltip'))
    .click((e) => {
      if (e.ctrlKey || e.metaKey || e.which === 2) return;
      e.preventDefault();
      m.route.set(e.target.href);
    });
}
