/* 页面载入完成后，创建复制按钮（原生 JS 实现，不依赖 jQuery） */
(function () {
  function initCopyCode() {
    var snippets = document.querySelectorAll('.highlight .code pre');
    for (var i = 0; i < snippets.length; i++) {
      var pre = snippets[i];
      var btn = document.createElement('button');
      btn.className = 'btn-copy';
      btn.setAttribute('data-clipboard-snippet', '');
      btn.setAttribute('type', 'button');
      btn.innerHTML = '<i class="fa fa-clipboard"></i><span>复制</span>';
      pre.parentNode.insertBefore(btn, pre);
    }
    if (typeof ClipboardJS !== 'undefined') {
      new ClipboardJS('.btn-copy', {
        target: function (trigger) {
          return trigger.nextElementSibling;
        }
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyCode);
  } else {
    initCopyCode();
  }
})();
