!(function (t, e, i, s) {
  "use strict";
  function n(t) {
    return (
      ("string" == typeof t || t instanceof String) &&
        (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")),
      t
    );
  }
  var a = function (e) {
    for (var i = e.length, s = t("head"); i--; )
      0 === s.has("." + e[i]).length &&
        s.append('<meta class="' + e[i] + '" />');
  };
  a([
    "foundation-mq-small",
    "foundation-mq-small-only",
    "foundation-mq-medium",
    "foundation-mq-medium-only",
    "foundation-mq-large",
    "foundation-mq-large-only",
    "foundation-mq-xlarge",
    "foundation-mq-xlarge-only",
    "foundation-mq-xxlarge",
    "foundation-data-attribute-namespace"
  ]),
    t(function () {
      "undefined" != typeof FastClick &&
        "undefined" != typeof i.body &&
        FastClick.attach(i.body);
    });
  var o = function (e, s) {
      if ("string" == typeof e) {
        if (s) {
          var n;
          if (s.jquery) {
            if (((n = s[0]), !n)) return s;
          } else n = s;
          return t(n.querySelectorAll(e));
        }
        return t(i.querySelectorAll(e));
      }
      return t(e, s);
    },
    r = function (t) {
      var e = [];
      return (
        t || e.push("data"),
        this.namespace.length > 0 && e.push(this.namespace),
        e.push(this.name),
        e.join("-")
      );
    },
    l = function (t) {
      for (var e = t.split("-"), i = e.length, s = []; i--; )
        0 !== i
          ? s.push(e[i])
          : this.namespace.length > 0
          ? s.push(this.namespace, e[i])
          : s.push(e[i]);
      return s.reverse().join("-");
    },
    d = function (e, i) {
      var s = this,
        n = !o(this).data(this.attr_name(!0));
      return (
        o(this.scope).is("[" + this.attr_name() + "]")
          ? (o(this.scope).data(
              this.attr_name(!0) + "-init",
              t.extend(
                {},
                this.settings,
                i || e,
                this.data_options(o(this.scope))
              )
            ),
            n && this.events(this.scope))
          : o("[" + this.attr_name() + "]", this.scope).each(function () {
              var n = !o(this).data(s.attr_name(!0) + "-init");
              o(this).data(
                s.attr_name(!0) + "-init",
                t.extend({}, s.settings, i || e, s.data_options(o(this)))
              ),
                n && s.events(this);
            }),
        "string" == typeof e ? this[e].call(this, i) : void 0
      );
    },
    c = function (t, e) {
      function i() {
        e(t[0]);
      }
      function s() {
        if (
          (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent))
        ) {
          var t = this.attr("src"),
            e = t.match(/\?/) ? "&" : "?";
          (e += "random=" + new Date().getTime()), this.attr("src", t + e);
        }
      }
      return t.attr("src")
        ? void (t[0].complete || 4 === t[0].readyState ? i() : s.call(t))
        : void i();
    };
  (e.matchMedia =
    e.matchMedia ||
    (function (t) {
      var e,
        i = t.documentElement,
        s = i.firstElementChild || i.firstChild,
        n = t.createElement("body"),
        a = t.createElement("div");
      return (
        (a.id = "mq-test-1"),
        (a.style.cssText = "position:absolute;top:-100em"),
        (n.style.background = "none"),
        n.appendChild(a),
        function (t) {
          return (
            (a.innerHTML =
              '&shy;<style media="' +
              t +
              '"> #mq-test-1 { width: 42px; }</style>'),
            i.insertBefore(n, s),
            (e = 42 === a.offsetWidth),
            i.removeChild(n),
            { matches: e, media: t }
          );
        }
      );
    })(i)),
    (function () {
      function t() {
        i && (a(t), r && jQuery.fx.tick());
      }
      for (
        var i,
          s = 0,
          n = ["webkit", "moz"],
          a = e.requestAnimationFrame,
          o = e.cancelAnimationFrame,
          r = "undefined" != typeof jQuery.fx;
        s < n.length && !a;
        s++
      )
        (a = e[n[s] + "RequestAnimationFrame"]),
          (o =
            o ||
            e[n[s] + "CancelAnimationFrame"] ||
            e[n[s] + "CancelRequestAnimationFrame"]);
      a
        ? ((e.requestAnimationFrame = a),
          (e.cancelAnimationFrame = o),
          r &&
            ((jQuery.fx.timer = function (e) {
              e() && jQuery.timers.push(e) && !i && ((i = !0), t());
            }),
            (jQuery.fx.stop = function () {
              i = !1;
            })))
        : ((e.requestAnimationFrame = function (t) {
            var i = new Date().getTime(),
              n = Math.max(0, 16 - (i - s)),
              a = e.setTimeout(function () {
                t(i + n);
              }, n);
            return (s = i + n), a;
          }),
          (e.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          }));
    })(jQuery),
    (e.Foundation = {
      name: "Foundation",
      version: "5.5.0",
      media_queries: {
        small: o(".foundation-mq-small")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        "small-only": o(".foundation-mq-small-only")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        medium: o(".foundation-mq-medium")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        "medium-only": o(".foundation-mq-medium-only")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        large: o(".foundation-mq-large")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        "large-only": o(".foundation-mq-large-only")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        xlarge: o(".foundation-mq-xlarge")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        "xlarge-only": o(".foundation-mq-xlarge-only")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        xxlarge: o(".foundation-mq-xxlarge")
          .css("font-family")
          .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
      },
      stylesheet: t("<style></style>").appendTo("head")[0].sheet,
      global: { namespace: s },
      init: function (t, i, s, n, a) {
        var r = [t, s, n, a],
          l = [];
        if (
          ((this.rtl = /rtl/i.test(o("html").attr("dir"))),
          (this.scope = t || this.scope),
          this.set_namespace(),
          i && "string" == typeof i && !/reflow/i.test(i))
        )
          this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
        else for (var d in this.libs) l.push(this.init_lib(d, i));
        return (
          o(e).load(function () {
            o(e)
              .trigger("resize.fndtn.clearing")
              .trigger("resize.fndtn.dropdown")
              .trigger("resize.fndtn.equalizer")
              .trigger("resize.fndtn.interchange")
              .trigger("resize.fndtn.joyride")
              .trigger("resize.fndtn.magellan")
              .trigger("resize.fndtn.topbar")
              .trigger("resize.fndtn.slider");
          }),
          t
        );
      },
      init_lib: function (e, i) {
        return this.libs.hasOwnProperty(e)
          ? (this.patch(this.libs[e]),
            i && i.hasOwnProperty(e)
              ? ("undefined" != typeof this.libs[e].settings
                  ? t.extend(!0, this.libs[e].settings, i[e])
                  : "undefined" != typeof this.libs[e].defaults &&
                    t.extend(!0, this.libs[e].defaults, i[e]),
                this.libs[e].init.apply(this.libs[e], [this.scope, i[e]]))
              : ((i = i instanceof Array ? i : new Array(i)),
                this.libs[e].init.apply(this.libs[e], i)))
          : function () {};
      },
      patch: function (t) {
        (t.scope = this.scope),
          (t.namespace = this.global.namespace),
          (t.rtl = this.rtl),
          (t.data_options = this.utils.data_options),
          (t.attr_name = r),
          (t.add_namespace = l),
          (t.bindings = d),
          (t.S = this.utils.S);
      },
      inherit: function (t, e) {
        for (var i = e.split(" "), s = i.length; s--; )
          this.utils.hasOwnProperty(i[s]) && (t[i[s]] = this.utils[i[s]]);
      },
      set_namespace: function () {
        var e =
          this.global.namespace === s
            ? t(".foundation-data-attribute-namespace").css("font-family")
            : this.global.namespace;
        this.global.namespace = e === s || /false/i.test(e) ? "" : e;
      },
      libs: {},
      utils: {
        S: o,
        throttle: function (t, e) {
          var i = null;
          return function () {
            var s = this,
              n = arguments;
            null == i &&
              (i = setTimeout(function () {
                t.apply(s, n), (i = null);
              }, e));
          };
        },
        debounce: function (t, e, i) {
          var s, n;
          return function () {
            var a = this,
              o = arguments,
              r = function () {
                (s = null), i || (n = t.apply(a, o));
              },
              l = i && !s;
            return (
              clearTimeout(s),
              (s = setTimeout(r, e)),
              l && (n = t.apply(a, o)),
              n
            );
          };
        },
        data_options: function (e, i) {
          function s(t) {
            return (
              !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
            );
          }
          function n(e) {
            return "string" == typeof e ? t.trim(e) : e;
          }
          i = i || "options";
          var a,
            o,
            r,
            l = {},
            d = function (t) {
              var e = Foundation.global.namespace;
              return t.data(e.length > 0 ? e + "-" + i : i);
            },
            c = d(e);
          if ("object" == typeof c) return c;
          for (r = (c || ":").split(";"), a = r.length; a--; )
            (o = r[a].split(":")),
              (o = [o[0], o.slice(1).join(":")]),
              /true/i.test(o[1]) && (o[1] = !0),
              /false/i.test(o[1]) && (o[1] = !1),
              s(o[1]) &&
                (o[1] =
                  -1 === o[1].indexOf(".")
                    ? parseInt(o[1], 10)
                    : parseFloat(o[1])),
              2 === o.length && o[0].length > 0 && (l[n(o[0])] = n(o[1]));
          return l;
        },
        register_media: function (e, i) {
          Foundation.media_queries[e] === s &&
            (t("head").append('<meta class="' + i + '"/>'),
            (Foundation.media_queries[e] = n(t("." + i).css("font-family"))));
        },
        add_custom_rule: function (t, e) {
          if (e === s && Foundation.stylesheet)
            Foundation.stylesheet.insertRule(
              t,
              Foundation.stylesheet.cssRules.length
            );
          else {
            var i = Foundation.media_queries[e];
            i !== s &&
              Foundation.stylesheet.insertRule(
                "@media " + Foundation.media_queries[e] + "{ " + t + " }"
              );
          }
        },
        image_loaded: function (t, e) {
          var i = this,
            s = t.length;
          0 === s && e(t),
            t.each(function () {
              c(i.S(this), function () {
                (s -= 1), 0 === s && e(t);
              });
            });
        },
        random_str: function () {
          return (
            this.fidx || (this.fidx = 0),
            (this.prefix =
              this.prefix ||
              [this.name || "F", (+new Date()).toString(36)].join("-")),
            this.prefix + (this.fidx++).toString(36)
          );
        },
        match: function (t) {
          return e.matchMedia(t).matches;
        },
        is_small_up: function () {
          return this.match(Foundation.media_queries.small);
        },
        is_medium_up: function () {
          return this.match(Foundation.media_queries.medium);
        },
        is_large_up: function () {
          return this.match(Foundation.media_queries.large);
        },
        is_xlarge_up: function () {
          return this.match(Foundation.media_queries.xlarge);
        },
        is_xxlarge_up: function () {
          return this.match(Foundation.media_queries.xxlarge);
        },
        is_small_only: function () {
          return !(
            this.is_medium_up() ||
            this.is_large_up() ||
            this.is_xlarge_up() ||
            this.is_xxlarge_up()
          );
        },
        is_medium_only: function () {
          return (
            this.is_medium_up() &&
            !this.is_large_up() &&
            !this.is_xlarge_up() &&
            !this.is_xxlarge_up()
          );
        },
        is_large_only: function () {
          return (
            this.is_medium_up() &&
            this.is_large_up() &&
            !this.is_xlarge_up() &&
            !this.is_xxlarge_up()
          );
        },
        is_xlarge_only: function () {
          return (
            this.is_medium_up() &&
            this.is_large_up() &&
            this.is_xlarge_up() &&
            !this.is_xxlarge_up()
          );
        },
        is_xxlarge_only: function () {
          return (
            this.is_medium_up() &&
            this.is_large_up() &&
            this.is_xlarge_up() &&
            this.is_xxlarge_up()
          );
        }
      }
    }),
    (t.fn.foundation = function () {
      var t = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        return Foundation.init.apply(Foundation, [this].concat(t)), this;
      });
    });
})(jQuery, window, window.document),
  (function (t, e) {
    "use strict";
    Foundation.libs.slider = {
      name: "slider",
      version: "5.5.0",
      settings: {
        start: 0,
        end: 100,
        step: 1,
        precision: null,
        initial: null,
        display_selector: "",
        vertical: !1,
        trigger_input_change: !1,
        on_change: function () {}
      },
      cache: {},
      init: function (t, e, i) {
        Foundation.inherit(this, "throttle"),
          this.bindings(e, i),
          this.reflow();
      },
      events: function () {
        var i = this;
        t(this.scope)
          .off(".slider")
          .on(
            "mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider",
            "[" +
              i.attr_name() +
              "]:not(.disabled, [disabled]) .range-slider-handle",
            function (e) {
              i.cache.active ||
                (e.preventDefault(), i.set_active_slider(t(e.target)));
            }
          )
          .on(
            "mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",
            function (s) {
              if (i.cache.active)
                if (
                  (s.preventDefault(),
                  t.data(i.cache.active[0], "settings").vertical)
                ) {
                  var n = 0;
                  s.pageY || (n = e.scrollY),
                    i.calculate_position(
                      i.cache.active,
                      i.get_cursor_position(s, "y") + n
                    );
                } else
                  i.calculate_position(
                    i.cache.active,
                    i.get_cursor_position(s, "x")
                  );
            }
          )
          .on(
            "mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",
            function () {
              i.remove_active_slider();
            }
          )
          .on("change.fndtn.slider", function () {
            i.settings.on_change();
          }),
          i.S(e).on(
            "resize.fndtn.slider",
            i.throttle(function () {
              i.reflow();
            }, 300)
          );
      },
      get_cursor_position: function (t, e) {
        var i,
          s = "page" + e.toUpperCase(),
          n = "client" + e.toUpperCase();
        return (
          "undefined" != typeof t[s]
            ? (i = t[s])
            : "undefined" != typeof t.originalEvent[n]
            ? (i = t.originalEvent[n])
            : t.originalEvent.touches &&
              t.originalEvent.touches[0] &&
              "undefined" != typeof t.originalEvent.touches[0][n]
            ? (i = t.originalEvent.touches[0][n])
            : t.currentPoint &&
              "undefined" != typeof t.currentPoint[e] &&
              (i = t.currentPoint[e]),
          i
        );
      },
      set_active_slider: function (t) {
        this.cache.active = t;
      },
      remove_active_slider: function () {
        this.cache.active = null;
      },
      calculate_position: function (e, i) {
        var s = this,
          n = t.data(e[0], "settings"),
          a =
            (t.data(e[0], "handle_l"),
            t.data(e[0], "handle_o"),
            t.data(e[0], "bar_l")),
          o = t.data(e[0], "bar_o");
        requestAnimationFrame(function () {
          var t;
          (t =
            Foundation.rtl && !n.vertical
              ? s.limit_to((o + a - i) / a, 0, 1)
              : s.limit_to((i - o) / a, 0, 1)),
            (t = n.vertical ? 1 - t : t);
          var r = s.normalized_value(t, n.start, n.end, n.step, n.precision);
          s.set_ui(e, r);
        });
      },
      set_ui: function (e, i) {
        var s = t.data(e[0], "settings"),
          n = t.data(e[0], "handle_l"),
          a = t.data(e[0], "bar_l"),
          o = this.normalized_percentage(i, s.start, s.end),
          r = o * (a - n) - 1,
          l = 100 * o,
          d = e.parent(),
          c = e.parent().children("input[type=hidden]");
        Foundation.rtl && !s.vertical && (r = -r),
          (r = s.vertical ? -r + a - n + 1 : r),
          this.set_translate(e, r, s.vertical),
          s.vertical
            ? e.siblings(".range-slider-active-segment").css("height", l + "%")
            : e.siblings(".range-slider-active-segment").css("width", l + "%"),
          d
            .attr(this.attr_name(), i)
            .trigger("change")
            .trigger("change.fndtn.slider"),
          c.val(i),
          s.trigger_input_change && c.trigger("change"),
          e[0].hasAttribute("aria-valuemin") ||
            e.attr({ "aria-valuemin": s.start, "aria-valuemax": s.end }),
          e.attr("aria-valuenow", i),
          "" != s.display_selector &&
            t(s.display_selector).each(function () {
              this.hasOwnProperty("value") ? t(this).val(i) : t(this).text(i);
            });
      },
      normalized_percentage: function (t, e, i) {
        return Math.min(1, (t - e) / (i - e));
      },
      normalized_value: function (t, e, i, s, n) {
        var a = i - e,
          o = t * a,
          r = (o - (o % s)) / s,
          l = o % s,
          d = l >= 0.5 * s ? s : 0;
        return (r * s + d + e).toFixed(n);
      },
      set_translate: function (e, i, s) {
        s
          ? t(e)
              .css("-webkit-transform", "translateY(" + i + "px)")
              .css("-moz-transform", "translateY(" + i + "px)")
              .css("-ms-transform", "translateY(" + i + "px)")
              .css("-o-transform", "translateY(" + i + "px)")
              .css("transform", "translateY(" + i + "px)")
          : t(e)
              .css("-webkit-transform", "translateX(" + i + "px)")
              .css("-moz-transform", "translateX(" + i + "px)")
              .css("-ms-transform", "translateX(" + i + "px)")
              .css("-o-transform", "translateX(" + i + "px)")
              .css("transform", "translateX(" + i + "px)");
      },
      limit_to: function (t, e, i) {
        return Math.min(Math.max(t, e), i);
      },
      initialize_settings: function (e) {
        var i,
          s = t.extend({}, this.settings, this.data_options(t(e).parent()));
        null === s.precision &&
          ((i = ("" + s.step).match(/\.([\d]*)/)),
          (s.precision = i && i[1] ? i[1].length : 0)),
          s.vertical
            ? (t.data(e, "bar_o", t(e).parent().offset().top),
              t.data(e, "bar_l", t(e).parent().outerHeight()),
              t.data(e, "handle_o", t(e).offset().top),
              t.data(e, "handle_l", t(e).outerHeight()))
            : (t.data(e, "bar_o", t(e).parent().offset().left),
              t.data(e, "bar_l", t(e).parent().outerWidth()),
              t.data(e, "handle_o", t(e).offset().left),
              t.data(e, "handle_l", t(e).outerWidth())),
          t.data(e, "bar", t(e).parent()),
          t.data(e, "settings", s);
      },
      set_initial_position: function (e) {
        var i = t.data(e.children(".range-slider-handle")[0], "settings"),
          s =
            "number" != typeof i.initial || isNaN(i.initial)
              ? Math.floor((0.5 * (i.end - i.start)) / i.step) * i.step +
                i.start
              : i.initial,
          n = e.children(".range-slider-handle");
        this.set_ui(n, s);
      },
      set_value: function (e) {
        var i = this;
        t("[" + i.attr_name() + "]", this.scope).each(function () {
          t(this).attr(i.attr_name(), e);
        }),
          t(this.scope).attr(i.attr_name()) &&
            t(this.scope).attr(i.attr_name(), e),
          i.reflow();
      },
      reflow: function () {
        var e = this;
        e.S("[" + this.attr_name() + "]").each(function () {
          var i = t(this).children(".range-slider-handle")[0],
            s = t(this).attr(e.attr_name());
          e.initialize_settings(i),
            s ? e.set_ui(t(i), parseFloat(s)) : e.set_initial_position(t(this));
        });
      }
    };
  })(jQuery, window, window.document),
  (function (t, e, i, s) {
    "use strict";
    Foundation.libs.joyride = {
      name: "joyride",
      version: "5.5.0",
      defaults: {
        expose: !1,
        modal: !0,
        keyboard: !0,
        tip_location: "bottom",
        nub_position: "auto",
        scroll_speed: 1500,
        scroll_animation: "linear",
        timer: 0,
        start_timer_on_click: !0,
        start_offset: 0,
        next_button: !0,
        prev_button: !0,
        tip_animation: "fade",
        pause_after: [],
        exposed: [],
        tip_animation_fade_speed: 300,
        cookie_monster: !1,
        cookie_name: "joyride",
        cookie_domain: !1,
        cookie_expires: 365,
        tip_container: "body",
        abort_on_close: !0,
        tip_location_patterns: {
          top: ["bottom"],
          bottom: [],
          left: ["right", "top", "bottom"],
          right: ["left", "top", "bottom"]
        },
        post_ride_callback: function () {},
        post_step_callback: function () {},
        pre_step_callback: function () {},
        pre_ride_callback: function () {},
        post_expose_callback: function () {},
        template: {
          link: '<a href="#close" class="joyride-close-tip">&times;</a>',
          timer:
            '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
          tip:
            '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
          wrapper: '<div class="joyride-content-wrapper"></div>',
          button: '<a href="#" class="small button joyride-next-tip"></a>',
          prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
          modal: '<div class="joyride-modal-bg"></div>',
          expose: '<div class="joyride-expose-wrapper"></div>',
          expose_cover: '<div class="joyride-expose-cover"></div>'
        },
        expose_add_class: ""
      },
      init: function (e, i, s) {
        Foundation.inherit(this, "throttle random_str"),
          (this.settings =
            this.settings || t.extend({}, this.defaults, s || i)),
          this.bindings(i, s);
      },
      go_next: function () {
        this.settings.$li.next().length < 1
          ? this.end()
          : this.settings.timer > 0
          ? (clearTimeout(this.settings.automate),
            this.hide(),
            this.show(),
            this.startTimer())
          : (this.hide(), this.show());
      },
      go_prev: function () {
        this.settings.$li.prev().length < 1 ||
          (this.settings.timer > 0
            ? (clearTimeout(this.settings.automate),
              this.hide(),
              this.show(null, !0),
              this.startTimer())
            : (this.hide(), this.show(null, !0)));
      },
      events: function () {
        var i = this;
        t(this.scope)
          .off(".joyride")
          .on(
            "click.fndtn.joyride",
            ".joyride-next-tip, .joyride-modal-bg",
            function (t) {
              t.preventDefault(), this.go_next();
            }.bind(this)
          )
          .on(
            "click.fndtn.joyride",
            ".joyride-prev-tip",
            function (t) {
              t.preventDefault(), this.go_prev();
            }.bind(this)
          )
          .on(
            "click.fndtn.joyride",
            ".joyride-close-tip",
            function (t) {
              t.preventDefault(), this.end(this.settings.abort_on_close);
            }.bind(this)
          )
          .on(
            "keyup.fndtn.joyride",
            function (t) {
              if (this.settings.keyboard && this.settings.riding)
                switch (t.which) {
                  case 39:
                    t.preventDefault(), this.go_next();
                    break;
                  case 37:
                    t.preventDefault(), this.go_prev();
                    break;
                  case 27:
                    t.preventDefault(), this.end(this.settings.abort_on_close);
                }
            }.bind(this)
          ),
          t(e)
            .off(".joyride")
            .on(
              "resize.fndtn.joyride",
              i.throttle(function () {
                if (
                  t("[" + i.attr_name() + "]").length > 0 &&
                  i.settings.$next_tip &&
                  i.settings.riding
                ) {
                  if (i.settings.exposed.length > 0) {
                    var e = t(i.settings.exposed);
                    e.each(function () {
                      var e = t(this);
                      i.un_expose(e), i.expose(e);
                    });
                  }
                  i.is_phone() ? i.pos_phone() : i.pos_default(!1);
                }
              }, 100)
            );
      },
      start: function () {
        var e = this,
          i = t("[" + this.attr_name() + "]", this.scope),
          s = [
            "timer",
            "scrollSpeed",
            "startOffset",
            "tipAnimationFadeSpeed",
            "cookieExpires"
          ],
          n = s.length;
        !i.length > 0 ||
          (this.settings.init || this.events(),
          (this.settings = i.data(this.attr_name(!0) + "-init")),
          (this.settings.$content_el = i),
          (this.settings.$body = t(this.settings.tip_container)),
          (this.settings.body_offset = t(
            this.settings.tip_container
          ).position()),
          (this.settings.$tip_content = this.settings.$content_el.find("> li")),
          (this.settings.paused = !1),
          (this.settings.attempts = 0),
          (this.settings.riding = !0),
          "function" != typeof t.cookie && (this.settings.cookie_monster = !1),
          (!this.settings.cookie_monster ||
            (this.settings.cookie_monster &&
              !t.cookie(this.settings.cookie_name))) &&
            (this.settings.$tip_content.each(function (i) {
              var a = t(this);
              this.settings = t.extend({}, e.defaults, e.data_options(a));
              for (var o = n; o--; )
                e.settings[s[o]] = parseInt(e.settings[s[o]], 10);
              e.create({ $li: a, index: i });
            }),
            !this.settings.start_timer_on_click && this.settings.timer > 0
              ? (this.show("init"), this.startTimer())
              : this.show("init")));
      },
      resume: function () {
        this.set_li(), this.show();
      },
      tip_template: function (e) {
        var i, s;
        return (
          (e.tip_class = e.tip_class || ""),
          (i = t(this.settings.template.tip).addClass(e.tip_class)),
          (s =
            t.trim(t(e.li).html()) +
            this.prev_button_text(e.prev_button_text, e.index) +
            this.button_text(e.button_text) +
            this.settings.template.link +
            this.timer_instance(e.index)),
          i.append(t(this.settings.template.wrapper)),
          i.first().attr(this.add_namespace("data-index"), e.index),
          t(".joyride-content-wrapper", i).append(s),
          i[0]
        );
      },
      timer_instance: function (e) {
        var i;
        return (i =
          (0 === e &&
            this.settings.start_timer_on_click &&
            this.settings.timer > 0) ||
          0 === this.settings.timer
            ? ""
            : t(this.settings.template.timer)[0].outerHTML);
      },
      button_text: function (e) {
        return (
          this.settings.tip_settings.next_button
            ? ((e = t.trim(e) || "Next"),
              (e = t(this.settings.template.button).append(e)[0].outerHTML))
            : (e = ""),
          e
        );
      },
      prev_button_text: function (e, i) {
        return (
          this.settings.tip_settings.prev_button
            ? ((e = t.trim(e) || "Previous"),
              (e =
                0 == i
                  ? t(this.settings.template.prev_button)
                      .append(e)
                      .addClass("disabled")[0].outerHTML
                  : t(this.settings.template.prev_button).append(e)[0]
                      .outerHTML))
            : (e = ""),
          e
        );
      },
      create: function (e) {
        this.settings.tip_settings = t.extend(
          {},
          this.settings,
          this.data_options(e.$li)
        );
        var i =
            e.$li.attr(this.add_namespace("data-button")) ||
            e.$li.attr(this.add_namespace("data-text")),
          s =
            e.$li.attr(this.add_namespace("data-button-prev")) ||
            e.$li.attr(this.add_namespace("data-prev-text")),
          n = e.$li.attr("class"),
          a = t(
            this.tip_template({
              tip_class: n,
              index: e.index,
              button_text: i,
              prev_button_text: s,
              li: e.$li
            })
          );
        t(this.settings.tip_container).append(a);
      },
      show: function (e, i) {
        var n = null;
        if (
          this.settings.$li === s ||
          -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after)
        )
          if (
            (this.settings.paused
              ? (this.settings.paused = !1)
              : this.set_li(e, i),
            (this.settings.attempts = 0),
            this.settings.$li.length && this.settings.$target.length > 0)
          ) {
            if (
              (e &&
                (this.settings.pre_ride_callback(
                  this.settings.$li.index(),
                  this.settings.$next_tip
                ),
                this.settings.modal && this.show_modal()),
              this.settings.pre_step_callback(
                this.settings.$li.index(),
                this.settings.$next_tip
              ),
              this.settings.modal && this.settings.expose && this.expose(),
              (this.settings.tip_settings = t.extend(
                {},
                this.settings,
                this.data_options(this.settings.$li)
              )),
              (this.settings.timer = parseInt(this.settings.timer, 10)),
              (this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[
                this.settings.tip_settings.tip_location
              ]),
              !/body/i.test(this.settings.$target.selector))
            ) {
              var a = t(".joyride-modal-bg");
              /pop/i.test(this.settings.tipAnimation)
                ? a.hide()
                : a.fadeOut(this.settings.tipAnimationFadeSpeed),
                this.scroll_to();
            }
            this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
              (n = this.settings.$next_tip.find(".joyride-timer-indicator")),
              /pop/i.test(this.settings.tip_animation)
                ? (n.width(0),
                  this.settings.timer > 0
                    ? (this.settings.$next_tip.show(),
                      setTimeout(
                        function () {
                          n.animate(
                            { width: n.parent().width() },
                            this.settings.timer,
                            "linear"
                          );
                        }.bind(this),
                        this.settings.tip_animation_fade_speed
                      ))
                    : this.settings.$next_tip.show())
                : /fade/i.test(this.settings.tip_animation) &&
                  (n.width(0),
                  this.settings.timer > 0
                    ? (this.settings.$next_tip
                        .fadeIn(this.settings.tip_animation_fade_speed)
                        .show(),
                      setTimeout(
                        function () {
                          n.animate(
                            { width: n.parent().width() },
                            this.settings.timer,
                            "linear"
                          );
                        }.bind(this),
                        this.settings.tip_animation_fade_speed
                      ))
                    : this.settings.$next_tip.fadeIn(
                        this.settings.tip_animation_fade_speed
                      )),
              (this.settings.$current_tip = this.settings.$next_tip);
          } else
            this.settings.$li && this.settings.$target.length < 1
              ? this.show(e, i)
              : this.end();
        else this.settings.paused = !0;
      },
      is_phone: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      hide: function () {
        this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.modal || t(".joyride-modal-bg").hide(),
          this.settings.$current_tip.css("visibility", "hidden"),
          setTimeout(
            t.proxy(function () {
              this.hide(), this.css("visibility", "visible");
            }, this.settings.$current_tip),
            0
          ),
          this.settings.post_step_callback(
            this.settings.$li.index(),
            this.settings.$current_tip
          );
      },
      set_li: function (t, e) {
        t
          ? ((this.settings.$li = this.settings.$tip_content.eq(
              this.settings.start_offset
            )),
            this.set_next_tip(),
            (this.settings.$current_tip = this.settings.$next_tip))
          : ((this.settings.$li = e
              ? this.settings.$li.prev()
              : this.settings.$li.next()),
            this.set_next_tip()),
          this.set_target();
      },
      set_next_tip: function () {
        (this.settings.$next_tip = t(".joyride-tip-guide").eq(
          this.settings.$li.index()
        )),
          this.settings.$next_tip.data("closed", "");
      },
      set_target: function () {
        var e = this.settings.$li.attr(this.add_namespace("data-class")),
          s = this.settings.$li.attr(this.add_namespace("data-id")),
          n = function () {
            return s
              ? t(i.getElementById(s))
              : e
              ? t("." + e).first()
              : t("body");
          };
        this.settings.$target = n();
      },
      scroll_to: function () {
        var i, s;
        (i = t(e).height() / 2),
          (s = Math.ceil(
            this.settings.$target.offset().top -
              i +
              this.settings.$next_tip.outerHeight()
          )),
          0 != s &&
            t("html, body")
              .stop()
              .animate({ scrollTop: s }, this.settings.scroll_speed, "swing");
      },
      paused: function () {
        return (
          -1 ===
          t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        );
      },
      restart: function () {
        this.hide(), (this.settings.$li = s), this.show("init");
      },
      pos_default: function (t) {
        var e = this.settings.$next_tip.find(".joyride-nub"),
          i = Math.ceil(e.outerWidth() / 2),
          s = Math.ceil(e.outerHeight() / 2),
          n = t || !1;
        if (
          (n &&
            (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector))
        )
          this.settings.$li.length && this.pos_modal(e);
        else {
          var a = this.settings.tip_settings.tipAdjustmentY
              ? parseInt(this.settings.tip_settings.tipAdjustmentY)
              : 0,
            o = this.settings.tip_settings.tipAdjustmentX
              ? parseInt(this.settings.tip_settings.tipAdjustmentX)
              : 0;
          this.bottom()
            ? (this.settings.$next_tip.css(
                this.rtl
                  ? {
                      top:
                        this.settings.$target.offset().top +
                        s +
                        this.settings.$target.outerHeight() +
                        a,
                      left:
                        this.settings.$target.offset().left +
                        this.settings.$target.outerWidth() -
                        this.settings.$next_tip.outerWidth() +
                        o
                    }
                  : {
                      top:
                        this.settings.$target.offset().top +
                        s +
                        this.settings.$target.outerHeight() +
                        a,
                      left: this.settings.$target.offset().left + o
                    }
              ),
              this.nub_position(
                e,
                this.settings.tip_settings.nub_position,
                "top"
              ))
            : this.top()
            ? (this.settings.$next_tip.css(
                this.rtl
                  ? {
                      top:
                        this.settings.$target.offset().top -
                        this.settings.$next_tip.outerHeight() -
                        s +
                        a,
                      left:
                        this.settings.$target.offset().left +
                        this.settings.$target.outerWidth() -
                        this.settings.$next_tip.outerWidth()
                    }
                  : {
                      top:
                        this.settings.$target.offset().top -
                        this.settings.$next_tip.outerHeight() -
                        s +
                        a,
                      left: this.settings.$target.offset().left + o
                    }
              ),
              this.nub_position(
                e,
                this.settings.tip_settings.nub_position,
                "bottom"
              ))
            : this.right()
            ? (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + a,
                left:
                  this.settings.$target.outerWidth() +
                  this.settings.$target.offset().left +
                  i +
                  o
              }),
              this.nub_position(
                e,
                this.settings.tip_settings.nub_position,
                "left"
              ))
            : this.left() &&
              (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + a,
                left:
                  this.settings.$target.offset().left -
                  this.settings.$next_tip.outerWidth() -
                  i +
                  o
              }),
              this.nub_position(
                e,
                this.settings.tip_settings.nub_position,
                "right"
              )),
            !this.visible(this.corners(this.settings.$next_tip)) &&
              this.settings.attempts <
                this.settings.tip_settings.tip_location_pattern.length &&
              (e
                .removeClass("bottom")
                .removeClass("top")
                .removeClass("right")
                .removeClass("left"),
              (this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[
                this.settings.attempts
              ]),
              this.settings.attempts++,
              this.pos_default());
        }
        n &&
          (this.settings.$next_tip.hide(),
          this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_phone: function (e) {
        var i = this.settings.$next_tip.outerHeight(),
          s =
            (this.settings.$next_tip.offset(),
            this.settings.$target.outerHeight()),
          n = t(".joyride-nub", this.settings.$next_tip),
          a = Math.ceil(n.outerHeight() / 2),
          o = e || !1;
        n
          .removeClass("bottom")
          .removeClass("top")
          .removeClass("right")
          .removeClass("left"),
          o &&
            (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector)
            ? this.settings.$li.length && this.pos_modal(n)
            : this.top()
            ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - i - a
              }),
              n.addClass("bottom"))
            : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + s + a
              }),
              n.addClass("top")),
          o &&
            (this.settings.$next_tip.hide(),
            this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_modal: function (t) {
        this.center(), t.hide(), this.show_modal();
      },
      show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
          var e = t(".joyride-modal-bg");
          if (e.length < 1) {
            var e = t(this.settings.template.modal);
            e.appendTo("body");
          }
          /pop/i.test(this.settings.tip_animation)
            ? e.show()
            : e.fadeIn(this.settings.tip_animation_fade_speed);
        }
      },
      expose: function () {
        var i,
          s,
          n,
          a,
          o,
          r = "expose-" + this.random_str(6);
        if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
        else {
          if (
            !this.settings.$target ||
            /body/i.test(this.settings.$target.selector)
          )
            return !1;
          n = this.settings.$target;
        }
        return n.length < 1
          ? (e.console && console.error("element not valid", n), !1)
          : ((i = t(this.settings.template.expose)),
            this.settings.$body.append(i),
            i.css({
              top: n.offset().top,
              left: n.offset().left,
              width: n.outerWidth(!0),
              height: n.outerHeight(!0)
            }),
            (s = t(this.settings.template.expose_cover)),
            (a = { zIndex: n.css("z-index"), position: n.css("position") }),
            (o = null == n.attr("class") ? "" : n.attr("class")),
            n.css("z-index", parseInt(i.css("z-index")) + 1),
            "static" == a.position && n.css("position", "relative"),
            n.data("expose-css", a),
            n.data("orig-class", o),
            n.attr("class", o + " " + this.settings.expose_add_class),
            s.css({
              top: n.offset().top,
              left: n.offset().left,
              width: n.outerWidth(!0),
              height: n.outerHeight(!0)
            }),
            this.settings.modal && this.show_modal(),
            this.settings.$body.append(s),
            i.addClass(r),
            s.addClass(r),
            n.data("expose", r),
            this.settings.post_expose_callback(
              this.settings.$li.index(),
              this.settings.$next_tip,
              n
            ),
            void this.add_exposed(n));
      },
      un_expose: function () {
        var i,
          s,
          n,
          a,
          o,
          r = !1;
        if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
        else {
          if (
            !this.settings.$target ||
            /body/i.test(this.settings.$target.selector)
          )
            return !1;
          s = this.settings.$target;
        }
        return s.length < 1
          ? (e.console && console.error("element not valid", s), !1)
          : ((i = s.data("expose")),
            (n = t("." + i)),
            arguments.length > 1 && (r = arguments[1]),
            r === !0
              ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove()
              : n.remove(),
            (a = s.data("expose-css")),
            "auto" == a.zIndex
              ? s.css("z-index", "")
              : s.css("z-index", a.zIndex),
            a.position != s.css("position") &&
              ("static" == a.position
                ? s.css("position", "")
                : s.css("position", a.position)),
            (o = s.data("orig-class")),
            s.attr("class", o),
            s.removeData("orig-classes"),
            s.removeData("expose"),
            s.removeData("expose-z-index"),
            void this.remove_exposed(s));
      },
      add_exposed: function (e) {
        (this.settings.exposed = this.settings.exposed || []),
          e instanceof t || "object" == typeof e
            ? this.settings.exposed.push(e[0])
            : "string" == typeof e && this.settings.exposed.push(e);
      },
      remove_exposed: function (e) {
        var i, s;
        for (
          e instanceof t ? (i = e[0]) : "string" == typeof e && (i = e),
            this.settings.exposed = this.settings.exposed || [],
            s = this.settings.exposed.length;
          s--;

        )
          if (this.settings.exposed[s] == i)
            return void this.settings.exposed.splice(s, 1);
      },
      center: function () {
        var i = t(e);
        return (
          this.settings.$next_tip.css({
            top:
              (i.height() - this.settings.$next_tip.outerHeight()) / 2 +
              i.scrollTop(),
            left:
              (i.width() - this.settings.$next_tip.outerWidth()) / 2 +
              i.scrollLeft()
          }),
          !0
        );
      },
      bottom: function () {
        return /bottom/i.test(this.settings.tip_settings.tip_location);
      },
      top: function () {
        return /top/i.test(this.settings.tip_settings.tip_location);
      },
      right: function () {
        return /right/i.test(this.settings.tip_settings.tip_location);
      },
      left: function () {
        return /left/i.test(this.settings.tip_settings.tip_location);
      },
      corners: function (i) {
        var s = t(e),
          n = s.height() / 2,
          a = Math.ceil(
            this.settings.$target.offset().top -
              n +
              this.settings.$next_tip.outerHeight()
          ),
          o = s.width() + s.scrollLeft(),
          r = s.height() + a,
          l = s.height() + s.scrollTop(),
          d = s.scrollTop();
        return (
          d > a && (d = 0 > a ? 0 : a),
          r > l && (l = r),
          [
            i.offset().top < d,
            o < i.offset().left + i.outerWidth(),
            l < i.offset().top + i.outerHeight(),
            s.scrollLeft() > i.offset().left
          ]
        );
      },
      visible: function (t) {
        for (var e = t.length; e--; ) if (t[e]) return !1;
        return !0;
      },
      nub_position: function (t, e, i) {
        t.addClass("auto" === e ? i : e);
      },
      startTimer: function () {
        this.settings.$li.length
          ? (this.settings.automate = setTimeout(
              function () {
                this.hide(), this.show(), this.startTimer();
              }.bind(this),
              this.settings.timer
            ))
          : clearTimeout(this.settings.automate);
      },
      end: function (e) {
        this.settings.cookie_monster &&
          t.cookie(this.settings.cookie_name, "ridden", {
            expires: this.settings.cookie_expires,
            domain: this.settings.cookie_domain
          }),
          this.settings.timer > 0 && clearTimeout(this.settings.automate),
          this.settings.modal && this.settings.expose && this.un_expose(),
          t(this.scope).off("keyup.joyride"),
          this.settings.$next_tip.data("closed", !0),
          (this.settings.riding = !1),
          t(".joyride-modal-bg").hide(),
          this.settings.$current_tip.hide(),
          ("undefined" == typeof e || e === !1) &&
            (this.settings.post_step_callback(
              this.settings.$li.index(),
              this.settings.$current_tip
            ),
            this.settings.post_ride_callback(
              this.settings.$li.index(),
              this.settings.$current_tip
            )),
          t(".joyride-tip-guide").remove();
      },
      off: function () {
        t(this.scope).off(".joyride"),
          t(e).off(".joyride"),
          t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(
            ".joyride"
          ),
          t(".joyride-tip-guide, .joyride-modal-bg").remove(),
          clearTimeout(this.settings.automate),
          (this.settings = {});
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e) {
    "use strict";
    Foundation.libs.equalizer = {
      name: "equalizer",
      version: "5.5.0",
      settings: {
        use_tallest: !0,
        before_height_change: t.noop,
        after_height_change: t.noop,
        equalize_on_stack: !1
      },
      init: function (t, e, i) {
        Foundation.inherit(this, "image_loaded"),
          this.bindings(e, i),
          this.reflow();
      },
      events: function () {
        this.S(e)
          .off(".equalizer")
          .on(
            "resize.fndtn.equalizer",
            function () {
              this.reflow();
            }.bind(this)
          );
      },
      equalize: function (e) {
        var i = !1,
          s = e.find("[" + this.attr_name() + "-watch]:visible"),
          n = e.data(this.attr_name(!0) + "-init");
        if (0 !== s.length) {
          var a = s.first().offset().top;
          if (
            (n.before_height_change(),
            e
              .trigger("before-height-change")
              .trigger("before-height-change.fndth.equalizer"),
            s.height("inherit"),
            s.each(function () {
              var e = t(this);
              e.offset().top !== a && (i = !0);
            }),
            n.equalize_on_stack !== !1 || !i)
          ) {
            var o = s
              .map(function () {
                return t(this).outerHeight(!1);
              })
              .get();
            if (n.use_tallest) {
              var r = Math.max.apply(null, o);
              s.css("height", r);
            } else {
              var l = Math.min.apply(null, o);
              s.css("height", l);
            }
            n.after_height_change(),
              e
                .trigger("after-height-change")
                .trigger("after-height-change.fndtn.equalizer");
          }
        }
      },
      reflow: function () {
        var e = this;
        this.S("[" + this.attr_name() + "]", this.scope).each(function () {
          var i = t(this);
          e.image_loaded(e.S("img", this), function () {
            e.equalize(i);
          });
        });
      }
    };
  })(jQuery, window, window.document),
  (function (t, e, i) {
    "use strict";
    Foundation.libs.dropdown = {
      name: "dropdown",
      version: "5.5.0",
      settings: {
        active_class: "open",
        disabled_class: "disabled",
        mega_class: "mega",
        align: "bottom",
        is_hover: !1,
        hover_timeout: 150,
        opened: function () {},
        closed: function () {}
      },
      init: function (e, i, s) {
        Foundation.inherit(this, "throttle"),
          t.extend(!0, this.settings, i, s),
          this.bindings(i, s);
      },
      events: function () {
        var i = this,
          s = i.S;
        s(this.scope)
          .off(".dropdown")
          .on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (
            e
          ) {
            var n = s(this).data(i.attr_name(!0) + "-init") || i.settings;
            (!n.is_hover || Modernizr.touch) &&
              (e.preventDefault(),
              s(this).parent("[data-reveal-id]") && e.stopPropagation(),
              i.toggle(t(this)));
          })
          .on(
            "mouseenter.fndtn.dropdown",
            "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
            function (t) {
              var e,
                n,
                a = s(this);
              clearTimeout(i.timeout),
                a.data(i.data_attr())
                  ? ((e = s("#" + a.data(i.data_attr()))), (n = a))
                  : ((e = a),
                    (n = s("[" + i.attr_name() + '="' + e.attr("id") + '"]')));
              var o = n.data(i.attr_name(!0) + "-init") || i.settings;
              s(t.currentTarget).data(i.data_attr()) &&
                o.is_hover &&
                i.closeall.call(i),
                o.is_hover && i.open.apply(i, [e, n]);
            }
          )
          .on(
            "mouseleave.fndtn.dropdown",
            "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
            function () {
              var t,
                e = s(this);
              if (e.data(i.data_attr()))
                t = e.data(i.data_attr(!0) + "-init") || i.settings;
              else
                var n = s(
                    "[" + i.attr_name() + '="' + s(this).attr("id") + '"]'
                  ),
                  t = n.data(i.attr_name(!0) + "-init") || i.settings;
              i.timeout = setTimeout(
                function () {
                  e.data(i.data_attr())
                    ? t.is_hover &&
                      i.close.call(i, s("#" + e.data(i.data_attr())))
                    : t.is_hover && i.close.call(i, e);
                }.bind(this),
                t.hover_timeout
              );
            }
          )
          .on("click.fndtn.dropdown", function (e) {
            var n = s(e.target).closest("[" + i.attr_name() + "-content]"),
              a = n.find("a");
            return (
              a.length > 0 &&
                "false" !== n.attr("aria-autoclose") &&
                i.close.call(i, s("[" + i.attr_name() + "-content]")),
              s(e.target).closest("[" + i.attr_name() + "]").length > 0
                ? void 0
                : !s(e.target).data("revealId") &&
                  n.length > 0 &&
                  (s(e.target).is("[" + i.attr_name() + "-content]") ||
                    t.contains(n.first()[0], e.target))
                ? void e.stopPropagation()
                : void i.close.call(i, s("[" + i.attr_name() + "-content]"))
            );
          })
          .on(
            "opened.fndtn.dropdown",
            "[" + i.attr_name() + "-content]",
            function () {
              i.settings.opened.call(this);
            }
          )
          .on(
            "closed.fndtn.dropdown",
            "[" + i.attr_name() + "-content]",
            function () {
              i.settings.closed.call(this);
            }
          ),
          s(e)
            .off(".dropdown")
            .on(
              "resize.fndtn.dropdown",
              i.throttle(function () {
                i.resize.call(i);
              }, 50)
            ),
          this.resize();
      },
      close: function (e) {
        var i = this;
        e.each(function () {
          var s =
            t("[" + i.attr_name() + "=" + e[0].id + "]") ||
            t("aria-controls=" + e[0].id + "]");
          s.attr("aria-expanded", "false"),
            i.S(this).hasClass(i.settings.active_class) &&
              (i
                .S(this)
                .css(Foundation.rtl ? "right" : "left", "-99999px")
                .attr("aria-hidden", "true")
                .removeClass(i.settings.active_class)
                .prev("[" + i.attr_name() + "]")
                .removeClass(i.settings.active_class)
                .removeData("target"),
              i
                .S(this)
                .trigger("closed")
                .trigger("closed.fndtn.dropdown", [e]));
        }),
          e.removeClass("f-open-" + this.attr_name(!0));
      },
      closeall: function () {
        var e = this;
        t.each(e.S(".f-open-" + this.attr_name(!0)), function () {
          e.close.call(e, e.S(this));
        });
      },
      open: function (t, e) {
        this.css(t.addClass(this.settings.active_class), e),
          t
            .prev("[" + this.attr_name() + "]")
            .addClass(this.settings.active_class),
          t
            .data("target", e.get(0))
            .trigger("opened")
            .trigger("opened.fndtn.dropdown", [t, e]),
          t.attr("aria-hidden", "false"),
          e.attr("aria-expanded", "true"),
          t.focus(),
          t.addClass("f-open-" + this.attr_name(!0));
      },
      data_attr: function () {
        return this.namespace.length > 0
          ? this.namespace + "-" + this.name
          : this.name;
      },
      toggle: function (t) {
        if (!t.hasClass(this.settings.disabled_class)) {
          var e = this.S("#" + t.data(this.data_attr()));
          0 !== e.length &&
            (this.close.call(
              this,
              this.S("[" + this.attr_name() + "-content]").not(e)
            ),
            e.hasClass(this.settings.active_class)
              ? (this.close.call(this, e),
                e.data("target") !== t.get(0) && this.open.call(this, e, t))
              : this.open.call(this, e, t));
        }
      },
      resize: function () {
        var t = this.S("[" + this.attr_name() + "-content].open"),
          e = this.S("[" + this.attr_name() + '="' + t.attr("id") + '"]');
        t.length && e.length && this.css(t, e);
      },
      css: function (t, e) {
        var i = Math.max((e.width() - t.width()) / 2, 8),
          s = e.data(this.attr_name(!0) + "-init") || this.settings;
        if ((this.clear_idx(), this.small())) {
          var n = this.dirs.bottom.call(t, e, s);
          t
            .attr("style", "")
            .removeClass("drop-left drop-right drop-top")
            .css({
              position: "absolute",
              width: "95%",
              "max-width": "none",
              top: n.top
            }),
            t.css(Foundation.rtl ? "right" : "left", i);
        } else this.style(t, e, s);
        return t;
      },
      style: function (e, i, s) {
        var n = t.extend(
          { position: "absolute" },
          this.dirs[s.align].call(e, i, s)
        );
        e.attr("style", "").css(n);
      },
      dirs: {
        _base: function (t) {
          var s = this.offsetParent(),
            n = s.offset(),
            a = t.offset();
          (a.top -= n.top),
            (a.left -= n.left),
            (a.missRight = !1),
            (a.missTop = !1),
            (a.missLeft = !1),
            (a.leftRightFlag = !1);
          var o;
          o = i.getElementsByClassName("row")[0]
            ? i.getElementsByClassName("row")[0].clientWidth
            : e.outerWidth;
          var r = (e.outerWidth - o) / 2,
            l = o;
          return (
            this.hasClass("mega") ||
              (t.offset().top <= this.outerHeight() &&
                ((a.missTop = !0),
                (l = e.outerWidth - r),
                (a.leftRightFlag = !0)),
              t.offset().left + this.outerWidth() > t.offset().left + r &&
                t.offset().left - r > this.outerWidth() &&
                ((a.missRight = !0), (a.missLeft = !1)),
              t.offset().left - this.outerWidth() <= 0 &&
                ((a.missLeft = !0), (a.missRight = !1))),
            a
          );
        },
        top: function (t, e) {
          var i = Foundation.libs.dropdown,
            s = i.dirs._base.call(this, t);
          return (
            this.addClass("drop-top"),
            1 == s.missTop &&
              ((s.top = s.top + t.outerHeight() + this.outerHeight()),
              this.removeClass("drop-top")),
            1 == s.missRight &&
              (s.left = s.left - this.outerWidth() + t.outerWidth()),
            (t.outerWidth() < this.outerWidth() ||
              i.small() ||
              this.hasClass(e.mega_menu)) &&
              i.adjust_pip(this, t, e, s),
            Foundation.rtl
              ? {
                  left: s.left - this.outerWidth() + t.outerWidth(),
                  top: s.top - this.outerHeight()
                }
              : { left: s.left, top: s.top - this.outerHeight() }
          );
        },
        bottom: function (t, e) {
          var i = Foundation.libs.dropdown,
            s = i.dirs._base.call(this, t);
          return (
            1 == s.missRight &&
              (s.left = s.left - this.outerWidth() + t.outerWidth()),
            (t.outerWidth() < this.outerWidth() ||
              i.small() ||
              this.hasClass(e.mega_menu)) &&
              i.adjust_pip(this, t, e, s),
            i.rtl
              ? {
                  left: s.left - this.outerWidth() + t.outerWidth(),
                  top: s.top + t.outerHeight()
                }
              : { left: s.left, top: s.top + t.outerHeight() }
          );
        },
        left: function (t) {
          var e = Foundation.libs.dropdown.dirs._base.call(this, t);
          return (
            this.addClass("drop-left"),
            1 == e.missLeft &&
              ((e.left = e.left + this.outerWidth()),
              (e.top = e.top + t.outerHeight()),
              this.removeClass("drop-left")),
            { left: e.left - this.outerWidth(), top: e.top }
          );
        },
        right: function (t, e) {
          var i = Foundation.libs.dropdown.dirs._base.call(this, t);
          this.addClass("drop-right"),
            1 == i.missRight
              ? ((i.left = i.left - this.outerWidth()),
                (i.top = i.top + t.outerHeight()),
                this.removeClass("drop-right"))
              : (i.triggeredRight = !0);
          var s = Foundation.libs.dropdown;
          return (
            (t.outerWidth() < this.outerWidth() ||
              s.small() ||
              this.hasClass(e.mega_menu)) &&
              s.adjust_pip(this, t, e, i),
            { left: i.left + t.outerWidth(), top: i.top }
          );
        }
      },
      adjust_pip: function (t, e, i, s) {
        var n = Foundation.stylesheet,
          a = 8;
        t.hasClass(i.mega_class)
          ? (a = s.left + e.outerWidth() / 2 - 8)
          : this.small() && (a += s.left - 8),
          (this.rule_idx = n.cssRules.length);
        var o = ".f-dropdown.open:before",
          r = ".f-dropdown.open:after",
          l = "left: " + a + "px;",
          d = "left: " + (a - 1) + "px;";
        1 == s.missRight &&
          ((a = t.outerWidth() - 23),
          (o = ".f-dropdown.open:before"),
          (r = ".f-dropdown.open:after"),
          (l = "left: " + a + "px;"),
          (d = "left: " + (a - 1) + "px;")),
          1 == s.triggeredRight &&
            ((o = ".f-dropdown.open:before"),
            (r = ".f-dropdown.open:after"),
            (l = "left:-12px;"),
            (d = "left:-14px;")),
          n.insertRule
            ? (n.insertRule([o, "{", l, "}"].join(" "), this.rule_idx),
              n.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1))
            : (n.addRule(o, l, this.rule_idx),
              n.addRule(r, d, this.rule_idx + 1));
      },
      clear_idx: function () {
        var t = Foundation.stylesheet;
        "undefined" != typeof this.rule_idx &&
          (t.deleteRule(this.rule_idx),
          t.deleteRule(this.rule_idx),
          delete this.rule_idx);
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      off: function () {
        this.S(this.scope).off(".fndtn.dropdown"),
          this.S("html, body").off(".fndtn.dropdown"),
          this.S(e).off(".fndtn.dropdown"),
          this.S("[data-dropdown-content]").off(".fndtn.dropdown");
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e, i, s) {
    "use strict";
    Foundation.libs.clearing = {
      name: "clearing",
      version: "5.5.0",
      settings: {
        templates: {
          viewing:
            '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
        },
        close_selectors: ".clearing-close, div.clearing-blackout",
        open_selectors: "",
        skip_selector: "",
        touch_label: "",
        init: !1,
        locked: !1
      },
      init: function (t, e, i) {
        var s = this;
        Foundation.inherit(this, "throttle image_loaded"),
          this.bindings(e, i),
          s.S(this.scope).is("[" + this.attr_name() + "]")
            ? this.assemble(s.S("li", this.scope))
            : s.S("[" + this.attr_name() + "]", this.scope).each(function () {
                s.assemble(s.S("li", this));
              });
      },
      events: function (s) {
        var n = this,
          a = n.S,
          o = t(".scroll-container");
        o.length > 0 && (this.scope = o),
          a(this.scope)
            .off(".clearing")
            .on(
              "click.fndtn.clearing",
              "ul[" + this.attr_name() + "] li " + this.settings.open_selectors,
              function (t, e, i) {
                var e = e || a(this),
                  i = i || e,
                  s = e.next("li"),
                  o = e
                    .closest("[" + n.attr_name() + "]")
                    .data(n.attr_name(!0) + "-init"),
                  r = a(t.target);
                t.preventDefault(),
                  o ||
                    (n.init(),
                    (o = e
                      .closest("[" + n.attr_name() + "]")
                      .data(n.attr_name(!0) + "-init"))),
                  i.hasClass("visible") &&
                    e[0] === i[0] &&
                    s.length > 0 &&
                    n.is_open(e) &&
                    ((i = s), (r = a("img", i))),
                  n.open(r, e, i),
                  n.update_paddles(i);
              }
            )
            .on("click.fndtn.clearing", ".clearing-main-next", function (t) {
              n.nav(t, "next");
            })
            .on("click.fndtn.clearing", ".clearing-main-prev", function (t) {
              n.nav(t, "prev");
            })
            .on(
              "click.fndtn.clearing",
              this.settings.close_selectors,
              function (t) {
                Foundation.libs.clearing.close(t, this);
              }
            ),
          t(i).on("keydown.fndtn.clearing", function (t) {
            n.keydown(t);
          }),
          a(e)
            .off(".clearing")
            .on("resize.fndtn.clearing", function () {
              n.resize();
            }),
          this.swipe_events(s);
      },
      swipe_events: function () {
        var t = this,
          e = t.S;
        e(this.scope)
          .on("touchstart.fndtn.clearing", ".visible-img", function (t) {
            t.touches || (t = t.originalEvent);
            var i = {
              start_page_x: t.touches[0].pageX,
              start_page_y: t.touches[0].pageY,
              start_time: new Date().getTime(),
              delta_x: 0,
              is_scrolling: s
            };
            e(this).data("swipe-transition", i), t.stopPropagation();
          })
          .on("touchmove.fndtn.clearing", ".visible-img", function (i) {
            if (
              (i.touches || (i = i.originalEvent),
              !(i.touches.length > 1 || (i.scale && 1 !== i.scale)))
            ) {
              var s = e(this).data("swipe-transition");
              if (
                ("undefined" == typeof s && (s = {}),
                (s.delta_x = i.touches[0].pageX - s.start_page_x),
                Foundation.rtl && (s.delta_x = -s.delta_x),
                "undefined" == typeof s.is_scrolling &&
                  (s.is_scrolling = !!(
                    s.is_scrolling ||
                    Math.abs(s.delta_x) <
                      Math.abs(i.touches[0].pageY - s.start_page_y)
                  )),
                !s.is_scrolling && !s.active)
              ) {
                i.preventDefault();
                var n = s.delta_x < 0 ? "next" : "prev";
                (s.active = !0), t.nav(i, n);
              }
            }
          })
          .on("touchend.fndtn.clearing", ".visible-img", function (t) {
            e(this).data("swipe-transition", {}), t.stopPropagation();
          });
      },
      assemble: function (e) {
        var i = e.parent();
        if (!i.parent().hasClass("carousel")) {
          i.after('<div id="foundationClearingHolder"></div>');
          var s = i.detach(),
            n = "";
          if (null != s[0]) {
            n = s[0].outerHTML;
            var a = this.S("#foundationClearingHolder"),
              o = i.data(this.attr_name(!0) + "-init"),
              r = {
                grid: '<div class="carousel">' + n + "</div>",
                viewing: o.templates.viewing
              },
              l =
                '<div class="clearing-assembled"><div>' +
                r.viewing +
                r.grid +
                "</div></div>",
              d = this.settings.touch_label;
            Modernizr.touch &&
              (l = t(l).find(".clearing-touch-label").html(d).end()),
              a.after(l).remove();
          }
        }
      },
      open: function (e, s, n) {
        function a() {
          setTimeout(
            function () {
              this.image_loaded(
                u,
                function () {
                  1 !== u.outerWidth() || p ? o.call(this, u) : a.call(this);
                }.bind(this)
              );
            }.bind(this),
            100
          );
        }
        function o(e) {
          var i = t(e);
          i.css("visibility", "visible"),
            l.css("overflow", "hidden"),
            d.addClass("clearing-blackout"),
            c.addClass("clearing-container"),
            h.show(),
            this.fix_height(n)
              .caption(r.S(".clearing-caption", h), r.S("img", n))
              .center_and_label(e, f)
              .shift(s, n, function () {
                n.closest("li").siblings().removeClass("visible"),
                  n.closest("li").addClass("visible");
              }),
            h.trigger("opened.fndtn.clearing");
        }
        var r = this,
          l = t(i.body),
          d = n.closest(".clearing-assembled"),
          c = r.S("div", d).first(),
          h = r.S(".visible-img", c),
          u = r.S("img", h).not(e),
          f = r.S(".clearing-touch-label", c),
          p = !1;
        t("body").on("touchmove", function (t) {
          t.preventDefault();
        }),
          u.error(function () {
            p = !0;
          }),
          this.locked() ||
            (h.trigger("open.fndtn.clearing"),
            u.attr("src", this.load(e)).css("visibility", "hidden"),
            a.call(this));
      },
      close: function (e, s) {
        e.preventDefault();
        var n,
          a,
          o = (function (t) {
            return /blackout/.test(t.selector)
              ? t
              : t.closest(".clearing-blackout");
          })(t(s)),
          r = t(i.body);
        return (
          s === e.target &&
            o &&
            (r.css("overflow", ""),
            (n = t("div", o).first()),
            (a = t(".visible-img", n)),
            a.trigger("close.fndtn.clearing"),
            (this.settings.prev_index = 0),
            t("ul[" + this.attr_name() + "]", o)
              .attr("style", "")
              .closest(".clearing-blackout")
              .removeClass("clearing-blackout"),
            n.removeClass("clearing-container"),
            a.hide(),
            a.trigger("closed.fndtn.clearing")),
          t("body").off("touchmove"),
          !1
        );
      },
      is_open: function (t) {
        return t.parent().prop("style").length > 0;
      },
      keydown: function (e) {
        var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
          s = this.rtl ? 37 : 39,
          n = this.rtl ? 39 : 37,
          a = 27;
        e.which === s && this.go(i, "next"),
          e.which === n && this.go(i, "prev"),
          e.which === a &&
            this.S("a.clearing-close")
              .trigger("click")
              .trigger("click.fndtn.clearing");
      },
      nav: function (e, i) {
        var s = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
        e.preventDefault(), this.go(s, i);
      },
      resize: function () {
        var e = t("img", ".clearing-blackout .visible-img"),
          i = t(".clearing-touch-label", ".clearing-blackout");
        e.length &&
          (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"));
      },
      fix_height: function (t) {
        var e = t.parent().children(),
          i = this;
        return (
          e
            .each(function () {
              var t = i.S(this),
                e = t.find("img");
              t.height() > e.outerHeight() && t.addClass("fix-height");
            })
            .closest("ul")
            .width(100 * e.length + "%"),
          this
        );
      },
      update_paddles: function (t) {
        t = t.closest("li");
        var e = t.closest(".carousel").siblings(".visible-img");
        t.next().length > 0
          ? this.S(".clearing-main-next", e).removeClass("disabled")
          : this.S(".clearing-main-next", e).addClass("disabled"),
          t.prev().length > 0
            ? this.S(".clearing-main-prev", e).removeClass("disabled")
            : this.S(".clearing-main-prev", e).addClass("disabled");
      },
      center_and_label: function (t, e) {
        return (
          this.rtl
            ? (t.css({
                marginRight: -(t.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2),
                left: "auto",
                right: "50%"
              }),
              e.length > 0 &&
                e.css({
                  marginRight: -(e.outerWidth() / 2),
                  marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                  left: "auto",
                  right: "50%"
                }))
            : (t.css({
                marginLeft: -(t.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2)
              }),
              e.length > 0 &&
                e.css({
                  marginLeft: -(e.outerWidth() / 2),
                  marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
                })),
          this
        );
      },
      load: function (t) {
        var e;
        return (
          (e =
            "A" === t[0].nodeName
              ? t.attr("href")
              : t.closest("a").attr("href")),
          this.preload(t),
          e ? e : t.attr("src")
        );
      },
      preload: function (t) {
        this.img(t.closest("li").next()).img(t.closest("li").prev());
      },
      img: function (t) {
        if (t.length) {
          var e = new Image(),
            i = this.S("a", t);
          e.src = i.length ? i.attr("href") : this.S("img", t).attr("src");
        }
        return this;
      },
      caption: function (t, e) {
        var i = e.attr("data-caption");
        return i ? t.html(i).show() : t.text("").hide(), this;
      },
      go: function (t, e) {
        var i = this.S(".visible", t),
          s = i[e]();
        this.settings.skip_selector &&
          0 != s.find(this.settings.skip_selector).length &&
          (s = s[e]()),
          s.length &&
            this.S("img", s)
              .trigger("click", [i, s])
              .trigger("click.fndtn.clearing", [i, s])
              .trigger("change.fndtn.clearing");
      },
      shift: function (t, e, i) {
        var s,
          n = e.parent(),
          a = this.settings.prev_index || e.index(),
          o = this.direction(n, t, e),
          r = this.rtl ? "right" : "left",
          l = parseInt(n.css("left"), 10),
          d = e.outerWidth(),
          c = {};
        e.index() === a || /skip/.test(o)
          ? /skip/.test(o) &&
            ((s = e.index() - this.settings.up_count),
            this.lock(),
            s > 0
              ? ((c[r] = -(s * d)), n.animate(c, 300, this.unlock()))
              : ((c[r] = 0), n.animate(c, 300, this.unlock())))
          : /left/.test(o)
          ? (this.lock(), (c[r] = l + d), n.animate(c, 300, this.unlock()))
          : /right/.test(o) &&
            (this.lock(), (c[r] = l - d), n.animate(c, 300, this.unlock())),
          i();
      },
      direction: function (t, e, i) {
        var s,
          n = this.S("li", t),
          a = n.outerWidth() + n.outerWidth() / 4,
          o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1,
          r = n.index(i);
        return (
          (this.settings.up_count = o),
          (s = this.adjacent(this.settings.prev_index, r)
            ? r > o && r > this.settings.prev_index
              ? "right"
              : r > o - 1 && r <= this.settings.prev_index
              ? "left"
              : !1
            : "skip"),
          (this.settings.prev_index = r),
          s
        );
      },
      adjacent: function (t, e) {
        for (var i = e + 1; i >= e - 1; i--) if (i === t) return !0;
        return !1;
      },
      lock: function () {
        this.settings.locked = !0;
      },
      unlock: function () {
        this.settings.locked = !1;
      },
      locked: function () {
        return this.settings.locked;
      },
      off: function () {
        this.S(this.scope).off(".fndtn.clearing"),
          this.S(e).off(".fndtn.clearing");
      },
      reflow: function () {
        this.init();
      }
    };
  })(jQuery, window, window.document),
  (function (t, e, i, s) {
    "use strict";
    var n = function () {},
      a = function (n, a) {
        if (n.hasClass(a.slides_container_class)) return this;
        var d,
          c,
          h,
          u,
          f,
          p,
          g = this,
          _ = n,
          m = 0,
          v = !1;
        (g.slides = function () {
          return _.children(a.slide_selector);
        }),
          g.slides().first().addClass(a.active_slide_class),
          (g.update_slide_number = function (e) {
            a.slide_number &&
              (c.find("span:first").text(parseInt(e) + 1),
              c.find("span:last").text(g.slides().length)),
              a.bullets &&
                (h.children().removeClass(a.bullets_active_class),
                t(h.children().get(e)).addClass(a.bullets_active_class));
          }),
          (g.update_active_link = function (e) {
            var i = t(
              '[data-orbit-link="' +
                g.slides().eq(e).attr("data-orbit-slide") +
                '"]'
            );
            i.siblings().removeClass(a.bullets_active_class),
              i.addClass(a.bullets_active_class);
          }),
          (g.build_markup = function () {
            _.wrap('<div class="' + a.container_class + '"></div>'),
              (d = _.parent()),
              _.addClass(a.slides_container_class),
              a.stack_on_small && d.addClass(a.stack_on_small_class),
              a.navigation_arrows &&
                (d.append(
                  t('<a href="#"><span></span></a>').addClass(a.prev_class)
                ),
                d.append(
                  t('<a href="#"><span></span></a>').addClass(a.next_class)
                )),
              a.timer &&
                ((u = t("<div>").addClass(a.timer_container_class)),
                u.append("<span>"),
                u.append(t("<div>").addClass(a.timer_progress_class)),
                u.addClass(a.timer_paused_class),
                d.append(u)),
              a.slide_number &&
                ((c = t("<div>").addClass(a.slide_number_class)),
                c.append(
                  "<span></span> " + a.slide_number_text + " <span></span>"
                ),
                d.append(c)),
              a.bullets &&
                ((h = t("<ol>").addClass(a.bullets_container_class)),
                d.append(h),
                h.wrap('<div class="orbit-bullets-container"></div>'),
                g.slides().each(function (e) {
                  var i = t("<li>")
                    .attr("data-orbit-slide", e)
                    .on("click", g.link_bullet);
                  h.append(i);
                }));
          }),
          (g._goto = function (e, i) {
            if (e === m) return !1;
            "object" == typeof p && p.restart();
            var s = g.slides(),
              n = "next";
            if (((v = !0), m > e && (n = "prev"), e >= s.length)) {
              if (!a.circular) return !1;
              e = 0;
            } else if (0 > e) {
              if (!a.circular) return !1;
              e = s.length - 1;
            }
            var o = t(s.get(m)),
              r = t(s.get(e));
            o.css("zIndex", 2),
              o.removeClass(a.active_slide_class),
              r.css("zIndex", 4).addClass(a.active_slide_class),
              _.trigger("before-slide-change.fndtn.orbit"),
              a.before_slide_change(),
              g.update_active_link(e);
            var l = function () {
              var t = function () {
                (m = e),
                  (v = !1),
                  i === !0 && ((p = g.create_timer()), p.start()),
                  g.update_slide_number(m),
                  _.trigger("after-slide-change.fndtn.orbit", [
                    { slide_number: m, total_slides: s.length }
                  ]),
                  a.after_slide_change(m, s.length);
              };
              _.height() != r.height() && a.variable_height
                ? _.animate({ height: r.height() }, 250, "linear", t)
                : t();
            };
            if (1 === s.length) return l(), !1;
            var d = function () {
              "next" === n && f.next(o, r, l), "prev" === n && f.prev(o, r, l);
            };
            r.height() > _.height() && a.variable_height
              ? _.animate({ height: r.height() }, 250, "linear", d)
              : d();
          }),
          (g.next = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(m + 1);
          }),
          (g.prev = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(m - 1);
          }),
          (g.link_custom = function (e) {
            e.preventDefault();
            var i = t(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = t.trim(i))) {
              var s = d.find("[data-orbit-slide=" + i + "]");
              -1 != s.index() && g._goto(s.index());
            }
          }),
          (g.link_bullet = function () {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))
              if (isNaN(parseInt(e))) {
                var i = d.find("[data-orbit-slide=" + e + "]");
                -1 != i.index() && g._goto(i.index() + 1);
              } else g._goto(parseInt(e));
          }),
          (g.timer_callback = function () {
            g._goto(m + 1, !0);
          }),
          (g.compute_dimensions = function () {
            var e = t(g.slides().get(m)),
              i = e.height();
            a.variable_height ||
              g.slides().each(function () {
                t(this).height() > i && (i = t(this).height());
              }),
              _.height(i);
          }),
          (g.create_timer = function () {
            var t = new o(
              d.find("." + a.timer_container_class),
              a,
              g.timer_callback
            );
            return t;
          }),
          (g.stop_timer = function () {
            "object" == typeof p && p.stop();
          }),
          (g.toggle_timer = function () {
            var t = d.find("." + a.timer_container_class);
            t.hasClass(a.timer_paused_class)
              ? ("undefined" == typeof p && (p = g.create_timer()), p.start())
              : "object" == typeof p && p.stop();
          }),
          (g.init = function () {
            g.build_markup(),
              a.timer &&
                ((p = g.create_timer()),
                Foundation.utils.image_loaded(
                  this.slides().children("img"),
                  p.start
                )),
              (f = new l(a, _)),
              "slide" === a.animation && (f = new r(a, _)),
              d.on("click", "." + a.next_class, g.next),
              d.on("click", "." + a.prev_class, g.prev),
              a.next_on_click &&
                d.on(
                  "click",
                  "." + a.slides_container_class + " [data-orbit-slide]",
                  g.link_bullet
                ),
              d.on("click", g.toggle_timer),
              a.swipe &&
                d
                  .on("touchstart.fndtn.orbit", function (t) {
                    t.touches || (t = t.originalEvent);
                    var e = {
                      start_page_x: t.touches[0].pageX,
                      start_page_y: t.touches[0].pageY,
                      start_time: new Date().getTime(),
                      delta_x: 0,
                      is_scrolling: s
                    };
                    d.data("swipe-transition", e), t.stopPropagation();
                  })
                  .on("touchmove.fndtn.orbit", function (t) {
                    if (
                      (t.touches || (t = t.originalEvent),
                      !(t.touches.length > 1 || (t.scale && 1 !== t.scale)))
                    ) {
                      var e = d.data("swipe-transition");
                      if (
                        ("undefined" == typeof e && (e = {}),
                        (e.delta_x = t.touches[0].pageX - e.start_page_x),
                        "undefined" == typeof e.is_scrolling &&
                          (e.is_scrolling = !!(
                            e.is_scrolling ||
                            Math.abs(e.delta_x) <
                              Math.abs(t.touches[0].pageY - e.start_page_y)
                          )),
                        !e.is_scrolling && !e.active)
                      ) {
                        t.preventDefault();
                        var i = e.delta_x < 0 ? m + 1 : m - 1;
                        (e.active = !0), g._goto(i);
                      }
                    }
                  })
                  .on("touchend.fndtn.orbit", function (t) {
                    d.data("swipe-transition", {}), t.stopPropagation();
                  }),
              d
                .on("mouseenter.fndtn.orbit", function () {
                  a.timer && a.pause_on_hover && g.stop_timer();
                })
                .on("mouseleave.fndtn.orbit", function () {
                  a.timer && a.resume_on_mouseout && p.start();
                }),
              t(i).on("click", "[data-orbit-link]", g.link_custom),
              t(e).on("load resize", g.compute_dimensions),
              Foundation.utils.image_loaded(
                this.slides().children("img"),
                g.compute_dimensions
              ),
              Foundation.utils.image_loaded(
                this.slides().children("img"),
                function () {
                  d.prev("." + a.preloader_class).css("display", "none"),
                    g.update_slide_number(0),
                    g.update_active_link(0),
                    _.trigger("ready.fndtn.orbit");
                }
              );
          }),
          g.init();
      },
      o = function (t, e, i) {
        var s,
          n,
          a = this,
          o = e.timer_speed,
          r = t.find("." + e.timer_progress_class),
          l = -1;
        (this.update_progress = function (t) {
          var e = r.clone();
          e.attr("style", ""),
            e.css("width", t + "%"),
            r.replaceWith(e),
            (r = e);
        }),
          (this.restart = function () {
            clearTimeout(n),
              t.addClass(e.timer_paused_class),
              (l = -1),
              a.update_progress(0);
          }),
          (this.start = function () {
            return t.hasClass(e.timer_paused_class)
              ? ((l = -1 === l ? o : l),
                t.removeClass(e.timer_paused_class),
                (s = new Date().getTime()),
                r.animate({ width: "100%" }, l, "linear"),
                (n = setTimeout(function () {
                  a.restart(), i();
                }, l)),
                void t.trigger("timer-started.fndtn.orbit"))
              : !0;
          }),
          (this.stop = function () {
            if (t.hasClass(e.timer_paused_class)) return !0;
            clearTimeout(n), t.addClass(e.timer_paused_class);
            var i = new Date().getTime();
            l -= i - s;
            var r = 100 - (l / o) * 100;
            a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit");
          });
      },
      r = function (e) {
        var i = e.animation_speed,
          s = 1 === t("html[dir=rtl]").length,
          n = s ? "marginRight" : "marginLeft",
          a = {};
        (a[n] = "0%"),
          (this.next = function (t, e, s) {
            t.animate({ marginLeft: "-100%" }, i),
              e.animate(a, i, function () {
                t.css(n, "100%"), s();
              });
          }),
          (this.prev = function (t, e, s) {
            t.animate({ marginLeft: "100%" }, i),
              e.css(n, "-100%"),
              e.animate(a, i, function () {
                t.css(n, "100%"), s();
              });
          });
      },
      l = function (e) {
        {
          var i = e.animation_speed;
          1 === t("html[dir=rtl]").length;
        }
        (this.next = function (t, e, s) {
          e.css({ margin: "0%", opacity: "0.01" }),
            e.animate({ opacity: "1" }, i, "linear", function () {
              t.css("margin", "100%"), s();
            });
        }),
          (this.prev = function (t, e, s) {
            e.css({ margin: "0%", opacity: "0.01" }),
              e.animate({ opacity: "1" }, i, "linear", function () {
                t.css("margin", "100%"), s();
              });
          });
      };
    (Foundation.libs = Foundation.libs || {}),
      (Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.0",
        settings: {
          animation: "slide",
          timer_speed: 1e4,
          pause_on_hover: !0,
          resume_on_mouseout: !1,
          next_on_click: !0,
          animation_speed: 500,
          stack_on_small: !1,
          navigation_arrows: !0,
          slide_number: !0,
          slide_number_text: "of",
          container_class: "orbit-container",
          stack_on_small_class: "orbit-stack-on-small",
          next_class: "orbit-next",
          prev_class: "orbit-prev",
          timer_container_class: "orbit-timer",
          timer_paused_class: "paused",
          timer_progress_class: "orbit-progress",
          slides_container_class: "orbit-slides-container",
          preloader_class: "preloader",
          slide_selector: "*",
          bullets_container_class: "orbit-bullets",
          bullets_active_class: "active",
          slide_number_class: "orbit-slide-number",
          caption_class: "orbit-caption",
          active_slide_class: "active",
          orbit_transition_class: "orbit-transitioning",
          bullets: !0,
          circular: !0,
          timer: !0,
          variable_height: !1,
          swipe: !0,
          before_slide_change: n,
          after_slide_change: n
        },
        init: function (t, e, i) {
          this.bindings(e, i);
        },
        events: function (t) {
          var e = new a(this.S(t), this.S(t).data("orbit-init"));
          this.S(t).data(this.name + "-instance", e);
        },
        reflow: function () {
          var t = this;
          if (t.S(t.scope).is("[data-orbit]")) {
            var e = t.S(t.scope),
              i = e.data(t.name + "-instance");
            i.compute_dimensions();
          } else
            t.S("[data-orbit]", t.scope).each(function (e, i) {
              var s = t.S(i),
                n = (t.data_options(s), s.data(t.name + "-instance"));
              n.compute_dimensions();
            });
        }
      });
  })(jQuery, window, window.document),
  (function (t) {
    "use strict";
    Foundation.libs.offcanvas = {
      name: "offcanvas",
      version: "5.5.0",
      settings: { open_method: "move", close_on_click: !1 },
      init: function (t, e, i) {
        this.bindings(e, i);
      },
      events: function () {
        var e = this,
          i = e.S,
          s = "",
          n = "",
          a = "";
        "move" === this.settings.open_method
          ? ((s = "move-"), (n = "right"), (a = "left"))
          : "overlap_single" === this.settings.open_method
          ? ((s = "offcanvas-overlap-"), (n = "right"), (a = "left"))
          : "overlap" === this.settings.open_method &&
            (s = "offcanvas-overlap"),
          i(this.scope)
            .off(".offcanvas")
            .on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (
              a
            ) {
              e.click_toggle_class(a, s + n),
                "overlap" !== e.settings.open_method &&
                  i(".left-submenu").removeClass(s + n),
                t(".left-off-canvas-toggle").attr("aria-expanded", "true");
            })
            .on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (
              a
            ) {
              var o = e.get_settings(a),
                r = i(this).parent();
              !o.close_on_click ||
              r.hasClass("has-submenu") ||
              r.hasClass("back")
                ? i(this).parent().hasClass("has-submenu")
                  ? (a.preventDefault(),
                    i(this)
                      .siblings(".left-submenu")
                      .toggleClass(s + n))
                  : r.hasClass("back") &&
                    (a.preventDefault(), r.parent().removeClass(s + n))
                : (e.hide.call(e, s + n, e.get_wrapper(a)),
                  r.parent().removeClass(s + n)),
                t(".left-off-canvas-toggle").attr("aria-expanded", "true");
            })
            .on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (
              n
            ) {
              e.click_toggle_class(n, s + a),
                "overlap" !== e.settings.open_method &&
                  i(".right-submenu").removeClass(s + a),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true");
            })
            .on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (
              n
            ) {
              var o = e.get_settings(n),
                r = i(this).parent();
              !o.close_on_click ||
              r.hasClass("has-submenu") ||
              r.hasClass("back")
                ? i(this).parent().hasClass("has-submenu")
                  ? (n.preventDefault(),
                    i(this)
                      .siblings(".right-submenu")
                      .toggleClass(s + a))
                  : r.hasClass("back") &&
                    (n.preventDefault(), r.parent().removeClass(s + a))
                : (e.hide.call(e, s + a, e.get_wrapper(n)),
                  r.parent().removeClass(s + a)),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true");
            })
            .on("click.fndtn.offcanvas", ".exit-off-canvas", function (o) {
              e.click_remove_class(o, s + a),
                i(".right-submenu").removeClass(s + a),
                n &&
                  (e.click_remove_class(o, s + n),
                  i(".left-submenu").removeClass(s + a)),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true");
            })
            .on("click.fndtn.offcanvas", ".exit-off-canvas", function (i) {
              e.click_remove_class(i, s + a),
                t(".left-off-canvas-toggle").attr("aria-expanded", "false"),
                n &&
                  (e.click_remove_class(i, s + n),
                  t(".right-off-canvas-toggle").attr("aria-expanded", "false"));
            });
      },
      toggle: function (t, e) {
        (e = e || this.get_wrapper()),
          e.is("." + t) ? this.hide(t, e) : this.show(t, e);
      },
      show: function (t, e) {
        (e = e || this.get_wrapper()),
          e.trigger("open").trigger("open.fndtn.offcanvas"),
          e.addClass(t);
      },
      hide: function (t, e) {
        (e = e || this.get_wrapper()),
          e.trigger("close").trigger("close.fndtn.offcanvas"),
          e.removeClass(t);
      },
      click_toggle_class: function (t, e) {
        t.preventDefault();
        var i = this.get_wrapper(t);
        this.toggle(e, i);
      },
      click_remove_class: function (t, e) {
        t.preventDefault();
        var i = this.get_wrapper(t);
        this.hide(e, i);
      },
      get_settings: function (t) {
        var e = this.S(t.target).closest("[" + this.attr_name() + "]");
        return e.data(this.attr_name(!0) + "-init") || this.settings;
      },
      get_wrapper: function (t) {
        var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
        return 0 === e.length && (e = this.S(".off-canvas-wrap")), e;
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t) {
    "use strict";
    Foundation.libs.alert = {
      name: "alert",
      version: "5.5.0",
      settings: { callback: function () {} },
      init: function (t, e, i) {
        this.bindings(e, i);
      },
      events: function () {
        var e = this,
          i = this.S;
        t(this.scope)
          .off(".alert")
          .on(
            "click.fndtn.alert",
            "[" + this.attr_name() + "] .close",
            function (t) {
              var s = i(this).closest("[" + e.attr_name() + "]"),
                n = s.data(e.attr_name(!0) + "-init") || e.settings;
              t.preventDefault(),
                Modernizr.csstransitions
                  ? (s.addClass("alert-close"),
                    s.on(
                      "transitionend webkitTransitionEnd oTransitionEnd",
                      function () {
                        i(this)
                          .trigger("close")
                          .trigger("close.fndtn.alert")
                          .remove(),
                          n.callback();
                      }
                    ))
                  : s.fadeOut(300, function () {
                      i(this)
                        .trigger("close")
                        .trigger("close.fndtn.alert")
                        .remove(),
                        n.callback();
                    });
            }
          );
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e, i, s) {
    "use strict";
    function n(t) {
      var e = /fade/i.test(t),
        i = /pop/i.test(t);
      return { animate: e || i, pop: i, fade: e };
    }
    Foundation.libs.reveal = {
      name: "reveal",
      version: "5.5.0",
      locked: !1,
      settings: {
        animation: "fadeAndPop",
        animation_speed: 250,
        close_on_background_click: !0,
        close_on_esc: !0,
        dismiss_modal_class: "close-reveal-modal",
        bg_class: "reveal-modal-bg",
        bg_root_element: "body",
        root_element: "body",
        open: function () {},
        opened: function () {},
        close: function () {},
        closed: function () {},
        bg: t(".reveal-modal-bg"),
        css: {
          open: { opacity: 0, visibility: "visible", display: "block" },
          close: { opacity: 1, visibility: "hidden", display: "none" }
        }
      },
      init: function (e, i, s) {
        t.extend(!0, this.settings, i, s), this.bindings(i, s);
      },
      events: function () {
        var t = this,
          e = t.S;
        return (
          e(this.scope)
            .off(".reveal")
            .on(
              "click.fndtn.reveal",
              "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])",
              function (i) {
                if ((i.preventDefault(), !t.locked)) {
                  var s = e(this),
                    n = s.data(t.data_attr("reveal-ajax"));
                  if (((t.locked = !0), "undefined" == typeof n))
                    t.open.call(t, s);
                  else {
                    var a = n === !0 ? s.attr("href") : n;
                    t.open.call(t, s, { url: a });
                  }
                }
              }
            ),
          e(i).on("click.fndtn.reveal", this.close_targets(), function (i) {
            if ((i.preventDefault(), !t.locked)) {
              var s =
                  e("[" + t.attr_name() + "].open").data(
                    t.attr_name(!0) + "-init"
                  ) || t.settings,
                n = e(i.target)[0] === e("." + s.bg_class)[0];
              if (n) {
                if (!s.close_on_background_click) return;
                i.stopPropagation();
              }
              (t.locked = !0),
                t.close.call(
                  t,
                  n
                    ? e("[" + t.attr_name() + "].open")
                    : e(this).closest("[" + t.attr_name() + "]")
                );
            }
          }),
          e("[" + t.attr_name() + "]", this.scope).length > 0
            ? e(this.scope)
                .on("open.fndtn.reveal", this.settings.open)
                .on("opened.fndtn.reveal", this.settings.opened)
                .on("opened.fndtn.reveal", this.open_video)
                .on("close.fndtn.reveal", this.settings.close)
                .on("closed.fndtn.reveal", this.settings.closed)
                .on("closed.fndtn.reveal", this.close_video)
            : e(this.scope)
                .on(
                  "open.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.settings.open
                )
                .on(
                  "opened.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.settings.opened
                )
                .on(
                  "opened.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.open_video
                )
                .on(
                  "close.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.settings.close
                )
                .on(
                  "closed.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.settings.closed
                )
                .on(
                  "closed.fndtn.reveal",
                  "[" + t.attr_name() + "]",
                  this.close_video
                ),
          !0
        );
      },
      key_up_on: function () {
        var t = this;
        return (
          t
            .S("body")
            .off("keyup.fndtn.reveal")
            .on("keyup.fndtn.reveal", function (e) {
              var i = t.S("[" + t.attr_name() + "].open"),
                s = i.data(t.attr_name(!0) + "-init") || t.settings;
              s &&
                27 === e.which &&
                s.close_on_esc &&
                !t.locked &&
                t.close.call(t, i);
            }),
          !0
        );
      },
      key_up_off: function () {
        return this.S("body").off("keyup.fndtn.reveal"), !0;
      },
      open: function (i, s) {
        var n,
          a = this;
        i
          ? "undefined" != typeof i.selector
            ? (n = a.S("#" + i.data(a.data_attr("reveal-id"))).first())
            : ((n = a.S(this.scope)), (s = i))
          : (n = a.S(this.scope));
        var o = n.data(a.attr_name(!0) + "-init");
        if (
          ((o = o || this.settings),
          n.hasClass("open") && i.attr("data-reveal-id") == n.attr("id"))
        )
          return a.close(n);
        if (!n.hasClass("open")) {
          var r = a.S("[" + a.attr_name() + "].open");
          if (
            ("undefined" == typeof n.data("css-top") &&
              n
                .data("css-top", parseInt(n.css("top"), 10))
                .data("offset", this.cache_offset(n)),
            this.key_up_on(n),
            n.trigger("open").trigger("open.fndtn.reveal"),
            r.length < 1 && this.toggle_bg(n, !0),
            "string" == typeof s && (s = { url: s }),
            "undefined" != typeof s && s.url)
          ) {
            var l = "undefined" != typeof s.success ? s.success : null;
            t.extend(s, {
              success: function (e, i, s) {
                if (t.isFunction(l)) {
                  var d = l(e, i, s);
                  "string" == typeof d && (e = d);
                }
                n.html(e),
                  a.S(n).foundation("section", "reflow"),
                  a.S(n).children().foundation(),
                  r.length > 0 && a.hide(r, o.css.close),
                  a.show(n, o.css.open);
              }
            }),
              t.ajax(s);
          } else
            r.length > 0 && this.hide(r, o.css.close), this.show(n, o.css.open);
        }
        a.S(e).trigger("resize");
      },
      close: function (t) {
        var t = t && t.length ? t : this.S(this.scope),
          e = this.S("[" + this.attr_name() + "].open"),
          i = t.data(this.attr_name(!0) + "-init") || this.settings;
        e.length > 0 &&
          ((this.locked = !0),
          this.key_up_off(t),
          t.trigger("close").trigger("close.fndtn.reveal"),
          this.toggle_bg(t, !1),
          this.hide(e, i.css.close, i));
      },
      close_targets: function () {
        var t = "." + this.settings.dismiss_modal_class;
        return this.settings.close_on_background_click
          ? t + ", ." + this.settings.bg_class
          : t;
      },
      toggle_bg: function (e, i, n) {
        var a = e.data(this.attr_name(!0) + "-init") || this.settings,
          o = a.bg_root_element;
        0 === this.S("." + this.settings.bg_class).length &&
          (this.settings.bg = t("<div />", { class: this.settings.bg_class })
            .appendTo(o)
            .hide());
        var r = this.settings.bg.filter(":visible").length > 0;
        n != r &&
          ((n == s ? r : !n)
            ? this.hide(this.settings.bg)
            : this.show(this.settings.bg));
      },
      show: function (e, i) {
        if (i) {
          var s = e.data(this.attr_name(!0) + "-init") || this.settings,
            a = s.root_element;
          if (0 === e.parent(a).length) {
            var o = e.wrap('<div style="display: none;" />').parent();
            e.on("closed.fndtn.reveal.wrapped", function () {
              e.detach().appendTo(o),
                e.unwrap().unbind("closed.fndtn.reveal.wrapped");
            }),
              e.detach().appendTo(a);
          }
          var r = n(s.animation);
          if ((r.animate || (this.locked = !1), r.pop)) {
            i.top = t(a).scrollTop() - e.data("offset") + "px";
            var l = {
              top: t(a).scrollTop() + e.data("css-top") + "px",
              opacity: 1
            };
            return setTimeout(
              function () {
                return e
                  .css(i)
                  .animate(
                    l,
                    s.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1),
                        e.trigger("opened").trigger("opened.fndtn.reveal");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              s.animation_speed / 2
            );
          }
          if (r.fade) {
            i.top = t(a).scrollTop() + e.data("css-top") + "px";
            var l = { opacity: 1 };
            return setTimeout(
              function () {
                return e
                  .css(i)
                  .animate(
                    l,
                    s.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1),
                        e.trigger("opened").trigger("opened.fndtn.reveal");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              s.animation_speed / 2
            );
          }
          return e
            .css(i)
            .show()
            .css({ opacity: 1 })
            .addClass("open")
            .trigger("opened")
            .trigger("opened.fndtn.reveal");
        }
        var s = this.settings;
        return n(s.animation).fade
          ? e.fadeIn(s.animation_speed / 2)
          : ((this.locked = !1), e.show());
      },
      hide: function (e, i) {
        if (i) {
          var s = e.data(this.attr_name(!0) + "-init") || this.settings,
            a = s.root_element,
            o = n(s.animation);
          if ((o.animate || (this.locked = !1), o.pop)) {
            var r = {
              top: -t(a).scrollTop() - e.data("offset") + "px",
              opacity: 0
            };
            return setTimeout(
              function () {
                return e
                  .animate(
                    r,
                    s.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1),
                        e
                          .css(i)
                          .trigger("closed")
                          .trigger("closed.fndtn.reveal");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              s.animation_speed / 2
            );
          }
          if (o.fade) {
            var r = { opacity: 0 };
            return setTimeout(
              function () {
                return e
                  .animate(
                    r,
                    s.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1),
                        e
                          .css(i)
                          .trigger("closed")
                          .trigger("closed.fndtn.reveal");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              s.animation_speed / 2
            );
          }
          return e
            .hide()
            .css(i)
            .removeClass("open")
            .trigger("closed")
            .trigger("closed.fndtn.reveal");
        }
        var s = this.settings;
        return n(s.animation).fade
          ? e.fadeOut(s.animation_speed / 2)
          : e.hide();
      },
      close_video: function (e) {
        var i = t(".flex-video", e.target),
          s = t("iframe", i);
        s.length > 0 &&
          (s.attr("data-src", s[0].src),
          s.attr("src", s.attr("src")),
          i.hide());
      },
      open_video: function (e) {
        var i = t(".flex-video", e.target),
          n = i.find("iframe");
        if (n.length > 0) {
          var a = n.attr("data-src");
          if ("string" == typeof a) n[0].src = n.attr("data-src");
          else {
            var o = n[0].src;
            (n[0].src = s), (n[0].src = o);
          }
          i.show();
        }
      },
      data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t;
      },
      cache_offset: function (t) {
        var e = t.show().height() + parseInt(t.css("top"), 10);
        return t.hide(), e;
      },
      off: function () {
        t(this.scope).off(".fndtn.reveal");
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e) {
    "use strict";
    Foundation.libs.interchange = {
      name: "interchange",
      version: "5.5.0",
      cache: {},
      images_loaded: !1,
      nodes_loaded: !1,
      settings: {
        load_attr: "interchange",
        named_queries: {
          default: "only screen",
          small: Foundation.media_queries.small,
          "small-only": Foundation.media_queries["small-only"],
          medium: Foundation.media_queries.medium,
          "medium-only": Foundation.media_queries["medium-only"],
          large: Foundation.media_queries.large,
          "large-only": Foundation.media_queries["large-only"],
          xlarge: Foundation.media_queries.xlarge,
          "xlarge-only": Foundation.media_queries["xlarge-only"],
          xxlarge: Foundation.media_queries.xxlarge,
          landscape: "only screen and (orientation: landscape)",
          portrait: "only screen and (orientation: portrait)",
          retina:
            "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
        },
        directives: {
          replace: function (e, i, s) {
            if (/IMG/.test(e[0].nodeName)) {
              var n = e[0].src;
              if (new RegExp(i, "i").test(n)) return;
              return (e[0].src = i), s(e[0].src);
            }
            var a = e.data(this.data_attr + "-last-path"),
              o = this;
            if (a != i)
              return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)
                ? (t(e).css("background-image", "url(" + i + ")"),
                  e.data("interchange-last-path", i),
                  s(i))
                : t.get(i, function (t) {
                    e.html(t), e.data(o.data_attr + "-last-path", i), s();
                  });
          }
        }
      },
      init: function (e, i, s) {
        Foundation.inherit(this, "throttle random_str"),
          (this.data_attr = this.set_data_attr()),
          t.extend(!0, this.settings, i, s),
          this.bindings(i, s),
          this.load("images"),
          this.load("nodes");
      },
      get_media_hash: function () {
        var t = "";
        for (var e in this.settings.named_queries)
          t += matchMedia(this.settings.named_queries[e]).matches.toString();
        return t;
      },
      events: function () {
        var i,
          s = this;
        return (
          t(e)
            .off(".interchange")
            .on(
              "resize.fndtn.interchange",
              s.throttle(function () {
                var t = s.get_media_hash();
                t !== i && s.resize(), (i = t);
              }, 50)
            ),
          this
        );
      },
      resize: function () {
        var e = this.cache;
        if (!this.images_loaded || !this.nodes_loaded)
          return void setTimeout(t.proxy(this.resize, this), 50);
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var s = this.results(i, e[i]);
            s &&
              this.settings.directives[s.scenario[1]].call(
                this,
                s.el,
                s.scenario[0],
                function () {
                  if (arguments[0] instanceof Array) var t = arguments[0];
                  else var t = Array.prototype.slice.call(arguments, 0);
                  s.el.trigger(s.scenario[1], t);
                }
              );
          }
      },
      results: function (t, e) {
        var i = e.length;
        if (i > 0)
          for (
            var s = this.S(
              "[" + this.add_namespace("data-uuid") + '="' + t + '"]'
            );
            i--;

          ) {
            var n,
              a = e[i][2];
            if (
              ((n = matchMedia(
                this.settings.named_queries.hasOwnProperty(a)
                  ? this.settings.named_queries[a]
                  : a
              )),
              n.matches)
            )
              return { el: s, scenario: e[i] };
          }
        return !1;
      },
      load: function (t, e) {
        return (
          ("undefined" == typeof this["cached_" + t] || e) &&
            this["update_" + t](),
          this["cached_" + t]
        );
      },
      update_images: function () {
        var t = this.S("img[" + this.data_attr + "]"),
          e = t.length,
          i = e,
          s = 0,
          n = this.data_attr;
        for (
          this.cache = {},
            this.cached_images = [],
            this.images_loaded = 0 === e;
          i--;

        ) {
          if ((s++, t[i])) {
            var a = t[i].getAttribute(n) || "";
            a.length > 0 && this.cached_images.push(t[i]);
          }
          s === e && ((this.images_loaded = !0), this.enhance("images"));
        }
        return this;
      },
      update_nodes: function () {
        var t = this.S("[" + this.data_attr + "]").not("img"),
          e = t.length,
          i = e,
          s = 0,
          n = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--; ) {
          s++;
          var a = t[i].getAttribute(n) || "";
          a.length > 0 && this.cached_nodes.push(t[i]),
            s === e && ((this.nodes_loaded = !0), this.enhance("nodes"));
        }
        return this;
      },
      enhance: function (i) {
        for (var s = this["cached_" + i].length; s--; )
          this.object(t(this["cached_" + i][s]));
        return t(e).trigger("resize").trigger("resize.fndtn.interchange");
      },
      convert_directive: function (t) {
        var e = this.trim(t);
        return e.length > 0 ? e : "replace";
      },
      parse_scenario: function (t) {
        var e = t[0].match(/(.+),\s*(\w+)\s*$/),
          i = t[1];
        if (e)
          var s = e[1],
            n = e[2];
        else
          var a = t[0].split(/,\s*$/),
            s = a[0],
            n = "";
        return [this.trim(s), this.convert_directive(n), this.trim(i)];
      },
      object: function (t) {
        var e = this.parse_data_attr(t),
          i = [],
          s = e.length;
        if (s > 0)
          for (; s--; ) {
            var n = e[s].split(/\((.*?)(\))$/);
            if (n.length > 1) {
              var a = this.parse_scenario(n);
              i.push(a);
            }
          }
        return this.store(t, i);
      },
      store: function (t, e) {
        var i = this.random_str(),
          s = t.data(this.add_namespace("uuid", !0));
        return this.cache[s]
          ? this.cache[s]
          : (t.attr(this.add_namespace("data-uuid"), i), (this.cache[i] = e));
      },
      trim: function (e) {
        return "string" == typeof e ? t.trim(e) : e;
      },
      set_data_attr: function (t) {
        return t
          ? this.namespace.length > 0
            ? this.namespace + "-" + this.settings.load_attr
            : this.settings.load_attr
          : this.namespace.length > 0
          ? "data-" + this.namespace + "-" + this.settings.load_attr
          : "data-" + this.settings.load_attr;
      },
      parse_data_attr: function (t) {
        for (
          var e = t.attr(this.attr_name()).split(/\[(.*?)\]/),
            i = e.length,
            s = [];
          i--;

        )
          e[i].replace(/[\W\d]+/, "").length > 4 && s.push(e[i]);
        return s;
      },
      reflow: function () {
        this.load("images", !0), this.load("nodes", !0);
      }
    };
  })(jQuery, window, window.document),
  (function (t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
      name: "magellan-expedition",
      version: "5.5.0",
      settings: {
        active_class: "active",
        threshold: 0,
        destination_threshold: 20,
        throttle_delay: 30,
        fixed_top: 0,
        offset_by_height: !0,
        duration: 700,
        easing: "swing"
      },
      init: function (t, e, i) {
        Foundation.inherit(this, "throttle"), this.bindings(e, i);
      },
      events: function () {
        var i = this,
          s = i.S,
          n = i.settings;
        i.set_expedition_position(),
          s(i.scope)
            .off(".magellan")
            .on(
              "click.fndtn.magellan",
              "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]',
              function (e) {
                e.preventDefault();
                var s = t(this).closest("[" + i.attr_name() + "]"),
                  n = s.data("magellan-expedition-init"),
                  a = this.hash.split("#").join(""),
                  o = t('a[name="' + a + '"]');
                0 === o.length && (o = t("#" + a));
                var r = o.offset().top - n.destination_threshold + 1;
                n.offset_by_height && (r -= s.outerHeight()),
                  t("html, body")
                    .stop()
                    .animate(
                      { scrollTop: r },
                      n.duration,
                      n.easing,
                      function () {
                        history.pushState
                          ? history.pushState(null, null, "#" + a)
                          : (location.hash = "#" + a);
                      }
                    );
              }
            )
            .on(
              "scroll.fndtn.magellan",
              i.throttle(this.check_for_arrivals.bind(this), n.throttle_delay)
            ),
          t(e).on(
            "resize.fndtn.magellan",
            i.throttle(
              this.set_expedition_position.bind(this),
              n.throttle_delay
            )
          );
      },
      check_for_arrivals: function () {
        var t = this;
        t.update_arrivals(), t.update_expedition_positions();
      },
      set_expedition_position: function () {
        var e = this;
        t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
          var i,
            s,
            n = t(this),
            a = n.data("magellan-expedition-init"),
            o = n.attr("styles");
          n.attr("style", ""),
            (i = n.offset().top + a.threshold),
            (s = parseInt(n.data("magellan-fixed-top"))),
            isNaN(s) || (e.settings.fixed_top = s),
            n.data(e.data_attr("magellan-top-offset"), i),
            n.attr("style", o);
        });
      },
      update_expedition_positions: function () {
        var i = this,
          s = t(e).scrollTop();
        t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
          var e = t(this),
            n = e.data("magellan-expedition-init"),
            a = e.attr("style"),
            o = e.data("magellan-top-offset");
          if (s + i.settings.fixed_top >= o) {
            var r = e.prev(
              "[" + i.add_namespace("data-magellan-expedition-clone") + "]"
            );
            0 === r.length &&
              ((r = e.clone()),
              r.removeAttr(i.attr_name()),
              r.attr(i.add_namespace("data-magellan-expedition-clone"), ""),
              e.before(r)),
              e.css({ position: "fixed", top: n.fixed_top }).addClass("fixed");
          } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", a).css("position", "").css("top", "").removeClass("fixed");
        });
      },
      update_arrivals: function () {
        var i = this,
          s = t(e).scrollTop();
        t("[" + this.attr_name() + "]", i.scope).each(function () {
          var e = t(this),
            n = e.data(i.attr_name(!0) + "-init"),
            a = i.offsets(e, s),
            o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
            r = !1;
          a.each(function (t, s) {
            if (s.viewport_offset >= s.top_offset) {
              var a = e.find(
                "[" + i.add_namespace("data-magellan-arrival") + "]"
              );
              return (
                a.not(s.arrival).removeClass(n.active_class),
                s.arrival.addClass(n.active_class),
                (r = !0),
                !0
              );
            }
          }),
            r || o.removeClass(n.active_class);
        });
      },
      offsets: function (e, i) {
        var s = this,
          n = e.data(s.attr_name(!0) + "-init"),
          a = i;
        return e
          .find("[" + s.add_namespace("data-magellan-arrival") + "]")
          .map(function () {
            var i = t(this).data(s.data_attr("magellan-arrival")),
              o = t(
                "[" +
                  s.add_namespace("data-magellan-destination") +
                  "=" +
                  i +
                  "]"
              );
            if (o.length > 0) {
              var r = o.offset().top - n.destination_threshold;
              return (
                n.offset_by_height && (r -= e.outerHeight()),
                (r = Math.floor(r)),
                {
                  destination: o,
                  arrival: t(this),
                  top_offset: r,
                  viewport_offset: a
                }
              );
            }
          })
          .sort(function (t, e) {
            return t.top_offset < e.top_offset
              ? -1
              : t.top_offset > e.top_offset
              ? 1
              : 0;
          });
      },
      data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t;
      },
      off: function () {
        this.S(this.scope).off(".magellan"), this.S(e).off(".magellan");
      },
      reflow: function () {
        var e = this;
        t(
          "[" + e.add_namespace("data-magellan-expedition-clone") + "]",
          e.scope
        ).remove();
      }
    };
  })(jQuery, window, window.document),
  (function (t) {
    "use strict";
    Foundation.libs.accordion = {
      name: "accordion",
      version: "5.5.0",
      settings: {
        content_class: "content",
        active_class: "active",
        multi_expand: !1,
        toggleable: !0,
        callback: function () {}
      },
      init: function (t, e, i) {
        this.bindings(e, i);
      },
      events: function () {
        var e = this,
          i = this.S;
        i(this.scope)
          .off(".fndtn.accordion")
          .on(
            "click.fndtn.accordion",
            "[" + this.attr_name() + "] > .accordion-navigation > a",
            function (s) {
              var n = i(this).closest("[" + e.attr_name() + "]"),
                a = e.attr_name() + "=" + n.attr(e.attr_name()),
                o = n.data(e.attr_name(!0) + "-init") || e.settings,
                r = i("#" + this.href.split("#")[1]),
                l = t("> .accordion-navigation", n),
                d = l.children("." + o.content_class),
                c = d.filter("." + o.active_class);
              return (
                s.preventDefault(),
                n.attr(e.attr_name()) &&
                  ((d = d.add("[" + a + "] dd > ." + o.content_class)),
                  (l = l.add("[" + a + "] .accordion-navigation"))),
                o.toggleable && r.is(c)
                  ? (r
                      .parent(".accordion-navigation")
                      .toggleClass(o.active_class, !1),
                    r.toggleClass(o.active_class, !1),
                    o.callback(r),
                    r.triggerHandler("toggled", [n]),
                    void n.triggerHandler("toggled", [r]))
                  : (o.multi_expand ||
                      (d.removeClass(o.active_class),
                      l.removeClass(o.active_class)),
                    r
                      .addClass(o.active_class)
                      .parent()
                      .addClass(o.active_class),
                    o.callback(r),
                    r.triggerHandler("toggled", [n]),
                    void n.triggerHandler("toggled", [r]))
              );
            }
          );
      },
      off: function () {},
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e, i) {
    "use strict";
    Foundation.libs.topbar = {
      name: "topbar",
      version: "5.5.0",
      settings: {
        index: 0,
        sticky_class: "sticky",
        custom_back_text: !0,
        back_text: "Back",
        mobile_show_parent_link: !0,
        is_hover: !0,
        scrolltop: !0,
        sticky_on: "all"
      },
      init: function (e, i, s) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var n = this;
        n.register_media("topbar", "foundation-mq-topbar"),
          this.bindings(i, s),
          n.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
              var e = t(this),
                i = e.data(n.attr_name(!0) + "-init");
              n.S("section, .top-bar-section", this);
            }
            e.data("index", 0);
            var s = e.parent();
            s.hasClass("fixed") || n.is_sticky(e, s, i)
              ? ((n.settings.sticky_class = i.sticky_class),
                (n.settings.sticky_topbar = e),
                e.data("height", s.outerHeight()),
                e.data("stickyoffset", s.offset().top))
              : e.data("height", e.outerHeight()),
              i.assembled || n.assemble(e),
              i.is_hover
                ? n.S(".has-dropdown", e).addClass("not-click")
                : n.S(".has-dropdown", e).removeClass("not-click"),
              n.add_custom_rule(
                ".f-topbar-fixed { padding-top: " + e.data("height") + "px }"
              ),
              s.hasClass("fixed") && n.S("body").addClass("f-topbar-fixed");
          });
      },
      is_sticky: function (t, e, i) {
        var s = e.hasClass(i.sticky_class);
        return s && "all" === i.sticky_on
          ? !0
          : s && this.small() && "small" === i.sticky_on
          ? matchMedia(Foundation.media_queries.small).matches &&
            !matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches
          : s && this.medium() && "medium" === i.sticky_on
          ? matchMedia(Foundation.media_queries.small).matches &&
            matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches
          : s && this.large() && "large" === i.sticky_on
          ? matchMedia(Foundation.media_queries.small).matches &&
            matchMedia(Foundation.media_queries.medium).matches &&
            matchMedia(Foundation.media_queries.large).matches
          : !1;
      },
      toggle: function (i) {
        var s,
          n = this;
        s = i
          ? n.S(i).closest("[" + this.attr_name() + "]")
          : n.S("[" + this.attr_name() + "]");
        var a = s.data(this.attr_name(!0) + "-init"),
          o = n.S("section, .top-bar-section", s);
        n.breakpoint() &&
          (n.rtl
            ? (o.css({ right: "0%" }), t(">.name", o).css({ right: "100%" }))
            : (o.css({ left: "0%" }), t(">.name", o).css({ left: "100%" })),
          n.S("li.moved", o).removeClass("moved"),
          s.data("index", 0),
          s.toggleClass("expanded").css("height", "")),
          a.scrolltop
            ? s.hasClass("expanded")
              ? s.parent().hasClass("fixed") &&
                (a.scrolltop
                  ? (s.parent().removeClass("fixed"),
                    s.addClass("fixed"),
                    n.S("body").removeClass("f-topbar-fixed"),
                    e.scrollTo(0, 0))
                  : s.parent().removeClass("expanded"))
              : s.hasClass("fixed") &&
                (s.parent().addClass("fixed"),
                s.removeClass("fixed"),
                n.S("body").addClass("f-topbar-fixed"))
            : (n.is_sticky(s, s.parent(), a) && s.parent().addClass("fixed"),
              s.parent().hasClass("fixed") &&
                (s.hasClass("expanded")
                  ? (s.addClass("fixed"),
                    s.parent().addClass("expanded"),
                    n.S("body").addClass("f-topbar-fixed"))
                  : (s.removeClass("fixed"),
                    s.parent().removeClass("expanded"),
                    n.update_sticky_positioning())));
      },
      timer: null,
      events: function () {
        var i = this,
          s = this.S;
        s(this.scope)
          .off(".topbar")
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .toggle-topbar",
            function (t) {
              t.preventDefault(), i.toggle(this);
            }
          )
          .on(
            "click.fndtn.topbar",
            '.top-bar .top-bar-section li a[href^="#"],[' +
              this.attr_name() +
              '] .top-bar-section li a[href^="#"]',
            function () {
              var e = t(this).closest("li");
              !i.breakpoint() ||
                e.hasClass("back") ||
                e.hasClass("has-dropdown") ||
                i.toggle();
            }
          )
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] li.has-dropdown",
            function (e) {
              var n = s(this),
                a = s(e.target),
                o = n.closest("[" + i.attr_name() + "]"),
                r = o.data(i.attr_name(!0) + "-init");
              return a.data("revealId")
                ? void i.toggle()
                : void (
                    i.breakpoint() ||
                    ((!r.is_hover || Modernizr.touch) &&
                      (e.stopImmediatePropagation(),
                      n.hasClass("hover")
                        ? (n
                            .removeClass("hover")
                            .find("li")
                            .removeClass("hover"),
                          n.parents("li.hover").removeClass("hover"))
                        : (n.addClass("hover"),
                          t(n).siblings().removeClass("hover"),
                          "A" === a[0].nodeName &&
                            a.parent().hasClass("has-dropdown") &&
                            e.preventDefault())))
                  );
            }
          )
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .has-dropdown>a",
            function (t) {
              if (i.breakpoint()) {
                t.preventDefault();
                var e = s(this),
                  n = e.closest("[" + i.attr_name() + "]"),
                  a = n.find("section, .top-bar-section"),
                  o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                n.data("index", n.data("index") + 1),
                  o.addClass("moved"),
                  i.rtl
                    ? (a.css({ right: -(100 * n.data("index")) + "%" }),
                      a
                        .find(">.name")
                        .css({ right: 100 * n.data("index") + "%" }))
                    : (a.css({ left: -(100 * n.data("index")) + "%" }),
                      a
                        .find(">.name")
                        .css({ left: 100 * n.data("index") + "%" })),
                  n.css(
                    "height",
                    e.siblings("ul").outerHeight(!0) + n.data("height")
                  );
              }
            }
          ),
          s(e)
            .off(".topbar")
            .on(
              "resize.fndtn.topbar",
              i.throttle(function () {
                i.resize.call(i);
              }, 50)
            )
            .trigger("resize")
            .trigger("resize.fndtn.topbar")
            .load(function () {
              s(this).trigger("resize.fndtn.topbar");
            }),
          s("body")
            .off(".topbar")
            .on("click.fndtn.topbar", function (t) {
              var e = s(t.target).closest("li").closest("li.hover");
              e.length > 0 ||
                s("[" + i.attr_name() + "] li.hover").removeClass("hover");
            }),
          s(this.scope).on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .has-dropdown .back",
            function (t) {
              t.preventDefault();
              var e = s(this),
                n = e.closest("[" + i.attr_name() + "]"),
                a = n.find("section, .top-bar-section"),
                o = (n.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                r = o.parent();
              n.data("index", n.data("index") - 1),
                i.rtl
                  ? (a.css({ right: -(100 * n.data("index")) + "%" }),
                    a
                      .find(">.name")
                      .css({ right: 100 * n.data("index") + "%" }))
                  : (a.css({ left: -(100 * n.data("index")) + "%" }),
                    a
                      .find(">.name")
                      .css({ left: 100 * n.data("index") + "%" })),
                0 === n.data("index")
                  ? n.css("height", "")
                  : n.css("height", r.outerHeight(!0) + n.data("height")),
                setTimeout(function () {
                  o.removeClass("moved");
                }, 300);
            }
          ),
          s(this.scope)
            .find(".dropdown a")
            .focus(function () {
              t(this).parents(".has-dropdown").addClass("hover");
            })
            .blur(function () {
              t(this).parents(".has-dropdown").removeClass("hover");
            });
      },
      resize: function () {
        var t = this;
        t.S("[" + this.attr_name() + "]").each(function () {
          var e,
            s = t.S(this),
            n = s.data(t.attr_name(!0) + "-init"),
            a = s.parent("." + t.settings.sticky_class);
          if (!t.breakpoint()) {
            var o = s.hasClass("expanded");
            s
              .css("height", "")
              .removeClass("expanded")
              .find("li")
              .removeClass("hover"),
              o && t.toggle(s);
          }
          t.is_sticky(s, a, n) &&
            (a.hasClass("fixed")
              ? (a.removeClass("fixed"),
                (e = a.offset().top),
                t.S(i.body).hasClass("f-topbar-fixed") &&
                  (e -= s.data("height")),
                s.data("stickyoffset", e),
                a.addClass("fixed"))
              : ((e = a.offset().top), s.data("stickyoffset", e)));
        });
      },
      breakpoint: function () {
        return !matchMedia(Foundation.media_queries.topbar).matches;
      },
      small: function () {
        return matchMedia(Foundation.media_queries.small).matches;
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      assemble: function (e) {
        var i = this,
          s = e.data(this.attr_name(!0) + "-init"),
          n = i.S("section, .top-bar-section", e);
        n.detach(),
          i.S(".has-dropdown>a", n).each(function () {
            var e,
              n = i.S(this),
              a = n.siblings(".dropdown"),
              o = n.attr("href");
            a.find(".title.back").length ||
              ((e = t(
                1 == s.mobile_show_parent_link && o
                  ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small-only"><a class="parent-link js-generated" href="' +
                      o +
                      '">' +
                      n.html() +
                      "</a></li>"
                  : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'
              )),
              t("h5>a", e).html(
                1 == s.custom_back_text ? s.back_text : "&laquo; " + n.html()
              ),
              a.prepend(e));
          }),
          n.appendTo(e),
          this.sticky(),
          this.assembled(e);
      },
      assembled: function (e) {
        e.data(
          this.attr_name(!0),
          t.extend({}, e.data(this.attr_name(!0)), { assembled: !0 })
        );
      },
      height: function (e) {
        var i = 0,
          s = this;
        return (
          t("> li", e).each(function () {
            i += s.S(this).outerHeight(!0);
          }),
          i
        );
      },
      sticky: function () {
        var t = this;
        this.S(e).on("scroll", function () {
          t.update_sticky_positioning();
        });
      },
      update_sticky_positioning: function () {
        var t = "." + this.settings.sticky_class,
          i = this.S(e),
          s = this;
        if (
          s.settings.sticky_topbar &&
          s.is_sticky(
            this.settings.sticky_topbar,
            this.settings.sticky_topbar.parent(),
            this.settings
          )
        ) {
          var n = this.settings.sticky_topbar.data("stickyoffset");
          s.S(t).hasClass("expanded") ||
            (i.scrollTop() > n
              ? s.S(t).hasClass("fixed") ||
                (s.S(t).addClass("fixed"),
                s.S("body").addClass("f-topbar-fixed"))
              : i.scrollTop() <= n &&
                s.S(t).hasClass("fixed") &&
                (s.S(t).removeClass("fixed"),
                s.S("body").removeClass("f-topbar-fixed")));
        }
      },
      off: function () {
        this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar");
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e, i, s) {
    "use strict";
    Foundation.libs.tab = {
      name: "tab",
      version: "5.5.0",
      settings: {
        active_class: "active",
        callback: function () {},
        deep_linking: !1,
        scroll_to_content: !0,
        is_hover: !1
      },
      default_tab_hashes: [],
      init: function (t, e, i) {
        var s = this,
          n = this.S;
        this.bindings(e, i),
          this.handle_location_hash_change(),
          n("[" + this.attr_name() + "] > .active > a", this.scope).each(
            function () {
              s.default_tab_hashes.push(this.hash);
            }
          );
      },
      events: function () {
        var t = this,
          i = this.S,
          s = function (e) {
            var s = i(this)
              .closest("[" + t.attr_name() + "]")
              .data(t.attr_name(!0) + "-init");
            (!s.is_hover || Modernizr.touch) &&
              (e.preventDefault(),
              e.stopPropagation(),
              t.toggle_active_tab(i(this).parent()));
          };
        i(this.scope)
          .off(".tab")
          .on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", s)
          .on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", s)
          .on(
            "mouseenter.fndtn.tab",
            "[" + this.attr_name() + "] > * > a",
            function () {
              var e = i(this)
                .closest("[" + t.attr_name() + "]")
                .data(t.attr_name(!0) + "-init");
              e.is_hover && t.toggle_active_tab(i(this).parent());
            }
          ),
          i(e).on("hashchange.fndtn.tab", function (e) {
            e.preventDefault(), t.handle_location_hash_change();
          });
      },
      handle_location_hash_change: function () {
        var e = this,
          i = this.S;
        i("[" + this.attr_name() + "]", this.scope).each(function () {
          var n = i(this).data(e.attr_name(!0) + "-init");
          if (n.deep_linking) {
            var a;
            if (
              ((a = n.scroll_to_content
                ? e.scope.location.hash
                : e.scope.location.hash.replace("fndtn-", "")),
              "" != a)
            ) {
              var o = i(a);
              if (o.hasClass("content") && o.parent().hasClass("tabs-content"))
                e.toggle_active_tab(
                  t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent()
                );
              else {
                var r = o.closest(".content").attr("id");
                r != s &&
                  e.toggle_active_tab(
                    t(
                      "[" + e.attr_name() + "] > * > a[href=#" + r + "]"
                    ).parent(),
                    a
                  );
              }
            } else
              for (var l = 0; l < e.default_tab_hashes.length; l++)
                e.toggle_active_tab(
                  t(
                    "[" +
                      e.attr_name() +
                      "] > * > a[href=" +
                      e.default_tab_hashes[l] +
                      "]"
                  ).parent()
                );
          }
        });
      },
      toggle_active_tab: function (n, a) {
        var o = this.S,
          r = n.closest("[" + this.attr_name() + "]"),
          l = n.find("a"),
          d = n.children("a").first(),
          c = "#" + d.attr("href").split("#")[1],
          h = o(c),
          u = n.siblings(),
          f = r.data(this.attr_name(!0) + "-init"),
          p = function (e) {
            var s,
              n = t(this),
              a = t(this).parents("li").prev().children('[role="tab"]'),
              o = t(this).parents("li").next().children('[role="tab"]');
            switch (e.keyCode) {
              case 37:
                s = a;
                break;
              case 39:
                s = o;
                break;
              default:
                s = !1;
            }
            s.length &&
              (n.attr({ tabindex: "-1", "aria-selected": null }),
              s.attr({ tabindex: "0", "aria-selected": !0 }).focus()),
              t('[role="tabpanel"]').attr("aria-hidden", "true"),
              t("#" + t(i.activeElement).attr("href").substring(1)).attr(
                "aria-hidden",
                null
              );
          };
        o(this).data(this.data_attr("tab-content")) &&
          ((c =
            "#" + o(this).data(this.data_attr("tab-content")).split("#")[1]),
          (h = o(c))),
          f.deep_linking &&
            (f.scroll_to_content
              ? ((e.location.hash = a || c),
                a == s || a == c
                  ? n.parent()[0].scrollIntoView()
                  : o(c)[0].scrollIntoView())
              : (e.location.hash =
                  a != s
                    ? "fndtn-" + a.replace("#", "")
                    : "fndtn-" + c.replace("#", ""))),
          n.addClass(f.active_class).triggerHandler("opened"),
          l.attr({ "aria-selected": "true", tabindex: 0 }),
          u.removeClass(f.active_class),
          u.find("a").attr({ "aria-selected": "false", tabindex: -1 }),
          h
            .siblings()
            .removeClass(f.active_class)
            .attr({ "aria-hidden": "true", tabindex: -1 }),
          h
            .addClass(f.active_class)
            .attr("aria-hidden", "false")
            .removeAttr("tabindex"),
          f.callback(n),
          h.triggerHandler("toggled", [n]),
          r.triggerHandler("toggled", [h]),
          l.off("keydown").on("keydown", p);
      },
      data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t;
      },
      off: function () {},
      reflow: function () {}
    };
  })(jQuery, window, window.document),
  (function (t, e, i) {
    "use strict";
    Foundation.libs.abide = {
      name: "abide",
      version: "5.5.0",
      settings: {
        live_validate: !0,
        validate_on_blur: !0,
        focus_on_invalid: !0,
        error_labels: !0,
        error_class: "error",
        timeout: 1e3,
        patterns: {
          alpha: /^[a-zA-Z]+$/,
          alpha_numeric: /^[a-zA-Z0-9]+$/,
          integer: /^[-+]?\d+$/,
          number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
          card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          cvv: /^([0-9]){3,4}$/,
          email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
          url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
          domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
          datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
          date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
          time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
          dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
          month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
          day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
          color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
          equalTo: function (t) {
            var e = i.getElementById(
                t.getAttribute(this.add_namespace("data-equalto"))
              ).value,
              s = t.value,
              n = e === s;
            return n;
          }
        }
      },
      timer: null,
      init: function (t, e, i) {
        this.bindings(e, i);
      },
      events: function (e) {
        var i = this,
          s = i.S(e).attr("novalidate", "novalidate"),
          n = s.data(this.attr_name(!0) + "-init") || {};
        (this.invalid_attr = this.add_namespace("data-invalid")),
          s
            .off(".abide")
            .on("submit.fndtn.abide validate.fndtn.abide", function (t) {
              var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
              return i.validate(
                i.S(this).find("input, textarea, select").get(),
                t,
                e
              );
            })
            .on("reset", function () {
              return i.reset(t(this));
            })
            .find("input, textarea, select")
            .off(".abide")
            .on("blur.fndtn.abide change.fndtn.abide", function (t) {
              n.validate_on_blur === !0 && i.validate([this], t);
            })
            .on("keydown.fndtn.abide", function (t) {
              n.live_validate === !0 &&
                9 != t.which &&
                (clearTimeout(i.timer),
                (i.timer = setTimeout(
                  function () {
                    i.validate([this], t);
                  }.bind(this),
                  n.timeout
                )));
            });
      },
      reset: function (e) {
        e.removeAttr(this.invalid_attr),
          t(this.invalid_attr, e).removeAttr(this.invalid_attr),
          t("." + this.settings.error_class, e)
            .not("small")
            .removeClass(this.settings.error_class);
      },
      validate: function (t, e, i) {
        for (
          var s = this.parse_patterns(t),
            n = s.length,
            a = this.S(t[0]).closest("form"),
            o = /submit/.test(e.type),
            r = 0;
          n > r;
          r++
        )
          if (!s[r] && (o || i))
            return (
              this.settings.focus_on_invalid && t[r].focus(),
              a.trigger("invalid").trigger("invalid.fndtn.abide"),
              this.S(t[r]).closest("form").attr(this.invalid_attr, ""),
              !1
            );
        return (
          (o || i) && a.trigger("valid").trigger("valid.fndtn.abide"),
          a.removeAttr(this.invalid_attr),
          i ? !1 : !0
        );
      },
      parse_patterns: function (t) {
        for (var e = t.length, i = []; e--; ) i.push(this.pattern(t[e]));
        return this.check_validation_and_apply_styles(i);
      },
      pattern: function (t) {
        var e = t.getAttribute("type"),
          i = "string" == typeof t.getAttribute("required"),
          s = t.getAttribute("pattern") || "";
        return this.settings.patterns.hasOwnProperty(s) && s.length > 0
          ? [t, this.settings.patterns[s], i]
          : s.length > 0
          ? [t, new RegExp(s), i]
          : this.settings.patterns.hasOwnProperty(e)
          ? [t, this.settings.patterns[e], i]
          : ((s = /.*/), [t, s, i]);
      },
      check_validation_and_apply_styles: function (e) {
        var i = e.length,
          s = [],
          n = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
        for (n.data(this.attr_name(!0) + "-init") || {}; i--; ) {
          var a,
            o,
            r = e[i][0],
            l = e[i][2],
            d = r.value.trim(),
            c = this.S(r).parent(),
            h = r.getAttribute(this.add_namespace("data-abide-validator")),
            u = "radio" === r.type,
            f = "checkbox" === r.type,
            p = this.S('label[for="' + r.getAttribute("id") + '"]'),
            g = l ? r.value.length > 0 : !0,
            _ = [];
          if (
            (r.getAttribute(this.add_namespace("data-equalto")) &&
              (h = "equalTo"),
            (a = c.is("label") ? c.parent() : c),
            h &&
              ((o = this.settings.validators[h].apply(this, [r, l, a])),
              _.push(o)),
            u && l)
          )
            _.push(this.valid_radio(r, l));
          else if (f && l) _.push(this.valid_checkbox(r, l));
          else if (
            (_.push(
              (e[i][1].test(d) && g) ||
                (!l && r.value.length < 1) ||
                t(r).attr("disabled")
                ? !0
                : !1
            ),
            (_ = [
              _.every(function (t) {
                return t;
              })
            ]),
            _[0])
          )
            this.S(r).removeAttr(this.invalid_attr),
              r.setAttribute("aria-invalid", "false"),
              r.removeAttribute("aria-describedby"),
              a.removeClass(this.settings.error_class),
              p.length > 0 &&
                this.settings.error_labels &&
                p.removeClass(this.settings.error_class).removeAttr("role"),
              t(r).triggerHandler("valid");
          else {
            this.S(r).attr(this.invalid_attr, ""),
              r.setAttribute("aria-invalid", "true");
            var m = a.find(
                "small." + this.settings.error_class,
                "span." + this.settings.error_class
              ),
              v = m.length > 0 ? m[0].id : "";
            v.length > 0 && r.setAttribute("aria-describedby", v),
              a.addClass(this.settings.error_class),
              p.length > 0 &&
                this.settings.error_labels &&
                p.addClass(this.settings.error_class).attr("role", "alert"),
              t(r).triggerHandler("invalid");
          }
          s.push(_[0]);
        }
        return (s = [
          s.every(function (t) {
            return t;
          })
        ]);
      },
      valid_checkbox: function (t, e) {
        var t = this.S(t),
          i = t.is(":checked") || !e;
        return (
          i
            ? t
                .removeAttr(this.invalid_attr)
                .parent()
                .removeClass(this.settings.error_class)
            : t
                .attr(this.invalid_attr, "")
                .parent()
                .addClass(this.settings.error_class),
          i
        );
      },
      valid_radio: function (t) {
        for (
          var e = t.getAttribute("name"),
            i = this.S(t)
              .closest("[data-" + this.attr_name(!0) + "]")
              .find("[name='" + e + "']"),
            s = i.length,
            n = !1,
            a = 0;
          s > a;
          a++
        )
          i[a].checked && (n = !0);
        for (var a = 0; s > a; a++)
          n
            ? this.S(i[a])
                .removeAttr(this.invalid_attr)
                .parent()
                .removeClass(this.settings.error_class)
            : this.S(i[a])
                .attr(this.invalid_attr, "")
                .parent()
                .addClass(this.settings.error_class);
        return n;
      },
      valid_equal: function (t, e, s) {
        var n = i.getElementById(
            t.getAttribute(this.add_namespace("data-equalto"))
          ).value,
          a = t.value,
          o = n === a;
        return (
          o
            ? (this.S(t).removeAttr(this.invalid_attr),
              s.removeClass(this.settings.error_class),
              label.length > 0 &&
                settings.error_labels &&
                label.removeClass(this.settings.error_class))
            : (this.S(t).attr(this.invalid_attr, ""),
              s.addClass(this.settings.error_class),
              label.length > 0 &&
                settings.error_labels &&
                label.addClass(this.settings.error_class)),
          o
        );
      },
      valid_oneof: function (t, e, i, s) {
        var t = this.S(t),
          n = this.S("[" + this.add_namespace("data-oneof") + "]"),
          a = n.filter(":checked").length > 0;
        if (
          (a
            ? t
                .removeAttr(this.invalid_attr)
                .parent()
                .removeClass(this.settings.error_class)
            : t
                .attr(this.invalid_attr, "")
                .parent()
                .addClass(this.settings.error_class),
          !s)
        ) {
          var o = this;
          n.each(function () {
            o.valid_oneof.call(o, this, null, null, !0);
          });
        }
        return a;
      }
    };
  })(jQuery, window, window.document),
  (function (t, e) {
    "use strict";
    Foundation.libs.tooltip = {
      name: "tooltip",
      version: "5.5.0",
      settings: {
        additional_inheritable_classes: [],
        tooltip_class: ".tooltip",
        append_to: "body",
        touch_close_text: "Tap To Close",
        disable_for_touch: !1,
        hover_delay: 200,
        show_on: "all",
        tip_template: function (t, e) {
          return (
            '<span data-selector="' +
            t +
            '" id="' +
            t +
            '" class="' +
            Foundation.libs.tooltip.settings.tooltip_class.substring(1) +
            '" role="tooltip">' +
            e +
            '<span class="nub"></span></span>'
          );
        }
      },
      cache: {},
      init: function (t, e, i) {
        Foundation.inherit(this, "random_str"), this.bindings(e, i);
      },
      should_show: function (e) {
        var i = t.extend({}, this.settings, this.data_options(e));
        return "all" === i.show_on
          ? !0
          : this.small() && "small" === i.show_on
          ? !0
          : this.medium() && "medium" === i.show_on
          ? !0
          : this.large() && "large" === i.show_on
          ? !0
          : !1;
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      events: function (e) {
        var i = this,
          s = i.S;
        i.create(this.S(e)),
          t(this.scope)
            .off(".tooltip")
            .on(
              "mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              "[" + this.attr_name() + "]",
              function (e) {
                var n = s(this),
                  a = t.extend({}, i.settings, i.data_options(n)),
                  o = !1;
                if (
                  Modernizr.touch &&
                  /touchstart|MSPointerDown/i.test(e.type) &&
                  s(e.target).is("a")
                )
                  return !1;
                if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
                if (n.hasClass("open"))
                  Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(e.type) &&
                    e.preventDefault(),
                    i.hide(n);
                else {
                  if (
                    a.disable_for_touch &&
                    Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(e.type)
                  )
                    return;
                  !a.disable_for_touch &&
                    Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(e.type) &&
                    (e.preventDefault(),
                    s(a.tooltip_class + ".open").hide(),
                    (o = !0)),
                    /enter|over/i.test(e.type)
                      ? (this.timer = setTimeout(
                          function () {
                            i.showTip(n);
                          }.bind(this),
                          i.settings.hover_delay
                        ))
                      : "mouseout" === e.type || "mouseleave" === e.type
                      ? (clearTimeout(this.timer), i.hide(n))
                      : i.showTip(n);
                }
              }
            )
            .on(
              "mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              "[" + this.attr_name() + "].open",
              function (e) {
                return /mouse/i.test(e.type) && i.ie_touch(e)
                  ? !1
                  : void (
                      ("touch" != t(this).data("tooltip-open-event-type") ||
                        "mouseleave" != e.type) &&
                      ("mouse" == t(this).data("tooltip-open-event-type") &&
                      /MSPointerDown|touchstart/i.test(e.type)
                        ? i.convert_to_touch(t(this))
                        : i.hide(t(this)))
                    );
              }
            )
            .on(
              "DOMNodeRemoved DOMAttrModified",
              "[" + this.attr_name() + "]:not(a)",
              function () {
                i.hide(s(this));
              }
            );
      },
      ie_touch: function () {
        return !1;
      },
      showTip: function (t) {
        var e = this.getTip(t);
        return this.should_show(t, e) ? this.show(t) : void 0;
      },
      getTip: function (e) {
        var i = this.selector(e),
          s = t.extend({}, this.settings, this.data_options(e)),
          n = null;
        return (
          i &&
            (n = this.S('span[data-selector="' + i + '"]' + s.tooltip_class)),
          "object" == typeof n ? n : !1
        );
      },
      selector: function (t) {
        var e = t.attr("id"),
          i = t.attr(this.attr_name()) || t.attr("data-selector");
        return (
          ((e && e.length < 1) || !e) &&
            "string" != typeof i &&
            ((i = this.random_str(6)),
            t.attr("data-selector", i).attr("aria-describedby", i)),
          e && e.length > 0 ? e : i
        );
      },
      create: function (i) {
        var s = this,
          n = t.extend({}, this.settings, this.data_options(i)),
          a = this.settings.tip_template;
        "string" == typeof n.tip_template &&
          e.hasOwnProperty(n.tip_template) &&
          (a = e[n.tip_template]);
        var o = t(
            a(this.selector(i), t("<div></div>").html(i.attr("title")).html())
          ),
          r = this.inheritable_classes(i);
        o.addClass(r).appendTo(n.append_to),
          Modernizr.touch &&
            (o.append(
              '<span class="tap-to-close">' + n.touch_close_text + "</span>"
            ),
            o.on(
              "touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              function () {
                s.hide(i);
              }
            )),
          i.removeAttr("title").attr("title", "");
      },
      reposition: function (e, i, s) {
        var n, a, o, r, l;
        if (
          (i.css("visibility", "hidden").show(),
          (n = e.data("width")),
          (a = i.children(".nub")),
          (o = a.outerHeight()),
          (r = a.outerHeight()),
          i.css(this.small() ? { width: "100%" } : { width: n ? n : "auto" }),
          (l = function (t, e, i, s, n) {
            return t
              .css({
                top: e ? e : "auto",
                bottom: s ? s : "auto",
                left: n ? n : "auto",
                right: i ? i : "auto"
              })
              .end();
          }),
          l(
            i,
            e.offset().top + e.outerHeight() + 10,
            "auto",
            "auto",
            e.offset().left
          ),
          this.small())
        )
          l(
            i,
            e.offset().top + e.outerHeight() + 10,
            "auto",
            "auto",
            12.5,
            t(this.scope).width()
          ),
            i.addClass("tip-override"),
            l(a, -o, "auto", "auto", e.offset().left);
        else {
          var d = e.offset().left;
          Foundation.rtl &&
            (a.addClass("rtl"),
            (d = e.offset().left + e.outerWidth() - i.outerWidth())),
            l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", d),
            i.removeClass("tip-override"),
            s && s.indexOf("tip-top") > -1
              ? (Foundation.rtl && a.addClass("rtl"),
                l(
                  i,
                  e.offset().top - i.outerHeight(),
                  "auto",
                  "auto",
                  d
                ).removeClass("tip-override"))
              : s && s.indexOf("tip-left") > -1
              ? (l(
                  i,
                  e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2,
                  "auto",
                  "auto",
                  e.offset().left - i.outerWidth() - o
                ).removeClass("tip-override"),
                a.removeClass("rtl"))
              : s &&
                s.indexOf("tip-right") > -1 &&
                (l(
                  i,
                  e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2,
                  "auto",
                  "auto",
                  e.offset().left + e.outerWidth() + o
                ).removeClass("tip-override"),
                a.removeClass("rtl"));
        }
        i.css("visibility", "visible").hide();
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      inheritable_classes: function (e) {
        var i = t.extend({}, this.settings, this.data_options(e)),
          s = [
            "tip-top",
            "tip-left",
            "tip-bottom",
            "tip-right",
            "radius",
            "round"
          ].concat(i.additional_inheritable_classes),
          n = e.attr("class"),
          a = n
            ? t
                .map(n.split(" "), function (e) {
                  return -1 !== t.inArray(e, s) ? e : void 0;
                })
                .join(" ")
            : "";
        return t.trim(a);
      },
      convert_to_touch: function (e) {
        var i = this,
          s = i.getTip(e),
          n = t.extend({}, i.settings, i.data_options(e));
        0 === s.find(".tap-to-close").length &&
          (s.append(
            '<span class="tap-to-close">' + n.touch_close_text + "</span>"
          ),
          s.on(
            "click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",
            function () {
              i.hide(e);
            }
          )),
          e.data("tooltip-open-event-type", "touch");
      },
      show: function (t) {
        var e = this.getTip(t);
        "touch" == t.data("tooltip-open-event-type") &&
          this.convert_to_touch(t),
          this.reposition(t, e, t.attr("class")),
          t.addClass("open"),
          e.fadeIn(150);
      },
      hide: function (t) {
        var e = this.getTip(t);
        e.fadeOut(150, function () {
          e.find(".tap-to-close").remove(),
            e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),
            t.removeClass("open");
        });
      },
      off: function () {
        var e = this;
        this.S(this.scope).off(".fndtn.tooltip"),
          this.S(this.settings.tooltip_class)
            .each(function (i) {
              t("[" + e.attr_name() + "]")
                .eq(i)
                .attr("title", t(this).text());
            })
            .remove();
      },
      reflow: function () {}
    };
  })(jQuery, window, window.document);
