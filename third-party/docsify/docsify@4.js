!(function() {
  function s(n) {
    var r = Object.create(null);
    return function(e) {
      var t = c(e) ? e : JSON.stringify(e);
      return r[t] || (r[t] = n(e));
    };
  }
  var a = s(function(e) {
      return e.replace(/([A-Z])/g, function(e) {
        return '-' + e.toLowerCase();
      });
    }),
    l = Object.prototype.hasOwnProperty,
    f =
      Object.assign ||
      function(e) {
        for (var t = arguments, n = 1; n < arguments.length; n++) {
          var r = Object(t[n]);
          for (var i in r) l.call(r, i) && (e[i] = r[i]);
        }
        return e;
      };
  function c(e) {
    return 'string' == typeof e || 'number' == typeof e;
  }
  function p() {}
  function r(e) {
    return 'function' == typeof e;
  }
  var h = document.body.clientWidth <= 600,
    i =
      window.history &&
      window.history.pushState &&
      window.history.replaceState &&
      !navigator.userAgent.match(
        /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
      ),
    n = {};
  function m(e, t) {
    if ((void 0 === t && (t = !1), 'string' == typeof e)) {
      if (void 0 !== window.Vue) return b(e);
      e = t ? b(e) : n[e] || (n[e] = b(e));
    }
    return e;
  }
  var u = document,
    v = u.body,
    d = u.head;
  function b(e, t) {
    return t ? e.querySelector(t) : u.querySelector(e);
  }
  function y(e, t) {
    return [].slice.call(t ? e.querySelectorAll(t) : u.querySelectorAll(e));
  }
  function g(e, t) {
    return (e = u.createElement(e)), t && (e.innerHTML = t), e;
  }
  function o(e, t) {
    return e.appendChild(t);
  }
  function k(e, t) {
    return e.insertBefore(t, e.children[0]);
  }
  function x(e, t, n) {
    r(t) ? window.addEventListener(e, t) : e.addEventListener(t, n);
  }
  function w(e, t, n) {
    r(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n);
  }
  function _(e, t, n) {
    e && e.classList[n ? t : 'toggle'](n || t);
  }
  function e(e, t) {
    void 0 === t && (t = document);
    var n = t.readyState;
    if ('complete' === n || 'interactive' === n) return setTimeout(e, 0);
    t.addEventListener('DOMContentLoaded', e);
  }
  var t = Object.freeze({
      __proto__: null,
      getNode: m,
      $: u,
      body: v,
      head: d,
      find: b,
      findAll: y,
      create: g,
      appendTo: o,
      before: k,
      on: x,
      off: w,
      toggleClass: _,
      style: function(e) {
        o(d, g('style', e));
      },
      documentReady: e
    }),
    S = document.currentScript;
  function A(e) {
    var t = f(
        {
          el: '#app',
          repo: '',
          maxLevel: 6,
          subMaxLevel: 0,
          loadSidebar: null,
          loadNavbar: null,
          homepage: 'README.md',
          coverpage: '',
          basePath: '',
          auto2top: !1,
          name: '',
          themeColor: '',
          nameLink: window.location.pathname,
          autoHeader: !1,
          executeScript: null,
          noEmoji: !1,
          ga: '',
          ext: '.md',
          mergeNavbar: !1,
          formatUpdated: '',
          externalLinkTarget: '_blank',
          cornerExternalLinkTarget: '_blank',
          externalLinkRel: 'noopener',
          routerMode: 'hash',
          noCompileLinks: [],
          crossOriginLinks: [],
          relativePath: !1,
          topMargin: 0
        },
        'function' == typeof window.$docsify
          ? window.$docsify(e)
          : window.$docsify
      ),
      n =
        S ||
        [].slice
          .call(document.getElementsByTagName('script'))
          .filter(function(e) {
            return /docsify\./.test(e.src);
          })[0];
    if (n)
      for (var r in t)
        if (l.call(t, r)) {
          var i = n.getAttribute('data-' + a(r));
          c(i) && (t[r] = '' === i || i);
        }
    return (
      !0 === t.loadSidebar && (t.loadSidebar = '_sidebar' + t.ext),
      !0 === t.loadNavbar && (t.loadNavbar = '_navbar' + t.ext),
      !0 === t.coverpage && (t.coverpage = '_coverpage' + t.ext),
      !0 === t.repo && (t.repo = ''),
      !0 === t.name && (t.name = ''),
      (window.$docsify = t)
    );
  }
  var T = /([^{]*?)\w(?=\})/g,
    E = {
      YYYY: 'getFullYear',
      YY: 'getYear',
      MM: function(e) {
        return e.getMonth() + 1;
      },
      DD: 'getDate',
      HH: 'getHours',
      mm: 'getMinutes',
      ss: 'getSeconds',
      fff: 'getMilliseconds'
    };
  var L = Object.hasOwnProperty,
    R = Object.setPrototypeOf,
    C = Object.isFrozen,
    ke = Object.keys,
    xe = Object.freeze,
    $ = Object.seal,
    F = 'undefined' != typeof Reflect && Reflect,
    z = F.apply,
    O = F.construct;
  (z =
    z ||
    function(e, t, n) {
      return e.apply(t, n);
    }),
    (xe =
      xe ||
      function(e) {
        return e;
      }),
    ($ =
      $ ||
      function(e) {
        return e;
      }),
    (O =
      O ||
      function(e, t) {
        return new (Function.prototype.bind.apply(
          e,
          [null].concat(
            (function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
              return Array.from(e);
            })(t)
          )
        ))();
      });
  var we = M(Array.prototype.forEach),
    _e = M(Array.prototype.indexOf),
    Se = M(Array.prototype.join),
    Ae = M(Array.prototype.pop),
    Te = M(Array.prototype.push),
    Ee = M(Array.prototype.slice),
    Le = M(String.prototype.toLowerCase),
    Re = M(String.prototype.match),
    Ce = M(String.prototype.replace),
    $e = M(String.prototype.indexOf),
    Fe = M(String.prototype.trim),
    ze = M(RegExp.prototype.test),
    Oe = N(RegExp),
    Me = N(TypeError);
  function M(a) {
    return function(e) {
      for (
        var t = arguments,
          n = arguments.length,
          r = Array(1 < n ? n - 1 : 0),
          i = 1;
        i < n;
        i++
      )
        r[i - 1] = t[i];
      return z(a, e, r);
    };
  }
  function N(i) {
    return function() {
      for (
        var e = arguments, t = arguments.length, n = Array(t), r = 0;
        r < t;
        r++
      )
        n[r] = e[r];
      return O(i, n);
    };
  }
  function Ne(e, t) {
    R && R(e, null);
    for (var n = t.length; n--; ) {
      var r = t[n];
      if ('string' == typeof r) {
        var i = Le(r);
        i !== r && (C(t) || (t[n] = i), (r = i));
      }
      e[r] = !0;
    }
    return e;
  }
  function Pe(e) {
    var t = {},
      n = void 0;
    for (n in e) z(L, e, [n]) && (t[n] = e[n]);
    return t;
  }
  var De = xe([
      'a',
      'abbr',
      'acronym',
      'address',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'bdi',
      'bdo',
      'big',
      'blink',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'center',
      'cite',
      'code',
      'col',
      'colgroup',
      'content',
      'data',
      'datalist',
      'dd',
      'decorator',
      'del',
      'details',
      'dfn',
      'dir',
      'div',
      'dl',
      'dt',
      'element',
      'em',
      'fieldset',
      'figcaption',
      'figure',
      'font',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'map',
      'mark',
      'marquee',
      'menu',
      'menuitem',
      'meter',
      'nav',
      'nobr',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'picture',
      'pre',
      'progress',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'section',
      'select',
      'shadow',
      'small',
      'source',
      'spacer',
      'span',
      'strike',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'tr',
      'track',
      'tt',
      'u',
      'ul',
      'var',
      'video',
      'wbr'
    ]),
    je = xe([
      'svg',
      'a',
      'altglyph',
      'altglyphdef',
      'altglyphitem',
      'animatecolor',
      'animatemotion',
      'animatetransform',
      'audio',
      'canvas',
      'circle',
      'clippath',
      'defs',
      'desc',
      'ellipse',
      'filter',
      'font',
      'g',
      'glyph',
      'glyphref',
      'hkern',
      'image',
      'line',
      'lineargradient',
      'marker',
      'mask',
      'metadata',
      'mpath',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialgradient',
      'rect',
      'stop',
      'style',
      'switch',
      'symbol',
      'text',
      'textpath',
      'title',
      'tref',
      'tspan',
      'video',
      'view',
      'vkern'
    ]),
    He = xe([
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feDistantLight',
      'feFlood',
      'feFuncA',
      'feFuncB',
      'feFuncG',
      'feFuncR',
      'feGaussianBlur',
      'feMerge',
      'feMergeNode',
      'feMorphology',
      'feOffset',
      'fePointLight',
      'feSpecularLighting',
      'feSpotLight',
      'feTile',
      'feTurbulence'
    ]),
    Ie = xe([
      'math',
      'menclose',
      'merror',
      'mfenced',
      'mfrac',
      'mglyph',
      'mi',
      'mlabeledtr',
      'mmultiscripts',
      'mn',
      'mo',
      'mover',
      'mpadded',
      'mphantom',
      'mroot',
      'mrow',
      'ms',
      'mspace',
      'msqrt',
      'mstyle',
      'msub',
      'msup',
      'msubsup',
      'mtable',
      'mtd',
      'mtext',
      'mtr',
      'munder',
      'munderover'
    ]),
    qe = xe(['#text']),
    Ue = xe([
      'accept',
      'action',
      'align',
      'alt',
      'autocomplete',
      'background',
      'bgcolor',
      'border',
      'cellpadding',
      'cellspacing',
      'checked',
      'cite',
      'class',
      'clear',
      'color',
      'cols',
      'colspan',
      'controls',
      'coords',
      'crossorigin',
      'datetime',
      'default',
      'dir',
      'disabled',
      'download',
      'enctype',
      'face',
      'for',
      'headers',
      'height',
      'hidden',
      'high',
      'href',
      'hreflang',
      'id',
      'integrity',
      'ismap',
      'label',
      'lang',
      'list',
      'loop',
      'low',
      'max',
      'maxlength',
      'media',
      'method',
      'min',
      'minlength',
      'multiple',
      'name',
      'noshade',
      'novalidate',
      'nowrap',
      'open',
      'optimum',
      'pattern',
      'placeholder',
      'poster',
      'preload',
      'pubdate',
      'radiogroup',
      'readonly',
      'rel',
      'required',
      'rev',
      'reversed',
      'role',
      'rows',
      'rowspan',
      'spellcheck',
      'scope',
      'selected',
      'shape',
      'size',
      'sizes',
      'span',
      'srclang',
      'start',
      'src',
      'srcset',
      'step',
      'style',
      'summary',
      'tabindex',
      'title',
      'type',
      'usemap',
      'valign',
      'value',
      'width',
      'xmlns'
    ]),
    Be = xe([
      'accent-height',
      'accumulate',
      'additive',
      'alignment-baseline',
      'ascent',
      'attributename',
      'attributetype',
      'azimuth',
      'basefrequency',
      'baseline-shift',
      'begin',
      'bias',
      'by',
      'class',
      'clip',
      'clip-path',
      'clip-rule',
      'color',
      'color-interpolation',
      'color-interpolation-filters',
      'color-profile',
      'color-rendering',
      'cx',
      'cy',
      'd',
      'dx',
      'dy',
      'diffuseconstant',
      'direction',
      'display',
      'divisor',
      'dur',
      'edgemode',
      'elevation',
      'end',
      'fill',
      'fill-opacity',
      'fill-rule',
      'filter',
      'filterunits',
      'flood-color',
      'flood-opacity',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-style',
      'font-variant',
      'font-weight',
      'fx',
      'fy',
      'g1',
      'g2',
      'glyph-name',
      'glyphref',
      'gradientunits',
      'gradienttransform',
      'height',
      'href',
      'id',
      'image-rendering',
      'in',
      'in2',
      'k',
      'k1',
      'k2',
      'k3',
      'k4',
      'kerning',
      'keypoints',
      'keysplines',
      'keytimes',
      'lang',
      'lengthadjust',
      'letter-spacing',
      'kernelmatrix',
      'kernelunitlength',
      'lighting-color',
      'local',
      'marker-end',
      'marker-mid',
      'marker-start',
      'markerheight',
      'markerunits',
      'markerwidth',
      'maskcontentunits',
      'maskunits',
      'max',
      'mask',
      'media',
      'method',
      'mode',
      'min',
      'name',
      'numoctaves',
      'offset',
      'operator',
      'opacity',
      'order',
      'orient',
      'orientation',
      'origin',
      'overflow',
      'paint-order',
      'path',
      'pathlength',
      'patterncontentunits',
      'patterntransform',
      'patternunits',
      'points',
      'preservealpha',
      'preserveaspectratio',
      'primitiveunits',
      'r',
      'rx',
      'ry',
      'radius',
      'refx',
      'refy',
      'repeatcount',
      'repeatdur',
      'restart',
      'result',
      'rotate',
      'scale',
      'seed',
      'shape-rendering',
      'specularconstant',
      'specularexponent',
      'spreadmethod',
      'stddeviation',
      'stitchtiles',
      'stop-color',
      'stop-opacity',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke',
      'stroke-width',
      'style',
      'surfacescale',
      'tabindex',
      'targetx',
      'targety',
      'transform',
      'text-anchor',
      'text-decoration',
      'text-rendering',
      'textlength',
      'type',
      'u1',
      'u2',
      'unicode',
      'values',
      'viewbox',
      'visibility',
      'version',
      'vert-adv-y',
      'vert-origin-x',
      'vert-origin-y',
      'width',
      'word-spacing',
      'wrap',
      'writing-mode',
      'xchannelselector',
      'ychannelselector',
      'x',
      'x1',
      'x2',
      'xmlns',
      'y',
      'y1',
      'y2',
      'z',
      'zoomandpan'
    ]),
    Ze = xe([
      'accent',
      'accentunder',
      'align',
      'bevelled',
      'close',
      'columnsalign',
      'columnlines',
      'columnspan',
      'denomalign',
      'depth',
      'dir',
      'display',
      'displaystyle',
      'encoding',
      'fence',
      'frame',
      'height',
      'href',
      'id',
      'largeop',
      'length',
      'linethickness',
      'lspace',
      'lquote',
      'mathbackground',
      'mathcolor',
      'mathsize',
      'mathvariant',
      'maxsize',
      'minsize',
      'movablelimits',
      'notation',
      'numalign',
      'open',
      'rowalign',
      'rowlines',
      'rowspacing',
      'rowspan',
      'rspace',
      'rquote',
      'scriptlevel',
      'scriptminsize',
      'scriptsizemultiplier',
      'selection',
      'separator',
      'separators',
      'stretchy',
      'subscriptshift',
      'supscriptshift',
      'symmetric',
      'voffset',
      'width',
      'xmlns'
    ]),
    We = xe([
      'xlink:href',
      'xml:id',
      'xlink:title',
      'xml:space',
      'xmlns:xlink'
    ]),
    Ye = $(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
    Ge = $(/<%[\s\S]*|[\s\S]*%>/gm),
    Ve = $(/^data-[\-\w.\u00B7-\uFFFF]/),
    Xe = $(/^aria-[\-\w]+$/),
    Ke = $(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    Qe = $(/^(?:\w+script|data):/i),
    Je = $(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
    et =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          };
  function tt(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n;
    }
    return Array.from(e);
  }
  var nt = function() {
      return 'undefined' == typeof window ? null : window;
    },
    rt = function(e, t) {
      if (
        'object' !== (void 0 === e ? 'undefined' : et(e)) ||
        'function' != typeof e.createPolicy
      )
        return null;
      var n = null,
        r = 'data-tt-policy-suffix';
      t.currentScript &&
        t.currentScript.hasAttribute(r) &&
        (n = t.currentScript.getAttribute(r));
      var i = 'dompurify' + (n ? '#' + n : '');
      try {
        return e.createPolicy(i, {
          createHTML: function(e) {
            return e;
          }
        });
      } catch (e) {
        return (
          console.warn('TrustedTypes policy ' + i + ' could not be created.'),
          null
        );
      }
    };
  var P,
    D,
    j = (function t(e) {
      function d(e) {
        return t(e);
      }
      var c = 0 < arguments.length && void 0 !== e ? e : nt();
      if (
        ((d.version = '2.0.8'),
        (d.removed = []),
        !c || !c.document || 9 !== c.document.nodeType)
      )
        return (d.isSupported = !1), d;
      var u = c.document,
        o = !1,
        s = !1,
        l = c.document,
        p = c.DocumentFragment,
        n = c.HTMLTemplateElement,
        f = c.Node,
        r = c.NodeFilter,
        i = c.NamedNodeMap,
        a = void 0 === i ? c.NamedNodeMap || c.MozNamedAttrMap : i,
        h = c.Text,
        g = c.Comment,
        m = c.DOMParser,
        v = c.trustedTypes;
      if ('function' == typeof n) {
        var b = l.createElement('template');
        b.content && b.content.ownerDocument && (l = b.content.ownerDocument);
      }
      var y = rt(v, u),
        k = y ? y.createHTML('') : '',
        x = l,
        w = x.implementation,
        _ = x.createNodeIterator,
        S = x.getElementsByTagName,
        A = x.createDocumentFragment,
        T = u.importNode,
        E = {};
      d.isSupported =
        w && void 0 !== w.createHTMLDocument && 9 !== l.documentMode;
      function L(e) {
        (pe && pe === e) ||
          ((e && 'object' === (void 0 === e ? 'undefined' : et(e))) || (e = {}),
          (j = 'ALLOWED_TAGS' in e ? Ne({}, e.ALLOWED_TAGS) : H),
          (I = 'ALLOWED_ATTR' in e ? Ne({}, e.ALLOWED_ATTR) : q),
          (ce =
            'ADD_URI_SAFE_ATTR' in e ? Ne(Pe(ue), e.ADD_URI_SAFE_ATTR) : ue),
          (U = 'FORBID_TAGS' in e ? Ne({}, e.FORBID_TAGS) : {}),
          (B = 'FORBID_ATTR' in e ? Ne({}, e.FORBID_ATTR) : {}),
          (oe = 'USE_PROFILES' in e && e.USE_PROFILES),
          (Z = !1 !== e.ALLOW_ARIA_ATTR),
          (W = !1 !== e.ALLOW_DATA_ATTR),
          (Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (G = e.SAFE_FOR_JQUERY || !1),
          (V = e.SAFE_FOR_TEMPLATES || !1),
          (X = e.WHOLE_DOCUMENT || !1),
          (J = e.RETURN_DOM || !1),
          (ee = e.RETURN_DOM_FRAGMENT || !1),
          (te = e.RETURN_DOM_IMPORT || !1),
          (ne = e.RETURN_TRUSTED_TYPE || !1),
          (Q = e.FORCE_BODY || !1),
          (re = !1 !== e.SANITIZE_DOM),
          (ie = !1 !== e.KEEP_CONTENT),
          (ae = e.IN_PLACE || !1),
          (D = e.ALLOWED_URI_REGEXP || D),
          V && (W = !1),
          ee && (J = !0),
          oe &&
            ((j = Ne({}, [].concat(tt(qe)))),
            (I = []),
            !0 === oe.html && (Ne(j, De), Ne(I, Ue)),
            !0 === oe.svg && (Ne(j, je), Ne(I, Be), Ne(I, We)),
            !0 === oe.svgFilters && (Ne(j, He), Ne(I, Be), Ne(I, We)),
            !0 === oe.mathMl && (Ne(j, Ie), Ne(I, Ze), Ne(I, We))),
          e.ADD_TAGS && (j === H && (j = Pe(j)), Ne(j, e.ADD_TAGS)),
          e.ADD_ATTR && (I === q && (I = Pe(I)), Ne(I, e.ADD_ATTR)),
          e.ADD_URI_SAFE_ATTR && Ne(ce, e.ADD_URI_SAFE_ATTR),
          ie && (j['#text'] = !0),
          X && Ne(j, ['html', 'head', 'body']),
          j.table && (Ne(j, ['tbody']), delete U.tbody),
          xe && xe(e),
          (pe = e));
      }
      function R(t) {
        Te(d.removed, {element: t});
        try {
          t.parentNode.removeChild(t);
        } catch (e) {
          t.outerHTML = k;
        }
      }
      function C(e, t) {
        try {
          Te(d.removed, {attribute: t.getAttributeNode(e), from: t});
        } catch (e) {
          Te(d.removed, {attribute: null, from: t});
        }
        t.removeAttribute(e);
      }
      function $(e) {
        var t = void 0,
          n = void 0;
        if (Q) e = '<remove></remove>' + e;
        else {
          var r = Re(e, /^[\s]+/);
          n = r && r[0];
        }
        var i = y ? y.createHTML(e) : e;
        if (o)
          try {
            t = new m().parseFromString(i, 'text/html');
          } catch (e) {}
        if ((s && Ne(U, ['title']), !t || !t.documentElement)) {
          var a = (t = w.createHTMLDocument('')).body;
          a.parentNode.removeChild(a.parentNode.firstElementChild),
            (a.outerHTML = i);
        }
        return (
          e &&
            n &&
            t.body.insertBefore(
              l.createTextNode(n),
              t.body.childNodes[0] || null
            ),
          S.call(t, X ? 'html' : 'body')[0]
        );
      }
      var F = Ye,
        z = Ge,
        O = Ve,
        M = Xe,
        N = Qe,
        P = Je,
        D = Ke,
        j = null,
        H = Ne({}, [].concat(tt(De), tt(je), tt(He), tt(Ie), tt(qe))),
        I = null,
        q = Ne({}, [].concat(tt(Ue), tt(Be), tt(Ze), tt(We))),
        U = null,
        B = null,
        Z = !0,
        W = !0,
        Y = !1,
        G = !1,
        V = !1,
        X = !1,
        K = !1,
        Q = !1,
        J = !1,
        ee = !1,
        te = !1,
        ne = !1,
        re = !0,
        ie = !0,
        ae = !1,
        oe = {},
        se = Ne({}, [
          'annotation-xml',
          'audio',
          'colgroup',
          'desc',
          'foreignobject',
          'head',
          'iframe',
          'math',
          'mi',
          'mn',
          'mo',
          'ms',
          'mtext',
          'noembed',
          'noframes',
          'plaintext',
          'script',
          'style',
          'svg',
          'template',
          'thead',
          'title',
          'video',
          'xmp'
        ]),
        le = Ne({}, ['audio', 'video', 'img', 'source', 'image']),
        ce = null,
        ue = Ne({}, [
          'alt',
          'class',
          'for',
          'id',
          'label',
          'name',
          'pattern',
          'placeholder',
          'summary',
          'title',
          'value',
          'style',
          'xmlns'
        ]),
        pe = null,
        de = l.createElement('form');
      d.isSupported &&
        ((function() {
          try {
            $(
              '<svg><p><textarea><img src="</textarea><img src=x abc=1//">'
            ).querySelector('svg img') && (o = !0);
          } catch (e) {}
        })(),
        (function() {
          try {
            var e = $('<x/><title>&lt;/title&gt;&lt;img&gt;');
            ze(/<\/title/, e.querySelector('title').innerHTML) && (s = !0);
          } catch (e) {}
        })());
      function fe(e) {
        return _.call(
          e.ownerDocument || e,
          e,
          r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT,
          function() {
            return r.FILTER_ACCEPT;
          },
          !1
        );
      }
      function he(e) {
        return 'object' === (void 0 === f ? 'undefined' : et(f))
          ? e instanceof f
          : e &&
              'object' === (void 0 === e ? 'undefined' : et(e)) &&
              'number' == typeof e.nodeType &&
              'string' == typeof e.nodeName;
      }
      function ge(e, t, n) {
        E[e] &&
          we(E[e], function(e) {
            e.call(d, t, n, pe);
          });
      }
      function me(e) {
        var t = void 0;
        if (
          (ge('beforeSanitizeElements', e, null),
          (function(e) {
            return !(
              e instanceof h ||
              e instanceof g ||
              ('string' == typeof e.nodeName &&
                'string' == typeof e.textContent &&
                'function' == typeof e.removeChild &&
                e.attributes instanceof a &&
                'function' == typeof e.removeAttribute &&
                'function' == typeof e.setAttribute &&
                'string' == typeof e.namespaceURI)
            );
          })(e))
        )
          return R(e), !0;
        var n = Le(e.nodeName);
        if (
          (ge('uponSanitizeElement', e, {tagName: n, allowedTags: j}),
          ('svg' === n || 'math' === n) &&
            0 !== e.querySelectorAll('p, br').length)
        )
          return R(e), !0;
        if (j[n] && !U[n])
          return 'noscript' === n && ze(/<\/noscript/i, e.innerHTML)
            ? (R(e), !0)
            : 'noembed' === n && ze(/<\/noembed/i, e.innerHTML)
            ? (R(e), !0)
            : (!G ||
                e.firstElementChild ||
                (e.content && e.content.firstElementChild) ||
                !ze(/</g, e.textContent) ||
                (Te(d.removed, {element: e.cloneNode()}),
                e.innerHTML
                  ? (e.innerHTML = Ce(e.innerHTML, /</g, '&lt;'))
                  : (e.innerHTML = Ce(e.textContent, /</g, '&lt;'))),
              V &&
                3 === e.nodeType &&
                ((t = e.textContent),
                (t = Ce(t, F, ' ')),
                (t = Ce(t, z, ' ')),
                e.textContent !== t &&
                  (Te(d.removed, {element: e.cloneNode()}),
                  (e.textContent = t))),
              ge('afterSanitizeElements', e, null),
              !1);
        if (ie && !se[n] && 'function' == typeof e.insertAdjacentHTML)
          try {
            var r = e.innerHTML;
            e.insertAdjacentHTML('AfterEnd', y ? y.createHTML(r) : r);
          } catch (e) {}
        return R(e), !0;
      }
      function ve(e, t, n) {
        if (re && ('id' === t || 'name' === t) && (n in l || n in de))
          return !1;
        if (W && ze(O, t));
        else if (Z && ze(M, t));
        else {
          if (!I[t] || B[t]) return !1;
          if (ce[t]);
          else if (ze(D, Ce(n, P, '')));
          else if (
            ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
            'script' === e ||
            0 !== $e(n, 'data:') ||
            !le[e]
          )
            if (Y && !ze(N, Ce(n, P, '')));
            else if (n) return !1;
        }
        return !0;
      }
      function be(e) {
        var t = void 0,
          n = void 0,
          r = void 0,
          i = void 0,
          a = void 0;
        ge('beforeSanitizeAttributes', e, null);
        var o = e.attributes;
        if (o) {
          var s = {
            attrName: '',
            attrValue: '',
            keepAttr: !0,
            allowedAttributes: I
          };
          for (a = o.length; a--; ) {
            var l = (t = o[a]),
              c = l.name,
              u = l.namespaceURI;
            if (
              ((n = Fe(t.value)),
              (r = Le(c)),
              (s.attrName = r),
              (s.attrValue = n),
              (s.keepAttr = !0),
              (s.forceKeepAttr = void 0),
              ge('uponSanitizeAttribute', e, s),
              (n = s.attrValue),
              !s.forceKeepAttr)
            ) {
              if ('name' === r && 'IMG' === e.nodeName && o.id)
                (i = o.id),
                  (o = Ee(o, [])),
                  C('id', e),
                  C(c, e),
                  _e(o, i) > a && e.setAttribute('id', i.value);
              else {
                if (
                  'INPUT' === e.nodeName &&
                  'type' === r &&
                  'file' === n &&
                  s.keepAttr &&
                  (I[r] || !B[r])
                )
                  continue;
                'id' === c && e.setAttribute(c, ''), C(c, e);
              }
              if (s.keepAttr)
                if (G && ze(/\/>/i, n)) C(c, e);
                else if (
                  ze(/svg|math/i, e.namespaceURI) &&
                  ze(Oe('</(' + Se(ke(se), '|') + ')', 'i'), n)
                )
                  C(c, e);
                else {
                  V && ((n = Ce(n, F, ' ')), (n = Ce(n, z, ' ')));
                  var p = e.nodeName.toLowerCase();
                  if (ve(p, r, n))
                    try {
                      u ? e.setAttributeNS(u, c, n) : e.setAttribute(c, n),
                        Ae(d.removed);
                    } catch (e) {}
                }
            }
          }
          ge('afterSanitizeAttributes', e, null);
        }
      }
      function ye(e) {
        var t = void 0,
          n = fe(e);
        for (ge('beforeSanitizeShadowDOM', e, null); (t = n.nextNode()); )
          ge('uponSanitizeShadowNode', t, null),
            me(t) || (t.content instanceof p && ye(t.content), be(t));
        ge('afterSanitizeShadowDOM', e, null);
      }
      return (
        (d.sanitize = function(e, t) {
          var n = void 0,
            r = void 0,
            i = void 0,
            a = void 0,
            o = void 0;
          if ('string' != typeof (e = e || '\x3c!--\x3e') && !he(e)) {
            if ('function' != typeof e.toString)
              throw Me('toString is not a function');
            if ('string' != typeof (e = e.toString()))
              throw Me('dirty is not a string, aborting');
          }
          if (!d.isSupported) {
            if (
              'object' === et(c.toStaticHTML) ||
              'function' == typeof c.toStaticHTML
            ) {
              if ('string' == typeof e) return c.toStaticHTML(e);
              if (he(e)) return c.toStaticHTML(e.outerHTML);
            }
            return e;
          }
          if (
            (K || L(t), (d.removed = []), 'string' == typeof e && (ae = !1), ae)
          );
          else if (e instanceof f)
            1 ===
              (r = (n = $('\x3c!--\x3e')).ownerDocument.importNode(e, !0))
                .nodeType && 'BODY' === r.nodeName
              ? (n = r)
              : 'HTML' === r.nodeName
              ? (n = r)
              : n.appendChild(r);
          else {
            if (!J && !V && !X && ne && -1 === e.indexOf('<'))
              return y ? y.createHTML(e) : e;
            if (!(n = $(e))) return J ? null : k;
          }
          n && Q && R(n.firstChild);
          for (var s = fe(ae ? e : n); (i = s.nextNode()); )
            (3 === i.nodeType && i === a) ||
              me(i) ||
              (i.content instanceof p && ye(i.content), be(i), (a = i));
          if (((a = null), ae)) return e;
          if (J) {
            if (ee)
              for (o = A.call(n.ownerDocument); n.firstChild; )
                o.appendChild(n.firstChild);
            else o = n;
            return te && (o = T.call(u, o, !0)), o;
          }
          var l = X ? n.outerHTML : n.innerHTML;
          return (
            V && ((l = Ce(l, F, ' ')), (l = Ce(l, z, ' '))),
            y && ne ? y.createHTML(l) : l
          );
        }),
        (d.setConfig = function(e) {
          L(e), (K = !0);
        }),
        (d.clearConfig = function() {
          (pe = null), (K = !1);
        }),
        (d.isValidAttribute = function(e, t, n) {
          pe || L({});
          var r = Le(e),
            i = Le(t);
          return ve(r, i, n);
        }),
        (d.addHook = function(e, t) {
          'function' == typeof t && ((E[e] = E[e] || []), Te(E[e], t));
        }),
        (d.removeHook = function(e) {
          E[e] && Ae(E[e]);
        }),
        (d.removeHooks = function(e) {
          E[e] && (E[e] = []);
        }),
        (d.removeAllHooks = function() {
          E = {};
        }),
        d
      );
    })();
  function H(e) {
    var t,
      n = e.loaded,
      r = e.total,
      i = e.step;
    P ||
      (function() {
        var e = g('div');
        e.classList.add('progress'), o(v, e), (P = e);
      })(),
      (t = i
        ? 80 < (t = parseInt(P.style.width || 0, 10) + i)
          ? 80
          : t
        : Math.floor((n / r) * 100)),
      (P.style.opacity = 1),
      (P.style.width = 95 <= t ? '100%' : t + '%'),
      95 <= t &&
        (clearTimeout(D),
        (D = setTimeout(function(e) {
          (P.style.opacity = 0), (P.style.width = '0%');
        }, 200)));
  }
  var I = {};
  function q(a, e, t) {
    void 0 === e && (e = !1), void 0 === t && (t = {});
    function n() {
      o.addEventListener.apply(o, arguments);
    }
    var o = new XMLHttpRequest(),
      r = I[a];
    if (r)
      return {
        then: function(e) {
          return e(r.content, r.opt);
        },
        abort: p
      };
    for (var i in (o.open('GET', a), t))
      l.call(t, i) && o.setRequestHeader(i, t[i]);
    return (
      o.send(),
      {
        then: function(r, i) {
          if ((void 0 === i && (i = p), e)) {
            var t = setInterval(function(e) {
              return H({step: Math.floor(5 * Math.random() + 1)});
            }, 500);
            n('progress', H),
              n('loadend', function(e) {
                H(e), clearInterval(t);
              });
          }
          n('error', i),
            n('load', function(e) {
              var t = e.target;
              if (400 <= t.status) i(t);
              else {
                var n = (I[a] = {
                  content: t.response,
                  opt: {updatedAt: o.getResponseHeader('last-modified')}
                });
                r(n.content, n.opt);
              }
            });
        },
        abort: function(e) {
          return 4 !== o.readyState && o.abort();
        }
      }
    );
  }
  function U(e, t) {
    e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t);
  }
  function B(e, t, r, i) {
    void 0 === i && (i = p);
    var a = e._hooks[t],
      o = function(t) {
        var e = a[t];
        if (t >= a.length) i(r);
        else if ('function' == typeof e)
          if (2 === e.length)
            e(r, function(e) {
              (r = e), o(t + 1);
            });
          else {
            var n = e(r);
            (r = void 0 === n ? r : n), o(t + 1);
          }
        else o(t + 1);
      };
    o(0);
  }
  var Z = u.title;
  function W() {
    var e = m('section.cover');
    if (e) {
      var t = e.getBoundingClientRect().height;
      window.pageYOffset >= t || e.classList.contains('hidden')
        ? _(v, 'add', 'sticky')
        : _(v, 'remove', 'sticky');
    }
  }
  function Y(e, t, r, n) {
    var i = [];
    null != (t = m(t)) && (i = y(t, 'a'));
    var a,
      o = decodeURI(e.toURL(e.getCurrentPath()));
    return (
      i
        .sort(function(e, t) {
          return t.href.length - e.href.length;
        })
        .forEach(function(e) {
          var t = e.getAttribute('href'),
            n = r ? e.parentNode : e;
          (e.title = e.innerText),
            0 !== o.indexOf(t) || a
              ? _(n, 'remove', 'active')
              : ((a = e), _(n, 'add', 'active'));
        }),
      n && (u.title = a ? a.title || a.innerText + ' - ' + Z : Z),
      a
    );
  }
  var G = decodeURIComponent,
    V = encodeURIComponent;
  function X(e) {
    var n = {};
    return (
      (e = e.trim().replace(/^(\?|#|&)/, '')) &&
        e.split('&').forEach(function(e) {
          var t = e.replace(/\+/g, ' ').split('=');
          n[t[0]] = t[1] && G(t[1]);
        }),
      n
    );
  }
  function K(e, t) {
    void 0 === t && (t = []);
    var n = [];
    for (var r in e)
      -1 < t.indexOf(r) ||
        n.push(e[r] ? (V(r) + '=' + V(e[r])).toLowerCase() : V(r));
    return n.length ? '?' + n.join('&') : '';
  }
  var Q = s(function(e) {
      return /(:|(\/{2}))/g.test(e);
    }),
    J = s(function(e) {
      return e.split(/[?#]/)[0];
    }),
    ee = s(function(e) {
      if (/\/$/g.test(e)) return e;
      var t = e.match(/(\S*\/)[^/]+$/);
      return t ? t[1] : '';
    }),
    te = s(function(e) {
      return e.replace(/^\/+/, '/').replace(/([^:])\/{2,}/g, '$1/');
    }),
    ne = s(function(e) {
      for (
        var t = e.replace(/^\//, '').split('/'), n = [], r = 0, i = t.length;
        r < i;
        r++
      ) {
        var a = t[r];
        '..' === a ? n.pop() : '.' !== a && n.push(a);
      }
      return '/' + n.join('/');
    });
  function re() {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    return te(e.join('/'));
  }
  var ie = s(function(e) {
    return e.replace('#', '?id=');
  });
  function ae(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var oe =
    ((function(e, t, n) {
      return t && ae(e.prototype, t), n && ae(e, n), e;
    })(se, [
      {
        key: 'getIntermediateValue',
        value: function(e) {
          return this.decimal ? e : Math.round(e);
        }
      },
      {
        key: 'getFinalValue',
        value: function() {
          return this.end;
        }
      }
    ]),
    se);
  function se() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    !(function(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    })(this, se),
      (this.start = e.start),
      (this.end = e.end),
      (this.decimal = e.decimal);
  }
  function le(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var ce =
    ((function(e, t, n) {
      return t && le(e.prototype, t), n && le(e, n), e;
    })(ue, [
      {
        key: 'begin',
        value: function() {
          return (
            this.isRunning ||
              this.next === this.end ||
              (this.frame = window.requestAnimationFrame(
                this._tick.bind(this)
              )),
            this
          );
        }
      },
      {
        key: 'stop',
        value: function() {
          return (
            window.cancelAnimationFrame(this.frame),
            (this.isRunning = !1),
            (this.frame = null),
            (this.timeStart = null),
            (this.next = null),
            this
          );
        }
      },
      {
        key: 'on',
        value: function(e, t) {
          return (
            (this.events[e] = this.events[e] || []),
            this.events[e].push(t),
            this
          );
        }
      },
      {
        key: '_emit',
        value: function(e, t) {
          var n = this,
            r = this.events[e];
          r &&
            r.forEach(function(e) {
              return e.call(n, t);
            });
        }
      },
      {
        key: '_tick',
        value: function(e) {
          this.isRunning = !0;
          var t = this.next || this.start;
          this.timeStart || (this.timeStart = e),
            (this.timeElapsed = e - this.timeStart),
            (this.next = this.ease(
              this.timeElapsed,
              this.start,
              this.end - this.start,
              this.duration
            )),
            this._shouldTick(t)
              ? (this._emit(
                  'tick',
                  this.tweener.getIntermediateValue(this.next)
                ),
                (this.frame = window.requestAnimationFrame(
                  this._tick.bind(this)
                )))
              : (this._emit('tick', this.tweener.getFinalValue()),
                this._emit('done', null));
        }
      },
      {
        key: '_shouldTick',
        value: function(e) {
          return {
            up: this.next < this.end && e <= this.next,
            down: this.next > this.end && e >= this.next
          }[this.direction];
        }
      },
      {
        key: '_defaultEase',
        value: function(e, t, n, r) {
          return (e /= r / 2) < 1
            ? (n / 2) * e * e + t
            : (-n / 2) * (--e * (e - 2) - 1) + t;
        }
      }
    ]),
    ue);
  function ue() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    !(function(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    })(this, ue),
      (this.duration = e.duration || 1e3),
      (this.ease = e.easing || this._defaultEase),
      (this.tweener = e.tweener || new oe(e)),
      (this.start = this.tweener.start),
      (this.end = this.tweener.end),
      (this.frame = null),
      (this.next = null),
      (this.isRunning = !1),
      (this.events = {}),
      (this.direction = this.start < this.end ? 'up' : 'down');
  }
  var pe = {},
    de = !1,
    fe = null,
    he = !0,
    ge = 0;
  function me(e) {
    if (he) {
      for (
        var t,
          n = m('.sidebar'),
          r = y('.anchor'),
          i = b(n, '.sidebar-nav'),
          a = b(n, 'li.active'),
          o = document.documentElement,
          s = ((o && o.scrollTop) || document.body.scrollTop) - ge,
          l = 0,
          c = r.length;
        l < c;
        l += 1
      ) {
        var u = r[l];
        if (u.offsetTop > s) {
          t = t || u;
          break;
        }
        t = u;
      }
      if (t) {
        var p = pe[ve(e, t.getAttribute('data-id'))];
        if (
          p &&
          p !== a &&
          (a && a.classList.remove('active'),
          p.classList.add('active'),
          (a = p),
          !de && v.classList.contains('sticky'))
        ) {
          var d = n.clientHeight,
            f = a.offsetTop + a.clientHeight + 40,
            h = a.offsetTop >= i.scrollTop && f <= i.scrollTop + d,
            g = f - 0 < d;
          n.scrollTop = h ? i.scrollTop : g ? 0 : f - d;
        }
      }
    }
  }
  function ve(e, t) {
    return decodeURIComponent(e) + '?id=' + decodeURIComponent(t);
  }
  function be(e, t) {
    if (t) {
      var n = A().topMargin,
        r = b('#' + t);
      r &&
        (function(e, t) {
          void 0 === t && (t = 0),
            fe && fe.stop(),
            (he = !1),
            (fe = new ce({
              start: window.pageYOffset,
              end: e.getBoundingClientRect().top + window.pageYOffset - t,
              duration: 500
            })
              .on('tick', function(e) {
                return window.scrollTo(0, e);
              })
              .on('done', function() {
                (he = !0), (fe = null);
              })
              .begin());
        })(r, n);
      var i = pe[ve(e, t)],
        a = b(m('.sidebar'), 'li.active');
      a && a.classList.remove('active'), i && i.classList.add('active');
    }
  }
  var ye = u.scrollingElement || u.documentElement;
  var it =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function at(e, t) {
    return e((t = {exports: {}}), t.exports), t.exports;
  }
  function ot(e) {
    return dt[e];
  }
  var st = at(function(t) {
      function e() {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1
        };
      }
      t.exports = {
        defaults: {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1
        },
        getDefaults: e,
        changeDefaults: function(e) {
          t.exports.defaults = e;
        }
      };
    }),
    lt = (st.defaults, st.getDefaults, st.changeDefaults, /[&<>"']/),
    ct = /[&<>"']/g,
    ut = /[<>"']|&(?!#?\w+;)/,
    pt = /[<>"']|&(?!#?\w+;)/g,
    dt = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  var ft = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function ht(e) {
    return e.replace(ft, function(e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : '';
    });
  }
  var gt = /(^|[^\[])\^/g;
  var mt = /[^\w:]/g,
    vt = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  var bt = {},
    yt = /^[^:]+:\/*[^/]*$/,
    kt = /^([^:]+:)[\s\S]*$/,
    xt = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function wt(e, t) {
    bt[' ' + e] ||
      (yt.test(e) ? (bt[' ' + e] = e + '/') : (bt[' ' + e] = _t(e, '/', !0)));
    var n = -1 === (e = bt[' ' + e]).indexOf(':');
    return '//' === t.substring(0, 2)
      ? n
        ? t
        : e.replace(kt, '$1') + t
      : '/' === t.charAt(0)
      ? n
        ? t
        : e.replace(xt, '$1') + t
      : e + t;
  }
  function _t(e, t, n) {
    var r = e.length;
    if (0 === r) return '';
    for (var i = 0; i < r; ) {
      var a = e.charAt(r - i - 1);
      if (a !== t || n) {
        if (a === t || !n) break;
        i++;
      } else i++;
    }
    return e.substr(0, r - i);
  }
  var St = function(e, t) {
      if (t) {
        if (lt.test(e)) return e.replace(ct, ot);
      } else if (ut.test(e)) return e.replace(pt, ot);
      return e;
    },
    At = ht,
    Tt = function(n, e) {
      (n = n.source || n), (e = e || '');
      var r = {
        replace: function(e, t) {
          return (
            (t = (t = t.source || t).replace(gt, '$1')),
            (n = n.replace(e, t)),
            r
          );
        },
        getRegex: function() {
          return new RegExp(n, e);
        }
      };
      return r;
    },
    Et = function(e, t, n) {
      if (e) {
        var r;
        try {
          r = decodeURIComponent(ht(n))
            .replace(mt, '')
            .toLowerCase();
        } catch (e) {
          return null;
        }
        if (
          0 === r.indexOf('javascript:') ||
          0 === r.indexOf('vbscript:') ||
          0 === r.indexOf('data:')
        )
          return null;
      }
      t && !vt.test(n) && (n = wt(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, '%');
      } catch (e) {
        return null;
      }
      return n;
    },
    Lt = {exec: function() {}},
    Rt = function(e) {
      for (var t, n, r = arguments, i = 1; i < arguments.length; i++)
        for (n in (t = r[i]))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    },
    Ct = function(e, t) {
      var n = e
          .replace(/\|/g, function(e, t, n) {
            for (var r = !1, i = t; 0 <= --i && '\\' === n[i]; ) r = !r;
            return r ? '|' : ' |';
          })
          .split(/ \|/),
        r = 0;
      if (n.length > t) n.splice(t);
      else for (; n.length < t; ) n.push('');
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|');
      return n;
    },
    $t = _t,
    Ft = function(e, t) {
      if (-1 === e.indexOf(t[1])) return -1;
      for (var n = e.length, r = 0, i = 0; i < n; i++)
        if ('\\' === e[i]) i++;
        else if (e[i] === t[0]) r++;
        else if (e[i] === t[1] && --r < 0) return i;
      return -1;
    },
    zt = function(e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
        );
    },
    Ot = st.defaults,
    Mt = $t,
    Nt = Ct,
    Pt = St,
    Dt = Ft;
  function jt(e, t, n) {
    var r = t.href,
      i = t.title ? Pt(t.title) : null,
      a = e[1].replace(/\\([\[\]])/g, '$1');
    return '!' !== e[0].charAt(0)
      ? {type: 'link', raw: n, href: r, title: i, text: a}
      : {type: 'image', raw: n, href: r, title: i, text: Pt(a)};
  }
  var Ht = (function() {
      function e(e) {
        this.options = e || Ot;
      }
      return (
        (e.prototype.space = function(e) {
          var t = this.rules.block.newline.exec(e);
          if (t)
            return 1 < t[0].length ? {type: 'space', raw: t[0]} : {raw: '\n'};
        }),
        (e.prototype.code = function(e, t) {
          var n = this.rules.block.code.exec(e);
          if (n) {
            var r = t[t.length - 1];
            if (r && 'paragraph' === r.type)
              return {raw: n[0], text: n[0].trimRight()};
            var i = n[0].replace(/^ {4}/gm, '');
            return {
              type: 'code',
              raw: n[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? i : Mt(i, '\n')
            };
          }
        }),
        (e.prototype.fences = function(e) {
          var t = this.rules.block.fences.exec(e);
          if (t) {
            var n = t[0],
              r = (function(e, t) {
                var n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                var r = n[1];
                return t
                  .split('\n')
                  .map(function(e) {
                    var t = e.match(/^\s+/);
                    return null === t
                      ? e
                      : t[0].length >= r.length
                      ? e.slice(r.length)
                      : e;
                  })
                  .join('\n');
              })(n, t[3] || '');
            return {
              type: 'code',
              raw: n,
              lang: t[2] ? t[2].trim() : t[2],
              text: r
            };
          }
        }),
        (e.prototype.heading = function(e) {
          var t = this.rules.block.heading.exec(e);
          if (t)
            return {type: 'heading', raw: t[0], depth: t[1].length, text: t[2]};
        }),
        (e.prototype.nptable = function(e) {
          var t = this.rules.block.nptable.exec(e);
          if (t) {
            var n = {
              type: 'table',
              header: Nt(t[1].replace(/^ *| *\| *$/g, '')),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
              raw: t[0]
            };
            if (n.header.length === n.align.length) {
              var r,
                i = n.align.length;
              for (r = 0; r < i; r++)
                /^ *-+: *$/.test(n.align[r])
                  ? (n.align[r] = 'right')
                  : /^ *:-+: *$/.test(n.align[r])
                  ? (n.align[r] = 'center')
                  : /^ *:-+ *$/.test(n.align[r])
                  ? (n.align[r] = 'left')
                  : (n.align[r] = null);
              for (i = n.cells.length, r = 0; r < i; r++)
                n.cells[r] = Nt(n.cells[r], n.header.length);
              return n;
            }
          }
        }),
        (e.prototype.hr = function(e) {
          var t = this.rules.block.hr.exec(e);
          if (t) return {type: 'hr', raw: t[0]};
        }),
        (e.prototype.blockquote = function(e) {
          var t = this.rules.block.blockquote.exec(e);
          if (t) {
            var n = t[0].replace(/^ *> ?/gm, '');
            return {type: 'blockquote', raw: t[0], text: n};
          }
        }),
        (e.prototype.list = function(e) {
          var t = this.rules.block.list.exec(e);
          if (t) {
            for (
              var n,
                r,
                i,
                a,
                o,
                s,
                l,
                c = t[0],
                u = t[2],
                p = 1 < u.length,
                d = ')' === u[u.length - 1],
                f = {
                  type: 'list',
                  raw: c,
                  ordered: p,
                  start: p ? +u.slice(0, -1) : '',
                  loose: !1,
                  items: []
                },
                h = t[0].match(this.rules.block.item),
                g = !1,
                m = h.length,
                v = 0;
              v < m;
              v++
            )
              (r = (c = n = h[v]).length),
                ~(n = n.replace(/^ *([*+-]|\d+[.)]) */, '')).indexOf('\n ') &&
                  ((r -= n.length),
                  (n = this.options.pedantic
                    ? n.replace(/^ {1,4}/gm, '')
                    : n.replace(new RegExp('^ {1,' + r + '}', 'gm'), ''))),
                v !== m - 1 &&
                  ((i = this.rules.block.bullet.exec(h[v + 1])[0]),
                  (p
                    ? 1 === i.length || (!d && ')' === i[i.length - 1])
                    : 1 < i.length || (this.options.smartLists && i !== u)) &&
                    ((a = h.slice(v + 1).join('\n')),
                    (f.raw = f.raw.substring(0, f.raw.length - a.length)),
                    (v = m - 1))),
                (o = g || /\n\n(?!\s*$)/.test(n)),
                v !== m - 1 &&
                  ((g = '\n' === n.charAt(n.length - 1)), (o = o || g)),
                o && (f.loose = !0),
                (l = void 0),
                (s = /^\[[ xX]\] /.test(n)) &&
                  ((l = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, ''))),
                f.items.push({
                  type: 'list_item',
                  raw: c,
                  task: s,
                  checked: l,
                  loose: o,
                  text: n
                });
            return f;
          }
        }),
        (e.prototype.html = function(e) {
          var t = this.rules.block.html.exec(e);
          if (t)
            return {
              type: this.options.sanitize ? 'paragraph' : 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : Pt(t[0])
                : t[0]
            };
        }),
        (e.prototype.def = function(e) {
          var t = this.rules.block.def.exec(e);
          if (t)
            return (
              t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
              {
                tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                raw: t[0],
                href: t[2],
                title: t[3]
              }
            );
        }),
        (e.prototype.table = function(e) {
          var t = this.rules.block.table.exec(e);
          if (t) {
            var n = {
              type: 'table',
              header: Nt(t[1].replace(/^ *| *\| *$/g, '')),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : []
            };
            if (n.header.length === n.align.length) {
              n.raw = t[0];
              var r,
                i = n.align.length;
              for (r = 0; r < i; r++)
                /^ *-+: *$/.test(n.align[r])
                  ? (n.align[r] = 'right')
                  : /^ *:-+: *$/.test(n.align[r])
                  ? (n.align[r] = 'center')
                  : /^ *:-+ *$/.test(n.align[r])
                  ? (n.align[r] = 'left')
                  : (n.align[r] = null);
              for (i = n.cells.length, r = 0; r < i; r++)
                n.cells[r] = Nt(
                  n.cells[r].replace(/^ *\| *| *\| *$/g, ''),
                  n.header.length
                );
              return n;
            }
          }
        }),
        (e.prototype.lheading = function(e) {
          var t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1]
            };
        }),
        (e.prototype.paragraph = function(e) {
          var t = this.rules.block.paragraph.exec(e);
          if (t)
            return {
              type: 'paragraph',
              raw: t[0],
              text:
                '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
            };
        }),
        (e.prototype.text = function(e, t) {
          var n = this.rules.block.text.exec(e);
          if (n) {
            var r = t[t.length - 1];
            return r && 'text' === r.type
              ? {raw: n[0], text: n[0]}
              : {type: 'text', raw: n[0], text: n[0]};
          }
        }),
        (e.prototype.escape = function(e) {
          var t = this.rules.inline.escape.exec(e);
          if (t) return {type: 'escape', raw: t[0], text: Pt(t[1])};
        }),
        (e.prototype.tag = function(e, t, n) {
          var r = this.rules.inline.tag.exec(e);
          if (r)
            return (
              !t && /^<a /i.test(r[0])
                ? (t = !0)
                : t && /^<\/a>/i.test(r[0]) && (t = !1),
              !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                ? (n = !0)
                : n &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                  (n = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: r[0],
                inLink: t,
                inRawBlock: n,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(r[0])
                    : Pt(r[0])
                  : r[0]
              }
            );
        }),
        (e.prototype.link = function(e) {
          var t = this.rules.inline.link.exec(e);
          if (t) {
            var n = Dt(t[2], '()');
            if (-1 < n) {
              var r = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + n;
              (t[2] = t[2].substring(0, n)),
                (t[0] = t[0].substring(0, r).trim()),
                (t[3] = '');
            }
            var i = t[2],
              a = '';
            if (this.options.pedantic) {
              var o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
              a = o ? ((i = o[1]), o[3]) : '';
            } else a = t[3] ? t[3].slice(1, -1) : '';
            return jt(
              t,
              {
                href: (i = i.trim().replace(/^<([\s\S]*)>$/, '$1'))
                  ? i.replace(this.rules.inline._escapes, '$1')
                  : i,
                title: a ? a.replace(this.rules.inline._escapes, '$1') : a
              },
              t[0]
            );
          }
        }),
        (e.prototype.reflink = function(e, t) {
          var n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            var r = (n[2] || n[1]).replace(/\s+/g, ' ');
            if ((r = t[r.toLowerCase()]) && r.href) return jt(n, r, n[0]);
            var i = n[0].charAt(0);
            return {type: 'text', raw: i, text: i};
          }
        }),
        (e.prototype.strong = function(e, t, n) {
          void 0 === n && (n = '');
          var r = this.rules.inline.strong.start.exec(e);
          if (
            r &&
            (!r[1] ||
              (r[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
          ) {
            t = t.slice(-1 * e.length);
            var i,
              a =
                '**' === r[0]
                  ? this.rules.inline.strong.endAst
                  : this.rules.inline.strong.endUnd;
            for (a.lastIndex = 0; null != (r = a.exec(t)); )
              if (
                (i = this.rules.inline.strong.middle.exec(
                  t.slice(0, r.index + 3)
                ))
              )
                return {
                  type: 'strong',
                  raw: e.slice(0, i[0].length),
                  text: e.slice(2, i[0].length - 2)
                };
          }
        }),
        (e.prototype.em = function(e, t, n) {
          void 0 === n && (n = '');
          var r = this.rules.inline.em.start.exec(e);
          if (
            r &&
            (!r[1] ||
              (r[1] && ('' === n || this.rules.inline.punctuation.exec(n))))
          ) {
            t = t.slice(-1 * e.length);
            var i,
              a =
                '*' === r[0]
                  ? this.rules.inline.em.endAst
                  : this.rules.inline.em.endUnd;
            for (a.lastIndex = 0; null != (r = a.exec(t)); )
              if (
                (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2)))
              )
                return {
                  type: 'em',
                  raw: e.slice(0, i[0].length),
                  text: e.slice(1, i[0].length - 1)
                };
          }
        }),
        (e.prototype.codespan = function(e) {
          var t = this.rules.inline.code.exec(e);
          if (t) {
            var n = t[2].replace(/\n/g, ' '),
              r = /[^ ]/.test(n),
              i = n.startsWith(' ') && n.endsWith(' ');
            return (
              r && i && (n = n.substring(1, n.length - 1)),
              (n = Pt(n, !0)),
              {type: 'codespan', raw: t[0], text: n}
            );
          }
        }),
        (e.prototype.br = function(e) {
          var t = this.rules.inline.br.exec(e);
          if (t) return {type: 'br', raw: t[0]};
        }),
        (e.prototype.del = function(e) {
          var t = this.rules.inline.del.exec(e);
          if (t) return {type: 'del', raw: t[0], text: t[1]};
        }),
        (e.prototype.autolink = function(e, t) {
          var n,
            r,
            i = this.rules.inline.autolink.exec(e);
          if (i)
            return (
              (r =
                '@' === i[2]
                  ? 'mailto:' + (n = Pt(this.options.mangle ? t(i[1]) : i[1]))
                  : (n = Pt(i[1]))),
              {
                type: 'link',
                raw: i[0],
                text: n,
                href: r,
                tokens: [{type: 'text', raw: n, text: n}]
              }
            );
        }),
        (e.prototype.url = function(e, t) {
          var n;
          if ((n = this.rules.inline.url.exec(e))) {
            var r, i;
            if ('@' === n[2])
              i = 'mailto:' + (r = Pt(this.options.mangle ? t(n[0]) : n[0]));
            else {
              for (
                var a;
                (a = n[0]),
                  (n[0] = this.rules.inline._backpedal.exec(n[0])[0]),
                  a !== n[0];

              );
              (r = Pt(n[0])), (i = 'www.' === n[1] ? 'http://' + r : r);
            }
            return {
              type: 'link',
              raw: n[0],
              text: r,
              href: i,
              tokens: [{type: 'text', raw: r, text: r}]
            };
          }
        }),
        (e.prototype.inlineText = function(e, t, n) {
          var r,
            i = this.rules.inline.text.exec(e);
          if (i)
            return (
              (r = t
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(i[0])
                    : Pt(i[0])
                  : i[0]
                : Pt(this.options.smartypants ? n(i[0]) : i[0])),
              {type: 'text', raw: i[0], text: r}
            );
        }),
        e
      );
    })(),
    It = Lt,
    qt = Tt,
    Ut = Rt,
    Bt = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html:
        '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: It,
      table: It,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    };
  (Bt.def = qt(Bt.def)
    .replace('label', Bt._label)
    .replace('title', Bt._title)
    .getRegex()),
    (Bt.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (Bt.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
    (Bt.item = qt(Bt.item, 'gm')
      .replace(/bull/g, Bt.bullet)
      .getRegex()),
    (Bt.list = qt(Bt.list)
      .replace(/bull/g, Bt.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + Bt.def.source + ')')
      .getRegex()),
    (Bt._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (Bt._comment = /<!--(?!-?>)[\s\S]*?-->/),
    (Bt.html = qt(Bt.html, 'i')
      .replace('comment', Bt._comment)
      .replace('tag', Bt._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (Bt.paragraph = qt(Bt._paragraph)
      .replace('hr', Bt.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Bt._tag)
      .getRegex()),
    (Bt.blockquote = qt(Bt.blockquote)
      .replace('paragraph', Bt.paragraph)
      .getRegex()),
    (Bt.normal = Ut({}, Bt)),
    (Bt.gfm = Ut({}, Bt.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
    })),
    (Bt.gfm.nptable = qt(Bt.gfm.nptable)
      .replace('hr', Bt.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Bt._tag)
      .getRegex()),
    (Bt.gfm.table = qt(Bt.gfm.table)
      .replace('hr', Bt.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', Bt._tag)
      .getRegex()),
    (Bt.pedantic = Ut({}, Bt.normal, {
      html: qt(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', Bt._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: It,
      paragraph: qt(Bt.normal._paragraph)
        .replace('hr', Bt.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', Bt.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex()
    }));
  var Zt = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: It,
    tag:
      '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    strong: {
      start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
      middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
      endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,
      endUnd: /[^\s]__(?!_)(?:(?=[punctuation\s])|$)/
    },
    em: {
      start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
      middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
      endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,
      endUnd: /[^\s]_(?!_)(?:(?=[punctuation\s])|$)/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: It,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
    punctuation: /^([\s*punctuation])/,
    _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'
  };
  (Zt.punctuation = qt(Zt.punctuation)
    .replace(/punctuation/g, Zt._punctuation)
    .getRegex()),
    (Zt._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>'),
    (Zt._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*'),
    (Zt.em.start = qt(Zt.em.start)
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.em.middle = qt(Zt.em.middle)
      .replace(/punctuation/g, Zt._punctuation)
      .replace(/overlapSkip/g, Zt._overlapSkip)
      .getRegex()),
    (Zt.em.endAst = qt(Zt.em.endAst, 'g')
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.em.endUnd = qt(Zt.em.endUnd, 'g')
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.strong.start = qt(Zt.strong.start)
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.strong.middle = qt(Zt.strong.middle)
      .replace(/punctuation/g, Zt._punctuation)
      .replace(/blockSkip/g, Zt._blockSkip)
      .getRegex()),
    (Zt.strong.endAst = qt(Zt.strong.endAst, 'g')
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.strong.endUnd = qt(Zt.strong.endUnd, 'g')
      .replace(/punctuation/g, Zt._punctuation)
      .getRegex()),
    (Zt.blockSkip = qt(Zt._blockSkip, 'g').getRegex()),
    (Zt.overlapSkip = qt(Zt._overlapSkip, 'g').getRegex()),
    (Zt._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (Zt._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (Zt._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (Zt.autolink = qt(Zt.autolink)
      .replace('scheme', Zt._scheme)
      .replace('email', Zt._email)
      .getRegex()),
    (Zt._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (Zt.tag = qt(Zt.tag)
      .replace('comment', Bt._comment)
      .replace('attribute', Zt._attribute)
      .getRegex()),
    (Zt._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (Zt._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
    (Zt._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (Zt.link = qt(Zt.link)
      .replace('label', Zt._label)
      .replace('href', Zt._href)
      .replace('title', Zt._title)
      .getRegex()),
    (Zt.reflink = qt(Zt.reflink)
      .replace('label', Zt._label)
      .getRegex()),
    (Zt.reflinkSearch = qt(Zt.reflinkSearch, 'g')
      .replace('reflink', Zt.reflink)
      .replace('nolink', Zt.nolink)
      .getRegex()),
    (Zt.normal = Ut({}, Zt)),
    (Zt.pedantic = Ut({}, Zt.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
      },
      link: qt(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', Zt._label)
        .getRegex(),
      reflink: qt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', Zt._label)
        .getRegex()
    })),
    (Zt.gfm = Ut({}, Zt.normal, {
      escape: qt(Zt.escape)
        .replace('])', '~|])')
        .getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    })),
    (Zt.gfm.url = qt(Zt.gfm.url, 'i')
      .replace('email', Zt.gfm._extended_email)
      .getRegex()),
    (Zt.breaks = Ut({}, Zt.gfm, {
      br: qt(Zt.br)
        .replace('{2,}', '*')
        .getRegex(),
      text: qt(Zt.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex()
    }));
  var Wt = {block: Bt, inline: Zt},
    Yt = st.defaults,
    Gt = Wt.block,
    Vt = Wt.inline;
  function Xt(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function Kt(e) {
    var t,
      n,
      r = '',
      i = e.length;
    for (t = 0; t < i; t++)
      (n = e.charCodeAt(t)),
        0.5 < Math.random() && (n = 'x' + n.toString(16)),
        (r += '&#' + n + ';');
    return r;
  }
  var Qt = (function() {
      function n(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || Yt),
          (this.options.tokenizer = this.options.tokenizer || new Ht()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options);
        var t = {block: Gt.normal, inline: Vt.normal};
        this.options.pedantic
          ? ((t.block = Gt.pedantic), (t.inline = Vt.pedantic))
          : this.options.gfm &&
            ((t.block = Gt.gfm),
            this.options.breaks ? (t.inline = Vt.breaks) : (t.inline = Vt.gfm)),
          (this.tokenizer.rules = t);
      }
      var e = {rules: {configurable: !0}};
      return (
        (e.rules.get = function() {
          return {block: Gt, inline: Vt};
        }),
        (n.lex = function(e, t) {
          return new n(t).lex(e);
        }),
        (n.prototype.lex = function(e) {
          return (
            (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
            this.blockTokens(e, this.tokens, !0),
            this.inline(this.tokens),
            this.tokens
          );
        }),
        (n.prototype.blockTokens = function(e, t, n) {
          var r, i, a, o;
          for (
            void 0 === t && (t = []),
              void 0 === n && (n = !0),
              e = e.replace(/^ +$/gm, '');
            e;

          )
            if ((r = this.tokenizer.space(e)))
              (e = e.substring(r.raw.length)), r.type && t.push(r);
            else if ((r = this.tokenizer.code(e, t)))
              (e = e.substring(r.raw.length)),
                r.type
                  ? t.push(r)
                  : (((o = t[t.length - 1]).raw += '\n' + r.raw),
                    (o.text += '\n' + r.text));
            else if ((r = this.tokenizer.fences(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.heading(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.nptable(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.hr(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.blockquote(e)))
              (e = e.substring(r.raw.length)),
                (r.tokens = this.blockTokens(r.text, [], n)),
                t.push(r);
            else if ((r = this.tokenizer.list(e))) {
              for (
                e = e.substring(r.raw.length), a = r.items.length, i = 0;
                i < a;
                i++
              )
                r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
              t.push(r);
            } else if ((r = this.tokenizer.html(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if (n && (r = this.tokenizer.def(e)))
              (e = e.substring(r.raw.length)),
                this.tokens.links[r.tag] ||
                  (this.tokens.links[r.tag] = {href: r.href, title: r.title});
            else if ((r = this.tokenizer.table(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.lheading(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if (n && (r = this.tokenizer.paragraph(e)))
              (e = e.substring(r.raw.length)), t.push(r);
            else if ((r = this.tokenizer.text(e, t)))
              (e = e.substring(r.raw.length)),
                r.type
                  ? t.push(r)
                  : (((o = t[t.length - 1]).raw += '\n' + r.raw),
                    (o.text += '\n' + r.text));
            else if (e) {
              var s = 'Infinite loop on byte: ' + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(s);
                break;
              }
              throw new Error(s);
            }
          return t;
        }),
        (n.prototype.inline = function(e) {
          var t,
            n,
            r,
            i,
            a,
            o,
            s = e.length;
          for (t = 0; t < s; t++)
            switch ((o = e[t]).type) {
              case 'paragraph':
              case 'text':
              case 'heading':
                (o.tokens = []), this.inlineTokens(o.text, o.tokens);
                break;
              case 'table':
                for (
                  o.tokens = {header: [], cells: []},
                    i = o.header.length,
                    n = 0;
                  n < i;
                  n++
                )
                  (o.tokens.header[n] = []),
                    this.inlineTokens(o.header[n], o.tokens.header[n]);
                for (i = o.cells.length, n = 0; n < i; n++)
                  for (
                    a = o.cells[n], o.tokens.cells[n] = [], r = 0;
                    r < a.length;
                    r++
                  )
                    (o.tokens.cells[n][r] = []),
                      this.inlineTokens(a[r], o.tokens.cells[n][r]);
                break;
              case 'blockquote':
                this.inline(o.tokens);
                break;
              case 'list':
                for (i = o.items.length, n = 0; n < i; n++)
                  this.inline(o.items[n].tokens);
            }
          return e;
        }),
        (n.prototype.inlineTokens = function(e, t, n, r, i) {
          var a;
          void 0 === t && (t = []),
            void 0 === n && (n = !1),
            void 0 === r && (r = !1),
            void 0 === i && (i = '');
          var o,
            s = e;
          if (this.tokens.links) {
            var l = Object.keys(this.tokens.links);
            if (0 < l.length)
              for (
                ;
                null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(s));

              )
                l.includes(o[0].slice(o[0].lastIndexOf('[') + 1, -1)) &&
                  (s =
                    s.slice(0, o.index) +
                    '[' +
                    'a'.repeat(o[0].length - 2) +
                    ']' +
                    s.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(s)); )
            s =
              s.slice(0, o.index) +
              '[' +
              'a'.repeat(o[0].length - 2) +
              ']' +
              s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (; e; )
            if ((a = this.tokenizer.escape(e)))
              (e = e.substring(a.raw.length)), t.push(a);
            else if ((a = this.tokenizer.tag(e, n, r)))
              (e = e.substring(a.raw.length)),
                (n = a.inLink),
                (r = a.inRawBlock),
                t.push(a);
            else if ((a = this.tokenizer.link(e)))
              (e = e.substring(a.raw.length)),
                'link' === a.type &&
                  (a.tokens = this.inlineTokens(a.text, [], !0, r)),
                t.push(a);
            else if ((a = this.tokenizer.reflink(e, this.tokens.links)))
              (e = e.substring(a.raw.length)),
                'link' === a.type &&
                  (a.tokens = this.inlineTokens(a.text, [], !0, r)),
                t.push(a);
            else if ((a = this.tokenizer.strong(e, s, i)))
              (e = e.substring(a.raw.length)),
                (a.tokens = this.inlineTokens(a.text, [], n, r)),
                t.push(a);
            else if ((a = this.tokenizer.em(e, s, i)))
              (e = e.substring(a.raw.length)),
                (a.tokens = this.inlineTokens(a.text, [], n, r)),
                t.push(a);
            else if ((a = this.tokenizer.codespan(e)))
              (e = e.substring(a.raw.length)), t.push(a);
            else if ((a = this.tokenizer.br(e)))
              (e = e.substring(a.raw.length)), t.push(a);
            else if ((a = this.tokenizer.del(e)))
              (e = e.substring(a.raw.length)),
                (a.tokens = this.inlineTokens(a.text, [], n, r)),
                t.push(a);
            else if ((a = this.tokenizer.autolink(e, Kt)))
              (e = e.substring(a.raw.length)), t.push(a);
            else if (n || !(a = this.tokenizer.url(e, Kt))) {
              if ((a = this.tokenizer.inlineText(e, r, Xt)))
                (e = e.substring(a.raw.length)),
                  (i = a.raw.slice(-1)),
                  t.push(a);
              else if (e) {
                var c = 'Infinite loop on byte: ' + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(c);
                  break;
                }
                throw new Error(c);
              }
            } else (e = e.substring(a.raw.length)), t.push(a);
          return t;
        }),
        Object.defineProperties(n, e),
        n
      );
    })(),
    Jt = st.defaults,
    en = Et,
    tn = St,
    nn = (function() {
      function e(e) {
        this.options = e || Jt;
      }
      return (
        (e.prototype.code = function(e, t, n) {
          var r = (t || '').match(/\S*/)[0];
          if (this.options.highlight) {
            var i = this.options.highlight(e, r);
            null != i && i !== e && ((n = !0), (e = i));
          }
          return r
            ? '<pre><code class="' +
                this.options.langPrefix +
                tn(r, !0) +
                '">' +
                (n ? e : tn(e, !0)) +
                '</code></pre>\n'
            : '<pre><code>' + (n ? e : tn(e, !0)) + '</code></pre>\n';
        }),
        (e.prototype.blockquote = function(e) {
          return '<blockquote>\n' + e + '</blockquote>\n';
        }),
        (e.prototype.html = function(e) {
          return e;
        }),
        (e.prototype.heading = function(e, t, n, r) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                this.options.headerPrefix +
                r.slug(n) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n';
        }),
        (e.prototype.hr = function() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }),
        (e.prototype.list = function(e, t, n) {
          var r = t ? 'ol' : 'ul';
          return (
            '<' +
            r +
            (t && 1 !== n ? ' start="' + n + '"' : '') +
            '>\n' +
            e +
            '</' +
            r +
            '>\n'
          );
        }),
        (e.prototype.listitem = function(e) {
          return '<li>' + e + '</li>\n';
        }),
        (e.prototype.checkbox = function(e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }),
        (e.prototype.paragraph = function(e) {
          return '<p>' + e + '</p>\n';
        }),
        (e.prototype.table = function(e, t) {
          return (
            '<table>\n<thead>\n' +
            e +
            '</thead>\n' +
            (t = t && '<tbody>' + t + '</tbody>') +
            '</table>\n'
          );
        }),
        (e.prototype.tablerow = function(e) {
          return '<tr>\n' + e + '</tr>\n';
        }),
        (e.prototype.tablecell = function(e, t) {
          var n = t.header ? 'th' : 'td';
          return (
            (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
            e +
            '</' +
            n +
            '>\n'
          );
        }),
        (e.prototype.strong = function(e) {
          return '<strong>' + e + '</strong>';
        }),
        (e.prototype.em = function(e) {
          return '<em>' + e + '</em>';
        }),
        (e.prototype.codespan = function(e) {
          return '<code>' + e + '</code>';
        }),
        (e.prototype.br = function() {
          return this.options.xhtml ? '<br/>' : '<br>';
        }),
        (e.prototype.del = function(e) {
          return '<del>' + e + '</del>';
        }),
        (e.prototype.link = function(e, t, n) {
          if (null === (e = en(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<a href="' + tn(e) + '"';
          return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>');
        }),
        (e.prototype.image = function(e, t, n) {
          if (null === (e = en(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<img src="' + e + '" alt="' + n + '"';
          return (
            t && (r += ' title="' + t + '"'),
            (r += this.options.xhtml ? '/>' : '>')
          );
        }),
        (e.prototype.text = function(e) {
          return e;
        }),
        e
      );
    })(),
    rn = (function() {
      function e() {}
      return (
        (e.prototype.strong = function(e) {
          return e;
        }),
        (e.prototype.em = function(e) {
          return e;
        }),
        (e.prototype.codespan = function(e) {
          return e;
        }),
        (e.prototype.del = function(e) {
          return e;
        }),
        (e.prototype.html = function(e) {
          return e;
        }),
        (e.prototype.text = function(e) {
          return e;
        }),
        (e.prototype.link = function(e, t, n) {
          return '' + n;
        }),
        (e.prototype.image = function(e, t, n) {
          return '' + n;
        }),
        (e.prototype.br = function() {
          return '';
        }),
        e
      );
    })(),
    an = (function() {
      function e() {
        this.seen = {};
      }
      return (
        (e.prototype.slug = function(e) {
          var t = e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
          if (this.seen.hasOwnProperty(t))
            for (
              var n = t;
              this.seen[n]++,
                (t = n + '-' + this.seen[n]),
                this.seen.hasOwnProperty(t);

            );
          return (this.seen[t] = 0), t;
        }),
        e
      );
    })(),
    on = st.defaults,
    sn = At,
    ln = (function() {
      function n(e) {
        (this.options = e || on),
          (this.options.renderer = this.options.renderer || new nn()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new rn()),
          (this.slugger = new an());
      }
      return (
        (n.parse = function(e, t) {
          return new n(t).parse(e);
        }),
        (n.prototype.parse = function(e, t) {
          void 0 === t && (t = !0);
          var n,
            r,
            i,
            a,
            o,
            s,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            g,
            m,
            v,
            b,
            y,
            k = '',
            x = e.length;
          for (n = 0; n < x; n++)
            switch ((p = e[n]).type) {
              case 'space':
                continue;
              case 'hr':
                k += this.renderer.hr();
                continue;
              case 'heading':
                k += this.renderer.heading(
                  this.parseInline(p.tokens),
                  p.depth,
                  sn(this.parseInline(p.tokens, this.textRenderer)),
                  this.slugger
                );
                continue;
              case 'code':
                k += this.renderer.code(p.text, p.lang, p.escaped);
                continue;
              case 'table':
                for (l = c = '', a = p.header.length, r = 0; r < a; r++)
                  l += this.renderer.tablecell(
                    this.parseInline(p.tokens.header[r]),
                    {header: !0, align: p.align[r]}
                  );
                for (
                  c += this.renderer.tablerow(l),
                    u = '',
                    a = p.cells.length,
                    r = 0;
                  r < a;
                  r++
                ) {
                  for (
                    l = '', o = (s = p.tokens.cells[r]).length, i = 0;
                    i < o;
                    i++
                  )
                    l += this.renderer.tablecell(this.parseInline(s[i]), {
                      header: !1,
                      align: p.align[i]
                    });
                  u += this.renderer.tablerow(l);
                }
                k += this.renderer.table(c, u);
                continue;
              case 'blockquote':
                (u = this.parse(p.tokens)), (k += this.renderer.blockquote(u));
                continue;
              case 'list':
                for (
                  d = p.ordered,
                    f = p.start,
                    h = p.loose,
                    a = p.items.length,
                    u = '',
                    r = 0;
                  r < a;
                  r++
                )
                  (v = (m = p.items[r]).checked),
                    (b = m.task),
                    (g = ''),
                    m.task &&
                      ((y = this.renderer.checkbox(v)),
                      h
                        ? 0 < m.tokens.length && 'text' === m.tokens[0].type
                          ? ((m.tokens[0].text = y + ' ' + m.tokens[0].text),
                            m.tokens[0].tokens &&
                              0 < m.tokens[0].tokens.length &&
                              'text' === m.tokens[0].tokens[0].type &&
                              (m.tokens[0].tokens[0].text =
                                y + ' ' + m.tokens[0].tokens[0].text))
                          : m.tokens.unshift({type: 'text', text: y})
                        : (g += y)),
                    (g += this.parse(m.tokens, h)),
                    (u += this.renderer.listitem(g, b, v));
                k += this.renderer.list(u, d, f);
                continue;
              case 'html':
                k += this.renderer.html(p.text);
                continue;
              case 'paragraph':
                k += this.renderer.paragraph(this.parseInline(p.tokens));
                continue;
              case 'text':
                for (
                  u = p.tokens ? this.parseInline(p.tokens) : p.text;
                  n + 1 < x && 'text' === e[n + 1].type;

                )
                  u +=
                    '\n' +
                    ((p = e[++n]).tokens ? this.parseInline(p.tokens) : p.text);
                k += t ? this.renderer.paragraph(u) : u;
                continue;
              default:
                var w = 'Token with "' + p.type + '" type was not found.';
                if (this.options.silent) return void console.error(w);
                throw new Error(w);
            }
          return k;
        }),
        (n.prototype.parseInline = function(e, t) {
          t = t || this.renderer;
          var n,
            r,
            i = '',
            a = e.length;
          for (n = 0; n < a; n++)
            switch ((r = e[n]).type) {
              case 'escape':
                i += t.text(r.text);
                break;
              case 'html':
                i += t.html(r.text);
                break;
              case 'link':
                i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                break;
              case 'image':
                i += t.image(r.href, r.title, r.text);
                break;
              case 'strong':
                i += t.strong(this.parseInline(r.tokens, t));
                break;
              case 'em':
                i += t.em(this.parseInline(r.tokens, t));
                break;
              case 'codespan':
                i += t.codespan(r.text);
                break;
              case 'br':
                i += t.br();
                break;
              case 'del':
                i += t.del(this.parseInline(r.tokens, t));
                break;
              case 'text':
                i += t.text(r.text);
                break;
              default:
                var o = 'Token with "' + r.type + '" type was not found.';
                if (this.options.silent) return void console.error(o);
                throw new Error(o);
            }
          return i;
        }),
        n
      );
    })(),
    cn = Rt,
    un = zt,
    pn = St,
    dn = st.getDefaults,
    fn = st.changeDefaults,
    hn = st.defaults;
  function gn(e, n, r) {
    if (null == e)
      throw new Error('marked(): input parameter is undefined or null');
    if ('string' != typeof e)
      throw new Error(
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call(e) +
          ', string expected'
      );
    if (
      ('function' == typeof n && ((r = n), (n = null)),
      (n = cn({}, gn.defaults, n || {})),
      un(n),
      r)
    ) {
      var i,
        a = n.highlight;
      try {
        i = Qt.lex(e, n);
      } catch (e) {
        return r(e);
      }
      function o(t) {
        var e;
        if (!t)
          try {
            e = ln.parse(i, n);
          } catch (e) {
            t = e;
          }
        return (n.highlight = a), t ? r(t) : r(null, e);
      }
      if (!a || a.length < 3) return o();
      if ((delete n.highlight, !i.length)) return o();
      var s = 0;
      return (
        gn.walkTokens(i, function(n) {
          'code' === n.type &&
            (s++,
            setTimeout(function() {
              a(n.text, n.lang, function(e, t) {
                if (e) return o(e);
                null != t && t !== n.text && ((n.text = t), (n.escaped = !0)),
                  0 === --s && o();
              });
            }, 0));
        }),
        void (0 === s && o())
      );
    }
    try {
      var t = Qt.lex(e, n);
      return n.walkTokens && gn.walkTokens(t, n.walkTokens), ln.parse(t, n);
    } catch (e) {
      if (
        ((e.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        n.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + pn(e.message + '', !0) + '</pre>'
        );
      throw e;
    }
  }
  (gn.options = gn.setOptions = function(e) {
    return cn(gn.defaults, e), fn(gn.defaults), gn;
  }),
    (gn.getDefaults = dn),
    (gn.defaults = hn),
    (gn.use = function(a) {
      var e = cn({}, a);
      if (a.renderer) {
        function t(r) {
          var i = o[r];
          o[r] = function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = a.renderer[r].apply(o, e);
            return !1 === n && (n = i.apply(o, e)), n;
          };
        }
        var o = gn.defaults.renderer || new nn();
        for (var n in a.renderer) t(n);
        e.renderer = o;
      }
      if (a.tokenizer) {
        function r(e) {
          var r = i[s];
          i[s] = function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var n = a.tokenizer[s].apply(i, e);
            return !1 === n && (n = r.apply(i, e)), n;
          };
        }
        var i = gn.defaults.tokenizer || new Ht();
        for (var s in a.tokenizer) r();
        e.tokenizer = i;
      }
      if (a.walkTokens) {
        var l = gn.defaults.walkTokens;
        e.walkTokens = function(e) {
          a.walkTokens(e), l && l(e);
        };
      }
      gn.setOptions(e);
    }),
    (gn.walkTokens = function(e, t) {
      for (var n = 0, r = e; n < r.length; n += 1) {
        var i = r[n];
        switch ((t(i), i.type)) {
          case 'table':
            for (var a = 0, o = i.tokens.header; a < o.length; a += 1) {
              var s = o[a];
              gn.walkTokens(s, t);
            }
            for (var l = 0, c = i.tokens.cells; l < c.length; l += 1)
              for (var u = 0, p = c[l]; u < p.length; u += 1) {
                var d = p[u];
                gn.walkTokens(d, t);
              }
            break;
          case 'list':
            gn.walkTokens(i.items, t);
            break;
          default:
            i.tokens && gn.walkTokens(i.tokens, t);
        }
      }
    }),
    (gn.Parser = ln),
    (gn.parser = ln.parse),
    (gn.Renderer = nn),
    (gn.TextRenderer = rn),
    (gn.Lexer = Qt),
    (gn.lexer = Qt.lex),
    (gn.Tokenizer = Ht),
    (gn.Slugger = an);
  var mn = (gn.parse = gn);
  function vn(e, t) {
    if (
      (void 0 === t && (t = '<ul class="app-sub-sidebar">{inner}</ul>'),
      !e || !e.length)
    )
      return '';
    var n = '';
    return (
      e.forEach(function(e) {
        (n +=
          '<li><a class="section-link" href="' +
          e.slug +
          '" title="' +
          e.title +
          '">' +
          e.title +
          '</a></li>'),
          e.children && (n += vn(e.children, t));
      }),
      t.replace('{inner}', n)
    );
  }
  function bn(e, t) {
    return '<p class="' + e + '">' + t.slice(5).trim() + '</p>';
  }
  function yn(e, r) {
    var i = [],
      a = {};
    return (
      e.forEach(function(e) {
        var t = e.level || 1,
          n = t - 1;
        r < t ||
          (a[n] ? (a[n].children = (a[n].children || []).concat(e)) : i.push(e),
          (a[t] = e));
      }),
      i
    );
  }
  var kn = {},
    xn = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  function wn(e) {
    return e.toLowerCase();
  }
  function _n(e) {
    if ('string' != typeof e) return '';
    var t = e
        .trim()
        .replace(/[A-Z]+/g, wn)
        .replace(/<[^>\d]+>/g, '')
        .replace(xn, '')
        .replace(/\s/g, '-')
        .replace(/-+/g, '-')
        .replace(/^(\d)/, '_$1'),
      n = kn[t];
    return (n = l.call(kn, t) ? n + 1 : 0), (kn[t] = n) && (t = t + '-' + n), t;
  }
  function Sn(e, t) {
    return (
      '<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/' +
      t +
      '.png" alt="' +
      t +
      '" />'
    );
  }
  function An(e) {
    void 0 === e && (e = '');
    var r = {};
    return {
      str: (e =
        e &&
        e
          .replace(/^'/, '')
          .replace(/'$/, '')
          .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function(e, t, n) {
            return -1 === t.indexOf(':')
              ? ((r[t] = (n && n.replace(/&quot;/g, '')) || !0), '')
              : e;
          })
          .trim()),
      config: r
    };
  }
  _n.clear = function() {
    kn = {};
  };
  var Tn,
    En = at(function(e) {
      var a = (function(c) {
        var u = /\blang(?:uage)?-([\w-]+)\b/i,
          t = 0,
          z = {
            manual: c.Prism && c.Prism.manual,
            disableWorkerMessageHandler:
              c.Prism && c.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof O
                  ? new O(t.type, e(t.content), t.alias)
                  : Array.isArray(t)
                  ? t.map(e)
                  : t
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function(e) {
                return (
                  e.__id || Object.defineProperty(e, '__id', {value: ++t}),
                  e.__id
                );
              },
              clone: function n(e, r) {
                var i, t;
                switch (((r = r || {}), z.util.type(e))) {
                  case 'Object':
                    if (((t = z.util.objId(e)), r[t])) return r[t];
                    for (var a in ((i = {}), (r[t] = i), e))
                      e.hasOwnProperty(a) && (i[a] = n(e[a], r));
                    return i;
                  case 'Array':
                    return (
                      (t = z.util.objId(e)),
                      r[t]
                        ? r[t]
                        : ((i = []),
                          (r[t] = i),
                          e.forEach(function(e, t) {
                            i[t] = n(e, r);
                          }),
                          i)
                    );
                  default:
                    return e;
                }
              },
              getLanguage: function(e) {
                for (; e && !u.test(e.className); ) e = e.parentElement;
                return e
                  ? (e.className.match(u) || [, 'none'])[1].toLowerCase()
                  : 'none';
              },
              currentScript: function() {
                if ('undefined' == typeof document) return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (e) {
                  var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) ||
                    [])[1];
                  if (t) {
                    var n = document.getElementsByTagName('script');
                    for (var r in n) if (n[r].src == t) return n[r];
                  }
                  return null;
                }
              },
              isActive: function(e, t, n) {
                for (var r = 'no-' + t; e; ) {
                  var i = e.classList;
                  if (i.contains(t)) return !0;
                  if (i.contains(r)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              }
            },
            languages: {
              extend: function(e, t) {
                var n = z.util.clone(z.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function(n, e, t, r) {
                var i = (r = r || z.languages)[n],
                  a = {};
                for (var o in i)
                  if (i.hasOwnProperty(o)) {
                    if (o == e)
                      for (var s in t) t.hasOwnProperty(s) && (a[s] = t[s]);
                    t.hasOwnProperty(o) || (a[o] = i[o]);
                  }
                var l = r[n];
                return (
                  (r[n] = a),
                  z.languages.DFS(z.languages, function(e, t) {
                    t === l && e != n && (this[e] = a);
                  }),
                  a
                );
              },
              DFS: function e(t, n, r, i) {
                i = i || {};
                var a = z.util.objId;
                for (var o in t)
                  if (t.hasOwnProperty(o)) {
                    n.call(t, o, t[o], r || o);
                    var s = t[o],
                      l = z.util.type(s);
                    'Object' !== l || i[a(s)]
                      ? 'Array' !== l ||
                        i[a(s)] ||
                        ((i[a(s)] = !0), e(s, n, o, i))
                      : ((i[a(s)] = !0), e(s, n, null, i));
                  }
              }
            },
            plugins: {},
            highlightAll: function(e, t) {
              z.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function(e, t, n) {
              var r = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              };
              z.hooks.run('before-highlightall', r),
                (r.elements = Array.prototype.slice.apply(
                  r.container.querySelectorAll(r.selector)
                )),
                z.hooks.run('before-all-elements-highlight', r);
              for (var i, a = 0; (i = r.elements[a++]); )
                z.highlightElement(i, !0 === t, r.callback);
            },
            highlightElement: function(e, t, n) {
              var r = z.util.getLanguage(e),
                i = z.languages[r];
              e.className =
                e.className.replace(u, '').replace(/\s+/g, ' ') +
                ' language-' +
                r;
              var a = e.parentElement;
              a &&
                'pre' === a.nodeName.toLowerCase() &&
                (a.className =
                  a.className.replace(u, '').replace(/\s+/g, ' ') +
                  ' language-' +
                  r);
              var o = {
                element: e,
                language: r,
                grammar: i,
                code: e.textContent
              };
              function s(e) {
                (o.highlightedCode = e),
                  z.hooks.run('before-insert', o),
                  (o.element.innerHTML = o.highlightedCode),
                  z.hooks.run('after-highlight', o),
                  z.hooks.run('complete', o),
                  n && n.call(o.element);
              }
              if ((z.hooks.run('before-sanity-check', o), !o.code))
                return (
                  z.hooks.run('complete', o), void (n && n.call(o.element))
                );
              if ((z.hooks.run('before-highlight', o), o.grammar))
                if (t && c.Worker) {
                  var l = new Worker(z.filename);
                  (l.onmessage = function(e) {
                    s(e.data);
                  }),
                    l.postMessage(
                      JSON.stringify({
                        language: o.language,
                        code: o.code,
                        immediateClose: !0
                      })
                    );
                } else s(z.highlight(o.code, o.grammar, o.language));
              else s(z.util.encode(o.code));
            },
            highlight: function(e, t, n) {
              var r = {code: e, grammar: t, language: n};
              return (
                z.hooks.run('before-tokenize', r),
                (r.tokens = z.tokenize(r.code, r.grammar)),
                z.hooks.run('after-tokenize', r),
                O.stringify(z.util.encode(r.tokens), r.language)
              );
            },
            tokenize: function(e, t) {
              var n = t.rest;
              if (n) {
                for (var r in n) t[r] = n[r];
                delete t.rest;
              }
              var i = new a();
              return (
                M(i, i.head, e),
                (function e(t, n, r, i, a, o) {
                  for (var s in r)
                    if (r.hasOwnProperty(s) && r[s]) {
                      var l = r[s];
                      l = Array.isArray(l) ? l : [l];
                      for (var c = 0; c < l.length; ++c) {
                        if (o && o.cause == s + ',' + c) return;
                        var u = l[c],
                          p = u.inside,
                          d = !!u.lookbehind,
                          f = !!u.greedy,
                          h = 0,
                          g = u.alias;
                        if (f && !u.pattern.global) {
                          var m = u.pattern.toString().match(/[imsuy]*$/)[0];
                          u.pattern = RegExp(u.pattern.source, m + 'g');
                        }
                        for (
                          var v = u.pattern || u, b = i.next, y = a;
                          b !== n.tail && !(o && y >= o.reach);
                          y += b.value.length, b = b.next
                        ) {
                          var k = b.value;
                          if (n.length > t.length) return;
                          if (!(k instanceof O)) {
                            var x = 1;
                            if (f && b != n.tail.prev) {
                              v.lastIndex = y;
                              var w = v.exec(t);
                              if (!w) break;
                              var _ = w.index + (d && w[1] ? w[1].length : 0),
                                S = w.index + w[0].length,
                                A = y;
                              for (A += b.value.length; A <= _; )
                                (b = b.next), (A += b.value.length);
                              if (
                                ((A -= b.value.length),
                                (y = A),
                                b.value instanceof O)
                              )
                                continue;
                              for (
                                var T = b;
                                T !== n.tail &&
                                (A < S || 'string' == typeof T.value);
                                T = T.next
                              )
                                x++, (A += T.value.length);
                              x--, (k = t.slice(y, A)), (w.index -= y);
                            } else {
                              v.lastIndex = 0;
                              var w = v.exec(k);
                            }
                            if (w) {
                              d && (h = w[1] ? w[1].length : 0);
                              var _ = w.index + h,
                                E = w[0].slice(h),
                                S = _ + E.length,
                                L = k.slice(0, _),
                                R = k.slice(S),
                                C = y + k.length;
                              o && C > o.reach && (o.reach = C);
                              var $ = b.prev;
                              L && (($ = M(n, $, L)), (y += L.length)),
                                N(n, $, x);
                              var F = new O(s, p ? z.tokenize(E, p) : E, g, E);
                              (b = M(n, $, F)),
                                R && M(n, b, R),
                                1 < x &&
                                  e(t, n, r, b.prev, y, {
                                    cause: s + ',' + c,
                                    reach: C
                                  });
                            }
                          }
                        }
                      }
                    }
                })(e, i, t, i.head, 0),
                (function(e) {
                  var t = [],
                    n = e.head.next;
                  for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                  return t;
                })(i)
              );
            },
            hooks: {
              all: {},
              add: function(e, t) {
                var n = z.hooks.all;
                (n[e] = n[e] || []), n[e].push(t);
              },
              run: function(e, t) {
                var n = z.hooks.all[e];
                if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
              }
            },
            Token: O
          };
        function O(e, t, n, r) {
          (this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (r || '').length);
        }
        function a() {
          var e = {value: null, prev: null, next: null},
            t = {value: null, prev: e, next: null};
          (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
        }
        function M(e, t, n) {
          var r = t.next,
            i = {value: n, prev: t, next: r};
          return (t.next = i), (r.prev = i), e.length++, i;
        }
        function N(e, t, n) {
          for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
          ((t.next = r).prev = t), (e.length -= i);
        }
        if (
          ((c.Prism = z),
          (O.stringify = function t(e, n) {
            if ('string' == typeof e) return e;
            if (Array.isArray(e)) {
              var r = '';
              return (
                e.forEach(function(e) {
                  r += t(e, n);
                }),
                r
              );
            }
            var i = {
                type: e.type,
                content: t(e.content, n),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: n
              },
              a = e.alias;
            a &&
              (Array.isArray(a)
                ? Array.prototype.push.apply(i.classes, a)
                : i.classes.push(a)),
              z.hooks.run('wrap', i);
            var o = '';
            for (var s in i.attributes)
              o +=
                ' ' +
                s +
                '="' +
                (i.attributes[s] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              i.tag +
              ' class="' +
              i.classes.join(' ') +
              '"' +
              o +
              '>' +
              i.content +
              '</' +
              i.tag +
              '>'
            );
          }),
          !c.document)
        )
          return (
            c.addEventListener &&
              (z.disableWorkerMessageHandler ||
                c.addEventListener(
                  'message',
                  function(e) {
                    var t = JSON.parse(e.data),
                      n = t.language,
                      r = t.code,
                      i = t.immediateClose;
                    c.postMessage(z.highlight(r, z.languages[n], n)),
                      i && c.close();
                  },
                  !1
                )),
            z
          );
        var e = z.util.currentScript();
        function n() {
          z.manual || z.highlightAll();
        }
        if (
          (e &&
            ((z.filename = e.src),
            e.hasAttribute('data-manual') && (z.manual = !0)),
          !z.manual)
        ) {
          var r = document.readyState;
          'loading' === r || ('interactive' === r && e && e.defer)
            ? document.addEventListener('DOMContentLoaded', n)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(n)
            : window.setTimeout(n, 16);
        }
        return z;
      })(
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      );
      e.exports && (e.exports = a),
        void 0 !== it && (it.Prism = a),
        (a.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
              },
              'string': {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
              'punctuation': /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/,
              'name': /[^\s<>'"]+/
            }
          },
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}
              },
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{pattern: /^=/, alias: 'attr-equals'}, /"|'/]
                }
              },
              'punctuation': /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {namespace: /^[^\s>\/:]+:/}
              }
            }
          },
          entity: [
            {pattern: /&[\da-z]{1,8};/i, alias: 'named-entity'},
            /&#x?[\da-f]{1,8};/i
          ]
        }),
        (a.languages.markup.tag.inside['attr-value'].inside.entity =
          a.languages.markup.entity),
        (a.languages.markup.doctype.inside['internal-subset'].inside =
          a.languages.markup),
        a.hooks.add('wrap', function(e) {
          'entity' === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(a.languages.markup.tag, 'addInlined', {
          value: function(e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: a.languages[t]
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n
              }
            };
            r['language-' + t] = {pattern: /[\s\S]+/, inside: a.languages[t]};
            var i = {};
            (i[e] = {
              pattern: RegExp(
                /(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function() {
                    return e;
                  }
                ),
                'i'
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r
            }),
              a.languages.insertBefore('markup', 'cdata', i);
          }
        }),
        (a.languages.html = a.languages.markup),
        (a.languages.mathml = a.languages.markup),
        (a.languages.svg = a.languages.markup),
        (a.languages.xml = a.languages.extend('markup', {})),
        (a.languages.ssml = a.languages.xml),
        (a.languages.atom = a.languages.xml),
        (a.languages.rss = a.languages.xml),
        (function(e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
              inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector'
                },
                'keyword': {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0
                }
              }
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  t.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {pattern: RegExp('^' + t.source + '$'), alias: 'url'}
              }
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)'
            ),
            string: {pattern: t, greedy: !0},
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    'attr-name': {pattern: /^\s*style/i, inside: n.tag.inside},
                    'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': {pattern: /.+/i, inside: e.languages.css}
                  },
                  alias: 'language-css'
                }
              },
              n.tag
            ));
        })(a),
        (a.languages.clike = {
          'comment': [
            {pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0},
            {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}
          ],
          'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
          },
          'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {punctuation: /[.\\]/}
          },
          'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          'boolean': /\b(?:true|false)\b/,
          'function': /\w+(?=\()/,
          'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          'punctuation': /[{}[\];(),.:]/
        }),
        (a.languages.javascript = a.languages.extend('clike', {
          'class-name': [
            a.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0
            }
          ],
          'keyword': [
            {pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0},
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0
            }
          ],
          'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        })),
        (a.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        a.languages.insertBefore('javascript', 'keyword', {
          'regex': {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0
          },
          'function-variable': {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function'
          },
          'parameter': [
            {
              pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: a.languages.javascript
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: a.languages.javascript
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: a.languages.javascript
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: a.languages.javascript
            }
          ],
          'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }),
        a.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
              'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation'
                  },
                  'rest': a.languages.javascript
                }
              },
              'string': /[\s\S]+/
            }
          }
        }),
        a.languages.markup &&
          a.languages.markup.tag.addInlined('script', 'javascript'),
        (a.languages.js = a.languages.javascript),
        (function() {
          if ('undefined' != typeof self && self.Prism && self.document) {
            var l = window.Prism,
              c = {
                js: 'javascript',
                py: 'python',
                rb: 'ruby',
                ps1: 'powershell',
                psm1: 'powershell',
                sh: 'bash',
                bat: 'batch',
                h: 'c',
                tex: 'latex'
              },
              u = 'data-src-status',
              p = 'loading',
              d =
                'pre[data-src]:not([' +
                u +
                '="loaded"]):not([' +
                u +
                '="' +
                p +
                '"])',
              r = /\blang(?:uage)?-([\w-]+)\b/i;
            l.hooks.add('before-highlightall', function(e) {
              e.selector += ', ' + d;
            }),
              l.hooks.add('before-sanity-check', function(e) {
                var t = e.element;
                if (t.matches(d)) {
                  (e.code = ''), t.setAttribute(u, p);
                  var n = t.appendChild(document.createElement('CODE'));
                  n.textContent = 'Loading…';
                  var r = t.getAttribute('data-src'),
                    i = e.language;
                  if ('none' === i) {
                    var a = (/\.(\w+)$/.exec(r) || [, 'none'])[1];
                    i = c[a] || a;
                  }
                  f(n, i), f(t, i);
                  var o = l.plugins.autoloader;
                  o && o.loadLanguages(i);
                  var s = new XMLHttpRequest();
                  s.open('GET', r, !0),
                    (s.onreadystatechange = function() {
                      4 == s.readyState &&
                        (s.status < 400 && s.responseText
                          ? (t.setAttribute(u, 'loaded'),
                            (n.textContent = s.responseText),
                            l.highlightElement(n))
                          : (t.setAttribute(u, 'failed'),
                            400 <= s.status
                              ? (n.textContent = (function(e, t) {
                                  return (
                                    '✖ Error ' +
                                    e +
                                    ' while fetching file: ' +
                                    t
                                  );
                                })(s.status, s.statusText))
                              : (n.textContent =
                                  '✖ Error: File does not exist or is empty')));
                    }),
                    s.send(null);
                }
              });
            var e = !(l.plugins.fileHighlight = {
              highlight: function(e) {
                for (
                  var t, n = (e || document).querySelectorAll(d), r = 0;
                  (t = n[r++]);

                )
                  l.highlightElement(t);
              }
            });
            l.fileHighlight = function() {
              e ||
                (console.warn(
                  'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
                ),
                (e = !0)),
                l.plugins.fileHighlight.highlight.apply(this, arguments);
            };
          }
          function f(e, t) {
            var n = e.className;
            (n = n.replace(r, ' ') + ' language-' + t),
              (e.className = n.replace(/\s+/g, ' ').trim());
          }
        })();
    });
  function Ln(e, t) {
    return '___' + e.toUpperCase() + t + '___';
  }
  (Tn = Prism),
    Object.defineProperties((Tn.languages['markup-templating'] = {}), {
      buildPlaceholders: {
        value: function(r, i, e, a) {
          if (r.language === i) {
            var o = (r.tokenStack = []);
            (r.code = r.code.replace(e, function(e) {
              if ('function' == typeof a && !a(e)) return e;
              for (var t, n = o.length; -1 !== r.code.indexOf((t = Ln(i, n))); )
                ++n;
              return (o[n] = e), t;
            })),
              (r.grammar = Tn.languages.markup);
          }
        }
      },
      tokenizePlaceholders: {
        value: function(f, h) {
          if (f.language === h && f.tokenStack) {
            f.grammar = Tn.languages[h];
            var g = 0,
              m = Object.keys(f.tokenStack);
            !(function e(t) {
              for (var n = 0; n < t.length && !(g >= m.length); n++) {
                var r = t[n];
                if (
                  'string' == typeof r ||
                  (r.content && 'string' == typeof r.content)
                ) {
                  var i = m[g],
                    a = f.tokenStack[i],
                    o = 'string' == typeof r ? r : r.content,
                    s = Ln(h, i),
                    l = o.indexOf(s);
                  if (-1 < l) {
                    ++g;
                    var c = o.substring(0, l),
                      u = new Tn.Token(
                        h,
                        Tn.tokenize(a, f.grammar),
                        'language-' + h,
                        a
                      ),
                      p = o.substring(l + s.length),
                      d = [];
                    c && d.push.apply(d, e([c])),
                      d.push(u),
                      p && d.push.apply(d, e([p])),
                      'string' == typeof r
                        ? t.splice.apply(t, [n, 1].concat(d))
                        : (r.content = d);
                  }
                } else r.content && e(r.content);
              }
              return t;
            })(f.tokens);
          }
        }
      }
    });
  var Rn = {},
    Cn = {
      markdown: function(e) {
        return {url: e};
      },
      mermaid: function(e) {
        return {url: e};
      },
      iframe: function(e, t) {
        return {
          html:
            '<iframe src="' +
            e +
            '" ' +
            (t || 'width=100% height=400') +
            '></iframe>'
        };
      },
      video: function(e, t) {
        return {
          html:
            '<video src="' +
            e +
            '" ' +
            (t || 'controls') +
            '>Not Support</video>'
        };
      },
      audio: function(e, t) {
        return {
          html:
            '<audio src="' +
            e +
            '" ' +
            (t || 'controls') +
            '>Not Support</audio>'
        };
      },
      code: function(e, t) {
        var n = e.match(/\.(\w+)$/);
        return (
          'md' === (n = t || (n && n[1])) && (n = 'markdown'), {url: e, lang: n}
        );
      }
    },
    $n = function(i, e) {
      var a = this;
      (this.config = i),
        (this.router = e),
        (this.cacheTree = {}),
        (this.toc = []),
        (this.cacheTOC = {}),
        (this.linkTarget = i.externalLinkTarget || '_blank'),
        (this.linkRel =
          '_blank' === this.linkTarget ? i.externalLinkRel || 'noopener' : ''),
        (this.contentBase = e.getBasePath());
      var o,
        t = this._initRenderer();
      this.heading = t.heading;
      var n = i.markdown || {};
      (o = r(n)
        ? n(mn, t)
        : (mn.setOptions(f(n, {renderer: f(t, n.renderer)})), mn)),
        (this._marked = o),
        (this.compile = function(n) {
          var r = !0,
            e = s(function(e) {
              r = !1;
              var t = '';
              return n
                ? ((t = c(n) ? o(n) : o.parser(n)),
                  (t = i.noEmoji
                    ? t
                    : (function(e) {
                        return e
                          .replace(/:\+1:/g, ':thumbsup:')
                          .replace(/:-1:/g, ':thumbsdown:')
                          .replace(
                            /<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,
                            function(e) {
                              return e.replace(/:/g, '__colon__');
                            }
                          )
                          .replace(/:(\w+?):/gi, window.emojify || Sn)
                          .replace(/__colon__/g, ':');
                      })(t)),
                  _n.clear(),
                  t)
                : n;
            })(n),
            t = a.router.parse().file;
          return (
            r ? (a.toc = a.cacheTOC[t]) : (a.cacheTOC[t] = [].concat(a.toc)), e
          );
        });
    };
  ($n.prototype.compileEmbed = function(e, t) {
    var n,
      r = An(t),
      i = r.str,
      a = r.config;
    if (((t = i), a.include)) {
      var o;
      if (
        (Q(e) ||
          (e = re(this.contentBase, ee(this.router.getCurrentPath()), e)),
        a.type && (o = Cn[a.type]))
      )
        (n = o.call(this, e, t)).type = a.type;
      else {
        var s = 'code';
        /\.(md|markdown)/.test(e)
          ? (s = 'markdown')
          : /\.mmd/.test(e)
          ? (s = 'mermaid')
          : /\.html?/.test(e)
          ? (s = 'iframe')
          : /\.(mp4|ogg)/.test(e)
          ? (s = 'video')
          : /\.mp3/.test(e) && (s = 'audio'),
          ((n = Cn[s].call(this, e, t)).type = s);
      }
      return (n.fragment = a.fragment), n;
    }
  }),
    ($n.prototype._matchNotCompileLink = function(e) {
      for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
        var r = t[n];
        if ((Rn[r] || (Rn[r] = new RegExp('^' + r + '$'))).test(e)) return e;
      }
    }),
    ($n.prototype._initRenderer = function() {
      var e = new mn.Renderer(),
        t = this.linkTarget,
        n = this.linkRel,
        l = this.router,
        r = this.contentBase,
        c = this,
        i = {};
      return (
        (i.heading = e.heading = function(e, t) {
          var n = An(e),
            r = n.str,
            i = n.config,
            a = {level: t, title: r};
          /<!-- {docsify-ignore} -->/g.test(r) &&
            ((r = r.replace('\x3c!-- {docsify-ignore} --\x3e', '')),
            (a.title = r),
            (a.ignoreSubHeading = !0)),
            /{docsify-ignore}/g.test(r) &&
              ((r = r.replace('{docsify-ignore}', '')),
              (a.title = r),
              (a.ignoreSubHeading = !0)),
            /<!-- {docsify-ignore-all} -->/g.test(r) &&
              ((r = r.replace('\x3c!-- {docsify-ignore-all} --\x3e', '')),
              (a.title = r),
              (a.ignoreAllSubs = !0)),
            /{docsify-ignore-all}/g.test(r) &&
              ((r = r.replace('{docsify-ignore-all}', '')),
              (a.title = r),
              (a.ignoreAllSubs = !0));
          var o = _n(i.id || r),
            s = l.toURL(l.getCurrentPath(), {id: o});
          return (
            (a.slug = s),
            c.toc.push(a),
            '<h' +
              t +
              ' id="' +
              o +
              '"><a href="' +
              s +
              '" data-id="' +
              o +
              '" class="anchor"><span>' +
              r +
              '</span></a></h' +
              t +
              '>'
          );
        }),
        (i.code = (function(e) {
          return (e.renderer.code = function(e, t) {
            void 0 === t && (t = '');
            var n = En.languages[t] || En.languages.markup;
            return (
              '<pre v-pre data-lang="' +
              t +
              '"><code class="lang-' +
              t +
              '">' +
              En.highlight(e.replace(/@DOCSIFY_QM@/g, '`'), n) +
              '</code></pre>'
            );
          });
        })({renderer: e})),
        (i.link = (function(e) {
          var t = e.renderer,
            s = e.router,
            l = e.linkTarget,
            c = e.linkRel,
            u = e.compilerClass;
          return (t.link = function(e, t, n) {
            void 0 === t && (t = '');
            var r = [],
              i = An(t),
              a = i.str,
              o = i.config;
            return (
              (l = o.target || l),
              (c =
                '_blank' === l ? u.config.externalLinkRel || 'noopener' : ''),
              (t = a),
              Q(e) || u._matchNotCompileLink(e) || o.ignore
                ? (!Q(e) &&
                    e.startsWith('./') &&
                    (e =
                      document.URL.replace(/\/(?!.*\/).*/, '/').replace(
                        '#/./',
                        ''
                      ) + e),
                  r.push(
                    0 === e.indexOf('mailto:') ? '' : 'target="' + l + '"'
                  ),
                  r.push(
                    0 === e.indexOf('mailto:')
                      ? ''
                      : '' !== c
                      ? ' rel="' + c + '"'
                      : ''
                  ))
                : (e === u.config.homepage && (e = 'README'),
                  (e = s.toURL(e, null, s.getCurrentPath()))),
              o.crossorgin &&
                '_self' === l &&
                'history' === u.config.routerMode &&
                -1 === u.config.crossOriginLinks.indexOf(e) &&
                u.config.crossOriginLinks.push(e),
              o.disabled && (r.push('disabled'), (e = 'javascript:void(0)')),
              o.class && r.push('class="' + o.class + '"'),
              o.id && r.push('id="' + o.id + '"'),
              t && r.push('title="' + t + '"'),
              '<a href="' + e + '" ' + r.join(' ') + '>' + n + '</a>'
            );
          });
        })({
          renderer: e,
          router: l,
          linkTarget: t,
          linkRel: n,
          compilerClass: c
        })),
        (i.paragraph = (function(e) {
          return (e.renderer.paragraph = function(e) {
            return /^!&gt;/.test(e)
              ? bn('tip', e)
              : /^\?&gt;/.test(e)
              ? bn('warn', e)
              : '<p>' + e + '</p>';
          });
        })({renderer: e})),
        (i.image = (function(e) {
          var t = e.renderer,
            p = e.contentBase,
            d = e.router;
          return (t.image = function(e, t, n) {
            var r = e,
              i = [],
              a = An(t),
              o = a.str,
              s = a.config;
            if (
              ((t = o),
              s['no-zoom'] && i.push('data-no-zoom'),
              t && i.push('title="' + t + '"'),
              s.size)
            ) {
              var l = s.size.split('x'),
                c = l[0],
                u = l[1];
              u
                ? i.push('width="' + c + '" height="' + u + '"')
                : i.push('width="' + c + '"');
            }
            return (
              s.class && i.push('class="' + s.class + '"'),
              s.id && i.push('id="' + s.id + '"'),
              Q(e) || (r = re(p, ee(d.getCurrentPath()), e)),
              0 < i.length
                ? '<img src="' +
                  r +
                  '" data-origin="' +
                  e +
                  '" alt="' +
                  n +
                  '" ' +
                  i.join(' ') +
                  ' />'
                : '<img src="' +
                  r +
                  '" data-origin="' +
                  e +
                  '" alt="' +
                  n +
                  '"' +
                  i +
                  '>'
            );
          });
        })({renderer: e, contentBase: r, router: l})),
        (i.list = (function(e) {
          return (e.renderer.list = function(e, t, n) {
            var r = t ? 'ol' : 'ul';
            return (
              '<' +
              r +
              ' ' +
              [
                /<li class="task-list-item">/.test(
                  e.split('class="task-list"')[0]
                )
                  ? 'class="task-list"'
                  : '',
                n && 1 < n ? 'start="' + n + '"' : ''
              ]
                .join(' ')
                .trim() +
              '>' +
              e +
              '</' +
              r +
              '>'
            );
          });
        })({renderer: e})),
        (i.listitem = (function(e) {
          return (e.renderer.listitem = function(e) {
            return /^(<input.*type="checkbox"[^>]*>)/.test(e)
              ? '<li class="task-list-item"><label>' + e + '</label></li>'
              : '<li>' + e + '</li>';
          });
        })({renderer: e})),
        (e.origin = i),
        e
      );
    }),
    ($n.prototype.sidebar = function(e, t) {
      var n = this.toc,
        r = this.router.getCurrentPath(),
        i = '';
      if (e) i = this.compile(e);
      else {
        for (var a = 0; a < n.length; a++)
          if (n[a].ignoreSubHeading) {
            var o = n[a].level;
            n.splice(a, 1);
            for (var s = a; o < n[s].level && s < n.length; s++)
              n.splice(s, 1) && s-- && a++;
            a--;
          }
        var l = this.cacheTree[r] || yn(n, t);
        (i = vn(l, '<ul>{inner}</ul>')), (this.cacheTree[r] = l);
      }
      return i;
    }),
    ($n.prototype.subSidebar = function(e) {
      if (e) {
        var t = this.router.getCurrentPath(),
          n = this.cacheTree,
          r = this.toc;
        r[0] && r[0].ignoreAllSubs && r.splice(0),
          r[0] && 1 === r[0].level && r.shift();
        for (var i = 0; i < r.length; i++)
          r[i].ignoreSubHeading && r.splice(i, 1) && i--;
        var a = n[t] || yn(r, e);
        return (n[t] = a), (this.toc = []), vn(a);
      }
      this.toc = [];
    }),
    ($n.prototype.header = function(e, t) {
      return this.heading(e, t);
    }),
    ($n.prototype.article = function(e) {
      return this.compile(e);
    }),
    ($n.prototype.cover = function(e) {
      var t = this.toc.slice(),
        n = this.compile(e);
      return (this.toc = t.slice()), n;
    });
  var Fn = function(e) {
      var t = (function(e) {
        var t = e.match(/^[ \t]*(?=\S)/gm);
        return t
          ? Math.min.apply(
              Math,
              t.map(function(e) {
                return e.length;
              })
            )
          : 0;
      })(e);
      if (0 === t) return e;
      var n = new RegExp('^[ \\t]{' + t + '}', 'gm');
      return e.replace(n, '');
    },
    zn = {};
  function On(e, i) {
    var o = e.compiler,
      a = e.raw;
    void 0 === a && (a = '');
    var t = e.fetch,
      n = zn[a];
    if (n) {
      var r = n.slice();
      return (r.links = n.links), i(r);
    }
    var s = o._marked,
      l = s.lexer(a),
      c = [],
      u = s.Lexer.rules.inline.link,
      p = l.links;
    l.forEach(function(e, a) {
      'paragraph' === e.type &&
        (e.text = e.text.replace(new RegExp(u.source, 'g'), function(
          e,
          t,
          n,
          r
        ) {
          var i = o.compileEmbed(n, r);
          return i && c.push({index: a, embed: i}), e;
        }));
    });
    var d = [];
    !(function(e, o) {
      var t,
        n = e.embedTokens,
        s = e.compile,
        l = (e.fetch, 0),
        c = 1;
      if (!n.length) return o({});
      for (; (t = n[l++]); ) {
        var r = (function(a) {
          return function(e) {
            var t;
            if (e)
              if ('markdown' === a.embed.type) {
                var n = a.embed.url.split('/');
                n.pop(),
                  (n = n.join('/')),
                  (e = e.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, function(e) {
                    var t = e.indexOf('(');
                    return e.substring(t).startsWith('(.')
                      ? e.substring(0, t) +
                          '(' +
                          window.location.protocol +
                          '//' +
                          window.location.host +
                          n +
                          '/' +
                          e.substring(t + 1, e.length - 1) +
                          ')'
                      : e;
                  })),
                  !0 === (($docsify.frontMatter || {}).installed || !1) &&
                    (e = $docsify.frontMatter.parseMarkdown(e)),
                  (t = s.lexer(e));
              } else if ('code' === a.embed.type) {
                if (a.embed.fragment) {
                  var r = a.embed.fragment,
                    i = new RegExp(
                      '(?:###|\\/\\/\\/)\\s*\\[' +
                        r +
                        '\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[' +
                        r +
                        '\\]'
                    );
                  e = Fn((e.match(i) || [])[1] || '').trim();
                }
                t = s.lexer(
                  '```' +
                    a.embed.lang +
                    '\n' +
                    e.replace(/`/g, '@DOCSIFY_QM@') +
                    '\n```\n'
                );
              } else
                'mermaid' === a.embed.type
                  ? ((t = [
                      {
                        type: 'html',
                        text: '<div class="mermaid">\n' + e + '\n</div>'
                      }
                    ]).links = {})
                  : ((t = [{type: 'html', text: e}]).links = {});
            o({token: a, embedToken: t}), ++c >= l && o({});
          };
        })(t);
        t.embed.url ? q(t.embed.url).then(r) : r(t.embed.html);
      }
    })({compile: s, embedTokens: c, fetch: t}, function(e) {
      var t = e.embedToken,
        n = e.token;
      if (n) {
        var r = n.index;
        d.forEach(function(e) {
          r > e.start && (r += e.length);
        }),
          f(p, t.links),
          (l = l.slice(0, r).concat(t, l.slice(r + 1))),
          d.push({start: r, length: t.length - 1});
      } else (zn[a] = l.concat()), (l.links = zn[a].links = p), i(l);
    });
  }
  function Mn() {
    var e = y('.markdown-section>script').filter(function(e) {
      return !/template/.test(e.type);
    })[0];
    if (!e) return !1;
    var t = e.innerText.trim();
    if (!t) return !1;
    setTimeout(function(e) {
      window.__EXECUTE_RESULT__ = new Function(t)();
    }, 0);
  }
  function Nn(e, t, n) {
    return (
      (t =
        'function' == typeof n
          ? n(t)
          : 'string' == typeof n
          ? (function(r, i) {
              var a = [],
                o = 0;
              return (
                r.replace(T, function(t, e, n) {
                  a.push(r.substring(o, n - 1)),
                    (o = n += t.length + 1),
                    a.push(
                      (i && i[t]) ||
                        function(e) {
                          return (
                            '00' +
                            ('string' == typeof E[t] ? e[E[t]]() : E[t](e))
                          ).slice(-t.length);
                        }
                    );
                }),
                o !== r.length && a.push(r.substring(o)),
                function(e) {
                  for (
                    var t = '', n = 0, r = e || new Date();
                    n < a.length;
                    n++
                  )
                    t += 'string' == typeof a[n] ? a[n] : a[n](r);
                  return t;
                }
              );
            })(n)(new Date(t))
          : t),
      e.replace(/{docsify-updated}/g, t)
    );
  }
  function Pn(e) {
    (e = e || '<h1>404 - Not found</h1>'),
      this._renderTo('.markdown-section', e),
      this.config.loadSidebar || this._renderSidebar(),
      !1 === this.config.executeScript || void 0 === window.Vue || Mn()
        ? this.config.executeScript && Mn()
        : setTimeout(function(e) {
            var t = window.__EXECUTE_RESULT__;
            t && t.$destroy && t.$destroy(),
              (window.__EXECUTE_RESULT__ = new window.Vue().$mount('#main'));
          }, 0);
  }
  function Dn(e) {
    var t = e.config;
    (e.compiler = new $n(t, e.router)),
      (window.__current_docsify_compiler__ = e.compiler);
    var n = t.el || '#app',
      r = b('nav') || g('nav'),
      i = b(n),
      a = '',
      o = v;
    if (i) {
      if (
        (t.repo &&
          (a += (function(e, t) {
            return e
              ? (/\/\//.test(e) || (e = 'https://github.com/' + e),
                '<a href="' +
                  (e = e.replace(/^git\+/, '')) +
                  '" target="' +
                  (t = t || '_blank') +
                  '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>')
              : '';
          })(t.repo, t.cornerExternalLinkTarge)),
        t.coverpage &&
          (a += (function() {
            var e = ', 100%, 85%';
            return (
              '<section class="cover show" style="background: ' +
              ('linear-gradient(to left bottom, hsl(' +
                Math.floor(255 * Math.random()) +
                e +
                ') 0%,hsl(' +
                Math.floor(255 * Math.random()) +
                e +
                ') 100%)') +
              '"><div class="mask"></div><div class="cover-main">\x3c!--cover--\x3e</div></section>'
            );
          })()),
        t.logo)
      ) {
        var s = /^data:image/.test(t.logo),
          l = /(?:http[s]?:)?\/\//.test(t.logo),
          c = /^\./.test(t.logo);
        s || l || c || (t.logo = re(e.router.getBasePath(), t.logo));
      }
      (a += (function(e) {
        var t = e.name ? e.name : '';
        return (
          '<main>' +
          ('<button class="sidebar-toggle" aria-label="Menu"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' +
            (e.name
              ? '<h1 class="app-name"><a class="app-name-link" data-nosearch>' +
                (e.logo ? '<img alt="' + t + '" src=' + e.logo + '>' : t) +
                '</a></h1>'
              : '') +
            '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>') +
          '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'
        );
      })(t)),
        e._renderTo(i, a, !0);
    } else e.rendered = !0;
    t.mergeNavbar && h
      ? (o = b('.sidebar'))
      : (r.classList.add('app-nav'), t.repo || r.classList.add('no-badge')),
      t.loadNavbar && k(o, r),
      t.themeColor &&
        (u.head.appendChild(
          g(
            'div',
            (function(e) {
              return '<style>:root{--theme-color: ' + e + ';}</style>';
            })(t.themeColor)
          ).firstElementChild
        ),
        (function(n) {
          if (
            !(
              window.CSS &&
              window.CSS.supports &&
              window.CSS.supports('(--v:red)')
            )
          ) {
            var e = y('style:not(.inserted),link');
            [].forEach.call(e, function(e) {
              if ('STYLE' === e.nodeName) U(e, n);
              else if ('LINK' === e.nodeName) {
                var t = e.getAttribute('href');
                if (!/\.css$/.test(t)) return;
                q(t).then(function(e) {
                  var t = g('style', e);
                  d.appendChild(t), U(t, n);
                });
              }
            });
          }
        })(t.themeColor)),
      e._updateRender(),
      _(v, 'ready');
  }
  var jn = {};
  function Hn(e) {
    this.config = e;
  }
  function In(e) {
    var t = location.href.indexOf('#');
    location.replace(location.href.slice(0, 0 <= t ? t : 0) + '#' + e);
  }
  (Hn.prototype.getBasePath = function() {
    return this.config.basePath;
  }),
    (Hn.prototype.getFile = function(e, t) {
      void 0 === e && (e = this.getCurrentPath());
      var n = this.config,
        r = this.getBasePath(),
        i = 'string' == typeof n.ext ? n.ext : '.md';
      return (
        (e =
          ((e = (function(e, t) {
            return new RegExp(
              '\\.(' + t.replace(/^\./, '') + '|html)$',
              'g'
            ).test(e)
              ? e
              : /\/$/g.test(e)
              ? e + 'README' + t
              : '' + e + t;
          })(
            (e = n.alias
              ? (function e(t, n, r) {
                  var i = Object.keys(n).filter(function(e) {
                    return (
                      (jn[e] || (jn[e] = new RegExp('^' + e + '$'))).test(t) &&
                      t !== r
                    );
                  })[0];
                  return i ? e(t.replace(jn[i], n[i]), n, t) : t;
                })(e, n.alias)
              : e),
            i
          )) ===
            '/README' + i &&
            n.homepage) ||
          e),
        (e = Q(e) ? e : re(r, e)),
        t && (e = e.replace(new RegExp('^' + r), '')),
        e
      );
    }),
    (Hn.prototype.onchange = function(e) {
      void 0 === e && (e = p), e();
    }),
    (Hn.prototype.getCurrentPath = function() {}),
    (Hn.prototype.normalize = function() {}),
    (Hn.prototype.parse = function() {}),
    (Hn.prototype.toURL = function(e, t, n) {
      var r = n && '#' === e[0],
        i = this.parse(ie(e));
      if (
        ((i.query = f({}, i.query, t)),
        (e = (e = i.path + K(i.query)).replace(/\.md(\?)|\.md$/, '$1')),
        r)
      ) {
        var a = n.indexOf('?');
        e = (0 < a ? n.substring(0, a) : n) + e;
      }
      if (this.config.relativePath && 0 !== e.indexOf('/')) {
        var o = n.substring(0, n.lastIndexOf('/') + 1);
        return te(ne(o + e));
      }
      return te('/' + e);
    });
  var qn = (function(r) {
      function e(e) {
        r.call(this, e), (this.mode = 'hash');
      }
      return (
        r && (e.__proto__ = r),
        (((e.prototype = Object.create(
          r && r.prototype
        )).constructor = e).prototype.getBasePath = function() {
          var e = window.location.pathname || '',
            t = this.config.basePath;
          return /^(\/|https?:)/g.test(t) ? t : te(e + '/' + t);
        }),
        (e.prototype.getCurrentPath = function() {
          var e = location.href,
            t = e.indexOf('#');
          return -1 === t ? '' : e.slice(t + 1);
        }),
        (e.prototype.onchange = function(n) {
          void 0 === n && (n = p);
          var r = !1;
          x('click', function(e) {
            var t = 'A' === e.target.tagName ? e.target : e.target.parentNode;
            t && 'A' === t.tagName && !/_blank/.test(t.target) && (r = !0);
          }),
            x('hashchange', function(e) {
              var t = r ? 'navigate' : 'history';
              (r = !1), n({event: e, source: t});
            });
        }),
        (e.prototype.normalize = function() {
          var e = this.getCurrentPath();
          if ('/' === (e = ie(e)).charAt(0)) return In(e);
          In('/' + e);
        }),
        (e.prototype.parse = function(e) {
          void 0 === e && (e = location.href);
          var t = '',
            n = e.indexOf('#');
          0 <= n && (e = e.slice(n + 1));
          var r = e.indexOf('?');
          return (
            0 <= r && ((t = e.slice(r + 1)), (e = e.slice(0, r))),
            {path: e, file: this.getFile(e, !0), query: X(t)}
          );
        }),
        (e.prototype.toURL = function(e, t, n) {
          return '#' + r.prototype.toURL.call(this, e, t, n);
        }),
        e
      );
    })(Hn),
    Un = (function(t) {
      function e(e) {
        t.call(this, e), (this.mode = 'history');
      }
      return (
        t && (e.__proto__ = t),
        (((e.prototype = Object.create(
          t && t.prototype
        )).constructor = e).prototype.getCurrentPath = function() {
          var e = this.getBasePath(),
            t = window.location.pathname;
          return (
            e && 0 === t.indexOf(e) && (t = t.slice(e.length)),
            (t || '/') + window.location.search + window.location.hash
          );
        }),
        (e.prototype.onchange = function(r) {
          var i = this;
          void 0 === r && (r = p),
            x('click', function(e) {
              var t = 'A' === e.target.tagName ? e.target : e.target.parentNode;
              if ('A' === t.tagName && !/_blank/.test(t.target)) {
                e.preventDefault();
                var n = t.href;
                -1 !== i.config.crossOriginLinks.indexOf(n)
                  ? window.open(n, '_self')
                  : window.history.pushState({key: n}, '', n),
                  r({event: e, source: 'navigate'});
              }
            }),
            x('popstate', function(e) {
              r({event: e, source: 'history'});
            });
        }),
        (e.prototype.parse = function(e) {
          void 0 === e && (e = location.href);
          var t = '',
            n = e.indexOf('?');
          0 <= n && ((t = e.slice(n + 1)), (e = e.slice(0, n)));
          var r = re(location.origin),
            i = e.indexOf(r);
          return (
            -1 < i && (e = e.slice(i + r.length)),
            {path: e, file: this.getFile(e), query: X(t)}
          );
        }),
        e
      );
    })(Hn);
  var Bn = {};
  function Zn(e) {
    e.router.normalize(),
      (e.route = e.router.parse()),
      v.setAttribute('data-page', e.route.file);
  }
  function Wn(e) {
    !(function(e) {
      function t(e) {
        return v.classList.toggle('close');
      }
      null != (e = m(e)) &&
        (x(e, 'click', function(e) {
          e.stopPropagation(), t();
        }),
        h &&
          x(v, 'click', function(e) {
            return v.classList.contains('close') && t();
          }));
    })('button.sidebar-toggle', e.router),
      (function(e) {
        null != (e = m(e)) &&
          x(e, 'click', function(e) {
            var t = e.target;
            'A' === t.nodeName &&
              t.nextSibling &&
              t.nextSibling.classList &&
              t.nextSibling.classList.contains('app-sub-sidebar') &&
              _(t.parentNode, 'collapse');
          });
      })('.sidebar', e.router),
      e.config.coverpage ? h || x('scroll', W) : v.classList.add('sticky');
  }
  function Yn(t, n, r, i, a, e) {
    (t = e ? t : t.replace(/\/$/, '')),
      (t = ee(t)) &&
        q(a.router.getFile(t + r) + n, !1, a.config.requestHeaders).then(
          i,
          function(e) {
            return Yn(t, n, r, i, a);
          }
        );
  }
  var Gn = Object.freeze({
    __proto__: null,
    cached: s,
    hyphenate: a,
    hasOwn: l,
    merge: f,
    isPrimitive: c,
    noop: p,
    isFn: r,
    inBrowser: !0,
    isMobile: h,
    supportsPushState: i,
    parseQuery: X,
    stringifyQuery: K,
    isAbsolutePath: Q,
    removeParams: J,
    getParentPath: ee,
    cleanPath: te,
    resolvePath: ne,
    getPath: re,
    replaceSlug: ie
  });
  function Vn() {
    this._init();
  }
  var Xn,
    Kn,
    Qn,
    Jn = Vn.prototype;
  function er(e, t, n) {
    return Qn && Qn.abort && Qn.abort(), (Qn = q(e, !0, n));
  }
  (Jn._init = function() {
    var e = this;
    (e.config = A(e)),
      (function(n) {
        (n._hooks = {}),
          (n._lifecycle = {}),
          [
            'init',
            'mounted',
            'beforeEach',
            'afterEach',
            'doneEach',
            'ready'
          ].forEach(function(e) {
            var t = (n._hooks[e] = []);
            n._lifecycle[e] = function(e) {
              return t.push(e);
            };
          });
      })(e),
      (function(t) {
        [].concat(t.config.plugins).forEach(function(e) {
          return r(e) && e(t._lifecycle, t);
        });
      })(e),
      B(e, 'init'),
      (function(t) {
        var e,
          n = t.config;
        (e =
          'history' === (n.routerMode || 'hash') && i ? new Un(n) : new qn(n)),
          (t.router = e),
          Zn(t),
          (Bn = t.route),
          e.onchange(function(e) {
            Zn(t),
              t._updateRender(),
              Bn.path !== t.route.path
                ? (t.$fetch(p, t.$resetEvents.bind(t, e.source)),
                  (Bn = t.route))
                : t.$resetEvents(e.source);
          });
      })(e),
      Dn(e),
      Wn(e),
      (function(t) {
        var e = t.config.loadSidebar;
        if (t.rendered) {
          var n = Y(t.router, '.sidebar-nav', !0, !0);
          e && n && (n.parentNode.innerHTML += window.__SUB_SIDEBAR__),
            t._bindEventOnRendered(n),
            t.$resetEvents(),
            B(t, 'doneEach'),
            B(t, 'ready');
        } else
          t.$fetch(function(e) {
            return B(t, 'ready');
          });
      })(e),
      B(e, 'mounted');
  }),
    (Jn.route = {}),
    ((Xn = Jn)._renderTo = function(e, t, n) {
      var r = m(e);
      r && (r[n ? 'outerHTML' : 'innerHTML'] = t);
    }),
    (Xn._renderSidebar = function(e) {
      var t = this.config,
        n = t.maxLevel,
        r = t.subMaxLevel,
        i = t.loadSidebar;
      if (t.hideSidebar)
        return (
          document.querySelector('aside.sidebar').remove(),
          document.querySelector('button.sidebar-toggle').remove(),
          (document.querySelector('section.content').style.right = 'unset'),
          (document.querySelector('section.content').style.left = 'unset'),
          (document.querySelector('section.content').style.position =
            'relative'),
          (document.querySelector('section.content').style.width = '100%'),
          null
        );
      this._renderTo('.sidebar-nav', this.compiler.sidebar(e, n));
      var a = Y(this.router, '.sidebar-nav', !0, !0);
      i && a
        ? (a.parentNode.innerHTML += this.compiler.subSidebar(r) || '')
        : this.compiler.subSidebar(),
        this._bindEventOnRendered(a);
    }),
    (Xn._bindEventOnRendered = function(e) {
      var t = this.config.autoHeader;
      if (
        ((function(e) {
          var t = b('.cover.show');
          ge = t ? t.offsetHeight : 0;
          var n = m('.sidebar'),
            r = [];
          null != n && (r = y(n, 'li'));
          for (var i = 0, a = r.length; i < a; i += 1) {
            var o = r[i],
              s = o.querySelector('a');
            if (s) {
              var l = s.getAttribute('href');
              if ('/' !== l) {
                var c = e.parse(l),
                  u = c.query.id,
                  p = c.path;
                u && (l = ve(p, u));
              }
              l && (pe[decodeURIComponent(l)] = o);
            }
          }
          if (!h) {
            var d = J(e.getCurrentPath());
            w('scroll', function() {
              return me(d);
            }),
              x('scroll', function() {
                return me(d);
              }),
              x(n, 'mouseover', function() {
                de = !0;
              }),
              x(n, 'mouseleave', function() {
                de = !1;
              });
          }
        })(this.router),
        t && e)
      ) {
        var n = m('#main'),
          r = n.children[0];
        r &&
          'H1' !== r.tagName &&
          k(n, g('div', this.compiler.header(e.innerText, 1)).children[0]);
      }
    }),
    (Xn._renderNav = function(e) {
      e && this._renderTo('nav', this.compiler.compile(e)),
        this.config.loadNavbar && Y(this.router, 'nav');
    }),
    (Xn._renderMain = function(r, i, a) {
      var o = this;
      if ((void 0 === i && (i = {}), !r)) return Pn.call(this, r);
      B(this, 'beforeEach', r, function(e) {
        function t() {
          i.updatedAt && (n = Nn(n, i.updatedAt, o.config.formatUpdated)),
            B(o, 'afterEach', n, function(e) {
              return Pn.call(o, e);
            });
        }
        var n;
        o.isHTML
          ? ((n = o.result = r), t(), a())
          : On({compiler: o.compiler, raw: e}, function(e) {
              (n = o.compiler.compile(e)),
                (n = o.isRemoteUrl ? j.sanitize(n) : n),
                t(),
                a();
            });
      });
    }),
    (Xn._renderCover = function(e, t) {
      var n = m('.cover');
      if ((_(m('main'), t ? 'add' : 'remove', 'hidden'), e)) {
        _(n, 'add', 'show');
        var r = this.coverIsHTML ? e : this.compiler.cover(e),
          i = r
            .trim()
            .match(
              '<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$'
            );
        if (i) {
          if ('color' === i[2]) n.style.background = i[1] + (i[3] || '');
          else {
            var a = i[1];
            _(n, 'add', 'has-mask'),
              Q(i[1]) || (a = re(this.router.getBasePath(), i[1])),
              (n.style.backgroundImage = 'url(' + a + ')'),
              (n.style.backgroundSize = 'cover'),
              (n.style.backgroundPosition = 'center center');
          }
          r = r.replace(i[0], '');
        }
        this._renderTo('.cover-main', r), W();
      } else _(n, 'remove', 'show');
    }),
    (Xn._updateRender = function() {
      !(function(e) {
        var t = m('.app-name-link'),
          n = e.config.nameLink,
          r = e.route.path;
        if (t)
          if (c(e.config.nameLink)) t.setAttribute('href', n);
          else if ('object' == typeof n) {
            var i = Object.keys(n).filter(function(e) {
              return -1 < r.indexOf(e);
            })[0];
            t.setAttribute('href', n[i]);
          }
      })(this);
    }),
    ((Kn = Jn)._loadSideAndNav = function(e, t, n, r) {
      var i = this;
      return function() {
        if (!n) return r();
        Yn(
          e,
          t,
          n,
          function(e) {
            i._renderSidebar(e), r();
          },
          i,
          !0
        );
      };
    }),
    (Kn._fetch = function(n) {
      var r = this;
      void 0 === n && (n = p);
      var e = this.route,
        i = e.path,
        a = K(e.query, ['id']),
        t = this.config,
        o = t.loadNavbar,
        s = t.requestHeaders,
        l = t.loadSidebar,
        c = this.router.getFile(i),
        u = er(c + a, 0, s);
      (this.isRemoteUrl = (function(e) {
        var t = e.match(
          /^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
        );
        return (
          ('string' == typeof t[1] &&
            0 < t[1].length &&
            t[1].toLowerCase() !== location.protocol) ||
          ('string' == typeof t[2] &&
            0 < t[2].length &&
            t[2].replace(
              new RegExp(
                ':(' + {'http:': 80, 'https:': 443}[location.protocol] + ')?$'
              ),
              ''
            ) !== location.host)
        );
      })(c)),
        (this.isHTML = /\.html$/g.test(c)),
        u.then(
          function(e, t) {
            return r._renderMain(e, t, r._loadSideAndNav(i, a, l, n));
          },
          function(e) {
            r._fetchFallbackPage(i, a, n) || r._fetch404(c, a, n);
          }
        ),
        o &&
          Yn(
            i,
            a,
            o,
            function(e) {
              return r._renderNav(e);
            },
            this,
            !0
          );
    }),
    (Kn._fetchCover = function() {
      var t = this,
        e = this.config,
        n = e.coverpage,
        r = e.requestHeaders,
        i = this.route.query,
        a = ee(this.route.path);
      if (n) {
        var o = null,
          s = this.route.path;
        if ('string' == typeof n) '/' === s && (o = n);
        else if (Array.isArray(n)) o = -1 < n.indexOf(s) && '_coverpage';
        else {
          var l = n[s];
          o = !0 === l ? '_coverpage' : l;
        }
        var c = Boolean(o) && this.config.onlyCover;
        return (
          o
            ? ((o = this.router.getFile(a + o)),
              (this.coverIsHTML = /\.html$/g.test(o)),
              q(o + K(i, ['id']), !1, r).then(function(e) {
                return t._renderCover(e, c);
              }))
            : this._renderCover(null, c),
          c
        );
      }
    }),
    (Kn.$fetch = function(e, t) {
      var n = this;
      function r() {
        B(n, 'doneEach'), e();
      }
      void 0 === e && (e = p),
        void 0 === t && (t = this.$resetEvents.bind(this)),
        this._fetchCover()
          ? r()
          : this._fetch(function() {
              t(), r();
            });
    }),
    (Kn._fetchFallbackPage = function(n, r, i) {
      var a = this;
      void 0 === i && (i = p);
      var e = this.config,
        t = e.requestHeaders,
        o = e.fallbackLanguages,
        s = e.loadSidebar;
      if (!o) return !1;
      var l = n.split('/')[1];
      if (-1 === o.indexOf(l)) return !1;
      var c = this.router.getFile(n.replace(new RegExp('^/' + l), ''));
      return (
        er(c + r, 0, t).then(
          function(e, t) {
            return a._renderMain(e, t, a._loadSideAndNav(n, r, s, i));
          },
          function() {
            return a._fetch404(n, r, i);
          }
        ),
        !0
      );
    }),
    (Kn._fetch404 = function(e, t, n) {
      var r = this;
      void 0 === n && (n = p);
      var i = this.config,
        a = i.loadSidebar,
        o = i.requestHeaders,
        s = i.notFoundPage,
        l = this._loadSideAndNav(e, t, a, n);
      if (s) {
        var c = (function(t, e) {
          var n,
            r,
            i = e.notFoundPage,
            a = '_404' + (e.ext || '.md');
          switch (typeof i) {
            case 'boolean':
              r = a;
              break;
            case 'string':
              r = i;
              break;
            case 'object':
              r =
                ((n = Object.keys(i)
                  .sort(function(e, t) {
                    return t.length - e.length;
                  })
                  .find(function(e) {
                    return t.match(new RegExp('^' + e));
                  })) &&
                  i[n]) ||
                a;
          }
          return r;
        })(e, this.config);
        return (
          er(this.router.getFile(c), 0, o).then(
            function(e, t) {
              return r._renderMain(e, t, l);
            },
            function() {
              return r._renderMain(null, {}, l);
            }
          ),
          !0
        );
      }
      return this._renderMain(null, {}, l), !1;
    }),
    (Jn.$resetEvents = function(e) {
      var t = this,
        n = this.config.auto2top;
      'history' !== e &&
        (t.route.query.id && be(t.route.path, t.route.query.id),
        'navigate' === e &&
          n &&
          (function(e) {
            void 0 === e && (e = 0), (ye.scrollTop = !0 === e ? 0 : Number(e));
          })(n)),
        this.config.loadNavbar && Y(this.router, 'nav');
    }),
    (window.Docsify = {
      util: Gn,
      dom: t,
      get: q,
      slugify: _n,
      version: '4.11.6'
    }),
    (window.DocsifyCompiler = $n),
    (window.marked = mn),
    (window.Prism = En),
    e(function(e) {
      return new Vn();
    });
})();
