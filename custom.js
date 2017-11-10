var Util = {
    init: function (type) {
        Util.change(type);
    },
    change: function (type) {
        $('.base-content').hide();
        $('div.' + type).show();
        $('.btn-tool a.toolbar').addClass('hover');
        $('.btn-tool a.' + type).removeClass('hover');
    }
}

$(function() {
    $('.toolbar').click(function () {
        var tag = $(this).attr('tag');
        Util.change(tag);
    });

    $('.sql-param-in-btn').click(function () {
        var value = $('.sql-param-in-text').val();
        if (value) {
            var result = sqlParamIn(value);
            $('.sql-param-in-text').val(result);
        }
    });

    $('.clear').click(function () {
        $('.sql-param-in-text').val("");
    });
})

function sqlParamIn(str) {
    var result = '';
    var array = str.split(/，|；|：|;|,|;|:| |\n/);
    if (array && array.length > 0) {
        for (var i in array) {
            if (array[i]) {
                result += "'" + array[i] + "', ";
            }
        }
        result = result.substring(0, result.length - 2);
    }
    return result;
}