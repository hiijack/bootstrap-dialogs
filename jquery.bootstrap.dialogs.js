/**
 * It is used to create simple bootstrap-like dialog more easily.
 */
(function($){
  var createDialog = function(opts){
    var options = $.extend(true, {
      id : '',
      title : 'Warning',
      msg : ''
    }, opts);

    if ($('#' + options.id).length == 0){
      var dialogHTML = '<div class="modal" id=' + options.id + '><div class="modal-dialog"><div class="modal-content">\
        <div class="modal-header">\
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
          <h4 class="modal-title"></h4>\
        </div>\
        <div class="modal-body">\
          <p></p>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
        </div>\
      </div></div></div>';

      $(dialogHTML).appendTo('body');
    }

    var $dialog = $('#' + options.id);
    $dialog.find('.modal-title').text(options.title);
    $dialog.find('.modal-body p').text(options.msg);
    $dialog.modal('show');
  };

  $.dialogs = {
    warn : function(opts){
      if (typeof (opts) === 'string'){
        opts = {
          id : 'jquery-bootstrap-alert-dialog',
          msg : opts
        }
      }
      createDialog(opts);
    }
  };
})(jQuery);