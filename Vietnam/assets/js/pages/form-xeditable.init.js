"use strict";
$(function() {
    $.fn.editableform.buttons = '<button type="submit" class="btn btn-primary editable-submit btn-sm waves-effect waves-light"><i class="mdi mdi-check"></i></button><button type="button" class="btn btn-danger editable-cancel btn-sm waves-effect"><i class="mdi mdi-close"></i></button>',
        $("#inline-username").editable({ type: "text", pk: 1, emptytext: "Nhập họ và tên", name: "username", title: "Enter username", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-numberphone").editable({ type: "text", pk: 1, emptytext: "Nhập số điện thoại", name: "number phone", title: "Enter number phone", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-company").editable({ type: "text", pk: 1, emptytext: "Nhập thông tin cơ quan hiện đang làm việc", name: "company", title: "Enter company", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-school-1").editable({ type: "text", pk: 1, emptytext: "Nhập tên trường Đại học", name: "school-1", title: "Enter company", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-school-2").editable({ type: "text", pk: 1, emptytext: "Nhập tên trường THPT", name: "school-2", title: "Enter company", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-school-3").editable({ type: "text", pk: 1, emptytext: "Nhập tên trường THCS", name: "school-3", title: "Enter company", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-school-4").editable({ type: "text", pk: 1, emptytext: "Nhập tên trường Tiểu học", name: "school-4", title: "Enter company", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-firstname").editable({ validate: function(e) { if ("" == $.trim(e)) return "This field is required" }, mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-sex").editable({
            prepend: "Chọn",
            mode: "inline",
            inputclass: "form-select-sm form-select",
            source: [{ value: 1, text: "Nam" }, { value: 2, text: "Nữ" }],
            display: function(t, e) {
                e = $.grep(e, function(e) { return e.value == t });
                e.length ? $(this).text(e[0].text).css("color", { "": "gray", 1: "green", 2: "blue" }[t]) : $(this).empty()
            }
        }),
        $("#inline-group").editable({ showbuttons: !1, mode: "inline", inputclass: "form-select-sm form-select" }),
        $("#inline-status").editable({ mode: "inline", inputclass: "form-select-sm form-select" }),
        $("#inline-dob").editable({ mode: "inline", inputclass: "form-select-sm form-select" }),
        $("#inline-event").editable({ placement: "bottom", showbuttons: "bottom", mode: "inline", combodate: { firstItem: "name" }, inputclass: "form-select-sm form-select" }),
        $("#inline-comments").editable({ showbuttons: "bottom", mode: "inline", inputclass: "form-control-sm form-control" }),
        $("#inline-fruits").editable({ pk: 1, limit: 3, mode: "inline", inputclass: "form-check-input", source: [{ value: 1, text: "Banana" }, { value: 2, text: "Peach" }, { value: 3, text: "Apple" }, { value: 4, text: "Watermelon" }, { value: 5, text: "Orange" }] })
});