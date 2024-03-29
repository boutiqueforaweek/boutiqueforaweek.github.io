!(function (l) {
  "use strict";
  var f = window.MadMimi || {};
  (f.DEBUG_FLAG = !0),
    (f.init = function () {
      l("form.mimi-form").submit(function (i) {
        i.preventDefault();
        var t = "",
          s = 0,
          n = "";
        l(this)
          .find(":input")
          .each(function (i) {
            var e = l(this).attr("name");
            "checkbox" == l(this).attr("type") &&
              l(this).is(":checked") &&
              (n != e && ((n = e), (s = 0)),
              0 == s &&
                ((t = l("input:checkbox[name='" + e + "']:checked")
                  .map(function () {
                    return this.value;
                  })
                  .get()
                  .join(", ")),
                (s = 1)),
              l("input[name='" + e + "']").val(t));
          });
        var a = "",
          r = "",
          h = [];
        l(this)
          .find("[fingerprint='date']")
          .each(function (i) {
            var e = l(this).attr("name");
            "date" == l(this).attr("fingerprint") &&
              (r != e && ((r = e), (h = []), (a = "")),
              h.push(l(this).val()),
              3 == h.length && (a = h[0] + " " + h[1] + ", " + h[2]),
              l("input[name='" + e + "']").val(a));
          });
        var u = l(this),
          e = l(".mimi-spinner", u),
          o = l(this).serialize(),
          c = [],
          m = f;
        if (
          (u.find("input.mimi-invalid").removeClass("mimi-invalid"),
          l(this)
            .find(":input")
            .each(function (i) {
              "signup[email]" != l(this).attr("name") ||
              f.isEmail(l(this).val())
                ? ((l(this).is('input[type="checkbox"]') &&
                    l(this).hasClass("mimi-required") &&
                    !l(this).is(":checked")) ||
                    (l(this).is(".mimi-required") && "" == l(this).val())) &&
                  (c.push(l(this)), m.log("A required filled was not filled"))
                : (c.push(l(this)), m.log("Email is NOT valid"));
            }),
          0 == c.length)
        )
          e.css("display", "inline-block"),
            l.post(
              u.attr("action") + ".json",
              o,
              function (t) {
                u.fadeOut("fast", function () {
                  if (t.success) {
                    var i = t.result,
                      e = i.audience_member.suppressed;
                    i.has_redirect && (window.location.href = i.redirect),
                      u
                        .html(
                          f.addMessage(
                            e ? ["suppressed", "success"] : ["info", "success"],
                            e ? f.thankyou_suppressed : f.thankyou
                          )
                        )
                        .fadeIn("fast");
                  } else u.html(f.addMessage("info", f.oops)).fadeIn("fast");
                });
              },
              "jsonp"
            );
        else {
          l(c).each(function (i, e) {
            l(this).addClass("mimi-invalid");
          });
          var d = u.find(".mimi-error, .mimi-info");
          0 != d.length && d.remove(), u.prepend(f.addMessage("error", f.fix));
        }
      });
    }),
    (f.addMessage = function (i, e) {
      var t = [];
      return (
        l.isArray(i)
          ? l.each(i, function (i, e) {
              t.push("mimi-" + e);
            })
          : t.push("mimi-" + i.toString()),
        l("<p/>", { class: t.join(" ") }).text(e)
      );
    }),
    (f.isEmail = function (i) {
      return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        i
      );
    }),
    (f.log = function (i) {
      f.DEBUG_FLAG && window.console && console.log(i);
    }),
    (l.fn.mimiSerializeObject = function () {
      var i = {},
        e = this.serializeArray();
      return (
        l.each(e, function () {
          i[this.name]
            ? (i[this.name].push || (i[this.name] = [i[this.name]]),
              i[this.name].push(this.value || ""))
            : (i[this.name] = this.value || "");
        }),
        i
      );
    }),
    l(document).ready(f.init);
})(jQuery);