$(document).foundation();

/*global define*/
(function (global, undefined) {
  "use strict";

  var document = global.document,
    Alertify;

  Alertify = function () {
    var _alertify = {},
      dialogs = {},
      isopen = false,
      keys = { ENTER: 13, ESC: 27, SPACE: 32 },
      queue = [],
      $,
      btnCancel,
      btnOK,
      btnReset,
      btnResetBack,
      btnFocus,
      elCallee,
      elCover,
      elDialog,
      elLog,
      form,
      input,
      getTransitionEvent;

    /**
     * Markup pieces
     * @type {Object}
     */
    dialogs = {
      buttons: {
        holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
        submit:
          '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
        ok:
          '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
        cancel:
          '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
      },
      input:
        '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
      message: '<p class="alertify-message">{{message}}</p>',
      log: '<article class="alertify-log{{class}}">{{message}}</article>'
    };

    /**
     * Return the proper transitionend event
     * @return {String}    Transition type string
     */
    getTransitionEvent = function () {
      var t,
        type,
        supported = false,
        el = document.createElement("fakeelement"),
        transitions = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend"
        };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          type = transitions[t];
          supported = true;
          break;
        }
      }

      return {
        type: type,
        supported: supported
      };
    };

    /**
     * Shorthand for document.getElementById()
     *
     * @param  {String} id    A specific element ID
     * @return {Object}       HTML element
     */
    $ = function (id) {
      return document.getElementById(id);
    };

    /**
     * Alertify private object
     * @type {Object}
     */
    _alertify = {
      /**
       * Labels object
       * @type {Object}
       */
      labels: {
        ok: "OK",
        cancel: "Cancel"
      },

      /**
       * Delay number
       * @type {Number}
       */
      delay: 5000,

      /**
       * Whether buttons are reversed (default is secondary/primary)
       * @type {Boolean}
       */
      buttonReverse: false,

      /**
       * Which button should be focused by default
       * @type {String} "ok" (default), "cancel", or "none"
       */
      buttonFocus: "ok",

      /**
       * Set the transition event on load
       * @type {[type]}
       */
      transition: undefined,

      /**
       * Set the proper button click events
       *
       * @param {Function} fn    [Optional] Callback function
       *
       * @return {undefined}
       */
      addListeners: function (fn) {
        var hasOK = typeof btnOK !== "undefined",
          hasCancel = typeof btnCancel !== "undefined",
          hasInput = typeof input !== "undefined",
          val = "",
          self = this,
          ok,
          cancel,
          common,
          key,
          reset;

        // ok event handler
        ok = function (event) {
          if (typeof event.preventDefault !== "undefined")
            event.preventDefault();
          common(event);
          if (typeof input !== "undefined") val = input.value;
          if (typeof fn === "function") {
            if (typeof input !== "undefined") {
              fn(true, val);
            } else fn(true);
          }
          return false;
        };

        // cancel event handler
        cancel = function (event) {
          if (typeof event.preventDefault !== "undefined")
            event.preventDefault();
          common(event);
          if (typeof fn === "function") fn(false);
          return false;
        };

        // common event handler (keyup, ok and cancel)
        common = function (event) {
          self.hide();
          self.unbind(document.body, "keyup", key);
          self.unbind(btnReset, "focus", reset);
          if (hasOK) self.unbind(btnOK, "click", ok);
          if (hasCancel) self.unbind(btnCancel, "click", cancel);
        };

        // keyup handler
        key = function (event) {
          var keyCode = event.keyCode;
          if (
            (keyCode === keys.SPACE && !hasInput) ||
            (hasInput && keyCode === keys.ENTER)
          )
            ok(event);
          if (keyCode === keys.ESC && hasCancel) cancel(event);
        };

        // reset focus to first item in the dialog
        reset = function (event) {
          if (hasInput) input.focus();
          else if (!hasCancel || self.buttonReverse) btnOK.focus();
          else btnCancel.focus();
        };

        // handle reset focus link
        // this ensures that the keyboard focus does not
        // ever leave the dialog box until an action has
        // been taken
        this.bind(btnReset, "focus", reset);
        this.bind(btnResetBack, "focus", reset);
        // handle OK click
        if (hasOK) this.bind(btnOK, "click", ok);
        // handle Cancel click
        if (hasCancel) this.bind(btnCancel, "click", cancel);
        // listen for keys, Cancel => ESC
        this.bind(document.body, "keyup", key);
        if (!this.transition.supported) {
          this.setFocus();
        }
      },

      /**
       * Bind events to elements
       *
       * @param  {Object}   el       HTML Object
       * @param  {Event}    event    Event to attach to element
       * @param  {Function} fn       Callback function
       *
       * @return {undefined}
       */
      bind: function (el, event, fn) {
        if (typeof el.addEventListener === "function") {
          el.addEventListener(event, fn, false);
        } else if (el.attachEvent) {
          el.attachEvent("on" + event, fn);
        }
      },

      /**
       * Use alertify as the global error handler (using window.onerror)
       *
       * @return {boolean} success
       */
      handleErrors: function () {
        if (typeof global.onerror !== "undefined") {
          var self = this;
          global.onerror = function (msg, url, line) {
            self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
          };
          return true;
        } else {
          return false;
        }
      },

      /**
       * Append button HTML strings
       *
       * @param {String} secondary    The secondary button HTML string
       * @param {String} primary      The primary button HTML string
       *
       * @return {String}             The appended button HTML strings
       */
      appendButtons: function (secondary, primary) {
        return this.buttonReverse ? primary + secondary : secondary + primary;
      },

      /**
       * Build the proper message box
       *
       * @param  {Object} item    Current object in the queue
       *
       * @return {String}         An HTML string of the message box
       */
      build: function (item) {
        var html = "",
          type = item.type,
          message = item.message,
          css = item.cssClass || "";

        html += '<div class="alertify-dialog">';
        html +=
          '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>';

        if (_alertify.buttonFocus === "none")
          html +=
            '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>';

        // doens't require an actual form
        if (type === "prompt") html += '<div id="alertify-form">';

        html += '<article class="alertify-inner">';
        html += dialogs.message.replace("{{message}}", message);

        if (type === "prompt") html += dialogs.input;

        html += dialogs.buttons.holder;
        html += "</article>";

        if (type === "prompt") html += "</div>";

        html +=
          '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>';
        html += "</div>";

        switch (type) {
          case "confirm":
            html = html.replace(
              "{{buttons}}",
              this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok)
            );
            html = html
              .replace("{{ok}}", this.labels.ok)
              .replace("{{cancel}}", this.labels.cancel);
            break;
          case "prompt":
            html = html.replace(
              "{{buttons}}",
              this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit)
            );
            html = html
              .replace("{{ok}}", this.labels.ok)
              .replace("{{cancel}}", this.labels.cancel);
            break;
          case "alert":
            html = html.replace("{{buttons}}", dialogs.buttons.ok);
            html = html.replace("{{ok}}", this.labels.ok);
            break;
          default:
            break;
        }

        elDialog.className = "alertify alertify-" + type + " " + css;
        elCover.className = "alertify-cover";
        return html;
      },

      /**
       * Close the log messages
       *
       * @param  {Object} elem    HTML Element of log message to close
       * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
       *
       * @return {undefined}
       */
      close: function (elem, wait) {
        // Unary Plus: +"2" === 2
        var timer = wait && !isNaN(wait) ? +wait : this.delay,
          self = this,
          hideElement,
          transitionDone;

        // set click event on log messages
        this.bind(elem, "click", function () {
          hideElement(elem);
        });
        // Hide the dialog box after transition
        // This ensure it doens't block any element from being clicked
        transitionDone = function (event) {
          event.stopPropagation();
          // unbind event so function only gets called once
          self.unbind(this, self.transition.type, transitionDone);
          // remove log message
          elLog.removeChild(this);
          if (!elLog.hasChildNodes())
            elLog.className += " alertify-logs-hidden";
        };
        // this sets the hide class to transition out
        // or removes the child if css transitions aren't supported
        hideElement = function (el) {
          // ensure element exists
          if (typeof el !== "undefined" && el.parentNode === elLog) {
            // whether CSS transition exists
            if (self.transition.supported) {
              self.bind(el, self.transition.type, transitionDone);
              el.className += " alertify-log-hide";
            } else {
              elLog.removeChild(el);
              if (!elLog.hasChildNodes())
                elLog.className += " alertify-logs-hidden";
            }
          }
        };
        // never close (until click) if wait is set to 0
        if (wait === 0) return;
        // set timeout to auto close the log message
        setTimeout(function () {
          hideElement(elem);
        }, timer);
      },

      /**
       * Create a dialog box
       *
       * @param  {String}   message        The message passed from the callee
       * @param  {String}   type           Type of dialog to create
       * @param  {Function} fn             [Optional] Callback function
       * @param  {String}   placeholder    [Optional] Default value for prompt input field
       * @param  {String}   cssClass       [Optional] Class(es) to append to dialog box
       *
       * @return {Object}
       */
      dialog: function (message, type, fn, placeholder, cssClass) {
        // set the current active element
        // this allows the keyboard focus to be resetted
        // after the dialog box is closed
        elCallee = document.activeElement;
        // check to ensure the alertify dialog element
        // has been successfully created
        var check = function () {
          if (
            elLog &&
            elLog.scrollTop !== null &&
            elCover &&
            elCover.scrollTop !== null
          )
            return;
          else check();
        };
        // error catching
        if (typeof message !== "string")
          throw new Error("message must be a string");
        if (typeof type !== "string") throw new Error("type must be a string");
        if (typeof fn !== "undefined" && typeof fn !== "function")
          throw new Error("fn must be a function");
        // initialize alertify if it hasn't already been done
        this.init();
        check();

        queue.push({
          type: type,
          message: message,
          callback: fn,
          placeholder: placeholder,
          cssClass: cssClass
        });
        if (!isopen) this.setup();

        return this;
      },

      /**
       * Extend the log method to create custom methods
       *
       * @param  {String} type    Custom method name
       *
       * @return {Function}
       */
      extend: function (type) {
        if (typeof type !== "string")
          throw new Error("extend method must have exactly one paramter");
        return function (message, wait) {
          this.log(message, type, wait);
          return this;
        };
      },

      /**
       * Hide the dialog and rest to defaults
       *
       * @return {undefined}
       */
      hide: function () {
        var transitionDone,
          self = this;
        // remove reference from queue
        queue.splice(0, 1);
        // if items remaining in the queue
        if (queue.length > 0) this.setup(true);
        else {
          isopen = false;
          // Hide the dialog box after transition
          // This ensure it doens't block any element from being clicked
          transitionDone = function (event) {
            event.stopPropagation();
            // unbind event so function only gets called once
            self.unbind(elDialog, self.transition.type, transitionDone);
          };
          // whether CSS transition exists
          if (this.transition.supported) {
            this.bind(elDialog, this.transition.type, transitionDone);
            elDialog.className = "alertify alertify-hide alertify-hidden";
          } else {
            elDialog.className =
              "alertify alertify-hide alertify-hidden alertify-isHidden";
          }
          elCover.className = "alertify-cover alertify-cover-hidden";
          // set focus to the last element or body
          // after the dialog is closed
          elCallee.focus();
        }
      },

      /**
       * Initialize Alertify
       * Create the 2 main elements
       *
       * @return {undefined}
       */
      init: function () {
        // ensure legacy browsers support html5 tags
        document.createElement("nav");
        document.createElement("article");
        document.createElement("section");
        // cover
        if ($("alertify-cover") == null) {
          elCover = document.createElement("div");
          elCover.setAttribute("id", "alertify-cover");
          elCover.className = "alertify-cover alertify-cover-hidden";
          document.body.appendChild(elCover);
        }
        // main element
        if ($("alertify") == null) {
          isopen = false;
          queue = [];
          elDialog = document.createElement("section");
          elDialog.setAttribute("id", "alertify");
          elDialog.className = "alertify alertify-hidden";
          document.body.appendChild(elDialog);
        }
        // log element
        if ($("alertify-logs") == null) {
          elLog = document.createElement("section");
          elLog.setAttribute("id", "alertify-logs");
          elLog.className = "alertify-logs alertify-logs-hidden";
          document.body.appendChild(elLog);
        }
        // set tabindex attribute on body element
        // this allows script to give it focus
        // after the dialog is closed
        document.body.setAttribute("tabindex", "0");
        // set transition type
        this.transition = getTransitionEvent();
      },

      /**
       * Show a new log message box
       *
       * @param  {String} message    The message passed from the callee
       * @param  {String} type       [Optional] Optional type of log message
       * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
       *
       * @return {Object}
       */
      log: function (message, type, wait) {
        // check to ensure the alertify dialog element
        // has been successfully created
        var check = function () {
          if (elLog && elLog.scrollTop !== null) return;
          else check();
        };
        // initialize alertify if it hasn't already been done
        this.init();
        check();

        elLog.className = "alertify-logs";
        this.notify(message, type, wait);
        return this;
      },

      /**
       * Add new log message
       * If a type is passed, a class name "alertify-log-{type}" will get added.
       * This allows for custom look and feel for various types of notifications.
       *
       * @param  {String} message    The message passed from the callee
       * @param  {String} type       [Optional] Type of log message
       * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
       *
       * @return {undefined}
       */
      notify: function (message, type, wait) {
        var log = document.createElement("article");
        log.className =
          "alertify-log" +
          (typeof type === "string" && type !== ""
            ? " alertify-log-" + type
            : "");
        log.innerHTML = message;
        // append child
        elLog.appendChild(log);
        // triggers the CSS animation
        setTimeout(function () {
          log.className = log.className + " alertify-log-show";
        }, 50);
        this.close(log, wait);
      },

      /**
       * Set properties
       *
       * @param {Object} args     Passing parameters
       *
       * @return {undefined}
       */
      set: function (args) {
        var k;
        // error catching
        if (typeof args !== "object" && args instanceof Array)
          throw new Error("args must be an object");
        // set parameters
        for (k in args) {
          if (args.hasOwnProperty(k)) {
            this[k] = args[k];
          }
        }
      },

      /**
       * Common place to set focus to proper element
       *
       * @return {undefined}
       */
      setFocus: function () {
        if (input) {
          input.focus();
          input.select();
        } else btnFocus.focus();
      },

      /**
       * Initiate all the required pieces for the dialog box
       *
       * @return {undefined}
       */
      setup: function (fromQueue) {
        var item = queue[0],
          self = this,
          transitionDone;

        // dialog is open
        isopen = true;
        // Set button focus after transition
        transitionDone = function (event) {
          event.stopPropagation();
          self.setFocus();
          // unbind event so function only gets called once
          self.unbind(elDialog, self.transition.type, transitionDone);
        };
        // whether CSS transition exists
        if (this.transition.supported && !fromQueue) {
          this.bind(elDialog, this.transition.type, transitionDone);
        }
        // build the proper dialog HTML
        elDialog.innerHTML = this.build(item);
        // assign all the common elements
        btnReset = $("alertify-resetFocus");
        btnResetBack = $("alertify-resetFocusBack");
        btnOK = $("alertify-ok") || undefined;
        btnCancel = $("alertify-cancel") || undefined;
        (btnFocus =
          _alertify.buttonFocus === "cancel"
            ? btnCancel
            : _alertify.buttonFocus === "none"
            ? $("alertify-noneFocus")
            : btnOK),
          (input = $("alertify-text") || undefined);
        form = $("alertify-form") || undefined;
        // add placeholder value to the input field
        if (typeof item.placeholder === "string" && item.placeholder !== "")
          input.value = item.placeholder;
        if (fromQueue) this.setFocus();
        this.addListeners(item.callback);
      },

      /**
       * Unbind events to elements
       *
       * @param  {Object}   el       HTML Object
       * @param  {Event}    event    Event to detach to element
       * @param  {Function} fn       Callback function
       *
       * @return {undefined}
       */
      unbind: function (el, event, fn) {
        if (typeof el.removeEventListener === "function") {
          el.removeEventListener(event, fn, false);
        } else if (el.detachEvent) {
          el.detachEvent("on" + event, fn);
        }
      }
    };

    return {
      alert: function (message, fn, cssClass) {
        _alertify.dialog(message, "alert", fn, "", cssClass);
        return this;
      },
      confirm: function (message, fn, cssClass) {
        _alertify.dialog(message, "confirm", fn, "", cssClass);
        return this;
      },
      extend: _alertify.extend,
      init: _alertify.init,
      log: function (message, type, wait) {
        _alertify.log(message, type, wait);
        return this;
      },
      prompt: function (message, fn, placeholder, cssClass) {
        _alertify.dialog(message, "prompt", fn, placeholder, cssClass);
        return this;
      },
      success: function (message, wait) {
        _alertify.log(message, "success", wait);
        return this;
      },
      error: function (message, wait) {
        _alertify.log(message, "error", wait);
        return this;
      },
      set: function (args) {
        _alertify.set(args);
      },
      labels: _alertify.labels,
      debug: _alertify.handleErrors
    };
  };

  // AMD and window support
  if (typeof define === "function") {
    define([], function () {
      return new Alertify();
    });
  } else if (typeof global.alertify === "undefined") {
    global.alertify = new Alertify();
  }
})(this);

function alertSuccess(message) {
  alertify.set({ delay: 7000 });
  alertify.success(message);
}

function alertError(message) {
  alertify.set({ delay: 7000 });
  alertify.error(message);
}