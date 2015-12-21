(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.data.OwnCodeInModel","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.1.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.data.OwnCodeInModel-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"6f4ada93cec4"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['6f4ada93cec4']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Oxygen/16/mimetypes/archive.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/executable.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/media-image.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/media-video.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-contact.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-illustration.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-presentation.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-html.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/archive.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/executable.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-image.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-video.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-contact.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-illustration.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-presentation.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-spreadsheet.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-html.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var bv="toString",bu=".",bt="default",bs="Object",br='"',bq="Array",bp="()",bo="String",bn="Function",bm=".prototype",bU="function",bT="Boolean",bS="Error",bR="constructor",bQ="warn",bP="hasOwnProperty",bO="string",bN="toLocaleString",bM="RegExp",bL='\", "',bC="info",bD="BROKEN_IE",bA="isPrototypeOf",bB="Date",by="",bz="qx.Bootstrap",bw="]",bx="Class",bE="error",bF="[Class ",bH="valueOf",bG="Number",bJ="count",bI="debug",bK="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bF+this.classname+bw;
},createNamespace:function(name,bc){var be=name.split(bu);
var parent=window;
var bd=be[0];

for(var i=0,bf=be.length-1;i<bf;i++,bd=be[i]){if(!parent[bd]){parent=parent[bd]={};
}else{parent=parent[bd];
}}parent[bd]=bc;
return bd;
},setDisplayName:function(ba,bb,name){ba.displayName=bb+bu+name+bp;
},setDisplayNames:function(H,I){for(var name in H){var J=H[name];

if(J instanceof Function){J.displayName=I+bu+name+bp;
}}},define:function(name,P){if(!P){var P={statics:{}};
}var U;
var S=null;
qx.Bootstrap.setDisplayNames(P.statics,name);

if(P.members||P.extend){qx.Bootstrap.setDisplayNames(P.members,name+bm);
U=P.construct||new Function;

if(P.extend){this.extendClass(U,U,P.extend,name,T);
}var Q=P.statics||{};
for(var i=0,V=qx.Bootstrap.getKeys(Q),l=V.length;i<l;i++){var W=V[i];
U[W]=Q[W];
}S=U.prototype;
var R=P.members||{};
for(var i=0,V=qx.Bootstrap.getKeys(R),l=V.length;i<l;i++){var W=V[i];
S[W]=R[W];
}}else{U=P.statics||{};
}var T=this.createNamespace(name,U);
U.name=U.classname=name;
U.basename=T;
U.$$type=bx;
if(!U.hasOwnProperty(bv)){U.toString=this.genericToString;
}if(P.defer){P.defer(U,S);
}qx.Bootstrap.$$registry[name]=P.statics;
return U;
}};
qx.Bootstrap.define(bz,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(o,p,q,name,r){var u=q.prototype;
var t=new Function;
t.prototype=u;
var s=new t;
o.prototype=s;
s.name=s.classname=name;
s.basename=r;
p.base=o.superclass=q;
p.self=o.constructor=s.constructor=o;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(X){return X.__count__;
},"default":function(bi){var length=0;

for(var bj in bi){length++;
}return length;
}})[(({}).__count__==0)?bJ:bt],objectMergeWith:function(j,k,m){if(m===undefined){m=true;
}
for(var n in k){if(m||j[n]===undefined){j[n]=k[n];
}}return j;
},__gL:[bA,bP,bN,bv,bH,bR],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(ce){var cf=[];
var ch=Object.prototype.hasOwnProperty;

for(var ci in ce){if(ch.call(ce,ci)){cf.push(ci);
}}var cg=qx.Bootstrap.__gL;

for(var i=0,a=cg,l=a.length;i<l;i++){if(ch.call(ce,a[i])){cf.push(a[i]);
}}return cf;
},"default":function(v){var w=[];
var x=Object.prototype.hasOwnProperty;

for(var y in v){if(x.call(v,y)){w.push(y);
}}return w;
}})[typeof (Object.keys)==
bU?bK:
(function(){for(var N in {toString:1}){return N;
}})()!==bv?bD:bt],getKeysAsString:function(e){var f=qx.Bootstrap.getKeys(e);

if(f.length==0){return by;
}return br+f.join(bL)+br;
},__gM:{"[object String]":bo,"[object Array]":bq,"[object Object]":bs,"[object RegExp]":bM,"[object Number]":bG,"[object Boolean]":bT,"[object Date]":bB,"[object Function]":bn,"[object Error]":bS},bind:function(bY,self,ca){var cb=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var d=Array.prototype.slice.call(arguments,0,arguments.length);
return bY.apply(self,cb.concat(d));
};
},firstUp:function(bV){return bV.charAt(0).toUpperCase()+bV.substr(1);
},firstLow:function(bg){return bg.charAt(0).toLowerCase()+bg.substr(1);
},getClass:function(B){var C=Object.prototype.toString.call(B);
return (qx.Bootstrap.__gM[C]||C.slice(8,-1));
},isString:function(bh){return (bh!==null&&(typeof bh===bO||qx.Bootstrap.getClass(bh)==bo||bh instanceof String||(!!bh&&!!bh.$$isString)));
},isArray:function(D){return (D!==null&&(D instanceof Array||(D&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(D.constructor,qx.data.IListData))||qx.Bootstrap.getClass(D)==bq||(!!D&&!!D.$$isArray)));
},isObject:function(K){return (K!==undefined&&K!==null&&qx.Bootstrap.getClass(K)==bs);
},isFunction:function(Y){return qx.Bootstrap.getClass(Y)==bn;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(M,name){while(M){if(M.$$properties&&M.$$properties[name]){return M.$$properties[name];
}M=M.superclass;
}return null;
},hasProperty:function(h,name){return !!qx.Bootstrap.getPropertyDefinition(h,name);
},getEventType:function(O,name){var O=O.constructor;

while(O.superclass){if(O.$$events&&O.$$events[name]!==undefined){return O.$$events[name];
}O=O.superclass;
}return null;
},supportsEvent:function(L,name){return !!qx.Bootstrap.getEventType(L,name);
},getByInterface:function(E,F){var G,i,l;

while(E){if(E.$$implements){G=E.$$flatImplements;

for(i=0,l=G.length;i<l;i++){if(G[i]===F){return E;
}}}E=E.superclass;
}return null;
},hasInterface:function(z,A){return !!qx.Bootstrap.getByInterface(z,A);
},getMixins:function(bW){var bX=[];

while(bW){if(bW.$$includes){bX.push.apply(bX,bW.$$flatIncludes);
}bW=bW.superclass;
}return bX;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bI,arguments]);
},info:function(cc,cd){qx.Bootstrap.$$logs.push([bC,arguments]);
},warn:function(bk,bl){qx.Bootstrap.$$logs.push([bQ,arguments]);
},error:function(b,c){qx.Bootstrap.$$logs.push([bE,arguments]);
},trace:function(g){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__dM:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__dM[j]){this.__dM[j]={};
}else if(this.__dM[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__dM[j].defaultValue=k;
},get:function(n){var o=this.__dM[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(l,m){if((l.split(a)).length<2){throw new Error('Malformed settings key "'+l+'". Must be following the schema "namespace.key".');
}
if(!this.__dM[l]){this.__dM[l]={};
}this.__dM[l].value=m;
},__dN:function(){if(window.qxsettings){for(var r in window.qxsettings){this.set(r,window.qxsettings[r]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(p){}this.__dO();
}},__dO:function(){if(this.get(h)!=true){return;
}var t=document.location.search.slice(1).split(g);

for(var i=0;i<t.length;i++){var s=t[i].split(b);

if(s.length!=3||s[0]!=c){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(q){q.define(h,false);
q.define(e,false);
q.define(d,0);
q.__dN();
}});
})();
(function(){var m="function",k="Boolean",j="qx.Interface",h="]",g="toggle",f="Interface",e="is",d="[Interface ";
qx.Bootstrap.define(j,{statics:{define:function(name,n){if(n){if(n.extend&&!(n.extend instanceof Array)){n.extend=[n.extend];
}{};
var o=n.statics?n.statics:{};
if(n.extend){o.$$extends=n.extend;
}
if(n.properties){o.$$properties=n.properties;
}
if(n.members){o.$$members=n.members;
}
if(n.events){o.$$events=n.events;
}}else{var o={};
}o.$$type=f;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
qx.Interface.$$registry[name]=o;
return o;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(D){if(!D){return [];
}var E=D.concat();

for(var i=0,l=D.length;i<l;i++){if(D[i].$$extends){E.push.apply(E,this.flatten(D[i].$$extends));
}}return E;
},__eV:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__eW(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__fa(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==m){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__eW:function(t,u){var y=u.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!y){return false;
}var v=qx.Bootstrap.firstLow(y[2]);
var w=qx.Bootstrap.getPropertyDefinition(t,v);

if(!w){return false;
}var x=y[0]==e||y[0]==g;

if(x){return qx.Bootstrap.getPropertyDefinition(t,v).check==k;
}return true;
},__eX:function(a,b){if(b.$$properties){for(var c in b.$$properties){if(!qx.Bootstrap.getPropertyDefinition(a,c)){throw new Error('The property "'+c+'" is not supported by Class "'+a.classname+'"!');
}}}},__eY:function(F,G){if(G.$$events){for(var H in G.$$events){if(!qx.Bootstrap.supportsEvent(F,H)){throw new Error('The event "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},assertObject:function(p,q){var s=p.constructor;
this.__eV(p,s,q,false);
this.__eX(s,q);
this.__eY(s,q);
var r=q.$$extends;

if(r){for(var i=0,l=r.length;i<l;i++){this.assertObject(p,r[i]);
}}},assert:function(z,A,B){this.__eV(z.prototype,z,A,B);
this.__eX(z,A);
this.__eY(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return d+this.name+h;
},$$registry:{},__fa:function(){},__fb:null,__fc:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,o){if(o){if(o.include&&!(o.include instanceof Array)){o.include=[o.include];
}{};
var q=o.statics?o.statics:{};
qx.Bootstrap.setDisplayNames(q,name);

for(var p in q){if(q[p] instanceof Function){q[p].$$mixin=q;
}}if(o.construct){q.$$constructor=o.construct;
qx.Bootstrap.setDisplayName(o.construct,name,e);
}
if(o.include){q.$$includes=o.include;
}
if(o.properties){q.$$properties=o.properties;
}
if(o.members){q.$$members=o.members;
qx.Bootstrap.setDisplayNames(o.members,name+f);
}
for(var p in q.$$members){if(q.$$members[p] instanceof Function){q.$$members[p].$$mixin=q;
}}
if(o.events){q.$$events=o.events;
}
if(o.destruct){q.$$destructor=o.destruct;
qx.Bootstrap.setDisplayName(o.destruct,name,b);
}}else{var q={};
}q.$$type=a;
q.name=name;
q.toString=this.genericToString;
q.basename=qx.Bootstrap.createNamespace(name,q);
this.$$registry[name]=q;
return q;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__dJ:null,__dK:function(){}}});
})();
(function(){var ei=';',eh='computed=this.',eg='=value;',ef='this.',ee="set",ed="setThemed",ec="setRuntime",eb="init",ea='if(this.',dY='delete this.',di='!==undefined)',dh='}',dg="resetThemed",df='else if(this.',de="string",dd="boolean",dc='return this.',db="reset",da="resetRuntime",cY='!==undefined){',ep="",eq="refresh",en='=true;',eo="this.",el=";",em='old=this.',ej="();",ek='else ',er='if(old===undefined)old=this.',es='old=computed=this.',dH="return this.",dG="get",dJ='(value);',dI="(a[",dL='if(old===computed)return value;',dK='if(old===undefined)old=null;',dN=' of an instance of ',dM=' is not (yet) ready!");',dF="]);",dE='!==inherit){',bP='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bQ='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bR='value !== null && value.nodeType === 9 && value.documentElement',bS='===value)return value;',bT='value !== null && value.$$type === "Mixin"',bU='return init;',bV='var init=this.',bW='value !== null && value.nodeType === 1 && value.attributes',bX="var parent = this.getLayoutParent();",bY="Error in property ",eG='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',eF='.validate.call(this, value);',eE='qx.core.Assert.assertInstance(value, Date, msg) || true',eD='else{',eK="if (!parent) return;",eJ=" in method ",eI='qx.core.Assert.assertInstance(value, Error, msg) || true',eH='=computed;',eM='Undefined value is not allowed!',eL='(backup);',cy="MSIE 6.0",cz='if(computed===inherit){',cw="inherit",cx='Is invalid!',cC='if(value===undefined)prop.error(this,2,"',cD='var computed, old=this.',cA='else if(computed===undefined)',cB="': ",cu=" of class ",cv='value !== null && value.nodeType !== undefined',ch='===undefined)return;',cg='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cj="')){",ci='qx.core.Assert.assertPositiveInteger(value, msg) || true',cd='else this.',cc='value=this.',cf='","',ce='if(init==qx.core.Property.$$inherit)init=null;',cb='value !== null && value.$$type === "Interface"',ca='var inherit=prop.$$inherit;',cI="', qx.event.type.Data, [computed, old]",cJ="var value = parent.",cK="$$useinit_",cL='computed=undefined;delete this.',cE="(value);",cF='Requires exactly one argument!',cG='",value);',cH='computed=value;',cM="$$runtime_",cN=';}',cr="$$user_",cq='){',cp='qx.core.Assert.assertArray(value, msg) || true',co='if(computed===undefined||computed===inherit){',cn='qx.core.Assert.assertPositiveNumber(value, msg) || true',cm=".prototype",cl="Boolean",ck=")}",ct='(computed, old, "',cs='return value;',cO='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cP="if(reg.hasListener(this, '",cQ='Does not allow any arguments!',cR=')a[i].',cS="()",cT="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cU='.$$properties.',cV='value !== null && value.$$type === "Theme"',cW="var reg=qx.event.Registration;",cX="())",dm='return null;',dl='qx.core.Assert.assertObject(value, msg) || true',dk='");',dj='qx.core.Assert.assertString(value, msg) || true',dr='var pa=this.getLayoutParent();if(pa)computed=pa.',dq="if (value===undefined) value = parent.",dp='value !== null && value.$$type === "Class"',dn='qx.core.Assert.assertFunction(value, msg) || true',dt='!==undefined&&',ds='var computed, old;',dA='var backup=computed;',dB='}else{',dy="object",dz="$$init_",dw="$$theme_",dx='if(computed===undefined)computed=null;',du='qx.core.Assert.assertMap(value, msg) || true',dv='qx.core.Assert.assertNumber(value, msg) || true',dC='if((computed===undefined||computed===inherit)&&',dD="reg.fireEvent(this, '",dR='Null value is not allowed!',dQ='qx.core.Assert.assertInteger(value, msg) || true',dT="value",dS="rv:1.8.1",dV="shorthand",dU='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dX='value !== null && value.type !== undefined',dW='value !== null && value.document',dP='throw new Error("Property ',dO="(!this.",ez='qx.core.Assert.assertBoolean(value, msg) || true',eA='if(a[i].',eB="toggle",eC="$$inherit_",ev='var prop=qx.core.Property;',ew=" with incoming value '",ex="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",ey='if(computed===undefined||computed==inherit)computed=null;',et="qx.core.Property",eu="is",bO='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(et,{statics:{__kp:{"Boolean":ez,"String":dj,"Number":dv,"Integer":dQ,"PositiveNumber":cn,"PositiveInteger":ci,"Error":eI,"RegExp":dU,"Object":dl,"Array":cp,"Map":du,"Function":dn,"Date":eE,"Node":cv,"Element":bW,"Document":bR,"Window":dW,"Event":dX,"Class":dp,"Mixin":bT,"Interface":cb,"Theme":cV,"Color":bP,"Decorator":cg,"Font":bQ},__kq:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cw,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:de,dispose:dd,dereference:dd,inheritable:dd,nullable:dd,themeable:dd,refine:dd,init:null,apply:de,event:de,check:null,transform:de,deferredInit:dd,validate:null},$$allowedGroupKeys:{name:de,group:dy,mode:de,themeable:dd},$$inheritable:{},__kr:function(K){var L=this.__ks(K);

if(!L.length){var M=qx.lang.Function.empty;
}else{M=this.__kt(L);
}K.prototype.$$refreshInheritables=M;
},__ks:function(bv){var bx=[];

while(bv){var bw=bv.$$properties;

if(bw){for(var name in this.$$inheritable){if(bw[name]&&bw[name].inheritable){bx.push(name);
}}}bv=bv.superclass;
}return bx;
},__kt:function(eT){var eX=this.$$store.inherit;
var eW=this.$$store.init;
var eV=this.$$method.refresh;
var eU=[bX,eK];

for(var i=0,l=eT.length;i<l;i++){var name=eT[i];
eU.push(cJ,eX[name],el,dq,eW[name],el,eo,eV[name],cE);
}return new Function(eU.join(ep));
},refresh:function(bs){{};
bs.$$refreshInheritables();
},attachRefreshInheritables:function(eR){eR.prototype.$$refreshInheritables=function(){qx.core.Property.__kr(eR);
return this.$$refreshInheritables();
};
},attachMethods:function(I,name,J){J.group?this.__ku(I,J,name):this.__kv(I,J,name);
},__ku:function(T,U,name){var bc=qx.Bootstrap.firstUp(name);
var bb=T.prototype;
var bd=U.themeable===true;
{};
var be=[];
var X=[];

if(bd){var V=[];
var ba=[];
}var Y=cT;
be.push(Y);

if(bd){V.push(Y);
}
if(U.mode==dV){var W=ex;
be.push(W);

if(bd){V.push(W);
}}
for(var i=0,a=U.group,l=a.length;i<l;i++){{};
be.push(eo,this.$$method.set[a[i]],dI,i,dF);
X.push(eo,this.$$method.reset[a[i]],ej);

if(bd){{};
V.push(eo,this.$$method.setThemed[a[i]],dI,i,dF);
ba.push(eo,this.$$method.resetThemed[a[i]],ej);
}}this.$$method.set[name]=ee+bc;
bb[this.$$method.set[name]]=new Function(be.join(ep));
this.$$method.reset[name]=db+bc;
bb[this.$$method.reset[name]]=new Function(X.join(ep));

if(bd){this.$$method.setThemed[name]=ed+bc;
bb[this.$$method.setThemed[name]]=new Function(V.join(ep));
this.$$method.resetThemed[name]=dg+bc;
bb[this.$$method.resetThemed[name]]=new Function(ba.join(ep));
}},__kv:function(N,O,name){var Q=qx.Bootstrap.firstUp(name);
var S=N.prototype;
{};
{};
if(O.dereference===undefined&&typeof O.check===de){O.dereference=this.__kw(O.check);
}var R=this.$$method;
var P=this.$$store;
P.runtime[name]=cM+name;
P.user[name]=cr+name;
P.theme[name]=dw+name;
P.init[name]=dz+name;
P.inherit[name]=eC+name;
P.useinit[name]=cK+name;
R.get[name]=dG+Q;
S[R.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,N,name,dG);
};
R.set[name]=ee+Q;
S[R.set[name]]=function(bk){return qx.core.Property.executeOptimizedSetter(this,N,name,ee,arguments);
};
R.reset[name]=db+Q;
S[R.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,db);
};

if(O.inheritable||O.apply||O.event||O.deferredInit){R.init[name]=eb+Q;
S[R.init[name]]=function(bI){return qx.core.Property.executeOptimizedSetter(this,N,name,eb,arguments);
};
}
if(O.inheritable){R.refresh[name]=eq+Q;
S[R.refresh[name]]=function(bt){return qx.core.Property.executeOptimizedSetter(this,N,name,eq,arguments);
};
}R.setRuntime[name]=ec+Q;
S[R.setRuntime[name]]=function(bj){return qx.core.Property.executeOptimizedSetter(this,N,name,ec,arguments);
};
R.resetRuntime[name]=da+Q;
S[R.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,da);
};

if(O.themeable){R.setThemed[name]=ed+Q;
S[R.setThemed[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,N,name,ed,arguments);
};
R.resetThemed[name]=dg+Q;
S[R.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,N,name,dg);
};
}
if(O.check===cl){S[eB+Q]=new Function(dH+R.set[name]+dO+R.get[name]+cX);
S[eu+Q]=new Function(dH+R.get[name]+cS);
}},__kw:function(bu){return !!this.__kq[bu];
},__kx:function(bf){return this.__kq[bf]||qx.Bootstrap.classIsDefined(bf)||(qx.Interface&&qx.Interface.isDefined(bf));
},__ky:{0:bO,1:cF,2:eM,3:cQ,4:dR,5:cx},error:function(bl,bm,bn,bo,bp){var bq=bl.constructor.classname;
var br=bY+bn+cu+bq+eJ+this.$$method[bo][bn]+ew+bp+cB;
throw new Error(br+(this.__ky[bm]||"Unknown reason: "+bm));
},__kz:function(q,r,name,s,t,u){var v=this.$$method[s][name];
{r[v]=new Function(dT,t.join(ep));
};
{};
qx.Bootstrap.setDisplayName(r[v],q.classname+cm,v);
if(u===undefined){return q[v]();
}else{return q[v](u[0]);
}},executeOptimizedGetter:function(h,j,name,k){var n=j.$$properties[name];
var p=j.prototype;
var m=[];
var o=this.$$store;
m.push(ea,o.runtime[name],di);
m.push(dc,o.runtime[name],ei);

if(n.inheritable){m.push(df,o.inherit[name],di);
m.push(dc,o.inherit[name],ei);
m.push(ek);
}m.push(ea,o.user[name],di);
m.push(dc,o.user[name],ei);

if(n.themeable){m.push(df,o.theme[name],di);
m.push(dc,o.theme[name],ei);
}
if(n.deferredInit&&n.init===undefined){m.push(df,o.init[name],di);
m.push(dc,o.init[name],ei);
}m.push(ek);

if(n.init!==undefined){if(n.inheritable){m.push(bV,o.init[name],ei);

if(n.nullable){m.push(ce);
}else if(n.init!==undefined){m.push(dc,o.init[name],ei);
}else{m.push(cO,name,dN,j.classname,dM);
}m.push(bU);
}else{m.push(dc,o.init[name],ei);
}}else if(n.inheritable||n.nullable){m.push(dm);
}else{m.push(dP,name,dN,j.classname,dM);
}return this.__kz(h,p,name,k,m);
},executeOptimizedSetter:function(y,z,name,A,B){var G=z.$$properties[name];
var F=z.prototype;
var D=[];
var C=A===ee||A===ed||A===ec||(A===eb&&G.init===undefined);
var E=G.apply||G.event||G.inheritable;
var H=this.__kA(A,name);
this.__kB(D,G,name,A,C);

if(C){this.__kC(D,z,G,name);
}
if(E){this.__kD(D,C,H,A);
}
if(G.inheritable){D.push(ca);
}{};

if(!E){this.__kF(D,name,A,C);
}else{this.__kG(D,G,name,A,C);
}
if(G.inheritable){this.__kH(D,G,name,A);
}else if(E){this.__kI(D,G,name,A);
}
if(E){this.__kJ(D,G,name);
if(G.inheritable&&F._getChildren){this.__kK(D,name);
}}if(C){D.push(cs);
}return this.__kz(y,F,name,A,D,B);
},__kA:function(f,name){if(f===ec||f===da){var g=this.$$store.runtime[name];
}else if(f===ed||f===dg){g=this.$$store.theme[name];
}else if(f===eb){g=this.$$store.init[name];
}else{g=this.$$store.user[name];
}return g;
},__kB:function(eN,eO,name,eP,eQ){{if(!eO.nullable||eO.check||eO.inheritable){eN.push(ev);
}if(eP===ee){eN.push(cC,name,cf,eP,cG);
}};
},__kC:function(bg,bh,bi,name){if(bi.transform){bg.push(cc,bi.transform,dJ);
}if(bi.validate){if(typeof bi.validate===de){bg.push(ef,bi.validate,dJ);
}else if(bi.validate instanceof Function){bg.push(bh.classname,cU,name);
bg.push(eF);
}}},__kD:function(bJ,bK,bL,bM){var bN=(bM===db||bM===dg||bM===da);

if(bK){bJ.push(ea,bL,bS);
}else if(bN){bJ.push(ea,bL,ch);
}},__kE:undefined,__kF:function(eY,name,fa,fb){if(fa===ec){eY.push(ef,this.$$store.runtime[name],eg);
}else if(fa===da){eY.push(ea,this.$$store.runtime[name],di);
eY.push(dY,this.$$store.runtime[name],ei);
}else if(fa===ee){eY.push(ef,this.$$store.user[name],eg);
}else if(fa===db){eY.push(ea,this.$$store.user[name],di);
eY.push(dY,this.$$store.user[name],ei);
}else if(fa===ed){eY.push(ef,this.$$store.theme[name],eg);
}else if(fa===dg){eY.push(ea,this.$$store.theme[name],di);
eY.push(dY,this.$$store.theme[name],ei);
}else if(fa===eb&&fb){eY.push(ef,this.$$store.init[name],eg);
}},__kG:function(bB,bC,name,bD,bE){if(bC.inheritable){bB.push(cD,this.$$store.inherit[name],ei);
}else{bB.push(ds);
}bB.push(ea,this.$$store.runtime[name],cY);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===da){bB.push(dY,this.$$store.runtime[name],ei);
bB.push(ea,this.$$store.user[name],di);
bB.push(eh,this.$$store.user[name],ei);
bB.push(df,this.$$store.theme[name],di);
bB.push(eh,this.$$store.theme[name],ei);
bB.push(df,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else{bB.push(es,this.$$store.runtime[name],ei);
if(bD===ee){bB.push(ef,this.$$store.user[name],eg);
}else if(bD===db){bB.push(dY,this.$$store.user[name],ei);
}else if(bD===ed){bB.push(ef,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
}else if(bD===eb&&bE){bB.push(ef,this.$$store.init[name],eg);
}}bB.push(dh);
bB.push(df,this.$$store.user[name],cY);

if(bD===ee){if(!bC.inheritable){bB.push(em,this.$$store.user[name],ei);
}bB.push(eh,this.$$store.user[name],eg);
}else if(bD===db){if(!bC.inheritable){bB.push(em,this.$$store.user[name],ei);
}bB.push(dY,this.$$store.user[name],ei);
bB.push(ea,this.$$store.runtime[name],di);
bB.push(eh,this.$$store.runtime[name],ei);
bB.push(ea,this.$$store.theme[name],di);
bB.push(eh,this.$$store.theme[name],ei);
bB.push(df,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else{if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bC.inheritable){bB.push(eh,this.$$store.user[name],ei);
}else{bB.push(es,this.$$store.user[name],ei);
}if(bD===ed){bB.push(ef,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
}else if(bD===eb&&bE){bB.push(ef,this.$$store.init[name],eg);
}}bB.push(dh);
if(bC.themeable){bB.push(df,this.$$store.theme[name],cY);

if(!bC.inheritable){bB.push(em,this.$$store.theme[name],ei);
}
if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===dg){bB.push(dY,this.$$store.theme[name],ei);
bB.push(ea,this.$$store.init[name],cY);
bB.push(eh,this.$$store.init[name],ei);
bB.push(ef,this.$$store.useinit[name],en);
bB.push(dh);
}else if(bD===eb){if(bE){bB.push(ef,this.$$store.init[name],eg);
}bB.push(eh,this.$$store.theme[name],ei);
}else if(bD===eq){bB.push(eh,this.$$store.theme[name],ei);
}bB.push(dh);
}bB.push(df,this.$$store.useinit[name],cq);

if(!bC.inheritable){bB.push(em,this.$$store.init[name],ei);
}
if(bD===eb){if(bE){bB.push(eh,this.$$store.init[name],eg);
}else{bB.push(eh,this.$$store.init[name],ei);
}}else if(bD===ee||bD===ec||bD===ed||bD===eq){bB.push(dY,this.$$store.useinit[name],ei);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===eq){bB.push(eh,this.$$store.init[name],ei);
}}bB.push(dh);
if(bD===ee||bD===ec||bD===ed||bD===eb){bB.push(eD);

if(bD===ec){bB.push(eh,this.$$store.runtime[name],eg);
}else if(bD===ee){bB.push(eh,this.$$store.user[name],eg);
}else if(bD===ed){bB.push(eh,this.$$store.theme[name],eg);
}else if(bD===eb){if(bE){bB.push(eh,this.$$store.init[name],eg);
}else{bB.push(eh,this.$$store.init[name],ei);
}bB.push(ef,this.$$store.useinit[name],en);
}bB.push(dh);
}},__kH:function(by,bz,name,bA){by.push(co);

if(bA===eq){by.push(cH);
}else{by.push(dr,this.$$store.inherit[name],ei);
}by.push(dC);
by.push(ef,this.$$store.init[name],dt);
by.push(ef,this.$$store.init[name],dE);
by.push(eh,this.$$store.init[name],ei);
by.push(ef,this.$$store.useinit[name],en);
by.push(dB);
by.push(dY,this.$$store.useinit[name],cN);
by.push(dh);
by.push(dL);
by.push(cz);
by.push(cL,this.$$store.inherit[name],ei);
by.push(dh);
by.push(cA);
by.push(dY,this.$$store.inherit[name],ei);
by.push(cd,this.$$store.inherit[name],eH);
by.push(dA);
if(bz.init!==undefined&&bA!==eb){by.push(er,this.$$store.init[name],el);
}else{by.push(dK);
}by.push(ey);
},__kI:function(b,c,name,d){if(d!==ee&&d!==ec&&d!==ed){b.push(dx);
}b.push(dL);
if(c.init!==undefined&&d!==eb){b.push(er,this.$$store.init[name],el);
}else{b.push(dK);
}},__kJ:function(w,x,name){if(x.apply){w.push(ef,x.apply,ct,name,dk);
}if(x.event){w.push(cW,cP,x.event,cj,dD,x.event,cI,ck);
}},__kK:function(eS,name){eS.push(eG);
eS.push(eA,this.$$method.refresh[name],cR,this.$$method.refresh[name],eL);
eS.push(dh);
}},defer:function(bF){var bH=navigator.userAgent.indexOf(cy)!=-1;
var bG=navigator.userAgent.indexOf(dS)!=-1;
if(bH||bG){bF.__kw=bF.__kx;
}}});
})();
(function(){var C="[Class ",B="]",A="$$init_",z="toString",y="constructor",x="singleton",w=".prototype",v="extend",u="Class",t="destruct",q="qx.Class",s=".",r="static",p="qx.event.type.Data";
qx.Bootstrap.define(q,{statics:{define:function(name,ba){if(!ba){var ba={};
}if(ba.include&&!(ba.include instanceof Array)){ba.include=[ba.include];
}if(ba.implement&&!(ba.implement instanceof Array)){ba.implement=[ba.implement];
}var bb=false;

if(!ba.hasOwnProperty(v)&&!ba.type){ba.type=r;
bb=true;
}{};
var bc=this.__bz(name,ba.type,ba.extend,ba.statics,ba.construct,ba.destruct,ba.include);
if(ba.extend){if(ba.properties){this.__bB(bc,ba.properties,true);
}if(ba.members){this.__bD(bc,ba.members,true,true,false);
}if(ba.events){this.__bA(bc,ba.events,true);
}if(ba.include){for(var i=0,l=ba.include.length;i<l;i++){this.__bH(bc,ba.include[i],false);
}}}if(ba.settings){for(var bd in ba.settings){qx.core.Setting.define(bd,ba.settings[bd]);
}}if(ba.variants){for(var bd in ba.variants){qx.core.Variant.define(bd,ba.variants[bd].allowedValues,ba.variants[bd].defaultValue);
}}if(ba.implement){for(var i=0,l=ba.implement.length;i<l;i++){this.__bF(bc,ba.implement[i]);
}}{};
if(ba.defer){ba.defer.self=bc;
ba.defer(bc,bc.prototype,{add:function(name,bA){var bB={};
bB[name]=bA;
qx.Class.__bB(bc,bB,true);
}});
}return bc;
},undefine:function(name){delete this.$$registry[name];
var K=name.split(s);
var M=[window];

for(var i=0;i<K.length;i++){M.push(M[i][K[i]]);
}for(var i=M.length-1;i>=1;i--){var L=M[i];
var parent=M[i-1];

if(qx.Bootstrap.isFunction(L)||qx.Bootstrap.objectGetLength(L)===0){delete parent[K[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bU,bV){{};
qx.Class.__bH(bU,bV,false);
},patch:function(bD,bE){{};
qx.Class.__bH(bD,bE,true);
},isSubClassOf:function(N,O){if(!N){return false;
}
if(N==O){return true;
}
if(N.prototype instanceof O){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(I){var J=[];

while(I){if(I.$$properties){J.push.apply(J,qx.Bootstrap.getKeys(I.$$properties));
}I=I.superclass;
}return J;
},getByProperty:function(P,name){while(P){if(P.$$properties&&P.$$properties[name]){return P;
}P=P.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(b,c){return b.$$includes&&b.$$includes.indexOf(c)!==-1;
},getByMixin:function(bN,bO){var bP,i,l;

while(bN){if(bN.$$includes){bP=bN.$$flatIncludes;

for(i=0,l=bP.length;i<l;i++){if(bP[i]===bO){return bN;
}}}bN=bN.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bW,bX){return !!this.getByMixin(bW,bX);
},hasOwnInterface:function(bS,bT){return bS.$$implements&&bS.$$implements.indexOf(bT)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bQ){var bR=[];

while(bQ){if(bQ.$$implements){bR.push.apply(bR,bQ.$$flatImplements);
}bQ=bQ.superclass;
}return bR;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ch,ci){var cj=ch.constructor;

if(this.hasInterface(cj,ci)){return true;
}
try{qx.Interface.assertObject(ch,ci);
return true;
}catch(Q){}
try{qx.Interface.assert(cj,ci,false);
return true;
}catch(bC){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return C+this.classname+B;
},$$registry:qx.Bootstrap.$$registry,__bv:null,__bw:null,__bx:function(){},__by:function(){},__bz:function(name,bk,bl,bm,bn,bo,bp){var bs;

if(!bl&&true){bs=bm||{};
qx.Bootstrap.setDisplayNames(bs,name);
}else{var bs={};

if(bl){if(!bn){bn=this.__bI();
}
if(this.__bK(bl,bp)){bs=this.__bL(bn,name,bk);
}else{bs=bn;
}if(bk===x){bs.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bn,name,y);
}if(bm){qx.Bootstrap.setDisplayNames(bm,name);
var bt;

for(var i=0,a=qx.Bootstrap.getKeys(bm),l=a.length;i<l;i++){bt=a[i];
var bq=bm[bt];
{bs[bt]=bq;
};
}}}var br=qx.Bootstrap.createNamespace(name,bs);
bs.name=bs.classname=name;
bs.basename=br;
bs.$$type=u;

if(bk){bs.$$classtype=bk;
}if(!bs.hasOwnProperty(z)){bs.toString=this.genericToString;
}
if(bl){qx.Bootstrap.extendClass(bs,bn,bl,name,br);
if(bo){{};
bs.$$destructor=bo;
qx.Bootstrap.setDisplayName(bo,name,t);
}}this.$$registry[name]=bs;
return bs;
},__bA:function(bJ,bK,bL){var bM,bM;
{};

if(bJ.$$events){for(var bM in bK){bJ.$$events[bM]=bK[bM];
}}else{bJ.$$events=bK;
}},__bB:function(D,E,F){var G;

if(F===undefined){F=false;
}var H=D.prototype;

for(var name in E){G=E[name];
{};
G.name=name;
if(!G.refine){if(D.$$properties===undefined){D.$$properties={};
}D.$$properties[name]=G;
}if(G.init!==undefined){D.prototype[A+name]=G.init;
}if(G.event!==undefined){var event={};
event[G.event]=p;
this.__bA(D,event,F);
}if(G.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!H.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(D);
}}
if(!G.refine){qx.core.Property.attachMethods(D,name,G);
}}},__bC:null,__bD:function(R,S,T,U,V){var W=R.prototype;
var Y,X;
qx.Bootstrap.setDisplayNames(S,R.classname+w);

for(var i=0,a=qx.Bootstrap.getKeys(S),l=a.length;i<l;i++){Y=a[i];
X=S[Y];
{};
if(U!==false&&X instanceof Function&&X.$$type==null){if(V==true){X=this.__bE(X,W[Y]);
}else{if(W[Y]){X.base=W[Y];
}X.self=R;
}{};
}W[Y]=X;
}},__bE:function(bY,ca){if(ca){return function(){var bf=bY.base;
bY.base=ca;
var be=bY.apply(this,arguments);
bY.base=bf;
return be;
};
}else{return bY;
}},__bF:function(cb,cc){{};
var cd=qx.Interface.flatten([cc]);

if(cb.$$implements){cb.$$implements.push(cc);
cb.$$flatImplements.push.apply(cb.$$flatImplements,cd);
}else{cb.$$implements=[cc];
cb.$$flatImplements=cd;
}},__bG:function(h){var name=h.classname;
var j=this.__bL(h,name,h.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(h),l=a.length;i<l;i++){k=a[i];
j[k]=h[k];
}j.prototype=h.prototype;
var n=h.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(n),l=a.length;i<l;i++){k=a[i];
var o=n[k];
if(o&&o.self==h){o.self=j;
}}for(var k in this.$$registry){var m=this.$$registry[k];

if(!m){continue;
}
if(m.base==h){m.base=j;
}
if(m.superclass==h){m.superclass=j;
}
if(m.$$original){if(m.$$original.base==h){m.$$original.base=j;
}
if(m.$$original.superclass==h){m.$$original.superclass=j;
}}}qx.Bootstrap.createNamespace(name,j);
this.$$registry[name]=j;
return j;
},__bH:function(bu,bv,bw){{};

if(this.hasMixin(bu,bv)){return;
}var bz=bu.$$original;

if(bv.$$constructor&&!bz){bu=this.__bG(bu);
}var by=qx.Mixin.flatten([bv]);
var bx;

for(var i=0,l=by.length;i<l;i++){bx=by[i];
if(bx.$$events){this.__bA(bu,bx.$$events,bw);
}if(bx.$$properties){this.__bB(bu,bx.$$properties,bw);
}if(bx.$$members){this.__bD(bu,bx.$$members,bw,bw,bw);
}}if(bu.$$includes){bu.$$includes.push(bv);
bu.$$flatIncludes.push.apply(bu.$$flatIncludes,by);
}else{bu.$$includes=[bv];
bu.$$flatIncludes=by;
}},__bI:function(){function g(){g.base.apply(this,arguments);
}return g;
},__bJ:function(){return function(){};
},__bK:function(bF,bG){{};
if(bF&&bF.$$includes){var bH=bF.$$flatIncludes;

for(var i=0,l=bH.length;i<l;i++){if(bH[i].$$constructor){return true;
}}}if(bG){var bI=qx.Mixin.flatten(bG);

for(var i=0,l=bI.length;i<l;i++){if(bI[i].$$constructor){return true;
}}}return false;
},__bL:function(bg,name,bh){var bi;
var bj=function(){var f=bj;
{};
var e=f.$$original.apply(this,arguments);
if(f.$$includes){var d=f.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){d[i].$$constructor.apply(this,arguments);
}}}{};
return e;
};
{};
bj.$$original=bg;
bg.wrapper=bj;
return bj;
}},defer:function(){var ce,cf,cg;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dL:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__dL();
}});
})();
(function(){var y="on",x="off",w="|",u="default",t="object",s="&",r="qx.aspects",q="$",p="qx.allowUrlVariants",o="qx.debug",g="qx.client",n="qx.dynlocale",k="webkit",f="qxvariant",e="opera",j=":",h="qx.core.Variant",m="mshtml",d="gecko";
qx.Bootstrap.define(h,{statics:{__jH:{},__jI:{},compilerIsSet:function(){return true;
},define:function(J,K,L){{};

if(!this.__jH[J]){this.__jH[J]={};
}else{}this.__jH[J].allowedValues=K;
this.__jH[J].defaultValue=L;
},get:function(H){var I=this.__jH[H];
{};

if(I.value!==undefined){return I.value;
}return I.defaultValue;
},__jJ:function(){if(window.qxvariants){for(var F in qxvariants){{};

if(!this.__jH[F]){this.__jH[F]={};
}this.__jH[F].value=qxvariants[F];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(E){}this.__jK(this.__jH);
}},__jK:function(){if(qx.core.Setting.get(p)!=true){return;
}var a=document.location.search.slice(1).split(s);

for(var i=0;i<a.length;i++){var b=a[i].split(j);

if(b.length!=3||b[0]!=f){continue;
}var c=b[1];

if(!this.__jH[c]){this.__jH[c]={};
}this.__jH[c].value=decodeURIComponent(b[2]);
}},select:function(z,A){{};

for(var B in A){if(this.isSet(z,B)){return A[B];
}}
if(A[u]!==undefined){return A[u];
}{};
},isSet:function(M,N){var O=M+q+N;

if(this.__jI[O]!==undefined){return this.__jI[O];
}var Q=false;
if(N.indexOf(w)<0){Q=this.get(M)===N;
}else{var P=N.split(w);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__jI[O]=Q;
return Q;
},__jL:function(v){return typeof v===t&&v!==null&&v instanceof Array;
},__jM:function(v){return typeof v===t&&v!==null&&!(v instanceof Array);
},__jN:function(C,D){for(var i=0,l=C.length;i<l;i++){if(C[i]==D){return true;
}}return false;
}},defer:function(G){G.define(g,[d,m,e,k],qx.bom.client.Engine.NAME);
G.define(o,[y,x],y);
G.define(r,[y,x],x);
G.define(n,[y,x],y);
G.__jJ();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){j.attachEvent(h+k,l);
},"default":function(s,t,u){s.addEventListener(t,u,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(v,w,x){try{v.detachEvent(h+w,x);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(m,n,o){m.removeEventListener(n,o,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(y){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(z,A){return z.hasOwnProperty(h+A);
},"default":function(B,C){var D=h+C;
var E=(D in B);

if(!E){E=typeof B[D]==g;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==g;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var q="|bubble",p="|capture",o="|",n="",m="_",k="unload",j="__eG",h="UNKNOWN_",g="c",f="DOM_",c="WIN_",e="capture",d="qx.event.Manager",b="__eF",a="QX_";
qx.Class.define(d,{extend:Object,construct:function(ba,bb){this.__eB=ba;
this.__eC=qx.core.ObjectRegistry.toHashCode(ba);
this.__eD=bb;
if(ba.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(ba,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(ba,k,arguments.callee);
self.dispose();
}));
}this.__eE={};
this.__eF={};
this.__eG={};
this.__eH={};
},statics:{__eI:0,getNextUniqueId:function(){return (this.__eI++)+n;
}},members:{__eD:null,__eE:null,__eG:null,__eJ:null,__eF:null,__eH:null,__eB:null,__eC:null,getWindow:function(){return this.__eB;
},getWindowId:function(){return this.__eC;
},getHandler:function(X){var Y=this.__eF[X.classname];

if(Y){return Y;
}return this.__eF[X.classname]=new X(this);
},getDispatcher:function(bM){var bN=this.__eG[bM.classname];

if(bN){return bN;
}return this.__eG[bM.classname]=new bM(this,this.__eD);
},getListeners:function(v,w,x){var y=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var A=this.__eE[y];

if(!A){return null;
}var B=w+(x?p:q);
var z=A[B];
return z?z.concat():null;
},serializeListeners:function(ca){var ch=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cj=this.__eE[ch];
var cf=[];

if(cj){var cd,ci,cb,ce,cg;

for(var cc in cj){cd=cc.indexOf(o);
ci=cc.substring(0,cd);
cb=cc.charAt(cd+1)==g;
ce=cj[cc];

for(var i=0,l=ce.length;i<l;i++){cg=ce[i];
cf.push({self:cg.context,handler:cg.handler,type:ci,capture:cb});
}}}return cf;
},toggleAttachedEvents:function(cx,cy){var cD=cx.$$hash||qx.core.ObjectRegistry.toHashCode(cx);
var cF=this.__eE[cD];

if(cF){var cA,cE,cz,cB;

for(var cC in cF){cA=cC.indexOf(o);
cE=cC.substring(0,cA);
cz=cC.charCodeAt(cA+1)===99;
cB=cF[cC];

if(cy){this.__eK(cx,cE,cz);
}else{this.__eL(cx,cE,cz);
}}}},hasListener:function(bF,bG,bH){{};
var bI=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bK=this.__eE[bI];

if(!bK){return false;
}var bL=bG+(bH?p:q);
var bJ=bK[bL];
return bJ&&bJ.length>0;
},importListeners:function(co,cp){{};
var cv=co.$$hash||qx.core.ObjectRegistry.toHashCode(co);
var cw=this.__eE[cv]={};
var cs=qx.event.Manager;

for(var cq in cp){var ct=cp[cq];
var cu=ct.type+(ct.capture?p:q);
var cr=cw[cu];

if(!cr){cr=cw[cu]=[];
this.__eK(co,ct.type,ct.capture);
}cr.push({handler:ct.listener,context:ct.self,unique:ct.unique||(cs.__eI++)+n});
}},addListener:function(bO,bP,bQ,self,bR){var bV;
{};
var bW=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);
var bY=this.__eE[bW];

if(!bY){bY=this.__eE[bW]={};
}var bU=bP+(bR?p:q);
var bT=bY[bU];

if(!bT){bT=bY[bU]=[];
}if(bT.length===0){this.__eK(bO,bP,bR);
}var bX=(qx.event.Manager.__eI++)+n;
var bS={handler:bQ,context:self,unique:bX};
bT.push(bS);
return bU+o+bX;
},findHandler:function(K,L){var V=false,O=false,W=false;
var U;

if(K.nodeType===1){V=true;
U=f+K.tagName.toLowerCase()+m+L;
}else if(K==this.__eB){O=true;
U=c+L;
}else if(K.classname){W=true;
U=a+K.classname+m+L;
}else{U=h+K+m+L;
}var Q=this.__eH;

if(Q[U]){return Q[U];
}var T=this.__eD.getHandlers();
var P=qx.event.IEventHandler;
var R,S,N,M;

for(var i=0,l=T.length;i<l;i++){R=T[i];
N=R.SUPPORTED_TYPES;

if(N&&!N[L]){continue;
}M=R.TARGET_CHECK;

if(M){if(!V&&M===P.TARGET_DOMNODE){continue;
}else if(!O&&M===P.TARGET_WINDOW){continue;
}else if(!W&&M===P.TARGET_OBJECT){continue;
}}S=this.getHandler(T[i]);

if(R.IGNORE_CAN_HANDLE||S.canHandleEvent(K,L)){Q[U]=S;
return S;
}}return null;
},__eK:function(r,s,t){var u=this.findHandler(r,s);

if(u){u.registerEvent(r,s,t);
return;
}{};
},removeListener:function(bv,bw,bx,self,by){var bC;
{};
var bD=bv.$$hash||qx.core.ObjectRegistry.toHashCode(bv);
var bE=this.__eE[bD];

if(!bE){return false;
}var bz=bw+(by?p:q);
var bA=bE[bz];

if(!bA){return false;
}var bB;

for(var i=0,l=bA.length;i<l;i++){bB=bA[i];

if(bB.handler===bx&&bB.context===self){qx.lang.Array.removeAt(bA,i);

if(bA.length==0){this.__eL(bv,bw,by);
}return true;
}}return false;
},removeListenerById:function(bj,bk){var bq;
{};
var bo=bk.split(o);
var bt=bo[0];
var bl=bo[1].charCodeAt(0)==99;
var bs=bo[2];
var br=bj.$$hash||qx.core.ObjectRegistry.toHashCode(bj);
var bu=this.__eE[br];

if(!bu){return false;
}var bp=bt+(bl?p:q);
var bn=bu[bp];

if(!bn){return false;
}var bm;

for(var i=0,l=bn.length;i<l;i++){bm=bn[i];

if(bm.unique===bs){qx.lang.Array.removeAt(bn,i);

if(bn.length==0){this.__eL(bj,bt,bl);
}return true;
}}return false;
},removeAllListeners:function(bc){var bg=bc.$$hash||qx.core.ObjectRegistry.toHashCode(bc);
var bi=this.__eE[bg];

if(!bi){return false;
}var be,bh,bd;

for(var bf in bi){if(bi[bf].length>0){be=bf.split(o);
bh=be[0];
bd=be[1]===e;
this.__eL(bc,bh,bd);
}}delete this.__eE[bg];
return true;
},deleteAllListeners:function(C){delete this.__eE[C];
},__eL:function(ck,cl,cm){var cn=this.findHandler(ck,cl);

if(cn){cn.unregisterEvent(ck,cl,cm);
return;
}{};
},dispatchEvent:function(D,event){var I;
{};
var J=event.getType();

if(!event.getBubbles()&&!this.hasListener(D,J)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(D);
}var H=this.__eD.getDispatchers();
var G;
var F=false;

for(var i=0,l=H.length;i<l;i++){G=this.getDispatcher(H[i]);
if(G.canDispatchEvent(D,event,J)){G.dispatchEvent(D,event,J);
F=true;
break;
}}
if(!F){{};
return true;
}var E=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !E;
},dispose:function(){this.__eD.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,b);
qx.util.DisposeUtil.disposeMap(this,j);
this.__eE=this.__eB=this.__eJ=null;
this.__eD=this.__eH=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.parentWindow;
},"default":function(r){if(r.nodeType==null){return r;
}if(r.nodeType!==this.DOCUMENT){r=r.ownerDocument;
}return r.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(p){return !!(p&&p.nodeType===this.DOCUMENT);
},isText:function(f){return !!(f&&f.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(g){if(!g||!g.nodeType){return null;
}
switch(g.nodeType){case 1:var i,a=[],h=g.childNodes,length=h.length;

for(i=0;i<length;i++){a[i]=this.getText(h[i]);
}return a.join(b);
case 2:return g.nodeValue;
break;
case 3:return g.nodeValue;
break;
}return null;
}}});
})();
(function(){var L="mshtml",K="qx.client",J="[object Array]",I="qx.lang.Array",H="qx",G="number",F="string";
qx.Class.define(I,{statics:{toArray:function(B,C){return this.cast(B,Array,C);
},cast:function(t,u,v){if(t.constructor===u){return t;
}
if(qx.Class.hasInterface(t,qx.data.IListData)){var t=t.toArray();
}var w=new u;
if(qx.core.Variant.isSet(K,L)){if(t.item){for(var i=v||0,l=t.length;i<l;i++){w.push(t[i]);
}return w;
}}if(Object.prototype.toString.call(t)===J&&v==null){w.push.apply(w,t);
}else{w.push.apply(w,Array.prototype.slice.call(t,v||0));
}return w;
},fromArguments:function(bc,bd){return Array.prototype.slice.call(bc,bd||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(K,L)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(U){var W=U.length;
var V=qx.lang.Array.clone(U);
switch(W){case 1:V[1]=V[2]=V[3]=V[0];
break;
case 2:V[2]=V[0];
case 3:V[3]=V[1];
}return V;
},clone:function(e){return e.concat();
},insertAt:function(P,Q,i){P.splice(i,0,Q);
return P;
},insertBefore:function(X,Y,ba){var i=X.indexOf(ba);

if(i==-1){X.push(Y);
}else{X.splice(i,0,Y);
}return X;
},insertAfter:function(o,p,q){var i=o.indexOf(q);

if(i==-1||i==(o.length-1)){o.push(p);
}else{o.splice(i+1,0,p);
}return o;
},removeAt:function(bb,i){return bb.splice(i,1)[0];
},removeAll:function(R){R.length=0;
return this;
},append:function(a,b){{};
Array.prototype.push.apply(a,b);
return a;
},exclude:function(f,g){{};

for(var i=0,j=g.length,h;i<j;i++){h=f.indexOf(g[i]);

if(h!=-1){f.splice(h,1);
}}return f;
},remove:function(c,d){var i=c.indexOf(d);

if(i!=-1){c.splice(i,1);
return d;
}},contains:function(S,T){return S.indexOf(T)!==-1;
},equals:function(M,N){var length=M.length;

if(length!==N.length){return false;
}
for(var i=0;i<length;i++){if(M[i]!==N[i]){return false;
}}return true;
},sum:function(D){var E=0;

for(var i=0,l=D.length;i<l;i++){E+=D[i];
}return E;
},max:function(k){{};
var i,n=k.length,m=k[0];

for(i=1;i<n;i++){if(k[i]>m){m=k[i];
}}return m===undefined?null:m;
},min:function(y){{};
var i,A=y.length,z=y[0];

for(i=1;i<A;i++){if(y[i]<z){z=y[i];
}}return z===undefined?null:z;
},unique:function(be){var bo=[],bg={},bj={},bl={};
var bk,bf=0;
var bp=H+qx.lang.Date.now();
var bh=false,bn=false,bq=false;
for(var i=0,bm=be.length;i<bm;i++){bk=be[i];
if(bk===null){if(!bh){bh=true;
bo.push(bk);
}}else if(bk===undefined){}else if(bk===false){if(!bn){bn=true;
bo.push(bk);
}}else if(bk===true){if(!bq){bq=true;
bo.push(bk);
}}else if(typeof bk===F){if(!bg[bk]){bg[bk]=1;
bo.push(bk);
}}else if(typeof bk===G){if(!bj[bk]){bj[bk]=1;
bo.push(bk);
}}else{bi=bk[bp];

if(bi==null){bi=bk[bp]=bf++;
}
if(!bl[bi]){bl[bi]=bk;
bo.push(bk);
}}}for(var bi in bl){try{delete bl[bi][bp];
}catch(O){try{bl[bi][bp]=null;
}catch(x){throw new Error("Cannot clean-up map entry doneObjects["+bi+"]["+bp+"]");
}}}return bo;
}}});
})();
(function(){var z="()",y=".",x=".prototype.",w='anonymous()',v="qx.lang.Function",u=".constructor()";
qx.Class.define(v,{statics:{getCaller:function(B){return B.caller?B.caller.callee:B.callee.caller;
},getName:function(m){if(m.displayName){return m.displayName;
}
if(m.$$original||m.wrapper||m.classname){return m.classname+u;
}
if(m.$$mixin){for(var o in m.$$mixin.$$members){if(m.$$mixin.$$members[o]==m){return m.$$mixin.name+x+o+z;
}}for(var o in m.$$mixin){if(m.$$mixin[o]==m){return m.$$mixin.name+y+o+z;
}}}
if(m.self){var p=m.self.constructor;

if(p){for(var o in p.prototype){if(p.prototype[o]==m){return p.classname+x+o+z;
}}for(var o in p){if(p[o]==m){return p.classname+y+o+z;
}}}}var n=m.toString().match(/function\s*(\w*)\s*\(.*/);

if(n&&n.length>=1&&n[1]){return n[1]+z;
}return w;
},globalEval:function(A){if(window.execScript){return window.execScript(A);
}else{return eval.call(window,A);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(j,k){{};
if(!k){return j;
}if(!(k.self||k.args||k.delay!=null||k.periodical!=null||k.attempt)){return j;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(k.args){G=k.args.concat(G);
}
if(k.delay||k.periodical){var F=qx.event.GlobalError.observeMethod(function(){return j.apply(k.self||this,G);
});

if(k.delay){return window.setTimeout(F,k.delay);
}
if(k.periodical){return window.setInterval(F,k.periodical);
}}else if(k.attempt){var H=false;

try{H=j.apply(k.self||this,G);
}catch(q){}return H;
}else{return j.apply(k.self||this,G);
}};
},bind:function(c,self,d){return this.create(c,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(C,self,D){if(arguments.length<3){return function(event){return C.call(self||this,event||window.event);
};
}else{var E=qx.lang.Array.fromArguments(arguments,2);
return function(event){var l=[event||window.event];
l.push.apply(l,E);
C.apply(self||this,l);
};
}},attempt:function(h,self,i){return this.create(h,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(r,s,self,t){return this.create(r,{delay:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(e,f,self,g){return this.create(e,{periodical:f,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__eq:{},getManager:function(K){if(K==null){{};
K=window;
}else if(K.nodeType){K=qx.dom.Node.getWindow(K);
}else if(!qx.dom.Node.isWindow(K)){K=window;
}var M=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var L=this.__eq[M];

if(!L){L=new qx.event.Manager(K,this);
this.__eq[M]=L;
}return L;
},removeManager:function(R){var S=R.getWindowId();
delete this.__eq[S];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(h,i,j,self,k){return this.getManager(h).removeListener(h,i,j,self,k);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(I){return this.getManager(I).removeAllListeners(I);
},deleteAllListeners:function(p){var q=p.$$hash;

if(q){this.getManager(p).deleteAllListeners(q);
}},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(g){return this.getManager(g).serializeListeners(g);
},createEvent:function(l,m,n){{};
if(m==null){m=qx.event.type.Event;
}var o=qx.event.Pool.getInstance().getObject(m);
n?o.init.apply(o,n):o.init();
if(l){o.setType(l);
}return o;
},dispatchEvent:function(J,event){return this.getManager(J).dispatchEvent(J,event);
},fireEvent:function(x,y,z,A){var B;
{};
var C=this.createEvent(y,z||null,A);
return this.getManager(x).dispatchEvent(x,C);
},fireNonBubblingEvent:function(r,s,t,u){{};
var v=this.getManager(r);

if(!v.hasListener(r,s,false)){return true;
}var w=this.createEvent(s,t||null,u);
return v.dispatchEvent(r,w);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__er:[],addHandler:function(F){{};
this.__er.push(F);
this.__er.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__er;
},__es:[],addDispatcher:function(D,E){{};
this.__es.push(D);
this.__es.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__es;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__gY:{},__ha:0,__hb:[],register:function(u){var x=this.__gY;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__hb;

if(v.length>0){w=v.pop();
}else{w=(this.__ha++)+d;
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__gY;

if(p&&p[o]){delete p[o];
this.__hb.push(o);
}try{delete n.$$hash;
}catch(k){if(n.removeAttribute){n.removeAttribute(e);
}}},toHashCode:function(y){{};
var A=y.$$hash;

if(A!=null){return A;
}var z=this.__hb;

if(z.length>0){A=z.pop();
}else{A=(this.__ha++)+d;
}return y.$$hash=A;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__hb.push(j);
try{delete h.$$hash;
}catch(g){if(h.removeAttribute){h.removeAttribute(e);
}}}},fromHashCode:function(f){return this.__gY[f]||null;
},shutdown:function(){this.inShutDown=true;
var r=this.__gY;
var t=[];

for(var s in r){t.push(s);
}t.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var q,i=0,l=t.length;

while(true){try{for(;i<l;i++){s=t[i];
q=r[s];

if(q&&q.dispose){q.dispose();
}}}catch(m){qx.Bootstrap.error(this,"Could not dispose object "+q.toString()+": "+m);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__gY;
},getRegistry:function(){return this.__gY;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q=":",p="qx.client",o="anonymous",n="...",m="qx.dev.StackTrace",l="",k="\n",j="/source/class/",h=".";
qx.Class.define(m,{statics:{getStackTrace:qx.core.Variant.select(p,{"gecko":function(){try{throw new Error();
}catch(X){var D=this.getStackTraceFromError(X);
qx.lang.Array.removeAt(D,0);
var B=this.getStackTraceFromCaller(arguments);
var z=B.length>D.length?B:D;

for(var i=0;i<Math.min(B.length,D.length);i++){var A=B[i];

if(A.indexOf(o)>=0){continue;
}var H=A.split(q);

if(H.length!=2){continue;
}var F=H[0];
var y=H[1];
var x=D[i];
var I=x.split(q);
var E=I[0];
var w=I[1];

if(qx.Class.getByName(E)){var C=E;
}else{C=F;
}var G=C+q;

if(y){G+=y+q;
}G+=w;
z[i]=G;
}return z;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var ba;

try{ba.bar();
}catch(W){var bb=this.getStackTraceFromError(W);
qx.lang.Array.removeAt(bb,0);
return bb;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(v){return [];
},"default":function(J){var O=[];
var N=qx.lang.Function.getCaller(J);
var K={};

while(N){var L=qx.lang.Function.getName(N);
O.push(L);

try{N=N.caller;
}catch(Y){break;
}
if(!N){break;
}var M=qx.core.ObjectRegistry.toHashCode(N);

if(K[M]){O.push(n);
break;
}K[M]=N;
}return O;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__jB(S);
R.push(T+q+U);
}return R;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__jB(bc.sourceURL)+q+bc.line];
}else{return [];
}},"opera":function(a){if(a.message.indexOf("Backtrace:")<0){return [];
}var c=[];
var d=qx.lang.String.trim(a.message.split("Backtrace:")[1]);
var e=d.split(k);

for(var i=0;i<e.length;i++){var b=e[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(b&&b.length>=2){var g=b[1];
var f=this.__jB(b[2]);
c.push(f+q+g);
}}return c;
},"default":function(){return [];
}}),__jB:function(r){var u=j;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,h).replace(/\.js$/,l);
return t;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__ke=[];
this.setMaxMessages(i||50);
},members:{__kf:0,__ke:null,__kg:50,setMaxMessages:function(b){this.__kg=b;
this.clearHistory();
},getMaxMessages:function(){return this.__kg;
},process:function(c){var d=this.getMaxMessages();

if(this.__ke.length<d){this.__ke.push(c);
}else{this.__ke[this.__kf++]=c;

if(this.__kf>=d){this.__kf=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(e){if(e>this.__ke.length){e=this.__ke.length;
}
if(this.__ke.length==this.getMaxMessages()){var g=this.__kf-1;
}else{g=this.__ke.length-1;
}var f=g-e+1;

if(f<0){f+=this.__ke.length;
}var h;

if(f<=g){h=this.__ke.slice(f,g+1);
}else{h=this.__ke.slice(f,this.__ke.length).concat(this.__ke.slice(0,g+1));
}return h;
},clearHistory:function(){this.__ke=[];
this.__kf=0;
}}});
})();
(function(){var U="node",T="error",S="...(+",R="array",Q=")",P="info",O="instance",N="string",M="null",L="class",bq="number",bp="stringify",bo="]",bn="unknown",bm="function",bl="boolean",bk="debug",bj="map",bi="undefined",bh="qx.log.Logger",bc=")}",bd="#",ba="warn",bb="document",X="{...(",Y="[",V="text[",W="[...(",be="\n",bf=")]",bg="object";
qx.Class.define(bh,{statics:{__et:bk,setLevel:function(d){this.__et=d;
},getLevel:function(){return this.__et;
},setTreshold:function(H){this.__ew.setMaxMessages(H);
},getTreshold:function(){return this.__ew.getMaxMessages();
},__eu:{},__ev:0,register:function(bN){if(bN.$$id){return;
}var bO=this.__ev++;
this.__eu[bO]=bN;
bN.$$id=bO;
var bP=this.__ew.getAllLogEvents();

for(var i=0,l=bP.length;i<l;i++){bN.process(bP[i]);
}},unregister:function(s){var t=s.$$id;

if(t==null){return;
}delete this.__eu[t];
delete s.$$id;
},debug:function(u,v){qx.log.Logger.__ey(bk,arguments);
},info:function(w,x){qx.log.Logger.__ey(P,arguments);
},warn:function(k,m){qx.log.Logger.__ey(ba,arguments);
},error:function(I,J){qx.log.Logger.__ey(T,arguments);
},trace:function(K){qx.log.Logger.__ey(P,[K,qx.dev.StackTrace.getStackTrace().join(be)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bK,bL){var bM;
{};
},deprecatedEventWarning:function(n,event,o){var p;
{};
},deprecatedMixinWarning:function(E,F){var G;
{};
},deprecatedConstantWarning:function(A,B,C){var self,D;
{};
},deprecateMethodOverriding:function(e,f,g,h){var j;
{};
},clear:function(){this.__ew.clearHistory();
},__ew:new qx.log.appender.RingBuffer(50),__ex:{debug:0,info:1,warn:2,error:3},__ey:function(bA,bB){var bG=this.__ex;

if(bG[bA]<bG[this.__et]){return;
}var bD=bB.length<2?null:bB[0];
var bF=bD?1:0;
var bC=[];

for(var i=bF,l=bB.length;i<l;i++){bC.push(this.__eA(bB[i],true));
}var bH=new Date;
var bI={time:bH,offset:bH-qx.Bootstrap.LOADSTART,level:bA,items:bC,win:window};
if(bD){if(bD instanceof qx.core.Object){bI.object=bD.$$hash;
}else if(bD.$$type){bI.clazz=bD;
}}this.__ew.process(bI);
var bJ=this.__eu;

for(var bE in bJ){bJ[bE].process(bI);
}},__ez:function(y){if(y===undefined){return bi;
}else if(y===null){return M;
}
if(y.$$type){return L;
}var z=typeof y;

if(z===bm||z==N||z===bq||z===bl){return z;
}else if(z===bg){if(y.nodeType){return U;
}else if(y.classname){return O;
}else if(y instanceof Array){return R;
}else if(y instanceof Error){return T;
}else{return bj;
}}
if(y.toString){return bp;
}return bn;
},__eA:function(br,bs){var bz=this.__ez(br);
var bv=bn;
var bu=[];

switch(bz){case M:case bi:bv=bz;
break;
case N:case bq:case bl:bv=br;
break;
case U:if(br.nodeType===9){bv=bb;
}else if(br.nodeType===3){bv=V+br.nodeValue+bo;
}else if(br.nodeType===1){bv=br.nodeName.toLowerCase();

if(br.id){bv+=bd+br.id;
}}else{bv=U;
}break;
case bm:bv=qx.lang.Function.getName(br)||bz;
break;
case O:bv=br.basename+Y+br.$$hash+bo;
break;
case L:case bp:bv=br.toString();
break;
case T:bu=qx.dev.StackTrace.getStackTraceFromError(br);
bv=br.toString();
break;
case R:if(bs){bv=[];

for(var i=0,l=br.length;i<l;i++){if(bv.length>20){bv.push(S+(l-i)+Q);
break;
}bv.push(this.__eA(br[i],false));
}}else{bv=W+br.length+bf;
}break;
case bj:if(bs){var bt;
var by=[];

for(var bx in br){by.push(bx);
}by.sort();
bv=[];

for(var i=0,l=by.length;i<l;i++){if(bv.length>20){bv.push(S+(l-i)+Q);
break;
}bx=by[i];
bt=this.__eA(br[bx],false);
bt.key=bx;
bv.push(bt);
}}else{var bw=0;

for(var bx in br){bw++;
}bv=X+bw+bc;
}break;
}return {type:bz,text:bv,trace:bu};
}},defer:function(q){var r=qx.Bootstrap.$$logs;

for(var i=0;i<r.length;i++){q.__ey(r[i][0],r[i][1]);
}qx.Bootstrap.debug=q.debug;
qx.Bootstrap.info=q.info;
qx.Bootstrap.warn=q.warn;
qx.Bootstrap.error=q.error;
qx.Bootstrap.trace=q.trace;
}});
})();
(function(){var bu="set",bt="get",bs="reset",br="MSIE 6.0",bq="qx.core.Object",bp="]",bo="rv:1.8.1",bn="[",bm="$$user_",bl="Object";
qx.Class.define(bq,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bl},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bn+this.$$hash+bp;
},base:function(E,F){{};

if(arguments.length===1){return E.callee.base.call(this);
}else{return E.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(Y){return Y.callee.self;
},clone:function(){var b=this.constructor;
var a=new b;
var d=qx.Class.getProperties(b);
var c=qx.core.Property.$$store.user;
var f=qx.core.Property.$$method.set;
var name;
for(var i=0,l=d.length;i<l;i++){name=d[i];

if(this.hasOwnProperty(c[name])){a[f[name]](this[c[name]]);
}}return a;
},set:function(N,O){var Q=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(N)){if(!this[Q[N]]){if(this[bu+qx.Bootstrap.firstUp(N)]!=undefined){this[bu+qx.Bootstrap.firstUp(N)](O);
return;
}{};
}return this[Q[N]](O);
}else{for(var P in N){if(!this[Q[P]]){if(this[bu+qx.Bootstrap.firstUp(P)]!=undefined){this[bu+qx.Bootstrap.firstUp(P)](N[P]);
continue;
}{};
}this[Q[P]](N[P]);
}return this;
}},get:function(R){var S=qx.core.Property.$$method.get;

if(!this[S[R]]){if(this[bt+qx.Bootstrap.firstUp(R)]!=undefined){return this[bt+qx.Bootstrap.firstUp(R)]();
}{};
}return this[S[R]]();
},reset:function(s){var t=qx.core.Property.$$method.reset;

if(!this[t[s]]){if(this[bs+qx.Bootstrap.firstUp(s)]!=undefined){this[bs+qx.Bootstrap.firstUp(s)]();
return;
}{};
}this[t[s]]();
},__kh:qx.event.Registration,addListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__kh.addListener(this,bv,bw,self,bx);
}return null;
},addListenerOnce:function(g,h,self,j){var k=function(e){h.call(self||this,e);
this.removeListener(g,k,this,j);
};
return this.addListener(g,k,this,j);
},removeListener:function(K,L,self,M){if(!this.$$disposed){return this.__kh.removeListener(this,K,L,self,M);
}return false;
},removeListenerById:function(W){if(!this.$$disposed){return this.__kh.removeListenerById(this,W);
}return false;
},hasListener:function(bF,bG){return this.__kh.hasListener(this,bF,bG);
},dispatchEvent:function(bH){if(!this.$$disposed){return this.__kh.dispatchEvent(this,bH);
}return true;
},fireEvent:function(bC,bD,bE){if(!this.$$disposed){return this.__kh.fireEvent(this,bC,bD,bE);
}return true;
},fireNonBubblingEvent:function(T,U,V){if(!this.$$disposed){return this.__kh.fireNonBubblingEvent(this,T,U,V);
}return true;
},fireDataEvent:function(n,o,p,q){if(!this.$$disposed){if(p===undefined){p=null;
}return this.__kh.fireNonBubblingEvent(this,n,qx.event.type.Data,[o,p,!!q]);
}return true;
},__ki:null,setUserData:function(G,H){if(!this.__ki){this.__ki={};
}this.__ki[G]=H;
},getUserData:function(u){if(!this.__ki){return null;
}var v=this.__ki[u];
return v===undefined?null:v;
},__kj:qx.log.Logger,debug:function(D){this.__kj.debug(this,D);
},info:function(I){this.__kj.info(this,I);
},warn:function(ba){this.__kj.warn(this,ba);
},error:function(X){this.__kj.error(this,X);
},trace:function(){this.__kj.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var A,y,x,B;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var z=this.constructor;
var w;

while(z.superclass){if(z.$$destructor){z.$$destructor.call(this);
}if(z.$$includes){w=z.$$flatIncludes;

for(var i=0,l=w.length;i<l;i++){if(w[i].$$destructor){w[i].$$destructor.call(this);
}}}z=z.superclass;
}if(this.__kk){this.__kk();
}{};
},__kk:null,__kl:function(){var bk=qx.Class.getProperties(this.constructor);

for(var i=0,l=bk.length;i<l;i++){delete this[bm+bk[i]];
}},_disposeFields:function(J){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(m){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bb){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(C){qx.util.DisposeUtil.disposeArray(this,C);
},_disposeMap:function(r){qx.util.DisposeUtil.disposeMap(this,r);
}},settings:{"qx.disposerDebugLevel":0},defer:function(by,bz){{};
var bB=navigator.userAgent.indexOf(br)!=-1;
var bA=navigator.userAgent.indexOf(bo)!=-1;
if(bB||bA){bz.__kk=bz.__kl;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__ki=null;
var be=this.constructor;
var bi;
var bj=qx.core.Property.$$store;
var bg=bj.user;
var bh=bj.theme;
var bc=bj.inherit;
var bf=bj.useinit;
var bd=bj.init;

while(be){bi=be.$$properties;

if(bi){for(var name in bi){if(bi[name].dispose||bi[name].dereference){this[bg[name]]=this[bh[name]]=this[bc[name]]=this[bf[name]]=this[bd[name]]=undefined;
}}}be=be.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,f){this.__jk=d||null;
this.__jl=f||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var g=qx.Bootstrap.bind(this.__jn,this);

if(this.__jm==null){this.__jm=window.onerror;
}var self=this;
window.onerror=function(e){self.__jm(e);
g(e);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jn,this);
}if(this.__jk==null){if(this.__jm!=null){window.onerror=this.__jm;
this.__jm=null;
}else{window.onerror=null;
}}}},__jn:function(j,k,l){if(this.__jk){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__jk){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(h){if(this.__jk){this.__jk.call(this.__jl,h);
}}},defer:function(i){qx.core.Setting.define(c,b);
i.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="gecko|opera|webkit",d="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){qx.core.Object.call(this);
this._window=x.getWindow();
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gV();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(u,v,w){},unregisterEvent:function(r,s,t){},__gT:null,__gR:null,__gS:null,__gU:null,__gV:function(){if(!this.__gT&&this.__gR&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__gR=true;
this.__gV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,f)){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(a){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gR=true;
this.__gV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gU){this.__gU=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this._manager=h;
this._window=h.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(i,j,k){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var c=qx.event.handler.Window.SUPPORTED_TYPES;

for(var b in c){qx.bom.Event.addNativeListener(this._window,b,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(l){qx.event.Registration.addHandler(l);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(j){qx.event.Registration.addDispatcher(j);
}});
})();
(function(){var i="ready",h="qx.application",g="beforeunload",f="qx.core.Init",d="shutdown";
qx.Class.define(f,{statics:{getApplication:function(){return this.__jh||null;
},ready:function(){if(this.__jh){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(h);
var c=qx.Class.getByName(b);

if(c){this.__jh=new c;
var a=new Date;
this.__jh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__jh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__ji:function(e){var k=this.__jh;

if(k){e.setReturnValue(k.close());
}},__jj:function(){var j=this.__jh;

if(j){j.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,i,l.ready,l);
qx.event.Registration.addListener(window,d,l.__jj,l);
qx.event.Registration.addListener(window,g,l.__ji,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(k,l){var m=qx.locale.Manager;

if(m){return m.tr.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(b,c,d,e){var f=qx.locale.Manager;

if(f){return f.trn.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__lM:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__lM;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__lM=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__lM=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var r="execute",q="icon/16/mimetypes/",p="name",o="model",n="model.items",m="demobrowser.demo.data.OwnCodeInModel",l=".png",k="json/list.json",j="type",i="Using the delegation to bring two sort function to the root model ",e="Sort By Name",h="items",g="class of this demo. The buttons just calling those sort functions.",d="<b>Adding own code to the model</b><br/>",c="demobrowser.demo.data.ItemsMixin",f="Sort By Type";
qx.Class.define(m,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var x=new qx.ui.form.List();
this.getRoot().add(x,{left:10,top:80});
var A=new qx.data.controller.List(null,x);
A.setLabelPath(p);
A.setIconOptions({converter:function(u){return q+u+l;
}});
A.setIconPath(j);
var B={getModelMixins:function(s){if(s==h){return demobrowser.demo.data.ItemsMixin;
}}};
var w=k;
var D=new qx.data.store.Json(w,B);
D.bind(n,A,o);
var C=new qx.ui.form.Button(f);
C.setWidth(120);
this.getRoot().add(C,{left:130,top:80});
C.addListener(r,function(){D.getModel().sortByType();
},this);
var z=new qx.ui.form.Button(e);
z.setWidth(120);
this.getRoot().add(z,{left:130,top:110});
z.addListener(r,function(){D.getModel().sortByName();
},this);
var y=new qx.ui.basic.Label();
y.setRich(true);
y.setWidth(410);
y.setValue(d+i+g);
this.getRoot().add(y,{left:10,top:10});
}}});
qx.Mixin.define(c,{members:{sortByType:function(){var v=this.getItems();
v.sort(function(a,b){if(a.getType()>b.getType()){return 1;
}else if(a.getType()<b.getType()){return -1;
}else{return 0;
}});
},sortByName:function(){var t=this.getItems();
t.sort(function(a,b){return a.getName()>b.getName()?1:-1;
});
}}});
})();
(function(){var g="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(h,i){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!h;
this._cancelable=!!i;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(l){this._type=l;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(b){this._relatedTarget=b;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(m){this._originalTarget=m;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(k){this._bubbles=k;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(j){this._cancelable=j;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__iB:null,__iC:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__iB=d;
this.__iC=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__iB=this.__iB;
c.__iC=this.__iC;
return c;
},getData:function(){return this.__iB;
},getOldData:function(){return this.__iC;
}},destruct:function(){this.__iB=this.__iC=null;
}});
})();
(function(){var cv="get",cu="",ct="[",cs="last",cr="change",cq="]",cp=".",co="Number",cn="String",cm="set",cK="deepBinding",cJ="item",cI="reset",cH="' (",cG="Boolean",cF=") to the object '",cE="Integer",cD="qx.data.SingleValueBinding",cC="No event could be found for the property",cB="Binding from '",cz="PositiveNumber",cA="PositiveInteger",cx="Binding does not exist!",cy=").",cw="Date";
qx.Class.define(cD,{statics:{DEBUG_ON:false,__fo:{},bind:function(v,w,x,y,z){var J=this.__fq(v,w,x,y,z);
var E=w.split(cp);
var B=this.__fx(E);
var I=[];
var F=[];
var G=[];
var C=[];
var D=v;
for(var i=0;i<E.length;i++){if(B[i]!==cu){C.push(cr);
}else{C.push(this.__fs(D,E[i]));
}I[i]=D;
if(i==E.length-1){if(B[i]!==cu){var M=B[i]===cs?D.length-1:B[i];
var A=D.getItem(M);
this.__fw(A,x,y,z,v);
G[i]=this.__fy(D,C[i],x,y,z,B[i]);
}else{if(E[i]!=null&&D[cv+qx.lang.String.firstUp(E[i])]!=null){var A=D[cv+qx.lang.String.firstUp(E[i])]();
this.__fw(A,x,y,z,v);
}G[i]=this.__fy(D,C[i],x,y,z);
}}else{var K={index:i,propertyNames:E,sources:I,listenerIds:G,arrayIndexValues:B,targetObject:x,targetPropertyChain:y,options:z,listeners:F};
var H=qx.lang.Function.bind(this.__fp,this,K);
F.push(H);
G[i]=D.addListener(C[i],H);
}if(D[cv+qx.lang.String.firstUp(E[i])]==null){D=null;
}else if(B[i]!==cu){D=D[cv+qx.lang.String.firstUp(E[i])](B[i]);
}else{D=D[cv+qx.lang.String.firstUp(E[i])]();
}
if(!D){break;
}}var L={type:cK,listenerIds:G,sources:I,targetListenerIds:J.listenerIds,targets:J.targets};
this.__fz(L,v,w,x,y);
return L;
},__fp:function(bz){if(bz.options&&bz.options.onUpdate){bz.options.onUpdate(bz.sources[bz.index],bz.targetObject);
}for(var j=bz.index+1;j<bz.propertyNames.length;j++){var bD=bz.sources[j];
bz.sources[j]=null;

if(!bD){continue;
}bD.removeListenerById(bz.listenerIds[j]);
}var bD=bz.sources[bz.index];
for(var j=bz.index+1;j<bz.propertyNames.length;j++){if(bz.arrayIndexValues[j-1]!==cu){bD=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j-1])](bz.arrayIndexValues[j-1]);
}else{bD=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j-1])]();
}bz.sources[j]=bD;
if(!bD){this.__ft(bz.targetObject,bz.targetPropertyChain);
break;
}if(j==bz.propertyNames.length-1){if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bE=bz.arrayIndexValues[j]===cs?bD.length-1:bz.arrayIndexValues[j];
var bB=bD.getItem(bE);
this.__fw(bB,bz.targetObject,bz.targetPropertyChain,bz.options,bz.sources[bz.index]);
bz.listenerIds[j]=this.__fy(bD,cr,bz.targetObject,bz.targetPropertyChain,bz.options,bz.arrayIndexValues[j]);
}else{if(bz.propertyNames[j]!=null&&bD[cv+qx.lang.String.firstUp(bz.propertyNames[j])]!=null){var bB=bD[cv+qx.lang.String.firstUp(bz.propertyNames[j])]();
this.__fw(bB,bz.targetObject,bz.targetPropertyChain,bz.options,bz.sources[bz.index]);
}var bC=this.__fs(bD,bz.propertyNames[j]);
bz.listenerIds[j]=this.__fy(bD,bC,bz.targetObject,bz.targetPropertyChain,bz.options);
}}else{if(bz.listeners[j]==null){var bA=qx.lang.Function.bind(this.__fp,this,bz);
bz.listeners.push(bA);
}if(qx.Class.implementsInterface(bD,qx.data.IListData)){var bC=cr;
}else{var bC=this.__fs(bD,bz.propertyNames[j]);
}bz.listenerIds[j]=bD.addListener(bC,bz.listeners[j]);
}}},__fq:function(bb,bc,bd,be,bf){var bj=be.split(cp);
var bh=this.__fx(bj);
var bo=[];
var bn=[];
var bl=[];
var bk=[];
var bi=bd;
for(var i=0;i<bj.length-1;i++){if(bh[i]!==cu){bk.push(cr);
}else{try{bk.push(this.__fs(bi,bj[i]));
}catch(e){break;
}}bo[i]=bi;
var bm=function(){for(var j=i+1;j<bj.length-1;j++){var ck=bo[j];
bo[j]=null;

if(!ck){continue;
}ck.removeListenerById(bl[j]);
}var ck=bo[i];
for(var j=i+1;j<bj.length-1;j++){var ci=qx.lang.String.firstUp(bj[j-1]);
if(bh[j-1]!==cu){var cl=bh[j-1]===cs?ck.getLength()-1:bh[j-1];
ck=ck[cv+ci](cl);
}else{ck=ck[cv+ci]();
}bo[j]=ck;
if(bn[j]==null){bn.push(bm);
}if(qx.Class.implementsInterface(ck,qx.data.IListData)){var cj=cr;
}else{try{var cj=qx.data.SingleValueBinding.__fs(ck,bj[j]);
}catch(e){break;
}}bl[j]=ck.addListener(cj,bn[j]);
}qx.data.SingleValueBinding.__fr(bb,bc,bd,be,bf);
};
bn.push(bm);
bl[i]=bi.addListener(bk[i],bm);
var bg=qx.lang.String.firstUp(bj[i]);
if(bi[cv+bg]==null){bi=null;
}else if(bh[i]!==cu){bi=bi[cv+bg](bh[i]);
}else{bi=bi[cv+bg]();
}
if(!bi){break;
}}return {listenerIds:bl,targets:bo};
},__fr:function(bR,bS,bT,bU,bV){var ca=this.__fv(bR,bS);

if(ca!=null){var cc=bS.substring(bS.lastIndexOf(cp)+1,bS.length);
if(cc.charAt(cc.length-1)==cq){var bW=cc.substring(cc.lastIndexOf(ct)+1,cc.length-1);
var bY=cc.substring(0,cc.lastIndexOf(ct));
var cb=ca[cv+qx.lang.String.firstUp(bY)]();

if(bW==cs){bW=cb.length-1;
}
if(cb!=null){var bX=cb.getItem(bW);
}}else{var bX=ca[cv+qx.lang.String.firstUp(cc)]();
}}bX=qx.data.SingleValueBinding.__fA(bX,bT,bU,bV);
this.__fu(bT,bU,bX);
},__fs:function(cd,ce){var cf=this.__fB(cd,ce);
if(cf==null){if(qx.Class.supportsEvent(cd.constructor,ce)){cf=ce;
}else if(qx.Class.supportsEvent(cd.constructor,cr+qx.lang.String.firstUp(ce))){cf=cr+qx.lang.String.firstUp(ce);
}else{throw new qx.core.AssertionError(cC,ce);
}}return cf;
},__ft:function(r,s){var t=this.__fv(r,s);

if(t!=null){var u=s.substring(s.lastIndexOf(cp)+1,s.length);
if(u.charAt(u.length-1)==cq){this.__fu(r,s,null);
return;
}if(t[cI+qx.lang.String.firstUp(u)]!=undefined){t[cI+qx.lang.String.firstUp(u)]();
}else{t[cm+qx.lang.String.firstUp(u)](null);
}}},__fu:function(a,b,c){var h=this.__fv(a,b);

if(h!=null){var k=b.substring(b.lastIndexOf(cp)+1,b.length);
if(k.charAt(k.length-1)==cq){var d=k.substring(k.lastIndexOf(ct)+1,k.length-1);
var g=k.substring(0,k.lastIndexOf(ct));
var f=h[cv+qx.lang.String.firstUp(g)]();

if(d==cs){d=f.length-1;
}
if(f!=null){f.setItem(d,c);
}}else{h[cm+qx.lang.String.firstUp(k)](c);
}}},__fv:function(l,m){var p=m.split(cp);
var q=l;
for(var i=0;i<p.length-1;i++){try{var o=p[i];
if(o.indexOf(cq)==o.length-1){var n=o.substring(o.indexOf(ct)+1,o.length-1);
o=o.substring(0,o.indexOf(ct));
}q=q[cv+qx.lang.String.firstUp(o)]();

if(n!=null){if(n==cs){n=q.length-1;
}q=q.getItem(n);
n=null;
}}catch(cV){return null;
}}return q;
},__fw:function(cW,cX,cY,da,db){cW=this.__fA(cW,cX,cY,da);
if(cW==null){this.__ft(cX,cY);
}if(cW!=undefined){try{this.__fu(cX,cY,cW);
if(da&&da.onUpdate){da.onUpdate(db,cX,cW);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(da&&da.onSetFail){da.onSetFail(e);
}else{this.warn("Failed so set value "+cW+" on "+cX+". Error message: "+e);
}}}},__fx:function(bO){var bP=[];
for(var i=0;i<bO.length;i++){var name=bO[i];
if(qx.lang.String.endsWith(name,cq)){var bQ=name.substring(name.indexOf(ct)+1,name.indexOf(cq));
if(name.indexOf(cq)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bQ!==cs){if(bQ==cu||isNaN(parseInt(bQ))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(ct)!=0){bO[i]=name.substring(0,name.indexOf(ct));
bP[i]=cu;
bP[i+1]=bQ;
bO.splice(i+1,0,cJ);
i++;
}else{bP[i]=bQ;
bO.splice(i,1,cJ);
}}else{bP[i]=cu;
}}return bP;
},__fy:function(bF,bG,bH,bI,bJ,bK){var bL;
{};
var bN=function(N,e){if(N!==cu){if(N===cs){N=bF.length-1;
}var Q=bF.getItem(N);
if(Q==undefined){qx.data.SingleValueBinding.__ft(bH,bI);
}var O=e.getData().start;
var P=e.getData().end;

if(N<O||N>P){return;
}}else{var Q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bF+" by "+bG+" to "+bH+" ("+bI+")");
qx.log.Logger.debug("Data before conversion: "+Q);
}Q=qx.data.SingleValueBinding.__fA(Q,bH,bI,bJ);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+Q);
}try{if(Q!=undefined){qx.data.SingleValueBinding.__fu(bH,bI,Q);
}else{qx.data.SingleValueBinding.__ft(bH,bI);
}if(bJ&&bJ.onUpdate){bJ.onUpdate(bF,bH,Q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bJ&&bJ.onSetFail){bJ.onSetFail(e);
}else{this.warn("Failed so set value "+Q+" on "+bH+". Error message: "+e);
}}};
if(!bK){bK=cu;
}bN=qx.lang.Function.bind(bN,bF,bK);
var bM=bF.addListener(bG,bN);
return bM;
},__fz:function(bp,bq,br,bs,bt){if(this.__fo[bq.toHashCode()]===undefined){this.__fo[bq.toHashCode()]=[];
}this.__fo[bq.toHashCode()].push([bp,bq,br,bs,bt]);
},__fA:function(cM,cN,cO,cP){if(cP&&cP.converter){var cR;

if(cN.getModel){cR=cN.getModel();
}return cP.converter(cM,cR);
}else{var cT=this.__fv(cN,cO);
var cU=cO.substring(cO.lastIndexOf(cp)+1,cO.length);
if(cT==null){return cM;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?cu:cS.check;
return this.__fC(cM,cQ);
}},__fB:function(dc,dd){var de=qx.Class.getPropertyDefinition(dc.constructor,dd);

if(de==null){return null;
}return de.event;
},__fC:function(V,W){var X=qx.lang.Type.getClass(V);
if((X==co||X==cn)&&(W==cE||W==cA)){V=parseInt(V);
}if((X==cG||X==co||X==cw)&&W==cn){V=V+cu;
}if((X==co||X==cn)&&(W==co||W==cz)){V=parseFloat(V);
}return V;
},removeBindingFromObject:function(bw,bx){if(bx.type==cK){for(var i=0;i<bx.sources.length;i++){if(bx.sources[i]){bx.sources[i].removeListenerById(bx.listenerIds[i]);
}}for(var i=0;i<bx.targets.length;i++){if(bx.targets[i]){bx.targets[i].removeListenerById(bx.targetListenerIds[i]);
}}}else{bw.removeListenerById(bx);
}var by=this.__fo[bw.toHashCode()];
if(by!=undefined){for(var i=0;i<by.length;i++){if(by[i][0]==bx){qx.lang.Array.remove(by,by[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(Y){{};
var ba=this.__fo[Y.toHashCode()];

if(ba!=undefined){for(var i=ba.length-1;i>=0;i--){this.removeBindingFromObject(Y,ba[i][0]);
}}},getAllBindingsForObject:function(cL){if(this.__fo[cL.toHashCode()]===undefined){this.__fo[cL.toHashCode()]=[];
}return this.__fo[cL.toHashCode()];
},removeAllBindings:function(){for(var bv in this.__fo){var bu=qx.core.ObjectRegistry.fromHashCode(bv);
if(bu==null){delete this.__fo[bv];
continue;
}this.removeAllBindingsForObject(bu);
}this.__fo={};
},getAllBindings:function(){return this.__fo;
},showBindingInLog:function(R,S){var U;
for(var i=0;i<this.__fo[R.toHashCode()].length;i++){if(this.__fo[R.toHashCode()][i][0]==S){U=this.__fo[R.toHashCode()][i];
break;
}}
if(U===undefined){var T=cx;
}else{var T=cB+U[1]+cH+U[2]+cF+U[3]+cH+U[4]+cy;
}qx.log.Logger.debug(T);
},showAllBindingsInLog:function(){for(var ch in this.__fo){var cg=qx.core.ObjectRegistry.fromHashCode(ch);

for(var i=0;i<this.__fo[ch].length;i++){this.showBindingInLog(cg,this.__fo[ch][i][0]);
}}}}});
})();
(function(){var m="",l="g",k="0",j='\\$1',h="%",g='-',f="qx.lang.String",e=' ',d='\n',c="undefined";
qx.Class.define(f,{statics:{camelCase:function(A){return A.replace(/\-([a-z])/g,function(t,u){return u.toUpperCase();
});
},hyphenate:function(H){return H.replace(/[A-Z]/g,function(v){return (g+v.charAt(0).toLowerCase());
});
},capitalize:function(I){return I.replace(/\b[a-z]/g,function(z){return z.toUpperCase();
});
},clean:function(n){return this.trim(n.replace(/\s+/g,e));
},trimLeft:function(a){return a.replace(/^\s+/,m);
},trimRight:function(y){return y.replace(/\s+$/,m);
},trim:function(b){return b.replace(/^\s+|\s+$/g,m);
},startsWith:function(o,p){return o.indexOf(p)===0;
},endsWith:function(B,C){return B.substring(B.length-C.length,B.length)===C;
},repeat:function(O,P){return O.length>0?new Array(P+1).join(O):m;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===c){r=k;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(w,x){return w.indexOf(x)!=-1;
},format:function(E,F){var G=E;

for(var i=0;i<F.length;i++){G=G.replace(new RegExp(h+(i+1),l),F[i]);
}return G;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,j);
},toArray:function(D){return D.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,m);
},stripScripts:function(J,K){var M=m;
var L=J.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){M+=arguments[1]+d;
return m;
});

if(K===true){qx.lang.Function.globalEval(M);
}return L;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(h){},setItem:function(i,j){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cp=c;
this.__cq=d||b;
this.__cr=e===undefined?-1:e;
},members:{__cp:null,__cq:null,__cr:null,toString:function(){return this.__cp;
},getUri:function(){return this.__cq;
},getLineNumber:function(){return this.__cr;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__jC=b+(c&&c.message?c.message:c);
Error.call(this,this.__jC);
this.__jD=d;
this.__jE=c;
},members:{__jE:null,__jD:null,__jC:null,toString:function(){return this.__jC;
},getArguments:function(){return this.__jD;
},getSourceException:function(){return this.__jE;
}},destruct:function(){this.__jE=null;
this.__jD=null;
this.__jC=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cm=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cm:null,message:null,getComment:function(){return this.__cm;
},toString:function(){return this.__cm+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__km=qx.dev.StackTrace.getStackTrace();
},members:{__km:null,getStackTrace:function(){return this.__km;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Number));
},isBoolean:function(j){return (j!==null&&(this.getClass(j)==a||j instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__eU={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:a,init:Infinity}},members:{__eU:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__eU[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(f){if(!this.__eU){return;
}var g=f.classname;
var h=this.__eU[g];

if(f.$$pooled){throw new Error("Object is already pooled: "+f);
}
if(!h){this.__eU[g]=h=[];
}if(h.length>this.getSize()){if(f.destroy){f.destroy();
}else{f.dispose();
}return;
}f.$$pooled=true;
h.push(f);
}},destruct:function(){var n=this.__eU;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__eU;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(g,h){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=h.length;i<l;i++){var name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}g[name]=null;
}},disposeObjects:function(s,t,u){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){if(!u&&s[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{s[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(j){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+j);
}o.length=0;
k[m]=null;
},disposeMap:function(c,d){var e=c[d];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{for(var f in e){if(e.hasOwnProperty(f)){e[f].dispose();
}}}catch(b){throw new Error("The map field: "+d+" of object: "+c+" has non disposable entries: "+b);
}c[d]=null;
},disposeTriggeredBy:function(p,q){var r=q.dispose;
q.dispose=function(){r.call(q);
p.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__fP:function(){this.QUIRKS_MODE=this.__fQ();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fQ:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fP();
}});
})();
(function(){var c="qx.lang.Object";
qx.Class.define(c,{statics:{empty:function(v){{};

for(var w in v){if(v.hasOwnProperty(w)){delete v[w];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(u){{};
return u.__count__===0;
}:
function(s){{};

for(var t in s){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x,y){{};
return x.__count__>=y;
}:
function(n,o){{};

if(o<=0){return true;
}var length=0;

for(var p in n){if((++length)>=o){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){{};
var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(a,b){{};
return qx.lang.Object.mergeWith(a,b,false);
},merge:function(B,C){{};
var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(d){{};
var e={};

for(var f in d){e[d[f].toString()]=f;
}return e;
},getKeyFromValue:function(g,h){{};

for(var j in g){if(g.hasOwnProperty(j)&&g[j]===h){return j;
}}return null;
},contains:function(z,A){{};
return this.getKeyFromValue(z,A)!==null;
},select:function(q,r){{};
return r[q];
},fromArray:function(k){{};
var m={};

for(var i=0,l=k.length;i<l;i++){{};
m[k[i].toString()]=true;
}return m;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Class.define(h,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==e)?m:k,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?k:m,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?k:m,{"native":Array.prototype.lastIndexOf,"emulated":function(n,o){if(o==null){o=this.length-1;
}else if(o<0){o=Math.max(0,this.length+o);
}
for(var i=o;i>=0;i--){if(this[i]===n){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?k:m,{"native":Array.prototype.forEach,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){z.call(A||window,B,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?k:m,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?k:m,{"native":Array.prototype.map,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){c[i]=a.call(b||window,d,i,this);
}}return c;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?k:m,{"native":Array.prototype.some,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){if(s.call(t||window,u,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?k:m,{"native":Array.prototype.every,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(!p.call(q||window,r,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?k:m,{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__en:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eo:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ep:function(){var K=qx.lang.Generics.__en;

for(var O in K){var M=window[O];
var L=K[O];

for(var i=0,l=L.length;i<l;i++){var N=L[i];

if(!M[N]){M[N]=qx.lang.Generics.__eo(M,N);
}}}}},defer:function(J){J.__ep();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){qx.event.type.Event.prototype.init.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
this._returnValue=null;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(e,f){f.preventDefault=qx.lang.Function.empty;
return f;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__js:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__js();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kc:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kd:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kc){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__kc[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kd();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(c){this._dynamic=c;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===b){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(k){var m=this._dynamic;

if(k&&(m[k]!==undefined)){return true;
}var l=this.getTheme();

if(l!==null&&k&&(l.colors[k]!==undefined)){m[k]=l.colors[k];
return true;
}return false;
}}});
})();
(function(){var bb=",",ba="rgb(",Y=")",X="qx.theme.manager.Color",W="qx.util.ColorUtil";
qx.Class.define(W,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(c){return this.NAMED[c]!==undefined;
},isSystemColor:function(d){return this.SYSTEM[d]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(X);
},isThemedColor:function(L){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(L);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__fK();
}else if(this.isHex3String(a)){return this.__fM();
}else if(this.isHex6String(a)){return this.__fN();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(s){if(this.isNamedColor(s)){return this.NAMED[s];
}else if(this.isSystemColor(s)){throw new Error("Could not convert system colors to RGB: "+s);
}else if(this.isRgbString(s)){return this.__fK();
}else if(this.isRgbaString(s)){return this.__fL();
}else if(this.isHex3String(s)){return this.__fM();
}else if(this.isHex6String(s)){return this.__fN();
}throw new Error("Could not parse color: "+s);
},stringToRgbString:function(V){return this.rgbToRgbString(this.stringToRgb(V));
},rgbToRgbString:function(bc){return ba+bc[0]+bb+bc[1]+bb+bc[2]+Y;
},rgbToHexString:function(v){return (qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(u){return this.isThemedColor(u)||this.isNamedColor(u)||this.isHex3String(u)||this.isHex6String(u)||this.isRgbString(u);
},isCssString:function(bd){return this.isSystemColor(bd)||this.isNamedColor(bd)||this.isHex3String(bd)||this.isHex6String(bd)||this.isRgbString(bd);
},isHex3String:function(bi){return this.REGEXP.hex3.test(bi);
},isHex6String:function(l){return this.REGEXP.hex6.test(l);
},isRgbString:function(be){return this.REGEXP.rgb.test(be);
},isRgbaString:function(x){return this.REGEXP.rgba.test(x);
},__fK:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fL:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__fM:function(){var o=parseInt(RegExp.$1,16)*17;
var n=parseInt(RegExp.$2,16)*17;
var m=parseInt(RegExp.$3,16)*17;
return [o,n,m];
},__fN:function(){var k=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var j=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var h=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [k,j,h];
},hex3StringToRgb:function(y){if(this.isHex3String(y)){return this.__fM(y);
}throw new Error("Invalid hex3 value: "+y);
},hex6StringToRgb:function(w){if(this.isHex6String(w)){return this.__fN(w);
}throw new Error("Invalid hex6 value: "+w);
},hexStringToRgb:function(e){if(this.isHex3String(e)){return this.__fM(e);
}
if(this.isHex6String(e)){return this.__fN(e);
}throw new Error("Invalid hex value: "+e);
},rgbToHsb:function(z){var B,C,E;
var K=z[0];
var H=z[1];
var A=z[2];
var J=(K>H)?K:H;

if(A>J){J=A;
}var D=(K<H)?K:H;

if(A<D){D=A;
}E=J/255.0;

if(J!=0){C=(J-D)/J;
}else{C=0;
}
if(C==0){B=0;
}else{var G=(J-K)/(J-D);
var I=(J-H)/(J-D);
var F=(J-A)/(J-D);

if(K==J){B=F-I;
}else if(H==J){B=2.0+G-F;
}else{B=4.0+I-G;
}B=B/6.0;

if(B<0){B=B+1.0;
}}return [Math.round(B*360),Math.round(C*100),Math.round(E*100)];
},hsbToRgb:function(P){var i,f,p,q,t;
var Q=P[0]/360;
var R=P[1]/100;
var S=P[2]/100;

if(Q>=1.0){Q%=1.0;
}
if(R>1.0){R=1.0;
}
if(S>1.0){S=1.0;
}var T=Math.floor(255*S);
var U={};

if(R==0.0){U.red=U.green=U.blue=T;
}else{Q*=6.0;
i=Math.floor(Q);
f=Q-i;
p=Math.floor(T*(1.0-R));
q=Math.floor(T*(1.0-(R*f)));
t=Math.floor(T*(1.0-(R*(1.0-f))));

switch(i){case 0:U.red=T;
U.green=t;
U.blue=p;
break;
case 1:U.red=q;
U.green=T;
U.blue=p;
break;
case 2:U.red=p;
U.green=T;
U.blue=t;
break;
case 3:U.red=p;
U.green=q;
U.blue=T;
break;
case 4:U.red=t;
U.green=p;
U.blue=T;
break;
case 5:U.red=T;
U.green=p;
U.blue=q;
break;
}}return [U.red,U.green,U.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="__bR",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__bR:null,resolve:function(q){if(!q){return null;
}
if(typeof q===h){return q;
}var t=this.getTheme();

if(!t){return null;
}var t=this.getTheme();

if(!t){return null;
}var u=this.__bR;

if(!u){u=this.__bR={};
}var r=u[q];

if(r){return r;
}var s=t.decorations[q];

if(!s){return null;
}var v=s.decorator;

if(v==null){throw new Error("Missing definition of which decorator to use in entry: "+q+"!");
}return u[q]=(new v).set(s.style);
},isValidPropertyValue:function(o){if(typeof o===b){return this.isDynamic(o);
}else if(typeof o===h){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(k,l){var n=qx.util.AliasManager.getInstance();

if(l){for(var m in l.aliases){n.remove(m);
}}
if(k){for(var m in k.aliases){n.add(m,k.aliases[m]);
}}
if(!k){this.__bR={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fO={};
this.add(a,h);
},members:{__fO:null,_preprocess:function(p){var s=this._getDynamic();

if(s[p]===false){return p;
}else if(s[p]===undefined){if(p.charAt(0)===j||p.charAt(0)===b||p.indexOf(g)===0||p.indexOf(f)===i||p.indexOf(e)===0){s[p]=false;
return p;
}
if(this.__fO[p]){return this.__fO[p];
}var r=p.substring(0,p.indexOf(j));
var q=this.__fO[r];

if(q!==undefined){s[p]=q+p.substring(r.length);
}}return p;
},add:function(l,m){this.__fO[l]=m;
var o=this._getDynamic();
for(var n in o){if(n.substring(0,n.indexOf(j))===l){o[n]=m+n.substring(l.length);
}}},remove:function(k){delete this.__fO[k];
},resolve:function(t){var u=this._getDynamic();

if(t!==null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__fO=null;
}});
})();
(function(){var h="qx.theme.manager.Font",g="Theme",f="changeTheme",e="_applyTheme",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:e,event:f}},members:{resolveDynamic:function(l){var m=this._dynamic;
return l instanceof qx.bom.Font?l:m[l];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(a instanceof qx.bom.Font||c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&b.fonts[a]){c[a]=(new qx.bom.Font).set(b.fonts[a]);
return true;
}return false;
},__gW:function(i,j){if(i[j].include){var k=i[i[j].include];
i[j].include=null;
delete i[j].include;
i[j]=qx.lang.Object.mergeWith(i[j],k,false);
this.__gW(i,j);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__gW(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(G,H){qx.core.Object.call(this);

if(G!==undefined){this.setSize(G);
}
if(H!==undefined){this.setFamily(H);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case c:T.setBold(true);
break;
case e:T.setItalic(true);
break;
case j:T.setDecoration(j);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,g)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(A){var B=new qx.bom.Font;
B.set(A);
return B;
},__ca:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__ca;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,_applySize:function(E,F){this.__cb=E===null?null:E+g;
},_applyLineHeight:function(C,D){this.__cg=C===null?null:C;
},_applyFamily:function(M,N){var O=k;

for(var i=0,l=M.length;i<l;i++){if(M[i].indexOf(o)>0){O+=f+M[i]+f;
}else{O+=M[i];
}
if(i!==l-1){O+=n;
}}this.__cc=O;
},_applyBold:function(K,L){this.__cd=K===null?null:K?c:d;
},_applyItalic:function(y,z){this.__ce=y===null?null:y?e:d;
},_applyDecoration:function(I,J){this.__cf=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__cc,fontSize:this.__cb,fontWeight:this.__cd,fontStyle:this.__ce,textDecoration:this.__cf,lineHeight:this.__cg};
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__de={};
this.__df={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dg:{},__de:null,__df:null,_applyTheme:function(t,u){this.__df={};
this.__de={};
},__dh:function(i,j,k){var o=j.appearances;
var r=o[i];

if(!r){var s=b;
var l=[];
var q=i.split(s);
var p;

while(!r&&q.length>0){l.unshift(q.pop());
var m=q.join(s);
r=o[m];

if(r){p=r.alias||r;

if(typeof p===h){var n=p+s+l.join(s);
return this.__dh(n,j,k);
}}}if(k!=null){return this.__dh(k,j);
}return null;
}else if(typeof r===h){return this.__dh(r,j,k);
}else if(r.include&&!r.style){return this.__dh(r.include,j,k);
}return i;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__df;
var z=E[v];

if(!z){z=E[v]=this.__dh(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__de;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__dg;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__de=this.__df=null;
}});
})();
(function(){var q="other",p="widgets",o="fonts",n="appearances",m="qx.Theme",k="]",j="[Theme ",h="colors",g="decorations",f="Theme",c="meta",e="borders",d="icons";
qx.Bootstrap.define(m,{statics:{define:function(name,P){if(!P){var P={};
}P.include=this.__pq(P.include);
P.patch=this.__pq(P.patch);
{};
var Q={$$type:f,name:name,title:P.title,toString:this.genericToString};
if(P.extend){Q.supertheme=P.extend;
}Q.basename=qx.Bootstrap.createNamespace(name,Q);
this.__pt(Q,P);
this.__pr(Q,P);
this.$$registry[name]=Q;
for(var i=0,a=P.include,l=a.length;i<l;i++){this.include(Q,a[i]);
}
for(var i=0,a=P.patch,l=a.length;i<l;i++){this.patch(Q,a[i]);
}},__pq:function(b){if(!b){return [];
}
if(qx.Bootstrap.isArray(b)){return b;
}else{return [b];
}},__pr:function(M,N){var O=N.aliases||{};

if(N.extend&&N.extend.aliases){qx.Bootstrap.objectMergeWith(O,N.extend.aliases,false);
}M.aliases=O;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return j+this.name+k;
},__ps:function(K){for(var i=0,L=this.__pu,l=L.length;i<l;i++){if(K[L[i]]){return L[i];
}}},__pt:function(x,y){var B=this.__ps(y);
if(y.extend&&!B){B=y.extend.type;
}x.type=B||q;
if(!B){return;
}var D=function(){};
if(y.extend){D.prototype=new y.extend.$$clazz;
}var C=D.prototype;
var A=y[B];
for(var z in A){C[z]=A[z];
if(C[z].base){{};
C[z].base=y.extend;
}}x.$$clazz=D;
x[B]=new D;
},$$registry:{},__pu:[h,e,g,o,d,p,n,c],__pv:null,__pw:null,__px:function(){},patch:function(r,s){var u=this.__ps(s);

if(u!==this.__ps(r)){throw new Error("The mixins '"+r.name+"' are not compatible '"+s.name+"'!");
}var t=s[u];
var v=r.$$clazz.prototype;

for(var w in t){v[w]=t[w];
}},include:function(E,F){var H=F.type;

if(H!==E.type){throw new Error("The mixins '"+E.name+"' are not compatible '"+F.name+"'!");
}var G=F[H];
var I=E.$$clazz.prototype;

for(var J in G){if(I[J]!==undefined){continue;
}I[J]=G[J];
}}}});
})();
(function(){var p="focusout",o="interval",n="mouseover",m="mouseout",l="mousemove",k="widget",j="qx.ui.tooltip.ToolTip",i="Boolean",h="__pe",g="__pg",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__pd",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,n,this.__pn,this,true);
this.__pd=new qx.event.Timer();
this.__pd.addListener(o,this.__pk,this);
this.__pe=new qx.event.Timer();
this.__pe.addListener(o,this.__pl,this);
this.__pf={left:0,top:0};
},properties:{current:{check:j,nullable:true,apply:c},showInvalidTooltips:{check:i,init:true}},members:{__pf:null,__pe:null,__pd:null,__pg:null,__ph:null,__pi:function(){if(!this.__pg){this.__pg=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__pg;
},__pj:function(){if(!this.__ph){this.__ph=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__ph.syncAppearance();
}return this.__ph;
},_applyCurrent:function(t,u){if(u&&qx.ui.core.Widget.contains(u,t)){return;
}if(u){if(!u.isDisposed()){u.exclude();
}this.__pd.stop();
this.__pe.stop();
}var w=qx.event.Registration;
var v=document.body;
if(t){this.__pd.startWith(t.getShowTimeout());
w.addListener(v,m,this.__po,this,true);
w.addListener(v,p,this.__pp,this,true);
w.addListener(v,l,this.__pm,this,true);
}else{w.removeListener(v,m,this.__po,this,true);
w.removeListener(v,p,this.__pp,this,true);
w.removeListener(v,l,this.__pm,this,true);
}},__pk:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){this.__pe.startWith(A.getHideTimeout());

if(A.getPlaceMethod()==k){A.placeToWidget(A.getOpener());
}else{A.placeToPoint(this.__pf);
}A.show();
}this.__pd.stop();
},__pl:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){G.exclude();
}this.__pe.stop();
this.resetCurrent();
},__pm:function(e){var x=this.__pf;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__pn:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E;
while(D!=null){var E=D.getToolTip();
var F=D.getToolTipText()||null;
var C=D.getToolTipIcon()||null;

if(qx.Class.hasInterface(D.constructor,qx.ui.form.IForm)&&!D.isValid()){var B=D.getInvalidMessage();
}
if(E||F||C||B){break;
}D=D.getLayoutParent();
}
if(!D){return;
}
if(D.isBlockToolTip()){return;
}if(B&&D.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var E=this.__pj().set({label:B});
}else if(!E){var E=this.__pi().set({label:F,icon:C});
}this.setCurrent(E);
E.setOpener(D);
},__po:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!q){return;
}var r=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!r){return;
}var s=this.getCurrent();
if(s&&(r==s||qx.ui.core.Widget.contains(s,r))){return;
}if(r&&q&&qx.ui.core.Widget.contains(q,r)){return;
}if(s&&!r){this.setCurrent(null);
}else{this.resetCurrent();
}},__pp:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&z==y.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,n,this.__pn,this,true);
this._disposeObjects(d,h,g);
this.__pf=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this.setEnabled(false);

if(p!=null){this.setInterval(p);
}var self=this;
this.__dP=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(i,j,k){var l=new qx.event.Timer(k);
l.__dQ=i;
l.addListener(h,function(e){l.stop();
i.call(j,e);
l.dispose();
j=null;
},j);
l.start();
return l;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dR:null,__dP:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__dR);
this.__dR=null;
}else if(r){this.__dR=window.setInterval(this.__dP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(q){this.setInterval(q);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(m){this.stop();
this.startWith(m);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dR){window.clearInterval(this.__dR);
}this.__dR=this.__dP=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(k){return this._indexOf(k);
},add:function(e,f){this._add(e,f);
},addAt:function(h,i,j){this._addAt(h,i,j);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(m,n,o){this._addAfter(m,n,o);
},remove:function(g){this._remove(g);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var E="Integer",D="_applyDimension",C="Boolean",B="_applyStretching",A="_applyMargin",z="shorthand",y="_applyAlign",x="allowShrinkY",w="bottom",v="baseline",S="marginBottom",R="qx.ui.core.LayoutItem",Q="center",P="marginTop",O="allowGrowX",N="middle",M="marginLeft",L="allowShrinkX",K="top",J="right",H="marginRight",I="abstract",F="allowGrowY",G="left";
qx.Class.define(R,{type:I,extend:qx.core.Object,properties:{minWidth:{check:E,nullable:true,apply:D,init:null,themeable:true},width:{check:E,nullable:true,apply:D,init:null,themeable:true},maxWidth:{check:E,nullable:true,apply:D,init:null,themeable:true},minHeight:{check:E,nullable:true,apply:D,init:null,themeable:true},height:{check:E,nullable:true,apply:D,init:null,themeable:true},maxHeight:{check:E,nullable:true,apply:D,init:null,themeable:true},allowGrowX:{check:C,apply:B,init:true,themeable:true},allowShrinkX:{check:C,apply:B,init:true,themeable:true},allowGrowY:{check:C,apply:B,init:true,themeable:true},allowShrinkY:{check:C,apply:B,init:true,themeable:true},allowStretchX:{group:[O,L],mode:z,themeable:true},allowStretchY:{group:[F,x],mode:z,themeable:true},marginTop:{check:E,init:0,apply:A,themeable:true},marginRight:{check:E,init:0,apply:A,themeable:true},marginBottom:{check:E,init:0,apply:A,themeable:true},marginLeft:{check:E,init:0,apply:A,themeable:true},margin:{group:[P,H,S,M],mode:z,themeable:true},alignX:{check:[G,Q,J],nullable:true,apply:y,themeable:true},alignY:{check:[K,N,w,v],nullable:true,apply:y,themeable:true}},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,getBounds:function(){return this.__eR||this.__eN||null;
},clearSeparators:function(){},renderSeparator:function(o,p){},renderLayout:function(U,top,V,W){var X;
{};
var Y=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var Y=this._getHeightForWidth(V);
}
if(Y!=null&&Y!==this.__eM){this.__eM=Y;
qx.ui.core.queue.Layout.add(this);
return null;
}var bb=this.__eN;

if(!bb){bb=this.__eN={};
}var ba={};

if(U!==bb.left||top!==bb.top){ba.position=true;
bb.left=U;
bb.top=top;
}
if(V!==bb.width||W!==bb.height){ba.size=true;
bb.width=V;
bb.height=W;
}if(this.__eO){ba.local=true;
delete this.__eO;
}
if(this.__eQ){ba.margin=true;
delete this.__eQ;
}return ba;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eO;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eO=true;
this.__eP=null;
},getSizeHint:function(d){var e=this.__eP;

if(e){return e;
}
if(d===false){return null;
}e=this.__eP=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__eM&&this.getHeight()==null){e.height=this.__eM;
}if(e.minWidth>e.width){e.width=e.minWidth;
}
if(e.maxWidth<e.width){e.width=e.maxWidth;
}
if(!this.getAllowGrowX()){e.maxWidth=e.width;
}
if(!this.getAllowShrinkX()){e.minWidth=e.width;
}if(e.minHeight>e.height){e.height=e.minHeight;
}
if(e.maxHeight<e.height){e.height=e.maxHeight;
}
if(!this.getAllowGrowY()){e.maxHeight=e.height;
}
if(!this.getAllowShrinkY()){e.minHeight=e.height;
}return e;
},_computeSizeHint:function(){var j=this.getMinWidth()||0;
var g=this.getMinHeight()||0;
var k=this.getWidth()||j;
var i=this.getHeight()||g;
var f=this.getMaxWidth()||Infinity;
var h=this.getMaxHeight()||Infinity;
return {minWidth:j,width:k,maxWidth:f,minHeight:g,height:i,maxHeight:h};
},_hasHeightForWidth:function(){var T=this._getLayout();

if(T){return T.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(bc){var bd=this._getLayout();

if(bd&&bd.hasHeightForWidth()){return bd.getHeightForWidth(bc);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eQ=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eR;
},setUserBounds:function(s,top,t,u){this.__eR={left:s,top:top,width:t,height:u};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eR;
qx.ui.core.queue.Layout.add(this);
},__eT:{},setLayoutProperties:function(l){if(l==null){return;
}var m=this.__eS;

if(!m){m=this.__eS={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(l);
}for(var n in l){if(l[n]==null){delete m[n];
}else{m[n]=l[n];
}}},getLayoutProperties:function(){return this.__eS||this.__eT;
},clearLayoutProperties:function(){delete this.__eS;
},updateLayoutProperties:function(a){var b=this._getLayout();

if(b){var c;
{};
b.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var q=qx.core.Object.prototype.clone.call(this);
var r=this.__eS;

if(r){q.__eS=qx.lang.Object.clone(r);
}return q;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eS=this.__eN=this.__eR=this.__eP=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cn={};
},statics:{MAX_SIZE:15,__co:a},members:{__cn:null,getDecoratorElement:function(h){var m=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(h)){var k=h;
var j=qx.theme.manager.Decoration.getInstance().resolve(h);
}else{var k=m.__co;
j=h;
}var l=this.__cn;

if(l[k]&&l[k].length>0){var i=l[k].pop();
}else{var i=this._createDecoratorElement(j,k);
}i.$$pooled=false;
return i;
},poolDecorator:function(n){if(!n||n.$$pooled||n.isDisposed()){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__co){n.dispose();
return;
}var p=this.__cn;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(c,d){var e=new qx.html.Decorator(c,d);
{};
return e;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var g=this.__cn;

for(var f in g){qx.util.DisposeUtil.disposeArray(g,f);
}}this.__cn=null;
}});
})();
(function(){var eT="px",eS="Boolean",eR="qx.event.type.Mouse",eQ="qx.event.type.Drag",eP="visible",eO="qx.event.type.Focus",eN="on",eM="Integer",eL="excluded",eK="qx.event.type.Data",ew="_applyPadding",ev="qx.event.type.Event",eu="hidden",et="contextmenu",es="String",er="tabIndex",eq="backgroundColor",ep="focused",eo="changeVisibility",en="mshtml",fb="hovered",fc="qx.event.type.KeySequence",eY="qx.client",fa="absolute",eW="drag",eX="div",eU="disabled",eV="move",fd="dragstart",fe="qx.dynlocale",eD="dragchange",eC="dragend",eF="resize",eE="Decorator",eH="zIndex",eG="opacity",eJ="default",eI="Color",eB="changeToolTipText",eA="beforeContextmenuOpen",dc="_applyNativeContextMenu",dd="_applyBackgroundColor",de="__dj",df="_applyFocusable",dg="changeShadow",dh="qx.event.type.KeyInput",di="createChildControl",dj="Font",dk="_applyShadow",dl="_applyEnabled",fi="_applySelectable",fh="Number",fg="_applyKeepActive",ff="__dk",fm="_applyVisibility",fl="repeat",fk="qxDraggable",fj="syncAppearance",fo="paddingLeft",fn="_applyDroppable",dL="#",dM="__ds",dJ="qx.event.type.MouseWheel",dK="_applyCursor",dP="_applyDraggable",dQ="changeTextColor",dN="$$widget",dO="changeContextMenu",dH="paddingTop",dI="changeSelectable",du="hideFocus",dt="none",dw="outline",dv="_applyAppearance",dq="_applyOpacity",dp="url(",ds=")",dr="qx.ui.core.Widget",dn="_applyFont",dm="cursor",dV="qxDroppable",dW="__du",dX="__dn",dY="changeZIndex",dR="changeEnabled",dS="changeFont",dT="_applyDecorator",dU="_applyZIndex",ea="_applyTextColor",eb="qx.ui.menu.Menu",dE="__do",dD="_applyToolTipText",dC="true",dB="widget",dA="changeDecorator",dz="_applyTabIndex",dy="changeAppearance",dx="shorthand",dG="__dw",dF="/",ec="",ed="_applyContextMenu",ee="paddingBottom",ef="changeNativeContextMenu",eg="qx.ui.tooltip.ToolTip",eh="qxKeepActive",ei="_applyKeepFocus",ej="__dp",ek="paddingRight",em="changeBackgroundColor",ez="changeLocale",ey="qxKeepFocus",ex="qx/static/blank.gif";
qx.Class.define(dr,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dj=this._createContainerElement();
this.__dk=this.__dv();
this.__dj.add(this.__dk);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:ev,disappear:ev,createChildControl:eK,resize:eK,move:eK,syncAppearance:eK,mousemove:eR,mouseover:eR,mouseout:eR,mousedown:eR,mouseup:eR,click:eR,dblclick:eR,contextmenu:eR,beforeContextmenuOpen:eR,mousewheel:dJ,keyup:fc,keydown:fc,keypress:fc,keyinput:dh,focus:eO,blur:eO,focusin:eO,focusout:eO,activate:eO,deactivate:eO,capture:ev,losecapture:ev,drop:eQ,dragleave:eQ,dragover:eQ,drag:eQ,dragstart:eQ,dragend:eQ,dragchange:eQ,droprequest:eQ},properties:{paddingTop:{check:eM,init:0,apply:ew,themeable:true},paddingRight:{check:eM,init:0,apply:ew,themeable:true},paddingBottom:{check:eM,init:0,apply:ew,themeable:true},paddingLeft:{check:eM,init:0,apply:ew,themeable:true},padding:{group:[dH,ek,ee,fo],mode:dx,themeable:true},zIndex:{nullable:true,init:null,apply:dU,event:dY,check:eM,themeable:true},decorator:{nullable:true,init:null,apply:dT,event:dA,check:eE,themeable:true},shadow:{nullable:true,init:null,apply:dk,event:dg,check:eE,themeable:true},backgroundColor:{nullable:true,check:eI,apply:dd,event:em,themeable:true},textColor:{nullable:true,check:eI,apply:ea,event:dQ,themeable:true,inheritable:true},font:{nullable:true,apply:dn,check:dj,event:dS,themeable:true,inheritable:true,dereference:true},opacity:{check:fh,apply:dq,themeable:true,nullable:true,init:null},cursor:{check:es,apply:dK,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eg,nullable:true},toolTipText:{check:es,nullable:true,event:eB,apply:dD},toolTipIcon:{check:es,nullable:true,event:eB},blockToolTip:{check:eS,init:false},visibility:{check:[eP,eu,eL],init:eP,apply:fm,event:eo},enabled:{init:true,check:eS,inheritable:true,apply:dl,event:dR},anonymous:{init:false,check:eS},tabIndex:{check:eM,nullable:true,apply:dz},focusable:{check:eS,init:false,apply:df},keepFocus:{check:eS,init:false,apply:ei},keepActive:{check:eS,init:false,apply:fg},draggable:{check:eS,init:false,apply:dP},droppable:{check:eS,init:false,apply:fn},selectable:{check:eS,init:false,event:dI,apply:fi},contextMenu:{check:eb,apply:ed,nullable:true,event:dO},nativeContextMenu:{check:eS,init:false,themeable:true,event:ef,apply:dc},appearance:{check:es,init:dB,apply:dv,event:dy}},statics:{DEBUG:false,getWidgetByElement:function(cP){while(cP){var cQ=cP.$$widget;
if(cQ!=null){return qx.core.ObjectRegistry.fromHashCode(cQ);
}try{cP=cP.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,gA){while(gA){if(parent==gA){return true;
}gA=gA.getLayoutParent();
}return false;
},__dl:new qx.ui.core.DecoratorFactory(),__dm:new qx.ui.core.DecoratorFactory()},members:{__dj:null,__dk:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,_getLayout:function(){return this.__ds;
},_setLayout:function(gD){{};

if(this.__ds){this.__ds.connectToWidget(null);
}
if(gD){gD.connectToWidget(this);
}this.__ds=gD;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cj=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cj);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cj);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dt:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cL=qx.theme.manager.Decoration.getInstance();
var cN=cL.resolve(a).getInsets();
var cM=cL.resolve(b).getInsets();

if(cN.top!=cM.top||cN.right!=cM.right||cN.bottom!=cM.bottom||cN.left!=cM.left){return true;
}return false;
},renderLayout:function(gn,top,go,gp){var gy=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,gn,top,go,gp);
if(!gy){return;
}var gr=this.getContainerElement();
var content=this.getContentElement();
var gv=gy.size||this._updateInsets;
var gz=eT;
var gw={};
if(gy.position){gw.left=gn+gz;
gw.top=top+gz;
}if(gy.size){gw.width=go+gz;
gw.height=gp+gz;
}
if(gy.position||gy.size){gr.setStyles(gw);
}
if(gv||gy.local||gy.margin){var gq=this.getInsets();
var innerWidth=go-gq.left-gq.right;
var innerHeight=gp-gq.top-gq.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var gt={};

if(this._updateInsets){gt.left=gq.left+gz;
gt.top=gq.top+gz;
}
if(gv){gt.width=innerWidth+gz;
gt.height=innerHeight+gz;
}
if(gv||this._updateInsets){content.setStyles(gt);
}
if(gy.size){var gx=this.__dp;

if(gx){gx.setStyles({width:go+eT,height:gp+eT});
}}
if(gy.size||this._updateInsets){if(this.__dn){this.__dn.resize(go,gp);
}}
if(gy.size){if(this.__do){var gq=this.__do.getInsets();
var gu=go+gq.left+gq.right;
var gs=gp+gq.top+gq.bottom;
this.__do.resize(gu,gs);
}}
if(gv||gy.local||gy.margin){if(this.__ds&&this.hasLayoutChildren()){this.__ds.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(gy.position&&this.hasListener(eV)){this.fireDataEvent(eV,this.getBounds());
}
if(gy.size&&this.hasListener(eF)){this.fireDataEvent(eF,this.getBounds());
}delete this._updateInsets;
return gy;
},__du:null,clearSeparators:function(){var bP=this.__du;

if(!bP){return;
}var bQ=qx.ui.core.Widget.__dl;
var content=this.getContentElement();
var bO;

for(var i=0,l=bP.length;i<l;i++){bO=bP[i];
bQ.poolDecorator(bO);
content.remove(bO);
}bP.length=0;
},renderSeparator:function(u,v){var w=qx.ui.core.Widget.__dl.getDecoratorElement(u);
this.getContentElement().add(w);
w.resize(v.width,v.height);
w.setStyles({left:v.left+eT,top:v.top+eT});
if(!this.__du){this.__du=[w];
}else{this.__du.push(w);
}},_computeSizeHint:function(){var cD=this.getWidth();
var cC=this.getMinWidth();
var cy=this.getMaxWidth();
var cB=this.getHeight();
var cz=this.getMinHeight();
var cA=this.getMaxHeight();
{};
var cE=this._getContentHint();
var cx=this.getInsets();
var cG=cx.left+cx.right;
var cF=cx.top+cx.bottom;

if(cD==null){cD=cE.width+cG;
}
if(cB==null){cB=cE.height+cF;
}
if(cC==null){cC=cG;

if(cE.minWidth!=null){cC+=cE.minWidth;
}}
if(cz==null){cz=cF;

if(cE.minHeight!=null){cz+=cE.minHeight;
}}
if(cy==null){if(cE.maxWidth==null){cy=Infinity;
}else{cy=cE.maxWidth+cG;
}}
if(cA==null){if(cE.maxHeight==null){cA=Infinity;
}else{cA=cE.maxHeight+cF;
}}return {width:cD,minWidth:cC,maxWidth:cy,height:cB,minHeight:cz,maxHeight:cA};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ds){this.__ds.invalidateLayoutCache();
}},_getContentHint:function(){var gI=this.__ds;

if(gI){if(this.hasLayoutChildren()){var gH;
var gJ=gI.getSizeHint();
{};
return gJ;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fM){var fQ=this.getInsets();
var fT=fQ.left+fQ.right;
var fS=fQ.top+fQ.bottom;
var fR=fM-fT;
var fO=this._getLayout();

if(fO&&fO.hasHeightForWidth()){var fN=fO.getHeightForWidth(fM);
}else{fN=this._getContentHeightForWidth(fR);
}var fP=fN+fS;
return fP;
},_getContentHeightForWidth:function(bn){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fV=this.getPaddingRight();
var fX=this.getPaddingBottom();
var fW=this.getPaddingLeft();

if(this.__dn){var fU=this.__dn.getInsets();
{};
top+=fU.top;
fV+=fU.right;
fX+=fU.bottom;
fW+=fU.left;
}return {"top":top,"right":fV,"bottom":fX,"left":fW};
},getInnerSize:function(){var fE=this.getBounds();

if(!fE){return null;
}var fD=this.getInsets();
return {width:fE.width-fD.left-fD.right,height:fE.height-fD.top-fD.bottom};
},show:function(){this.setVisibility(eP);
},hide:function(){this.setVisibility(eu);
},exclude:function(){this.setVisibility(eL);
},isVisible:function(){return this.getVisibility()===eP;
},isHidden:function(){return this.getVisibility()!==eP;
},isExcluded:function(){return this.getVisibility()===eL;
},isSeeable:function(){var cu=this.getContainerElement().getDomElement();

if(cu){return cu.offsetWidth>0;
}var ct=this;

do{if(!ct.isVisible()){return false;
}
if(ct.isRootWidget()){return true;
}ct=ct.getLayoutParent();
}while(ct);
return false;
},_createContainerElement:function(){var bb={"$$widget":this.toHashCode()};
{};
var ba={zIndex:0,position:fa};
return new qx.html.Element(eX,ba,bb);
},__dv:function(){var gP=this._createContentElement();
{};
gP.setStyles({"position":fa,"zIndex":10});
return gP;
},_createContentElement:function(){return new qx.html.Element(eX,{overflowX:eu,overflowY:eu});
},getContainerElement:function(){return this.__dj;
},getContentElement:function(){return this.__dk;
},getDecoratorElement:function(){return this.__dn||null;
},getShadowElement:function(){return this.__do||null;
},__dw:null,getLayoutChildren:function(){var bd=this.__dw;

if(!bd){return this.__dx;
}var be;

for(var i=0,l=bd.length;i<l;i++){var bc=bd[i];

if(bc.hasUserBounds()||bc.isExcluded()){if(be==null){be=bd.concat();
}qx.lang.Array.remove(be,bc);
}}return be||bd;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var x=this.__ds;

if(x){x.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var c=this.__dw;

if(!c){return false;
}var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];

if(!d.hasUserBounds()&&!d.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dx:[],_getChildren:function(){return this.__dw||this.__dx;
},_indexOf:function(cv){var cw=this.__dw;

if(!cw){return -1;
}return cw.indexOf(cv);
},_hasChildren:function(){var bR=this.__dw;
return bR!=null&&(!!bR[0]);
},addChildrenToQueue:function(gM){var gN=this.__dw;

if(!gN){return;
}var gO;

for(var i=0,l=gN.length;i<l;i++){gO=gN[i];
gM[gO.$$hash]=gO;
gO.addChildrenToQueue(gM);
}},_add:function(fp,fq){if(fp.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,fp);
}
if(this.__dw){this.__dw.push(fp);
}else{this.__dw=[fp];
}this.__dy(fp,fq);
},_addAt:function(n,o,p){if(!this.__dw){this.__dw=[];
}if(n.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,n);
}var q=this.__dw[o];

if(q===n){return n.setLayoutProperties(p);
}
if(q){qx.lang.Array.insertBefore(this.__dw,n,q);
}else{this.__dw.push(n);
}this.__dy(n,p);
},_addBefore:function(W,X,Y){{};

if(W==X){return;
}
if(!this.__dw){this.__dw=[];
}if(W.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,W);
}qx.lang.Array.insertBefore(this.__dw,W,X);
this.__dy(W,Y);
},_addAfter:function(fy,fz,fA){{};

if(fy==fz){return;
}
if(!this.__dw){this.__dw=[];
}if(fy.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,fy);
}qx.lang.Array.insertAfter(this.__dw,fy,fz);
this.__dy(fy,fA);
},_remove:function(cR){if(!this.__dw){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dw,cR);
this.__dz(cR);
},_removeAt:function(f){if(!this.__dw){throw new Error("This widget has no children!");
}var g=this.__dw[f];
qx.lang.Array.removeAt(this.__dw,f);
this.__dz(g);
return g;
},_removeAll:function(){if(!this.__dw){return;
}var gS=this.__dw.concat();
this.__dw.length=0;

for(var i=gS.length-1;i>=0;i--){this.__dz(gS[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dy:function(cr,cs){{};
var parent=cr.getLayoutParent();

if(parent&&parent!=this){parent._remove(cr);
}cr.setLayoutParent(this);
if(cs){cr.setLayoutProperties(cs);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(cr);
}},__dz:function(bk){{};

if(bk.getLayoutParent()!==this){throw new Error("Remove Error: "+bk+" is not a child of this widget!");
}bk.setLayoutParent(null);
if(this.__ds){this.__ds.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bk);
}},capture:function(t){this.getContainerElement().capture(t);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(gg,gh,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dp){return;
}var bl=this.__dp=new qx.html.Element;
{};
bl.setStyles({position:fa,top:0,left:0,zIndex:7});
var bm=this.getBounds();

if(bm){this.__dp.setStyles({width:bm.width+eT,height:bm.height+eT});
}if(qx.core.Variant.isSet(eY,en)){bl.setStyles({backgroundImage:dp+qx.util.ResourceManager.getInstance().toUri(ex)+ds,backgroundRepeat:fl});
}this.getContainerElement().add(bl);
},_applyDecorator:function(bo,bp){{};
var bt=qx.ui.core.Widget.__dl;
var br=this.getContainerElement();
if(!this.__dp&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bp){br.remove(this.__dn);
bt.poolDecorator(this.__dn);
}if(bo){var bs=this.__dn=bt.getDecoratorElement(bo);
bs.setStyle(eH,5);
var bq=this.getBackgroundColor();
bs.tint(bq);
br.add(bs);
}else{delete this.__dn;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bo&&!bp&&bq){this.getContainerElement().setStyle(eq,null);
}if(this.__dt(bp,bo)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bo){var bu=this.getBounds();

if(bu){bs.resize(bu.width,bu.height);
this.__dp&&
this.__dp.setStyles({width:bu.width+eT,height:bu.height+eT});
}}},_applyShadow:function(bS,bT){var cb=qx.ui.core.Widget.__dm;
var bV=this.getContainerElement();
if(bT){bV.remove(this.__do);
cb.poolDecorator(this.__do);
}if(bS){var bX=this.__do=cb.getDecoratorElement(bS);
bV.add(bX);
var ca=bX.getInsets();
bX.setStyles({left:(-ca.left)+eT,top:(-ca.top)+eT});
var bY=this.getBounds();

if(bY){var bW=bY.width+ca.left+ca.right;
var bU=bY.height+ca.top+ca.bottom;
bX.resize(bW,bU);
}bX.tint(null);
}else{delete this.__do;
}},_applyToolTipText:function(gi,gj){if(qx.core.Variant.isSet(fe,eN)){if(this.__dr){return;
}var gk=qx.locale.Manager.getInstance();
this.__dr=gk.addListener(ez,function(){if(gi&&gi.translate){this.setToolTipText(gi.translate());
}},this);
}},_applyTextColor:function(bH,bI){},_applyZIndex:function(gV,gW){this.getContainerElement().setStyle(eH,gV==null?0:gV);
},_applyVisibility:function(bL,bM){var bN=this.getContainerElement();

if(bL===eP){bN.show();
}else{bN.hide();
}var parent=this.$$parent;

if(parent&&(bM==null||bL==null||bM===eL||bL===eL)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(T,U){this.getContainerElement().setStyle(eG,T==1?null:T);
if(qx.core.Variant.isSet(eY,en)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var V=(T==1||T==null)?null:0.99;
this.getContentElement().setStyle(eG,V);
}}},_applyCursor:function(fB,fC){if(fB==null&&!this.isSelectable()){fB=eJ;
}this.getContainerElement().setStyle(dm,fB,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(ga,gb){var gc=this.getBackgroundColor();
var ge=this.getContainerElement();

if(this.__dn){this.__dn.tint(gc);
ge.setStyle(eq,null);
}else{var gd=qx.theme.manager.Color.getInstance().resolve(gc);
ge.setStyle(eq,gd);
}},_applyFont:function(cp,cq){},__dA:null,$$stateChanges:null,_forwardStates:null,hasState:function(cd){var ce=this.__dA;
return !!ce&&!!ce[cd];
},addState:function(bf){var bg=this.__dA;

if(!bg){bg=this.__dA={};
}
if(bg[bf]){return;
}this.__dA[bf]=true;
if(bf===fb){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bj=this.__dD;

if(forward&&forward[bf]&&bj){var bh;

for(var bi in bj){bh=bj[bi];

if(bh instanceof qx.ui.core.Widget){bj[bi].addState(bf);
}}}},removeState:function(bv){var bw=this.__dA;

if(!bw||!bw[bv]){return;
}delete this.__dA[bv];
if(bv===fb){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bz=this.__dD;

if(forward&&forward[bv]&&bz){for(var by in bz){var bx=bz[by];

if(bx instanceof qx.ui.core.Widget){bx.removeState(bv);
}}}},replaceState:function(cS,cT){var cU=this.__dA;

if(!cU){cU=this.__dA={};
}
if(!cU[cT]){cU[cT]=true;
}
if(cU[cS]){delete cU[cS];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cX=this.__dD;

if(forward&&forward[cT]&&cX){for(var cW in cX){var cV=cX[cW];

if(cV instanceof qx.ui.core.Widget){cV.replaceState(cS,cT);
}}}},__dB:null,__dC:null,syncAppearance:function(){var N=this.__dA;
var M=this.__dB;
var O=qx.theme.manager.Appearance.getInstance();
var K=qx.core.Property.$$method.setThemed;
var S=qx.core.Property.$$method.resetThemed;
if(this.__dC){delete this.__dC;
if(M){var J=O.styleFrom(M,N,null,this.getAppearance());
if(J){M=null;
}}}if(!M){var L=this;
var R=[];

do{R.push(L.$$subcontrol||L.getAppearance());
}while(L=L.$$subparent);
M=this.__dB=R.reverse().join(dF).replace(/#[0-9]+/g,ec);
}var P=O.styleFrom(M,N,null,this.getAppearance());

if(P){var Q;

if(J){for(var Q in J){if(P[Q]===undefined){this[S[Q]]();
}}}{};
for(var Q in P){P[Q]===undefined?this[S[Q]]():this[K[Q]](P[Q]);
}}else if(J){for(var Q in J){this[S[Q]]();
}}this.fireDataEvent(fj,this.__dA);
},_applyAppearance:function(F,G){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dq){qx.ui.core.queue.Appearance.add(this);
this.__dq=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dC=true;
qx.ui.core.queue.Appearance.add(this);
var db=this.__dD;

if(db){var cY;

for(var da in db){cY=db[da];

if(cY instanceof qx.ui.core.Widget){cY.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fF=this;

while(fF.getAnonymous()){fF=fF.getLayoutParent();

if(!fF){return null;
}}return fF;
},getFocusTarget:function(){var fx=this;

if(!fx.getEnabled()){return null;
}
while(fx.getAnonymous()||!fx.getFocusable()){fx=fx.getLayoutParent();

if(!fx||!fx.getEnabled()){return null;
}}return fx;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fI,fJ){var fK=this.getFocusElement();
if(fI){var fL=this.getTabIndex();

if(fL==null){fL=1;
}fK.setAttribute(er,fL);
if(qx.core.Variant.isSet(eY,en)){fK.setAttribute(du,dC);
}else{fK.setStyle(dw,dt);
}}else{if(fK.isNativelyFocusable()){fK.setAttribute(er,-1);
}else if(fJ){fK.setAttribute(er,null);
}}},_applyKeepFocus:function(bA){var bB=this.getFocusElement();
bB.setAttribute(ey,bA?eN:null);
},_applyKeepActive:function(H){var I=this.getContainerElement();
I.setAttribute(eh,H?eN:null);
},_applyTabIndex:function(cc){if(cc==null){cc=1;
}else if(cc<1||cc>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&cc!=null){this.getFocusElement().setAttribute(er,cc);
}},_applySelectable:function(fG,fH){if(fH!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(fG);
this.getContentElement().setSelectable(fG);
},_applyEnabled:function(ck,cl){if(ck===false){this.addState(eU);
this.removeState(fb);
if(this.isFocusable()){this.removeState(ep);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eU);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gl,gm,name){},_applyContextMenu:function(y,z){if(z){z.removeState(et);

if(z.getOpener()==this){z.resetOpener();
}
if(!y){this.removeListener(et,this._onContextMenuOpen);
z.removeListener(eo,this._onBeforeContextMenuOpen,this);
}}
if(y){y.setOpener(this);
y.addState(et);

if(!z){this.addListener(et,this._onContextMenuOpen);
y.addListener(eo,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==eP&&this.hasListener(eA)){this.fireDataEvent(eA,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gB,gC){if(!this.isEnabled()&&gB===true){gB=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gB){this.addListener(fd,this._onDragStart);
this.addListener(eW,this._onDrag);
this.addListener(eC,this._onDragEnd);
this.addListener(eD,this._onDragChange);
}else{this.removeListener(fd,this._onDragStart);
this.removeListener(eW,this._onDrag);
this.removeListener(eC,this._onDragEnd);
this.removeListener(eD,this._onDragChange);
}this.getContainerElement().setAttribute(fk,gB?eN:null);
},_applyDroppable:function(r,s){if(!this.isEnabled()&&r===true){r=false;
}this.getContainerElement().setAttribute(dV,r?eN:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eJ);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gX=qx.ui.core.DragDropCursor.getInstance();
var gY=e.getCurrentAction();
gY?gX.setAction(gY):gX.resetAction();
},visualizeFocus:function(){this.addState(ep);
},visualizeBlur:function(){this.removeState(ep);
},scrollChildIntoView:function(cf,cg,ch,ci){this.scrollChildIntoViewX(cf,cg,ci);
this.scrollChildIntoViewY(cf,ch,ci);
},scrollChildIntoViewX:function(bC,bD,bE){this.getContentElement().scrollChildIntoViewX(bC.getContainerElement(),bD,bE);
},scrollChildIntoViewY:function(gE,gF,gG){this.getContentElement().scrollChildIntoViewY(gE.getContainerElement(),gF,gG);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(fY){if(!this.__dD){return false;
}return !!this.__dD[fY];
},__dD:null,_getCreatedChildControls:function(){return this.__dD;
},getChildControl:function(cm,cn){if(!this.__dD){if(cn){return null;
}this.__dD={};
}var co=this.__dD[cm];

if(co){return co;
}
if(cn===true){return null;
}return this._createChildControl(cm);
},_showChildControl:function(gQ){var gR=this.getChildControl(gQ);
gR.show();
return gR;
},_excludeChildControl:function(ft){var fu=this.getChildControl(ft,true);

if(fu){fu.exclude();
}},_isChildControlVisible:function(bF){var bG=this.getChildControl(bF,true);

if(bG){return bG.isVisible();
}return false;
},_createChildControl:function(A){if(!this.__dD){this.__dD={};
}else if(this.__dD[A]){throw new Error("Child control '"+A+"' already created!");
}var E=A.indexOf(dL);

if(E==-1){var B=this._createChildControlImpl(A);
}else{var B=this._createChildControlImpl(A.substring(0,E));
}
if(!B){throw new Error("Unsupported control: "+A);
}B.$$subcontrol=A;
B.$$subparent=this;
var C=this.__dA;
var forward=this._forwardStates;

if(C&&forward&&B instanceof qx.ui.core.Widget){for(var D in C){if(forward[D]){B.addState(D);
}}}this.fireDataEvent(di,B);
return this.__dD[A]=B;
},_createChildControlImpl:function(cO){return null;
},_disposeChildControls:function(){var m=this.__dD;

if(!m){return;
}var j=qx.ui.core.Widget;

for(var k in m){var h=m[k];

if(!j.contains(this,h)){h.destroy();
}else{h.dispose();
}}delete this.__dD;
},_findTopControl:function(){var gf=this;

while(gf){if(!gf.$$subparent){return gf;
}gf=gf.$$subparent;
}return null;
},getContainerLocation:function(gT){var gU=this.getContainerElement().getDomElement();
return gU?qx.bom.element.Location.get(gU,gT):null;
},getContentLocation:function(fr){var fs=this.getContentElement().getDomElement();
return fs?qx.bom.element.Location.get(fs,fr):null;
},setDomLeft:function(cH){var cI=this.getContainerElement().getDomElement();

if(cI){cI.style.left=cH+eT;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gK){var gL=this.getContainerElement().getDomElement();

if(gL){gL.style.top=gK+eT;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(fv,top){var fw=this.getContainerElement().getDomElement();

if(fw){fw.style.left=fv+eT;
fw.style.top=top+eT;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var bJ=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var bK=this.getChildren();

for(var i=0,l=bK.length;i<l;i++){bJ.add(bK[i].clone());
}}return bJ;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fe,eN)){if(this.__dr){qx.locale.Manager.getInstance().removeListenerById(this.__dr);
}}this.getContainerElement().setAttribute(dN,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var cK=qx.ui.core.Widget;
var cJ=this.getContainerElement();

if(this.__dn){cJ.remove(this.__dn);
cK.__dl.poolDecorator(this.__dn);
}
if(this.__do){cJ.remove(this.__do);
cK.__dm.poolDecorator(this.__do);
}this.clearSeparators();
this.__dn=this.__do=this.__du=null;
}else{this._disposeArray(dW);
this._disposeObjects(dX,dE);
}this._disposeArray(dG);
this.__dA=this.__dD=null;
this._disposeObjects(dM,de,ff,ej);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){qx.ui.core.Widget.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var j="keep-align",i="Integer",h="interval",g="direct",f="disappear",e="best-fit",d="mouse",c="bottom-left",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,c,a,v,l,k,n],init:c,themeable:true},placeMethod:{check:[x,d],init:d,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[g,j,e],init:j,themeable:true},placementModeY:{check:[g,j,e],init:j,themeable:true},offsetLeft:{check:i,init:0,themeable:true},offsetTop:{check:i,init:0,themeable:true},offsetRight:{check:i,init:0,themeable:true},offsetBottom:{check:i,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__hr:null,__hs:null,__ht:null,getLayoutLocation:function(y){var B,A,C,top;
A=y.getBounds();
C=A.left;
top=A.top;
var D=A;
y=y.getLayoutParent();

while(y&&!y.isRootWidget()){A=y.getBounds();
C+=A.left;
top+=A.top;
B=y.getInsets();
C+=B.left;
top+=B.top;
y=y.getLayoutParent();
}if(y.isRootWidget()){var z=y.getContainerLocation();

if(z){C+=z.left;
top+=z.top;
}}return {left:C,top:top,right:C+D.width,bottom:top+D.height};
},moveTo:function(R,top){if(this.getDomMove()){this.setDomPosition(R,top);
}else{this.setLayoutProperties({left:R,top:top});
}},placeToWidget:function(K,L){if(L){this.__hu();
this.__hr=qx.lang.Function.bind(this.placeToWidget,this,K,false);
qx.event.Idle.getInstance().addListener(h,this.__hr);
this.__ht=function(){this.__hu();
};
this.addListener(f,this.__ht,this);
}var M=K.getContainerLocation()||this.getLayoutLocation(K);
this.__hw(M);
},__hu:function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(h,this.__hr);
this.__hr=null;
}
if(this.__ht){this.removeListener(f,this.__ht,this);
this.__ht=null;
}},placeToMouse:function(event){var F=event.getDocumentLeft();
var top=event.getDocumentTop();
var E={left:F,top:top,right:F,bottom:top};
this.__hw(E);
},placeToElement:function(U,V){var location=qx.bom.element.Location.get(U);
var W={left:location.left,top:location.top,right:location.left+U.offsetWidth,bottom:location.top+U.offsetHeight};
if(V){this.__hr=qx.lang.Function.bind(this.placeToElement,this,U,false);
qx.event.Idle.getInstance().addListener(h,this.__hr);
this.addListener(f,function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(h,this.__hr);
this.__hr=null;
}},this);
}this.__hw(W);
},placeToPoint:function(N){var O={left:N.left,top:N.top,right:N.left,bottom:N.top};
this.__hw(O);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hv:function(G){var H=null;

if(this._computePlacementSize){var H=this._computePlacementSize();
}else if(this.isVisible()){var H=this.getBounds();
}
if(H==null){this.addListenerOnce(q,function(){this.__hv(G);
},this);
}else{G.call(this,H);
}},__hw:function(X){this.__hv(function(P){var Q=qx.util.placement.Placement.compute(P,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(Q.left,Q.top);
});
},setSmart:function(I){{};
var J=I?j:g;
this.set({placementModeX:J,placementModeY:J});
},getSmart:function(){{};
var S=this.getPlacementModeX()==j?true:false;
var T=this.getPlacementModeY()==j?true:false;
return S&&T;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){this.__hu();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var o="atom",n="Integer",m="String",l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="mouseover",f="Boolean",d="_applyLabel";
qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(o);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(g,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:i},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:m,nullable:true,apply:d},icon:{check:m,nullable:true,apply:j,themeable:true},rich:{check:f,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(v){var w;

switch(v){case o:w=new qx.ui.basic.Atom;
this._add(w);
break;
}return w||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,v);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(p,q){var r=this.getChildControl(o);
p==null?r.resetIcon():r.setIcon(p);
},_applyLabel:function(a,b){var c=this.getChildControl(o);
a==null?c.resetLabel():c.setLabel(a);
},_applyRich:function(s,t){var u=this.getChildControl(o);
u.setRich(s);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gN:{},remove:function(h){delete this.__gN[h.$$hash];
},add:function(g){this.__gN[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__gQ();
for(var i=c.length-1;i>=0;i--){var d=c[i];
if(d.hasValidLayout()){continue;
}if(d.isRootWidget()&&!d.hasUserBounds()){var f=d.getSizeHint();
d.renderLayout(0,0,f.width,f.height);
}else{var e=d.getBounds();
d.renderLayout(e.left,e.top,e.width,e.height);
}}},getNestingLevel:function(x){var y=this.__gP;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__gO:function(){var o=qx.ui.core.queue.Visibility;
this.__gP={};
var n=[];
var m=this.__gN;
var j,l;

for(var k in m){j=m[k];

if(o.isVisible(j)){l=this.getNestingLevel(j);
if(!n[l]){n[l]={};
}n[l][k]=j;
delete m[k];
}}return n;
},__gQ:function(){var s=[];
var u=this.__gO();

for(var r=u.length-1;r>=0;r--){if(!u[r]){continue;
}
for(var q in u[r]){var p=u[r][q];
if(r==0||p.isRootWidget()||p.hasUserBounds()){s.push(p);
p.invalidateLayoutCache();
continue;
}var w=p.getSizeHint(false);

if(w){p.invalidateLayoutCache();
var t=p.getSizeHint();
var v=(!p.getBounds()||w.minWidth!==t.minWidth||w.width!==t.width||w.maxWidth!==t.maxWidth||w.minHeight!==t.minHeight||w.height!==t.height||w.maxHeight!==t.maxHeight);
}else{v=true;
}
if(v){var parent=p.getLayoutParent();

if(!u[r-1]){u[r-1]={};
}u[r-1][parent.$$hash]=parent;
}else{s.push(p);
}}}return s;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fi={};
this.__fj=qx.lang.Function.bind(this.__fn,this);
this.__fk=false;
},members:{__fl:null,__fm:null,__fi:null,__fk:null,__fj:null,schedule:function(e){if(this.__fl==null){this.__fl=window.setTimeout(this.__fj,0);
}var f=e.toHashCode();
if(this.__fm&&this.__fm[f]){return;
}this.__fi[f]=e;
this.__fk=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__fm&&this.__fm[h]){this.__fm[h]=null;
return;
}delete this.__fi[h];
if(qx.lang.Object.isEmpty(this.__fi)&&this.__fl!=null){window.clearTimeout(this.__fl);
this.__fl=null;
}},__fn:qx.event.GlobalError.observeMethod(function(){this.__fl=null;
while(this.__fk){this.__fm=qx.lang.Object.clone(this.__fi);
this.__fi={};
this.__fk=false;

for(var d in this.__fm){var c=this.__fm[d];

if(c){this.__fm[d]=null;
c.call();
}}}this.__fm=null;
})},destruct:function(){if(this.__fl!=null){window.clearTimeout(this.__fl);
}this.__fj=this.__fi=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__gI=d;
this.__gJ=e||null;
this.__gK=qx.util.DeferredCallManager.getInstance();
},members:{__gI:null,__gJ:null,__gK:null,cancel:function(){this.__gK.cancel(this);
},schedule:function(){this.__gK.schedule(this);
},call:function(){this.__gJ?this.__gI.apply(this.__gJ):this.__gI();
}},destruct:function(b,c){this.cancel();
this.__gJ=this.__gI=this.__gK=null;
}});
})();
(function(){var X="element",W="qx.client",V="qxSelectable",U="off",T="on",S="div",R="",Q="mshtml",P="none",O="scroll",bq="text",bp="qx.html.Element",bo="|capture|",bn="activate",bm="blur",bl="deactivate",bk="capture",bj="userSelect",bi="__cR",bh="-moz-none",bf="visible",bg="releaseCapture",bd="|bubble|",be="tabIndex",bb="focus",bc="MozUserSelect",Y="normal",ba="hidden";
qx.Class.define(bp,{extend:qx.core.Object,construct:function(dN,dO,dP){qx.core.Object.call(this);
this.__cv=dN||S;
this.__cw=dO||null;
this.__cx=dP||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cy:{},_scheduleFlush:function(dK){qx.html.Element.__dd.schedule();
},flush:function(){var s;
{};
var j=this.__cz();
var h=j.getFocus();

if(h&&this.__cD(h)){j.blur(h);
}var B=j.getActive();

if(B&&this.__cD(B)){qx.bom.Element.deactivate(B);
}var n=this.__cB();

if(n&&this.__cD(n)){qx.bom.Element.releaseCapture(n);
}var t=[];
var u=this._modified;

for(var r in u){s=u[r];
if(s.__cV()){if(s.__cE&&qx.dom.Hierarchy.isRendered(s.__cE)){t.push(s);
}else{{};
s.__cU();
}delete u[r];
}}
for(var i=0,l=t.length;i<l;i++){s=t[i];
{};
s.__cU();
}var p=this._visibility;

for(var r in p){s=p[r];
var v=s.__cE;

if(!v){delete p[r];
continue;
}{};
if(!s.$$disposed){v.style.display=s.__cH?R:P;
if(qx.core.Variant.isSet(W,Q)){if(!(document.documentMode>=8)){v.style.visibility=s.__cH?bf:ba;
}}}delete p[r];
}var scroll=this._scroll;

for(var r in scroll){s=scroll[r];
var C=s.__cE;

if(C&&C.offsetWidth){var m=true;
if(s.__cK!=null){s.__cE.scrollLeft=s.__cK;
delete s.__cK;
}if(s.__cL!=null){s.__cE.scrollTop=s.__cL;
delete s.__cL;
}var w=s.__cI;

if(w!=null){var q=w.element.getDomElement();

if(q&&q.offsetWidth){qx.bom.element.Scroll.intoViewX(q,C,w.align);
delete s.__cI;
}else{m=false;
}}var z=s.__cJ;

if(z!=null){var q=z.element.getDomElement();

if(q&&q.offsetWidth){qx.bom.element.Scroll.intoViewY(q,C,z.align);
delete s.__cJ;
}else{m=false;
}}if(m){delete scroll[r];
}}}var k={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var A=this._actions[i];
var v=A.element.__cE;

if(!v||!k[A.type]&&!A.element.__cV()){continue;
}var o=A.args;
o.unshift(v);
qx.bom.Element[A.type].apply(qx.bom.Element,o);
}this._actions=[];
for(var r in this.__cy){var g=this.__cy[r];
var C=g.element.__cE;

if(C){qx.bom.Selection.set(C,g.start,g.end);
delete this.__cy[r];
}}qx.event.handler.Appear.refresh();
},__cz:function(){if(!this.__cA){var bX=qx.event.Registration.getManager(window);
this.__cA=bX.getHandler(qx.event.handler.Focus);
}return this.__cA;
},__cB:function(){if(!this.__cC){var bA=qx.event.Registration.getManager(window);
this.__cC=bA.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cC.getCaptureElement();
},__cD:function(bF){var bG=qx.core.ObjectRegistry.fromHashCode(bF.$$element);
return bG&&!bG.__cV();
}},members:{__cv:null,__cE:null,__cF:false,__cG:true,__cH:true,__cI:null,__cJ:null,__cK:null,__cL:null,__cM:null,__cN:null,__cO:null,__cw:null,__cx:null,__cP:null,__cQ:null,__cR:null,__cS:null,__cT:null,_scheduleChildrenUpdate:function(){if(this.__cS){return;
}this.__cS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
},_createDomElement:function(){return qx.bom.Element.create(this.__cv);
},__cU:function(){{};
var cz=this.__cR;

if(cz){var length=cz.length;
var cA;

for(var i=0;i<length;i++){cA=cz[i];

if(cA.__cH&&cA.__cG&&!cA.__cE){cA.__cU();
}}}
if(!this.__cE){this.__cE=this._createDomElement();
this.__cE.$$element=this.$$hash;
this._copyData(false);

if(cz&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cS){this._syncChildren();
}}delete this.__cS;
},_insertChildren:function(){var dH=this.__cR;
var length=dH.length;
var dJ;

if(length>2){var dI=document.createDocumentFragment();

for(var i=0;i<length;i++){dJ=dH[i];

if(dJ.__cE&&dJ.__cG){dI.appendChild(dJ.__cE);
}}this.__cE.appendChild(dI);
}else{var dI=this.__cE;

for(var i=0;i<length;i++){dJ=dH[i];

if(dJ.__cE&&dJ.__cG){dI.appendChild(dJ.__cE);
}}}},_syncChildren:function(){var dj;
var dp=qx.core.ObjectRegistry;
var df=this.__cR;
var dm=df.length;
var dg;
var dk;
var di=this.__cE;
var dl=di.childNodes;
var dh=0;
var dn;
{};
for(var i=dl.length-1;i>=0;i--){dn=dl[i];
dk=dp.fromHashCode(dn.$$element);

if(!dk||!dk.__cG||dk.__cT!==this){di.removeChild(dn);
{};
}}for(var i=0;i<dm;i++){dg=df[i];
if(dg.__cG){dk=dg.__cE;
dn=dl[dh];

if(!dk){continue;
}if(dk!=dn){if(dn){di.insertBefore(dk,dn);
}else{di.appendChild(dk);
}{};
}dh++;
}}{};
},_copyData:function(cD){var cH=this.__cE;
var cG=this.__cx;

if(cG){var cE=qx.bom.element.Attribute;

for(var cI in cG){cE.set(cH,cI,cG[cI]);
}}var cG=this.__cw;

if(cG){var cF=qx.bom.element.Style;

if(cD){cF.setStyles(cH,cG);
}else{cF.setCss(cH,cF.compile(cG));
}}var cG=this.__cP;

if(cG){for(var cI in cG){this._applyProperty(cI,cG[cI]);
}}var cG=this.__cQ;

if(cG){qx.event.Registration.getManager(cH).importListeners(cH,cG);
delete this.__cQ;
}},_syncData:function(){var dX=this.__cE;
var dW=qx.bom.element.Attribute;
var dU=qx.bom.element.Style;
var dV=this.__cN;

if(dV){var eb=this.__cx;

if(eb){var dY;

for(var ea in dV){dY=eb[ea];

if(dY!==undefined){dW.set(dX,ea,dY);
}else{dW.reset(dX,ea);
}}}this.__cN=null;
}var dV=this.__cM;

if(dV){var eb=this.__cw;

if(eb){var dT={};

for(var ea in dV){dT[ea]=eb[ea];
}dU.setStyles(dX,dT);
}this.__cM=null;
}var dV=this.__cO;

if(dV){var eb=this.__cP;

if(eb){var dY;

for(var ea in dV){this._applyProperty(ea,eb[ea]);
}}this.__cO=null;
}},__cV:function(){var cd=this;
while(cd){if(cd.__cF){return true;
}
if(!cd.__cG||!cd.__cH){return false;
}cd=cd.__cT;
}return false;
},__cW:function(dx){if(dx.__cT===this){throw new Error("Child is already in: "+dx);
}
if(dx.__cF){throw new Error("Root elements could not be inserted into other ones.");
}if(dx.__cT){dx.__cT.remove(dx);
}dx.__cT=this;
if(!this.__cR){this.__cR=[];
}if(this.__cE){this._scheduleChildrenUpdate();
}},__cX:function(cp){if(cp.__cT!==this){throw new Error("Has no child: "+cp);
}if(this.__cE){this._scheduleChildrenUpdate();
}delete cp.__cT;
},__cY:function(I){if(I.__cT!==this){throw new Error("Has no child: "+I);
}if(this.__cE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cR||null;
},getChild:function(E){var F=this.__cR;
return F&&F[E]||null;
},hasChildren:function(){var a=this.__cR;
return a&&a[0]!==undefined;
},indexOf:function(dQ){var dR=this.__cR;
return dR?dR.indexOf(dQ):-1;
},hasChild:function(bB){var bC=this.__cR;
return bC&&bC.indexOf(bB)!==-1;
},add:function(cn){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cW(arguments[i]);
}this.__cR.push.apply(this.__cR,arguments);
}else{this.__cW(cn);
this.__cR.push(cn);
}return this;
},addAt:function(ca,cb){this.__cW(ca);
qx.lang.Array.insertAt(this.__cR,ca,cb);
return this;
},remove:function(du){var dv=this.__cR;

if(!dv){return;
}
if(arguments[1]){var dw;

for(var i=0,l=arguments.length;i<l;i++){dw=arguments[i];
this.__cX(dw);
qx.lang.Array.remove(dv,dw);
}}else{this.__cX(du);
qx.lang.Array.remove(dv,du);
}return this;
},removeAt:function(bt){var bu=this.__cR;

if(!bu){throw new Error("Has no children!");
}var bv=bu[bt];

if(!bv){throw new Error("Has no child at this position!");
}this.__cX(bv);
qx.lang.Array.removeAt(this.__cR,bt);
return this;
},removeAll:function(){var bS=this.__cR;

if(bS){for(var i=0,l=bS.length;i<l;i++){this.__cX(bS[i]);
}bS.length=0;
}return this;
},getParent:function(){return this.__cT||null;
},insertInto:function(parent,bz){parent.__cW(this);

if(bz==null){parent.__cR.push(this);
}else{qx.lang.Array.insertAt(this.__cR,this,bz);
}return this;
},insertBefore:function(ce){var parent=ce.__cT;
parent.__cW(this);
qx.lang.Array.insertBefore(parent.__cR,this,ce);
return this;
},insertAfter:function(cc){var parent=cc.__cT;
parent.__cW(this);
qx.lang.Array.insertAfter(parent.__cR,this,cc);
return this;
},moveTo:function(cS){var parent=this.__cT;
parent.__cY(this);
var cT=parent.__cR.indexOf(this);

if(cT===cS){throw new Error("Could not move to same index!");
}else if(cT<cS){cS--;
}qx.lang.Array.removeAt(parent.__cR,cT);
qx.lang.Array.insertAt(parent.__cR,this,cS);
return this;
},moveBefore:function(cU){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(cU));
},moveAfter:function(co){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(co)+1);
},free:function(){var parent=this.__cT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cR){return;
}parent.__cX(this);
qx.lang.Array.remove(parent.__cR,this);
return this;
},getDomElement:function(){return this.__cE||null;
},getNodeName:function(){return this.__cv;
},setNodeName:function(name){this.__cv=name;
},setRoot:function(dt){this.__cF=dt;
},useMarkup:function(dq){if(this.__cE){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(W,Q)){var dr=document.createElement(S);
}else{var dr=qx.bom.Element.getHelperElement();
}dr.innerHTML=dq;
this.useElement(dr.firstChild);
return this.__cE;
},useElement:function(cC){if(this.__cE){throw new Error("Could not overwrite existing element!");
}this.__cE=cC;
this.__cE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bU=this.getAttribute(be);

if(bU>=1){return true;
}var bT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bU>=0&&bT[this.__cv]){return true;
}return false;
},setSelectable:qx.core.Variant.select(W,{"webkit":function(by){this.setAttribute(V,by?T:U);
this.setStyle(bj,by?Y:P);
},"gecko":function(dz){this.setAttribute(V,dz?T:U);
this.setStyle(bc,dz?bq:bh);
},"default":function(bW){this.setAttribute(V,bW?T:U);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cv];
},include:function(){if(this.__cG){return;
}delete this.__cG;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cG){return;
}this.__cG=false;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cG===true;
},show:function(){if(this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}if(this.__cT){this.__cT._scheduleChildrenUpdate();
}delete this.__cH;
},hide:function(){if(!this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}this.__cH=false;
},isVisible:function(){return this.__cH===true;
},scrollChildIntoViewX:function(cV,cW,cX){var cY=this.__cE;
var da=cV.getDomElement();

if(cX!==false&&cY&&cY.offsetWidth&&da&&da.offsetWidth){qx.bom.element.Scroll.intoViewX(da,cY,cW);
}else{this.__cI={element:cV,align:cW};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}delete this.__cK;
},scrollChildIntoViewY:function(cM,cN,cO){var cP=this.__cE;
var cQ=cM.getDomElement();

if(cO!==false&&cP&&cP.offsetWidth&&cQ&&cQ.offsetWidth){qx.bom.element.Scroll.intoViewY(cQ,cP,cN);
}else{this.__cJ={element:cM,align:cN};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}delete this.__cL;
},scrollToX:function(x,br){var bs=this.__cE;

if(br!==true&&bs&&bs.offsetWidth){bs.scrollLeft=x;
}else{this.__cK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}delete this.__cI;
},getScrollX:function(){var D=this.__cE;

if(D){return D.scrollLeft;
}return this.__cK||0;
},scrollToY:function(y,dL){var dM=this.__cE;

if(dL!==true&&dM&&dM.offsetWidth){dM.scrollTop=y;
}else{this.__cL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}delete this.__cJ;
},getScrollY:function(){var J=this.__cE;

if(J){return J.scrollTop;
}return this.__cL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(O,this.__db,this);
},enableScrolling:function(){this.removeListener(O,this.__db,this);
},__da:null,__db:function(e){if(!this.__da){this.__da=true;
this.__cE.scrollTop=0;
this.__cE.scrollLeft=0;
delete this.__da;
}},getTextSelection:function(){var bV=this.__cE;

if(bV){return qx.bom.Selection.get(bV);
}return null;
},getTextSelectionLength:function(){var dS=this.__cE;

if(dS){return qx.bom.Selection.getLength(dS);
}return null;
},getTextSelectionStart:function(){var cR=this.__cE;

if(cR){return qx.bom.Selection.getStart(cR);
}return null;
},getTextSelectionEnd:function(){var dA=this.__cE;

if(dA){return qx.bom.Selection.getEnd(dA);
}return null;
},setTextSelection:function(cv,cw){var cx=this.__cE;

if(cx){qx.bom.Selection.set(cx,cv,cw);
return;
}qx.html.Element.__cy[this.toHashCode()]={element:this,start:cv,end:cw};
qx.html.Element._scheduleFlush(X);
},clearTextSelection:function(){var dy=this.__cE;

if(dy){qx.bom.Selection.clear(dy);
}delete qx.html.Element.__cy[this.toHashCode()];
},__dc:function(cJ,cK){var cL=qx.html.Element._actions;
cL.push({type:cJ,element:this,args:cK||[]});
qx.html.Element._scheduleFlush(X);
},focus:function(){this.__dc(bb);
},blur:function(){this.__dc(bm);
},activate:function(){this.__dc(bn);
},deactivate:function(){this.__dc(bl);
},capture:function(f){this.__dc(bk,[f!==false]);
},releaseCapture:function(){this.__dc(bg);
},setStyle:function(bO,bP,bQ){if(!this.__cw){this.__cw={};
}
if(this.__cw[bO]==bP){return;
}
if(bP==null){delete this.__cw[bO];
}else{this.__cw[bO]=bP;
}if(this.__cE){if(bQ){qx.bom.element.Style.set(this.__cE,bO,bP);
return this;
}if(!this.__cM){this.__cM={};
}this.__cM[bO]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}return this;
},setStyles:function(cf,cg){var ch=qx.bom.element.Style;

if(!this.__cw){this.__cw={};
}
if(this.__cE){if(!this.__cM){this.__cM={};
}
for(var cj in cf){var ci=cf[cj];

if(this.__cw[cj]==ci){continue;
}
if(ci==null){delete this.__cw[cj];
}else{this.__cw[cj]=ci;
}if(cg){ch.set(this.__cE,cj,ci);
continue;
}this.__cM[cj]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}else{for(var cj in cf){var ci=cf[cj];

if(this.__cw[cj]==ci){continue;
}
if(ci==null){delete this.__cw[cj];
}else{this.__cw[cj]=ci;
}}}return this;
},removeStyle:function(G,H){this.setStyle(G,null,H);
},getStyle:function(cy){return this.__cw?this.__cw[cy]:null;
},getAllStyles:function(){return this.__cw||null;
},setAttribute:function(ck,cl,cm){if(!this.__cx){this.__cx={};
}
if(this.__cx[ck]==cl){return;
}
if(cl==null){delete this.__cx[ck];
}else{this.__cx[ck]=cl;
}if(this.__cE){if(cm){qx.bom.element.Attribute.set(this.__cE,ck,cl);
return this;
}if(!this.__cN){this.__cN={};
}this.__cN[ck]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}return this;
},setAttributes:function(dc,dd){for(var de in dc){this.setAttribute(de,dc[de],dd);
}return this;
},removeAttribute:function(bw,bx){this.setAttribute(bw,null,bx);
},getAttribute:function(ds){return this.__cx?this.__cx[ds]:null;
},_applyProperty:function(name,bR){},_setProperty:function(L,M,N){if(!this.__cP){this.__cP={};
}
if(this.__cP[L]==M){return;
}
if(M==null){delete this.__cP[L];
}else{this.__cP[L]=M;
}if(this.__cE){if(N){this._applyProperty(L,M);
return this;
}if(!this.__cO){this.__cO={};
}this.__cO[L]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(X);
}return this;
},_removeProperty:function(bD,bE){this._setProperty(bD,null,bE);
},_getProperty:function(b){var c=this.__cP;

if(!c){return null;
}var d=c[b];
return d==null?null:d;
},addListener:function(dB,dC,self,dD){var dE;

if(this.$$disposed){return null;
}{};

if(this.__cE){return qx.event.Registration.addListener(this.__cE,dB,dC,self,dD);
}
if(!this.__cQ){this.__cQ={};
}
if(dD==null){dD=false;
}var dF=qx.event.Manager.getNextUniqueId();
var dG=dB+(dD?bo:bd)+dF;
this.__cQ[dG]={type:dB,listener:dC,self:self,capture:dD,unique:dF};
return dG;
},removeListener:function(bH,bI,self,bJ){var bK;

if(this.$$disposed){return null;
}{};

if(this.__cE){qx.event.Registration.removeListener(this.__cE,bH,bI,self,bJ);
}else{var bM=this.__cQ;
var bL;

if(bJ==null){bJ=false;
}
for(var bN in bM){bL=bM[bN];
if(bL.listener===bI&&bL.self===self&&bL.capture===bJ&&bL.type===bH){delete bM[bN];
break;
}}}return this;
},removeListenerById:function(bY){if(this.$$disposed){return null;
}
if(this.__cE){qx.event.Registration.removeListenerById(this.__cE,bY);
}else{delete this.__cQ[bY];
}return this;
},hasListener:function(cq,cr){if(this.$$disposed){return false;
}
if(this.__cE){return qx.event.Registration.hasListener(this.__cE,cq,cr);
}var ct=this.__cQ;
var cs;

if(cr==null){cr=false;
}
for(var cu in ct){cs=ct[cu];
if(cs.capture===cr&&cs.type===cq){return true;
}}return false;
}},defer:function(cB){cB.__dd=new qx.util.DeferredCall(cB.flush,cB);
},destruct:function(){var K=this.__cE;

if(K){qx.event.Registration.getManager(K).removeAllListeners(K);
K.$$element=R;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bi);
this.__cx=this.__cw=this.__cQ=this.__cP=this.__cN=this.__cM=this.__cO=this.__cE=this.__cT=this.__cI=this.__cJ=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__jP:false,__jQ:{},__jR:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__jQ[g]=true;

if(!self.__jP){self.__jU.schedule();
self.__jP=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jS){return;
}self.__jS=true;
self.__jU.cancel();
var f=self.__jQ;
self.__jT(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__jP=false;
});
self.__jT(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jS=false;
});
self.__jR=0;
},__jT:function(c,d){var self=qx.ui.core.queue.Manager;

try{c();
}catch(e){{};
self.__jP=false;
self.__jS=false;
self.__jR+=1;

if(self.__jR<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__jR-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{d();
}}},defer:function(h){h.__jU=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(e,event,f){var parent=e;
var q=this._manager;
var n,u;
var l;
var p,s;
var r;
var t=[];
n=q.getListeners(e,f,true);
u=q.getListeners(e,f,false);

if(n){t.push(n);
}
if(u){t.push(u);
}var parent=this._getParent(e);
var h=[];
var g=[];
var k=[];
var o=[];
while(parent!=null){n=q.getListeners(parent,f,true);

if(n){k.push(n);
o.push(parent);
}u=q.getListeners(parent,f,false);

if(u){h.push(u);
g.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=k.length-1;i>=0;i--){r=o[i];
event.setCurrentTarget(r);
l=k[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(e);

for(var i=0,v=t.length;i<v;i++){l=t[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||e;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,v=h.length;i<v;i++){r=g[i];
event.setCurrentTarget(r);
l=h[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var bm="keydown",bl="qx.client",bk="keypress",bj="NumLock",bi="keyup",bh="Enter",bg="0",bf="9",be="-",bd="PageUp",cu="+",ct="PrintScreen",cs="gecko",cr="A",cq="Z",cp="Left",co="F5",cn="Down",cm="Up",cl="F11",bt="F6",bu="useraction",br="F3",bs="keyinput",bp="Insert",bq="F8",bn="End",bo="/",bB="Delete",bC="*",bO="cmd",bK="F1",bW="F4",bR="Home",ch="F2",cc="F12",bG="PageDown",ck="F7",cj="Win",ci="F9",bF="F10",bI="Right",bJ="text",bM="Escape",bP="webkit",bS="5",bY="3",ce="Meta",bv="7",bw="CapsLock",bH="input",bV="Control",bU="Space",bT="Tab",cb="Shift",ca="Pause",bQ="Unidentified",bX="qx.event.handler.Keyboard",ba="mshtml|webkit",cd="6",bx="off",by="Apps",bL="4",bb="Alt",bc="mshtml",bE="2",bz="Scroll",bA="1",bD="8",bN="autoComplete",cg=",",cf="Backspace";
qx.Class.define(bX,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(L){qx.core.Object.call(this);
this.__fX=L;
this.__fY=L.getWindow();
if(qx.core.Variant.isSet(bl,cs)){this.__ga=this.__fY;
}else{this.__ga=this.__fY.document.documentElement;
}this.__gb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(m){if(this._identifierToKeyCodeMap[m]){return true;
}
if(m.length!=1){return false;
}
if(m>=bg&&m<=bf){return true;
}
if(m>=cr&&m<=cq){return true;
}
switch(m){case cu:case be:case bC:case bo:return true;
default:return false;
}}},members:{__gc:null,__fX:null,__fY:null,__ga:null,__gb:null,__gd:null,__ge:null,__gf:null,canHandleEvent:function(G,H){},registerEvent:function(I,J,K){},unregisterEvent:function(q,r,s){},_fireInputEvent:function(n,o){var p=this.__gg();
if(p&&p.offsetWidth!=0){var event=qx.event.Registration.createEvent(bs,qx.event.type.KeyInput,[n,p,o]);
this.__fX.dispatchEvent(p,event);
}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[bs]);
}},_fireSequenceEvent:function(h,i,j){var k=this.__gg();
var l=h.keyCode;
var event=qx.event.Registration.createEvent(i,qx.event.type.KeySequence,[h,k,j]);
this.__fX.dispatchEvent(k,event);
if(qx.core.Variant.isSet(bl,ba)){if(i==bm&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(l)&&!this._emulateKeyPress[l]){this._fireSequenceEvent(h,bk,j);
}}}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[i]);
}},__gg:function(){var y=this.__fX.getHandler(qx.event.handler.Focus);
var z=y.getActive();
if(!z||z.offsetWidth==0){z=y.getFocus();
}if(!z||z.offsetWidth==0){z=this.__fX.getWindow().document.body;
}return z;
},_initKeyObserver:function(){this.__gc=qx.lang.Function.listener(this.__gh,this);
this.__gf=qx.lang.Function.listener(this.__gj,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ga,bi,this.__gc);
Event.addNativeListener(this.__ga,bm,this.__gc);
Event.addNativeListener(this.__ga,bk,this.__gf);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ga,bi,this.__gc);
Event.removeNativeListener(this.__ga,bm,this.__gc);
Event.removeNativeListener(this.__ga,bk,this.__gf);

for(var B in (this.__ge||{})){var A=this.__ge[B];
Event.removeNativeListener(A.target,bk,A.callback);
}delete (this.__ge);
},__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(V){V=window.event||V;
var Y=V.keyCode;
var W=0;
var X=V.type;
if(!(this.__gb[Y]==bm&&X==bm)){this._idealKeyHandler(Y,W,X,V);
}if(X==bm){if(this._isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,bk,V);
}}this.__gb[Y]=X;
},"gecko":function(N){var R=this._keyCodeFix[N.keyCode]||N.keyCode;
var P=0;
var Q=N.type;
if(qx.bom.client.Platform.WIN){var O=R?this._keyCodeToIdentifier(R):this._charCodeToIdentifier(P);

if(!(this.__gb[O]==bm&&Q==bm)){this._idealKeyHandler(R,P,Q,N);
}this.__gb[O]=Q;
}else{this._idealKeyHandler(R,P,Q,N);
}this.__gi(N.target,Q,R);
},"webkit":function(c){var f=0;
var d=0;
var e=c.type;
if(qx.bom.client.Engine.VERSION<525.13){if(e==bi||e==bm){f=this._charCode2KeyCode[c.charCode]||c.keyCode;
}else{if(this._charCode2KeyCode[c.charCode]){f=this._charCode2KeyCode[c.charCode];
}else{d=c.charCode;
}}this._idealKeyHandler(f,d,e,c);
}else{f=c.keyCode;
if(!(this.__gb[f]==bm&&e==bm)){this._idealKeyHandler(f,d,e,c);
}if(e==bm){if(this._isNonPrintableKeyCode(f)||this._emulateKeyPress[f]){this._idealKeyHandler(f,d,bk,c);
}}this.__gb[f]=e;
}},"opera":function(x){this.__gd=x.keyCode;
this._idealKeyHandler(x.keyCode,0,x.type,x);
}})),__gi:qx.core.Variant.select(bl,{"gecko":function(cv,cw,cx){if(cw===bm&&(cx==33||cx==34||cx==38||cx==40)&&cv.type==bJ&&cv.tagName.toLowerCase()===bH&&cv.getAttribute(bN)!==bx){if(!this.__ge){this.__ge={};
}var cz=qx.core.ObjectRegistry.toHashCode(cv);

if(this.__ge[cz]){return;
}var self=this;
this.__ge[cz]={target:cv,callback:function(w){qx.bom.Event.stopPropagation(w);
self.__gj(w);
}};
var cy=qx.event.GlobalError.observeMethod(this.__ge[cz].callback);
qx.bom.Event.addNativeListener(cv,bk,cy);
}},"default":null}),__gj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(b){b=window.event||b;

if(this._charCode2KeyCode[b.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[b.keyCode],0,b.type,b);
}else{this._idealKeyHandler(0,b.keyCode,b.type,b);
}},"gecko":function(C){var F=this._keyCodeFix[C.keyCode]||C.keyCode;
var D=C.charCode;
var E=C.type;
this._idealKeyHandler(F,D,E,C);
},"webkit":function(cJ){if(qx.bom.client.Engine.VERSION<525.13){var cM=0;
var cK=0;
var cL=cJ.type;

if(cL==bi||cL==bm){cM=this._charCode2KeyCode[cJ.charCode]||cJ.keyCode;
}else{if(this._charCode2KeyCode[cJ.charCode]){cM=this._charCode2KeyCode[cJ.charCode];
}else{cK=cJ.charCode;
}}this._idealKeyHandler(cM,cK,cL,cJ);
}else{if(this._charCode2KeyCode[cJ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cJ.keyCode],0,cJ.type,cJ);
}else{this._idealKeyHandler(0,cJ.keyCode,cJ.type,cJ);
}}},"opera":function(t){var v=t.keyCode;
var u=t.type;
if(v!=this.__gd){this._idealKeyHandler(0,this.__gd,u,t);
}else{if(this._keyCodeToIdentifierMap[t.keyCode]){this._idealKeyHandler(t.keyCode,0,t.type,t);
}else{this._idealKeyHandler(0,t.keyCode,t.type,t);
}}}})),_idealKeyHandler:function(cA,cB,cC,cD){var cE;
if(cA||(!cA&&!cB)){cE=this._keyCodeToIdentifier(cA);
this._fireSequenceEvent(cD,cC,cE);
}else{cE=this._charCodeToIdentifier(cB);
this._fireSequenceEvent(cD,bk,cE);
this._fireInputEvent(cD,cB);
}},_specialCharCodeMap:{8:cf,9:bT,13:bh,27:bM,32:bU},_emulateKeyPress:qx.core.Variant.select(bl,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:cb,17:bV,18:bb,20:bw,224:ce,37:cp,38:cm,39:bI,40:cn,33:bd,34:bG,35:bn,36:bR,45:bp,46:bB,112:bK,113:ch,114:br,115:bW,116:co,117:bt,118:ck,119:bq,120:ci,121:bF,122:cl,123:cc,144:bj,44:ct,145:bz,19:ca,91:qx.bom.client.Platform.MAC?bO:cj,92:cj,93:qx.bom.client.Platform.MAC?bO:by},_numpadToCharCode:{96:bg.charCodeAt(0),97:bA.charCodeAt(0),98:bE.charCodeAt(0),99:bY.charCodeAt(0),100:bL.charCodeAt(0),101:bS.charCodeAt(0),102:cd.charCodeAt(0),103:bv.charCodeAt(0),104:bD.charCodeAt(0),105:bf.charCodeAt(0),106:bC.charCodeAt(0),107:cu.charCodeAt(0),109:be.charCodeAt(0),110:cg.charCodeAt(0),111:bo.charCodeAt(0)},_charCodeA:cr.charCodeAt(0),_charCodeZ:cq.charCodeAt(0),_charCode0:bg.charCodeAt(0),_charCode9:bf.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(g){if(g>=this._charCodeA&&g<=this._charCodeZ){return true;
}if(g>=this._charCode0&&g<=this._charCode9){return true;
}if(this._specialCharCodeMap[g]){return true;
}if(this._numpadToCharCode[g]){return true;
}if(this._isNonPrintableKeyCode(g)){return true;
}return false;
},_keyCodeToIdentifier:function(T){if(this._isIdentifiableKeyCode(T)){var U=this._numpadToCharCode[T];

if(U){return String.fromCharCode(U);
}return (this._keyCodeToIdentifierMap[T]||this._specialCharCodeMap[T]||String.fromCharCode(T));
}else{return bQ;
}},_charCodeToIdentifier:function(M){return this._specialCharCodeMap[M]||String.fromCharCode(M).toUpperCase();
},_identifierToKeyCode:function(S){return qx.event.handler.Keyboard._identifierToKeyCodeMap[S]||S.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gd=this.__fX=this.__fY=this.__ga=this.__gb=null;
},defer:function(cF,cG,cH){qx.event.Registration.addHandler(cF);
if(!cF._identifierToKeyCodeMap){cF._identifierToKeyCodeMap={};

for(var cI in cG._keyCodeToIdentifierMap){cF._identifierToKeyCodeMap[cG._keyCodeToIdentifierMap[cI]]=parseInt(cI,10);
}
for(var cI in cG._specialCharCodeMap){cF._identifierToKeyCodeMap[cG._specialCharCodeMap[cI]]=parseInt(cI,10);
}}
if(qx.core.Variant.isSet(bl,bc)){cG._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bl,cs)){cG._keyCodeFix={12:cG._identifierToKeyCode(bj)};
}else if(qx.core.Variant.isSet(bl,bP)){if(qx.bom.client.Engine.VERSION<525.13){cG._charCode2KeyCode={63289:cG._identifierToKeyCode(bj),63276:cG._identifierToKeyCode(bd),63277:cG._identifierToKeyCode(bG),63275:cG._identifierToKeyCode(bn),63273:cG._identifierToKeyCode(bR),63234:cG._identifierToKeyCode(cp),63232:cG._identifierToKeyCode(cm),63235:cG._identifierToKeyCode(bI),63233:cG._identifierToKeyCode(cn),63272:cG._identifierToKeyCode(bB),63302:cG._identifierToKeyCode(bp),63236:cG._identifierToKeyCode(bK),63237:cG._identifierToKeyCode(ch),63238:cG._identifierToKeyCode(br),63239:cG._identifierToKeyCode(bW),63240:cG._identifierToKeyCode(co),63241:cG._identifierToKeyCode(bt),63242:cG._identifierToKeyCode(ck),63243:cG._identifierToKeyCode(bq),63244:cG._identifierToKeyCode(ci),63245:cG._identifierToKeyCode(bF),63246:cG._identifierToKeyCode(cl),63247:cG._identifierToKeyCode(cc),63248:cG._identifierToKeyCode(ct),3:cG._identifierToKeyCode(bh),12:cG._identifierToKeyCode(bj),13:cG._identifierToKeyCode(bh)};
}else{cG._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var u="qx.client",t="mouseup",s="click",r="mousedown",q="contextmenu",p="mousewheel",o="dblclick",n="mshtml",m="mouseover",l="mouseout",g="DOMMouseScroll",k="mousemove",j="on",f="mshtml|webkit|opera",e="useraction",i="gecko|webkit",h="qx.event.handler.Mouse";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dS=d;
this.__dT=d.getWindow();
this.__dU=this.__dT.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__dS:null,__dT:null,__dU:null,canHandleEvent:function(U,V){},registerEvent:qx.bom.client.System.IPHONE?
function(a,b,c){a[j+b]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(N,O,P){N[j+O]=undefined;
}:qx.lang.Function.returnNull,__eb:function(C,D,E){if(!E){E=C.target||C.srcElement;
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==p?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,e,qx.event.type.Data,[D||C.type]);
},_initButtonObserver:function(){this.__dV=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,r,this.__dV);
Event.addNativeListener(this.__dU,t,this.__dV);
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,o,this.__dV);
Event.addNativeListener(this.__dU,q,this.__dV);
},_initMoveObserver:function(){this.__dW=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,k,this.__dW);
Event.addNativeListener(this.__dU,m,this.__dW);
Event.addNativeListener(this.__dU,l,this.__dW);
},_initWheelObserver:function(){this.__dX=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(u,f)?p:g;
var T=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.addNativeListener(T,S,this.__dX);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,r,this.__dV);
Event.removeNativeListener(this.__dU,t,this.__dV);
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,o,this.__dV);
Event.removeNativeListener(this.__dU,q,this.__dV);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,k,this.__dW);
Event.removeNativeListener(this.__dU,m,this.__dW);
Event.removeNativeListener(this.__dU,l,this.__dW);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var Q=qx.core.Variant.isSet(u,f)?p:g;
var R=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.removeNativeListener(R,Q,this.__dX);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(y){this.__eb(y);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var K=J.type;
var L=J.target||J.srcElement;
if(qx.core.Variant.isSet(u,i)){if(L&&L.nodeType==3){L=L.parentNode;
}}
if(this.__ec){this.__ec(J,K,L);
}
if(this.__ee){this.__ee(J,K,L);
}this.__eb(J,K,L);

if(this.__ed){this.__ed(J,K,L);
}
if(this.__ef){this.__ef(J,K,L);
}this.__dY=K;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(M){this.__eb(M,p);
}),__ec:qx.core.Variant.select(u,{"webkit":function(z,A,B){if(qx.bom.client.Engine.VERSION<530){if(A==q){this.__eb(z,t,B);
}}},"default":null}),__ed:qx.core.Variant.select(u,{"opera":function(F,G,H){if(G==t&&F.button==2){this.__eb(F,q,H);
}},"default":null}),__ee:qx.core.Variant.select(u,{"mshtml":function(v,w,x){if(w==t&&this.__dY==s){this.__eb(v,r,x);
}else if(w==o){this.__eb(v,s,x);
}},"default":null}),__ef:qx.core.Variant.select(u,{"mshtml":null,"default":function(W,X,Y){switch(X){case r:this.__ea=Y;
break;
case t:if(Y!==this.__ea){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__ea);
this.__eb(W,s,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dS=this.__dT=this.__dU=this.__ea=null;
},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Y){qx.core.Object.call(this);
this.__ig=Y;
this.__ih=Y.getWindow().document.documentElement;
this.__ig.addListener(this.__ih,v,this._onMouseDown,this);
this.__it();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:false,__ir:0,__is:0,canHandleEvent:function(W,X){},registerEvent:function(ba,bb,bc){},unregisterEvent:function(bi,bj,bk){},addType:function(bl){this.__ik[bl]=true;
},addAction:function(P){this.__il[P]=true;
},supportsType:function(bh){return !!this.__ik[bh];
},supportsAction:function(B){return !!this.__il[B];
},getData:function(F){if(!this.__iA||!this.__ii){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ik[F]){throw new Error("Unsupported data type: "+F+"!");
}
if(!this.__in[F]){this.__io=F;
this.__iv(q,this.__ij,this.__ii,false);
}
if(!this.__in[F]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__in[F]||null;
},getCurrentAction:function(){return this.__ip;
},addData:function(Q,R){this.__in[Q]=R;
},getCurrentType:function(){return this.__io;
},isSessionActive:function(){return this.__iq;
},__it:function(){this.__ik={};
this.__il={};
this.__im={};
this.__in={};
},__iu:function(){if(this.__ij==null){return;
}var E=this.__il;
var C=this.__im;
var D=null;

if(this.__iA){if(C.Shift&&C.Ctrl&&E.alias){D=k;
}else if(C.Shift&&C.Alt&&E.copy){D=j;
}else if(C.Shift&&E.move){D=b;
}else if(C.Alt&&E.alias){D=k;
}else if(C.Ctrl&&E.copy){D=j;
}else if(E.move){D=b;
}else if(E.copy){D=j;
}else if(E.alias){D=k;
}}
if(D!=this.__ip){this.__ip=D;
this.__iv(o,this.__ij,this.__ii,false);
}},__iv:function(I,J,K,L,M){var O=qx.event.Registration;
var N=O.createEvent(I,qx.event.type.Drag,[L,M]);

if(J!==K){N.setRelatedTarget(K);
}return O.dispatchEvent(J,N);
},__iw:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(u)==w){return bm;
}bm=bm.parentNode;
}return null;
},__ix:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(r)==w){return bg;
}bg=bg.parentNode;
}return null;
},__iy:function(){this.__ij=null;
this.__ig.removeListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.removeListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__it();
},__iz:function(){if(this.__iq){this.__ig.removeListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.removeListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.removeListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.removeListener(this.__ih,z,this._onKeyUp,this,true);
this.__iv(x,this.__ij,this.__ii,false);
this.__iq=false;
}this.__iA=false;
this.__ii=null;
this.__iy();
},__iA:false,_onWindowBlur:function(e){this.__iz();
},_onKeyDown:function(e){var S=e.getKeyIdentifier();

switch(S){case A:case f:case d:if(!this.__im[S]){this.__im[S]=true;
this.__iu();
}}},_onKeyUp:function(e){var G=e.getKeyIdentifier();

switch(G){case A:case f:case d:if(this.__im[G]){this.__im[G]=false;
this.__iu();
}}},_onMouseDown:function(e){if(this.__iq){return;
}var H=this.__iw(e.getTarget());

if(H){this.__ir=e.getDocumentLeft();
this.__is=e.getDocumentTop();
this.__ij=H;
this.__ig.addListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.addListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__iA){this.__iv(s,this.__ii,this.__ij,false,e);
}if(this.__iq){e.stopPropagation();
}this.__iz();
},_onMouseMove:function(e){if(this.__iq){if(!this.__iv(t,this.__ij,this.__ii,true,e)){this.__iz();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ir)>3||Math.abs(e.getDocumentTop()-this.__is)>3){if(this.__iv(n,this.__ij,this.__ii,true,e)){this.__iq=true;
this.__ig.addListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.addListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.addListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.addListener(this.__ih,z,this._onKeyUp,this,true);
var bf=this.__im;
bf.Ctrl=e.isCtrlPressed();
bf.Shift=e.isShiftPressed();
bf.Alt=e.isAltPressed();
this.__iu();
}else{this.__iv(x,this.__ij,this.__ii,false);
this.__iy();
}}}},_onMouseOver:function(e){var bd=e.getTarget();
var be=this.__ix(bd);

if(be&&be!=this.__ii){this.__iA=this.__iv(m,be,this.__ij,true,e);
this.__ii=be;
this.__iu();
}},_onMouseOut:function(e){var V=this.__ix(e.getTarget());
var U=this.__ix(e.getRelatedTarget());

if(V&&V!==U&&V==this.__ii){this.__iv(l,this.__ii,U,false,e);
this.__ii=null;
this.__iA=false;
qx.event.Timer.once(this.__iu,this,0);
}}},destruct:function(){this.__ij=this.__ii=this.__ig=this.__ih=this.__ik=this.__il=this.__im=this.__in=null;
},defer:function(T){qx.event.Registration.addHandler(T);
}});
})();
(function(){var h="-",g="qx.event.handler.Element";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(v,w){},registerEvent:function(a,b,c){var f=qx.core.ObjectRegistry.toHashCode(a);
var d=f+h+b;
var e=qx.lang.Function.listener(this._onNative,this,d);
qx.bom.Event.addNativeListener(a,b,e);
this._registeredEvents[d]={element:a,type:b,listener:e};
},unregisterEvent:function(o,p,q){var t=this._registeredEvents;

if(!t){return;
}var u=qx.core.ObjectRegistry.toHashCode(o);
var r=u+h+p;
var s=this._registeredEvents[r];

if(s){qx.bom.Event.removeNativeListener(o,p,s.listener);
}delete this._registeredEvents[r];
},_onNative:qx.event.GlobalError.observeMethod(function(j,k){var m=this._registeredEvents;

if(!m){return;
}var l=m[k];
qx.event.Registration.fireNonBubblingEvent(l.element,l.type,qx.event.type.Native,[j]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var e="qx.event.handler.Appear",d="disappear",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__bM=k;
this.__bN={};
qx.event.handler.Appear.__bO[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bO:{},refresh:function(){var w=this.__bO;

for(var x in w){w[x].refresh();
}}},members:{__bM:null,__bN:null,canHandleEvent:function(a,b){},registerEvent:function(l,m,n){var o=qx.core.ObjectRegistry.toHashCode(l)+m;
var p=this.__bN;

if(p&&!p[o]){p[o]=l;
l.$$displayed=l.offsetWidth>0;
}},unregisterEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__bN;

if(!v){return;
}
if(v[u]){delete v[u];
}},refresh:function(){var i=this.__bN;
var j;

for(var h in i){j=i[h];
var f=j.offsetWidth>0;

if((!!j.$$displayed)!==f){j.$$displayed=f;
var g=qx.event.Registration.createEvent(f?c:d);
this.__bM.dispatchEvent(j,g);
}}}},destruct:function(){this.__bM=this.__bN=null;
delete qx.event.handler.Appear.__bO[this.$$hash];
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h=" ",g="<",f="='",e="none",d="qx.bom.Element",c="' ",a="div",b="></";
qx.Class.define(d,{statics:{__jt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__ju:{},getHelperElement:function(z){if(!z){z=window;
}var B=z.location.href;

if(!qx.bom.Element.__ju[B]){var A=qx.bom.Element.__ju[B]=z.document.createElement(a);
if(qx.bom.client.Engine.WEBKIT){A.style.display=e;
z.document.body.appendChild(A);
}}return qx.bom.Element.__ju[B];
},create:function(name,G,H){if(!H){H=window;
}
if(!name){throw new Error("The tag name is missing!");
}var J=this.__jt;
var I=n;

for(var L in G){if(J[L]){I+=L+f+G[L]+c;
}}var M;
if(I!=n){if(qx.bom.client.Engine.MSHTML){M=H.document.createElement(g+name+h+I+k);
}else{var K=qx.bom.Element.getHelperElement(H);
K.innerHTML=g+name+h+I+b+name+k;
M=K.firstChild;
}}else{M=H.document.createElement(name);
}
for(var L in G){if(!J[L]){qx.bom.element.Attribute.set(M,L,G[L]);
}}return M;
},empty:function(bf){return bf.innerHTML=n;
},addListener:function(v,w,x,self,y){return qx.event.Registration.addListener(v,w,x,self,y);
},removeListener:function(p,q,r,self,s){return qx.event.Registration.removeListener(p,q,r,self,s);
},removeListenerById:function(ba,bb){return qx.event.Registration.removeListenerById(ba,bb);
},hasListener:function(D,E,F){return qx.event.Registration.hasListener(D,E,F);
},focus:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).focus(bg);
},blur:function(be){qx.event.Registration.getManager(be).getHandler(qx.event.handler.Focus).blur(be);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(C){qx.event.Registration.getManager(C).getHandler(qx.event.handler.Focus).deactivate(C);
},capture:function(t,u){qx.event.Registration.getManager(t).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(t,u);
},releaseCapture:function(bd){qx.event.Registration.getManager(bd).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bd);
},clone:function(N,O){var R;

if(O||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(N))){var V=qx.event.Registration.getManager(N);
var P=qx.dom.Hierarchy.getDescendants(N);
P.push(N);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],false);
}}var R=N.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],true);
}}if(O===true){var Y=qx.dom.Hierarchy.getDescendants(R);
Y.push(R);
var Q,T,X,S;

for(var i=0,W=P.length;i<W;i++){X=P[i];
Q=V.serializeListeners(X);

if(Q.length>0){T=Y[i];

for(var j=0,U=Q.length;j<U;j++){S=Q[j];
V.addListener(T,S.type,S.handler,S.self,S.capture);
}}}}return R;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Native.prototype._cloneNativeEvent.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bf="qx.client",be="blur",bd="focus",bc="mousedown",bb="on",ba="mouseup",Y="DOMFocusOut",X="DOMFocusIn",W="selectstart",V="onmousedown",bz="onfocusout",by="onfocusin",bx="onmouseup",bw="onselectstart",bv="draggesture",bu="qx.event.handler.Focus",bt="_applyFocus",bs="deactivate",br="textarea",bq="_applyActive",bm="input",bn="focusin",bk="qxSelectable",bl="tabIndex",bi="off",bj="activate",bg="mshtml",bh="focusout",bo="qxKeepFocus",bp="qxKeepActive";
qx.Class.define(bu,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this._manager=s;
this._window=s.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bq,nullable:true},focus:{apply:bt,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,canHandleEvent:function(S,T){},registerEvent:function(J,K,L){},unregisterEvent:function(bL,bM,bN){},focus:function(U){if(qx.core.Variant.isSet(bf,bg)){window.setTimeout(function(){try{U.focus();
}catch(a){}},0);
}else{try{U.focus();
}catch(Q){}}this.setFocus(U);
this.setActive(U);
},activate:function(bJ){this.setActive(bJ);
},blur:function(bK){try{bK.blur();
}catch(w){}
if(this.getActive()===bK){this.resetActive();
}
if(this.getFocus()===bK){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(bF){var bG=this.__jc(bF);

if(bG){this.setActive(bG);
}},__iN:function(l,m,n,o){var q=qx.event.Registration;
var p=q.createEvent(n,qx.event.type.Focus,[l,m,o]);
q.dispatchEvent(l,p);
},_windowFocused:true,__iO:function(){if(this._windowFocused){this._windowFocused=false;
this.__iN(this._window,null,be,false);
}},__iP:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iN(this._window,null,bd,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iH=qx.lang.Function.listener(this.__iQ,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
this._window.addEventListener(bv,this.__iH,true);
},"mshtml":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.attachEvent(V,this.__iD);
this._document.attachEvent(bx,this.__iE);
this._document.attachEvent(by,this.__iJ);
this._document.attachEvent(bz,this.__iK);
this._document.attachEvent(bw,this.__iI);
},"webkit":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._document.addEventListener(W,this.__iI,false);
this._window.addEventListener(Y,this.__iK,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
},"opera":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(X,this.__iJ,true);
this._window.addEventListener(Y,this.__iK,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(ba,this.__iE,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
this._window.removeEventListener(bv,this.__iH,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,V,this.__iD);
qx.bom.Event.removeNativeListener(this._document,bx,this.__iE);
qx.bom.Event.removeNativeListener(this._document,by,this.__iJ);
qx.bom.Event.removeNativeListener(this._document,bz,this.__iK);
qx.bom.Event.removeNativeListener(this._document,bw,this.__iI);
},"webkit":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(W,this.__iI,false);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
},"opera":function(){this._document.removeEventListener(bc,this.__iD,true);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
}}),__iQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jd(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__iP();
var O=e.srcElement;
var N=this.__jb(O);

if(N){this.setFocus(N);
}this.tryActivate(O);
},"opera":function(e){var bI=e.target;

if(bI==this._document||bI==this._window){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(bI);
this.tryActivate(bI);
if(!this.__jd(bI)){bI.selectionStart=0;
bI.selectionEnd=0;
}}},"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__iO();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bE=e.target;

if(bE===this.getFocus()){this.resetFocus();
}
if(bE===this.getActive()){this.resetActive();
}},"opera":function(e){var B=e.target;

if(B==this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(B===this.getFocus()){this.resetFocus();
}
if(B===this.getActive()){this.resetActive();
}}},"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__iP();
bH=this._body;
}this.setFocus(bH);
this.tryActivate(bH);
},"webkit":function(e){var M=e.target;

if(M===this._window||M===this._document){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(M);
this.tryActivate(M);
}},"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bA=this.__jb(e.target);

if(!bA){qx.bom.Event.preventDefault(e);
}else if(bA===this._body){this.setFocus(bA);
}},"mshtml":function(e){var y=e.srcElement;
var x=this.__jb(y);

if(x){if(!this.__jd(y)){y.unselectable=bb;
try{document.selection.empty();
}catch(e){}try{x.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jd(y)){y.unselectable=bb;
}}},"webkit":function(e){var A=e.target;
var z=this.__jb(A);

if(z){this.setFocus(z);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__jb(I);

if(!this.__jd(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null})),__iW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var r=e.srcElement;

if(r.unselectable){r.unselectable=bi;
}this.tryActivate(this.__iX(r));
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(this.__iX(e.target));
},"default":null})),__iX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(h){var i=this.getFocus();

if(i&&h!=i&&(i.nodeName.toLowerCase()===bm||i.nodeName.toLowerCase()===br)){h=i;
}return h;
},"default":function(F){return F;
}})),__iY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var P=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jd(P)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ja:function(b){var c=qx.bom.element.Attribute.get(b,bl);

if(c>=1){return true;
}var d=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(c>=0&&d[b.tagName]){return true;
}return false;
},__jb:function(bB){while(bB&&bB.nodeType===1){if(bB.getAttribute(bo)==bb){return null;
}
if(this.__ja(bB)){return bB;
}bB=bB.parentNode;
}return this._body;
},__jc:function(bC){var bD=bC;

while(bC&&bC.nodeType===1){if(bC.getAttribute(bp)==bb){return null;
}bC=bC.parentNode;
}return bD;
},__jd:function(u){while(u&&u.nodeType===1){var v=u.getAttribute(bk);

if(v!=null){return v===bb;
}u=u.parentNode;
}return true;
},_applyActive:function(j,k){if(k){this.__iN(k,j,bs,true);
}
if(j){this.__iN(j,k,bj,true);
}},_applyFocus:function(f,g){if(g){this.__iN(g,f,bh,true);
}
if(f){this.__iN(f,g,bn,true);
}if(g){this.__iN(g,f,be,false);
}
if(f){this.__iN(f,g,bd,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__je=null;
},defer:function(C){qx.event.Registration.addHandler(C);
var D=C.FOCUSABLE_ELEMENTS;

for(var E in D){D[E.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="",m="undefined",l="qx.client",k="readOnly",j="accessKey",i="qx.bom.element.Attribute",h="rowSpan",g="vAlign",f="className",e="textContent",C="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",r="dateTime",s="maxLength",p="mshtml",q="cellPadding",o="colSpan";
qx.Class.define(i,{statics:{__gk:{names:{"class":f,"for":B,html:u,text:qx.core.Variant.isSet(l,p)?v:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:t,maxlength:s,readonly:k,longdesc:A,cellpadding:q,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Variant.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__gk.runtime;

for(var c in a){if(!d[c]){b.push(c,x,a[c],C);
}}return b.join(n);
},get:qx.core.Variant.select(l,{"mshtml":function(K,name){var M=this.__gk;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==m&&L==M.propertyDefault[name]){if(typeof M.bools[name]===m){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(E,name){var G=this.__gk;
var F;
name=G.names[name]||name;
if(G.property[name]){F=E[name];

if(typeof G.propertyDefault[name]!==m&&F==G.propertyDefault[name]){if(typeof G.bools[name]===m){return null;
}else{return F;
}}}else{F=E.getAttribute(name);
}if(G.bools[name]){return !!F;
}return F;
}}),set:function(H,name,I){var J=this.__gk;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]&&(!(H[name]===undefined)||J.qxProperties[name])){if(I==null){if(J.removeableProperties[name]){H.removeAttribute(name);
return;
}else if(typeof J.propertyDefault[name]!==m){I=J.propertyDefault[name];
}}H[name]=I;
}else{if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else{H.setAttribute(name,I);
}}},reset:function(D,name){this.set(D,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(j,k){var k=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,j,k);
k.button=j.button;
k.clientX=j.clientX;
k.clientY=j.clientY;
k.pageX=j.pageX;
k.pageY=j.pageY;
k.screenX=j.screenX;
k.screenY=j.screenY;
k.wheelDelta=j.wheelDelta;
k.detail=j.detail;
k.srcElement=j.srcElement;
return k;
},__jq:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__jq[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientWidth;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientWidth:l.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(o){if(qx.bom.client.Engine.VERSION<523.15){return (o||window).innerHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(n){return (n||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollTop||j.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return (k||window).document.documentMode===5;
}else{return (k||window).document.compatMode!==f;
}},"webkit":function(m){if(document.compatMode===undefined){var n=(m||window).document.createElement(a);
n.style.cssText=e;
return n.style.width===c?true:false;
}else{return (m||window).document.compatMode!==f;
}},"default":function(l){return (l||window).document.compatMode!==f;
}}),isStandardMode:function(j){return !this.isQuirksMode(j);
},getWidth:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getWidth(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollWidth:h.body.scrollWidth;
return Math.max(scroll,i);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ko:function(z){var A=navigator.userAgent;
var C=new RegExp(s+z+d);
var D=A.match(C);

if(!D){return;
}var name=D[1].toLowerCase();
var B=D[3];
if(A.match(/Version(\/| )([0-9]+\.[0-9])/)){B=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(A.indexOf(a)!==-1||A.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
B=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=B;
this.VERSION=parseFloat(B,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__ko(o);
},"gecko":function(E){E.__ko(k);
},"mshtml":function(F){F.__ko(v);
},"opera":function(y){y.__ko(p);
}})});
})();
(function(){var N="qx.client",M="qx.dom.Hierarchy",L="previousSibling",K="*",J="nextSibling",I="parentNode";
qx.Class.define(M,{statics:{getNodeIndex:function(O){var P=0;

while(O&&(O=O.previousSibling)){P++;
}return P;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(T){while(T&&(T=T.previousSibling)&&!qx.dom.Node.isElement(T)){continue;
}return T||null;
},contains:qx.core.Variant.select(N,{"webkit|mshtml|opera":function(t,u){if(qx.dom.Node.isDocument(t)){var v=qx.dom.Node.getDocument(u);
return t&&v==t;
}else if(qx.dom.Node.isDocument(u)){return false;
}else{return t.contains(u);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(a,b){while(b){if(a==b){return true;
}b=b.parentNode;
}return false;
}}),isRendered:function(U){if(!U.offsetParent){return false;
}var V=U.ownerDocument||U.document;
if(V.body.contains){return V.body.contains(U);
}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(N,{"mshtml|opera":function(o,p){if(o===p){return o;
}
while(o&&qx.dom.Node.isElement(o)){if(o.contains(p)){return o;
}o=o.parentNode;
}return null;
},"default":function(e,f){if(e===f){return e;
}var g={};
var j=qx.core.ObjectRegistry;
var i,h;

while(e||f){if(e){i=j.toHashCode(e);

if(g[i]){return g[i];
}g[i]=e;
e=e.parentNode;
}
if(f){h=j.toHashCode(f);

if(g[h]){return g[h];
}g[h]=f;
f=f.parentNode;
}}return null;
}}),getAncestors:function(n){return this._recursivelyCollect(n,I);
},getChildElements:function(c){c=c.firstChild;

if(!c){return [];
}var d=this.getNextSiblings(c);

if(c.nodeType===1){d.unshift(c);
}return d;
},getDescendants:function(S){return qx.lang.Array.fromCollection(S.getElementsByTagName(K));
},getFirstDescendant:function(l){l=l.firstChild;

while(l&&l.nodeType!=1){l=l.nextSibling;
}return l;
},getLastDescendant:function(C){C=C.lastChild;

while(C&&C.nodeType!=1){C=C.previousSibling;
}return C;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,L);
},getNextSiblings:function(m){return this._recursivelyCollect(m,J);
},_recursivelyCollect:function(x,y){var z=[];

while(x=x[y]){if(x.nodeType==1){z.push(x);
}}return z;
},getSiblings:function(G){return this.getPreviousSiblings(G).reverse().concat(this.getNextSiblings(G));
},isEmpty:function(w){w=w.firstChild;

while(w){if(w.nodeType===qx.dom.Node.ELEMENT||w.nodeType===qx.dom.Node.TEXT){return false;
}w=w.nextSibling;
}return true;
},cleanWhitespace:function(q){var r=q.firstChild;

while(r){var s=r.nextSibling;

if(r.nodeType==3&&!/\S/.test(r.nodeValue)){q.removeChild(r);
}r=s;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f){qx.event.type.Event.prototype.init.call(this,true,e);

if(f){this._native=f.getNativeEvent()||null;
this._originalTarget=f.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var i=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(i);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(j,k){this.getManager().addData(j,k);
},getData:function(h){return this.getManager().getData(h);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(n,o){qx.event.dispatch.AbstractBubbling.call(this,n);
this.__fD=n.getWindow();
this.__fE=o;
n.addListener(this.__fD,h,this.releaseCapture,this);
n.addListener(this.__fD,g,this.releaseCapture,this);
n.addListener(this.__fD,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fE:null,__fF:null,__fG:true,__fD:null,_getParent:function(t){return t.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__fF&&this.__fH[l]);
},dispatchEvent:function(p,event,q){if(q==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fG||!qx.dom.Hierarchy.contains(this.__fF,p)){p=this.__fF;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,q);
},__fH:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(r,s){var s=s!==false;

if(this.__fF===r&&this.__fG==s){return;
}
if(this.__fF){this.releaseCapture();
}this.nativeSetCapture(r,s);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(r,j,function(){qx.bom.Event.removeNativeListener(r,j,arguments.callee);
self.releaseCapture();
});
}this.__fG=s;
this.__fF=r;
this.__fE.fireEvent(r,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fF;
},releaseCapture:function(){var u=this.__fF;

if(!u){return;
}this.__fF=null;
this.__fE.fireEvent(u,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fF=this.__fD=this.__fE=null;
},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
v.setProperty(n,b);

if(u){var w=h;
w+=u;

if(t){w+=f+t+o;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,e);
}})},defer:function(z){if(qx.core.Variant.isSet(r,p)){var A=[a,j];
var B=[c,g];

for(var i=0,l=A.length;i<l;i++){try{new ActiveXObject(A[i]);
new ActiveXObject(B[i]);
}catch(C){continue;
}z.DOMDOC=A[i];
z.XMLHTTP=B[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var bp="",bo="qx.client",bn="hidden",bm="-moz-scrollbars-none",bl="overflow",bk=";",bj="overflowY",bi=":",bh="overflowX",bg="overflow:",bB="none",bA="scroll",bz="borderLeftStyle",by="borderRightStyle",bx="div",bw="borderRightWidth",bv="overflow-y",bu="borderLeftWidth",bt="-moz-scrollbars-vertical",bs="100px",bq="qx.bom.element.Overflow",br="overflow-x";
qx.Class.define(bq,{statics:{__jv:null,getScrollbarWidth:function(){if(this.__jv!==null){return this.__jv;
}var g=qx.bom.element.Style;
var i=function(bI,bJ){return parseInt(g.get(bI,bJ))||0;
};
var j=function(a){return (g.get(a,by)==bB?0:i(a,bw));
};
var h=function(ca){return (g.get(ca,bz)==bB?0:i(ca,bu));
};
var l=qx.core.Variant.select(bo,{"mshtml":function(cf){if(g.get(cf,bj)==bn||cf.clientWidth==0){return j(cf);
}return Math.max(0,cf.offsetWidth-cf.clientLeft-cf.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=g.get(o,bl);
var q=(p==bA||p==bt?16:0);
return Math.max(0,j(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-h(o)));
}});
var k=function(bM){return l(bM)-j(bM);
};
var t=document.createElement(bx);
var s=t.style;
s.height=s.width=bs;
s.overflow=bA;
document.body.appendChild(t);
var c=k(t);
this.__jv=c?c:16;
document.body.removeChild(t);
return this.__jv;
},_compile:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(T,U){if(U==bn){U=bm;
}return bg+U+bk;
}:
function(cd,ce){return cd+bi+ce+bk;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){return bg+bU+bk;
}:
function(D,E){return D+bi+E+bk;
},"default":function(bN,bO){return bN+bi+bO+bk;
}}),compileX:function(bV){return this._compile(br,bV);
},compileY:function(V){return this._compile(bv,V);
},getX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,L){var M=qx.bom.element.Style.get(K,bl,L,false);

if(M===bm){M=bn;
}return M;
}:
function(bE,bF){return qx.bom.element.Style.get(bE,bh,bF,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(P,Q){return qx.bom.element.Style.get(P,bl,Q,false);
}:
function(cb,cc){return qx.bom.element.Style.get(cb,bh,cc,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bh,d,false);
}}),setX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w==bn){w=bm;
}v.style.overflow=w;
}:
function(bR,bS){bR.style.overflowX=bS;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(z,A){z.style.overflow=A;
}:
function(e,f){e.style.overflowX=f;
},"default":function(G,H){G.style.overflowX=H;
}}),resetX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bC){bC.style.overflow=bp;
}:
function(F){F.style.overflowX=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bG,bH){bG.style.overflow=bp;
}:
function(R,S){R.style.overflowX=bp;
},"default":function(bb){bb.style.overflowX=bp;
}}),getY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bW,bX){var bY=qx.bom.element.Style.get(bW,bl,bX,false);

if(bY===bm){bY=bn;
}return bY;
}:
function(bP,bQ){return qx.bom.element.Style.get(bP,bj,bQ,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(x,y){return qx.bom.element.Style.get(x,bl,y,false);
}:
function(B,C){return qx.bom.element.Style.get(B,bj,C,false);
},"default":function(N,O){return qx.bom.element.Style.get(N,bj,O,false);
}}),setY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){if(bd===bn){bd=bm;
}bc.style.overflow=bd;
}:
function(Y,ba){Y.style.overflowY=ba;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(m,n){m.style.overflow=n;
}:
function(be,bf){be.style.overflowY=bf;
},"default":function(W,X){W.style.overflowY=X;
}}),resetY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bp;
}:
function(r){r.style.overflowY=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(I,J){I.style.overflow=bp;
}:
function(bK,bL){bK.style.overflowY=bp;
},"default":function(bD){bD.style.overflowY=bp;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(p,q){var s=qx.bom.element.Style.get(p,c,q,false);
var x,top,v,u;
var r,t;

if(typeof s===e&&s!==n&&s!==h){s=qx.lang.String.trim(s);
if(/\((.*)\)/.test(s)){var w=RegExp.$1.split(l);
top=qx.lang.String.trim(w[0]);
r=qx.lang.String.trim(w[1]);
t=qx.lang.String.trim(w[2]);
x=qx.lang.String.trim(w[3]);
if(x===n){x=null;
}
if(top===n){top=null;
}
if(r===n){r=null;
}
if(t===n){t=null;
}if(top!=null){top=parseInt(top,10);
}
if(r!=null){r=parseInt(r,10);
}
if(t!=null){t=parseInt(t,10);
}
if(x!=null){x=parseInt(x,10);
}if(r!=null&&x!=null){v=r-x;
}else if(r!=null){v=r;
}
if(t!=null&&top!=null){u=t-top;
}else if(t!=null){u=t;
}}else{throw new Error("Could not parse clip string: "+s);
}}return {left:x||null,top:top||null,width:v||null,height:u||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eg:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__eg[a]||a)+e;
},get:function(o,p){return qx.bom.element.Style.get(o,c,p,false);
},set:function(m,n){m.style.cursor=this.__eg[n]||n;
},reset:function(q){q.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(v){if(v>=1){return m;
}
if(v<0.00001){v=0;
}return d+(v*100)+f;
},"gecko":function(C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+C+k;
}else{return i+C+k;
}},"default":function(B){if(B==1){return m;
}return i+B+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(E,F){var G=qx.bom.element.Style.get(E,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(F>=1){E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(F<0.00001){F=0;
}if(!E.currentStyle||!E.currentStyle.hasLayout){E.style.zoom=1;
}E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m)+c+F*100+e;
},"gecko":function(H,I){if(I==1){I=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=I;
}else{H.style.opacity=I;
}},"default":function(w,x){if(x==1){x=m;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(J){var K=qx.bom.element.Style.get(J,j,qx.bom.element.Style.COMPUTED_MODE,false);
J.style.filter=K.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(u){if(qx.bom.client.Engine.VERSION<1.7){u.style.MozOpacity=m;
}else{u.style.opacity=m;
}},"default":function(D){D.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(n,o){var p=qx.bom.element.Style.get(n,j,o,false);

if(p){var q=p.match(/alpha\(opacity=(.*)\)/);

if(q&&q[1]){return parseFloat(q[1])/100;
}}return 1.0;
},"gecko":function(r,s){var t=qx.bom.element.Style.get(r,qx.bom.client.Engine.VERSION<1.7?g:h,s,false);

if(t==0.999999){t=1.0;
}
if(t!=null){return parseFloat(t);
}return 1.0;
},"default":function(y,z){var A=qx.bom.element.Style.get(y,h,z,false);

if(A!=null){return parseFloat(A);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__ci:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cj:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__ck:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cl:function(v){var w=this.__ck;
return w.tags[v.tagName.toLowerCase()]||w.types[v.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(A){{};
},"default":function(s){var u=this.__cj;
var t=p;

if(u){for(var i=0,l=u.length;i<l;i++){t+=u[i]+m+s+c;
}}return t;
}}),get:qx.core.Variant.select(q,{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__cl(r)){return d;
}}return k;
},"default":function(x){var z=this.__ci;
var y;

if(z){for(var i=0,l=z.length;i<l;i++){y=qx.bom.element.Style.get(x,z[i],null,false);

if(y!=null&&y!==p){return y;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(F,G){{};
},"default":function(C,D){var E=this.__ci;

if(E){for(var i=0,l=E.length;i<l;i++){C.style[E[i]]=D;
}}}}),reset:function(B){this.set(B,p);
}}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__bS:function(){var bw=[a,h,q,c];
var bA={};
var bx=document.documentElement.style;
var bB=[u,o,x,z,E];

for(var i=0,l=bw.length;i<l;i++){var bC=bw[i];
var by=bC;

if(bx[bC]){bA[by]=bC;
continue;
}bC=qx.lang.String.firstUp(bC);

for(var j=0,bD=bB.length;j<bD;j++){var bz=bB[j]+bC;

if(typeof bx[bz]==w){bA[by]=bz;
break;
}}}this.__bT=bA;
this.__bT[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__bU={};

for(var by in bA){this.__bU[by]=this.__bY(bA[by]);
}this.__bT[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__bV:{width:r,height:F,left:A,right:t,top:B,bottom:s},__bW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(M){var O=[];
var Q=this.__bW;
var P=this.__bU;
var name,N;

for(name in M){N=M[name];

if(N==null){continue;
}name=P[name]||name;
if(Q[name]){O.push(Q[name].compile(N));
}else{O.push(this.__bY(name),D,N,p);
}}return O.join(m);
},__bX:{},__bY:function(J){var K=this.__bX;
var L=K[J];

if(!L){L=K[J]=qx.lang.String.hyphenate(J);
}return L;
},setCss:qx.core.Variant.select(k,{"mshtml":function(bg,bh){bg.style.cssText=bh;
},"default":function(bl,bm){bl.setAttribute(g,bm);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bj){return bj.style.cssText.toLowerCase();
},"default":function(bi){return bi.getAttribute(g);
}}),isPropertySupported:function(bk){return (this.__bW[bk]||this.__bT[bk]||bk in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(G,name,H,I){{};
name=this.__bT[name]||name;
if(I!==false&&this.__bW[name]){return this.__bW[name].set(G,H);
}else{G.style[name]=H!==null?H:m;
}},setStyles:function(bn,bo,bp){{};
var bs=this.__bT;
var bu=this.__bW;
var bq=bn.style;

for(var bt in bo){var br=bo[bt];
var name=bs[bt]||bt;

if(br===undefined){if(bp!==false&&bu[name]){bu[name].reset(bn);
}else{bq[name]=m;
}}else{if(bp!==false&&bu[name]){bu[name].set(bn,br);
}else{bq[name]=br!==null?br:m;
}}}},reset:function(R,name,S){name=this.__bT[name]||name;
if(S!==false&&this.__bW[name]){return this.__bW[name].reset(R);
}else{R.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(Y,name,ba,bb){name=this.__bT[name]||name;
if(bb!==false&&this.__bW[name]){return this.__bW[name].get(Y,ba);
}if(!Y.currentStyle){return Y.style[name]||m;
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||m;
case this.CASCADED_MODE:return Y.currentStyle[name]||m;
default:var bf=Y.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bf)){return bf;
}var be=this.__bV[name];

if(be){var bc=Y.style[name];
Y.style[name]=bf||0;
var bd=Y.style[be]+e;
Y.style[name]=bc;
return bd;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bf)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bf;
}},"default":function(T,name,U,V){name=this.__bT[name]||name;
if(V!==false&&this.__bW[name]){return this.__bW[name].get(T,U);
}switch(U){case this.LOCAL_MODE:return T.style[name]||m;
case this.CASCADED_MODE:if(T.currentStyle){return T.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var W=qx.dom.Node.getDocument(T);
var X=W.defaultView.getComputedStyle(T,null);
return X?X[name]:m;
}}})},defer:function(bv){bv.__bS();
}});
})();
(function(){var bt="borderTopWidth",bs="borderLeftWidth",br="marginTop",bq="marginLeft",bp="scroll",bo="qx.client",bn="border-box",bm="borderBottomWidth",bl="borderRightWidth",bk="auto",bI="padding",bH="qx.bom.element.Location",bG="paddingLeft",bF="static",bE="marginBottom",bD="visible",bC="BODY",bB="paddingBottom",bA="paddingTop",bz="marginRight",bx="position",by="margin",bv="overflow",bw="paddingRight",bu="border";
qx.Class.define(bH,{statics:{__hx:function(bi,bj){return qx.bom.element.Style.get(bi,bj,qx.bom.element.Style.COMPUTED_MODE,false);
},__hy:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hz:function(i){var l=0,top=0;
if(i.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var k=qx.dom.Node.getWindow(i);
l-=qx.bom.Viewport.getScrollLeft(k);
top-=qx.bom.Viewport.getScrollTop(k);
}else{var j=qx.dom.Node.getDocument(i).body;
i=i.parentNode;
while(i&&i!=j){l+=i.scrollLeft;
top+=i.scrollTop;
i=i.parentNode;
}}return {left:l,top:top};
},__hA:qx.core.Variant.select(bo,{"mshtml":function(e){var g=qx.dom.Node.getDocument(e);
var f=g.body;
var h=0;
var top=0;
h-=f.clientLeft+g.documentElement.clientLeft;
top-=f.clientTop+g.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){h+=this.__hy(f,bs);
top+=this.__hy(f,bt);
}return {left:h,top:top};
},"webkit":function(be){var bg=qx.dom.Node.getDocument(be);
var bf=bg.body;
var bh=bf.offsetLeft;
var top=bf.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bh+=this.__hy(bf,bs);
top+=this.__hy(bf,bt);
}return {left:bh,top:top};
},"gecko":function(bL){var bM=qx.dom.Node.getDocument(bL).body;
var bN=bM.offsetLeft;
var top=bM.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bN+=this.__hy(bM,bq);
top+=this.__hy(bM,br);
}if(qx.bom.element.BoxSizing.get(bM)!==bn){bN+=this.__hy(bM,bs);
top+=this.__hy(bM,bt);
}return {left:bN,top:top};
},"default":function(u){var v=qx.dom.Node.getDocument(u).body;
var w=v.offsetLeft;
var top=v.offsetTop;
return {left:w,top:top};
}}),__hB:qx.core.Variant.select(bo,{"mshtml|webkit":function(z){var B=qx.dom.Node.getDocument(z);
if(z.getBoundingClientRect){var C=z.getBoundingClientRect();
var D=C.left;
var top=C.top;
}else{var D=z.offsetLeft;
var top=z.offsetTop;
z=z.offsetParent;
var A=B.body;
while(z&&z!=A){D+=z.offsetLeft;
top+=z.offsetTop;
D+=this.__hy(z,bs);
top+=this.__hy(z,bt);
z=z.offsetParent;
}}return {left:D,top:top};
},"gecko":function(E){if(E.getBoundingClientRect){var H=E.getBoundingClientRect();
var I=Math.round(H.left);
var top=Math.round(H.top);
}else{var I=0;
var top=0;
var F=qx.dom.Node.getDocument(E).body;
var G=qx.bom.element.BoxSizing;

if(G.get(E)!==bn){I-=this.__hy(E,bs);
top-=this.__hy(E,bt);
}
while(E&&E!==F){I+=E.offsetLeft;
top+=E.offsetTop;
if(G.get(E)!==bn){I+=this.__hy(E,bs);
top+=this.__hy(E,bt);
}if(E.parentNode&&this.__hx(E.parentNode,bv)!=bD){I+=this.__hy(E.parentNode,bs);
top+=this.__hy(E.parentNode,bt);
}E=E.offsetParent;
}}return {left:I,top:top};
},"default":function(P){var R=0;
var top=0;
var Q=qx.dom.Node.getDocument(P).body;
while(P&&P!==Q){R+=P.offsetLeft;
top+=P.offsetTop;
P=P.offsetParent;
}return {left:R,top:top};
}}),get:function(U,V){if(U.tagName==bC){var location=this.__hC(U);
var bd=location.left;
var top=location.top;
}else{var W=this.__hA(U);
var bc=this.__hB(U);
var scroll=this.__hz(U);
var bd=bc.left+W.left-scroll.left;
var top=bc.top+W.top-scroll.top;
}var X=bd+U.offsetWidth;
var Y=top+U.offsetHeight;

if(V){if(V==bI||V==bp){var ba=qx.bom.element.Overflow.getX(U);

if(ba==bp||ba==bk){X+=U.scrollWidth-U.offsetWidth+this.__hy(U,bs)+this.__hy(U,bl);
}var bb=qx.bom.element.Overflow.getY(U);

if(bb==bp||bb==bk){Y+=U.scrollHeight-U.offsetHeight+this.__hy(U,bt)+this.__hy(U,bm);
}}
switch(V){case bI:bd+=this.__hy(U,bG);
top+=this.__hy(U,bA);
X-=this.__hy(U,bw);
Y-=this.__hy(U,bB);
case bp:bd-=U.scrollLeft;
top-=U.scrollTop;
X-=U.scrollLeft;
Y-=U.scrollTop;
case bu:bd+=this.__hy(U,bs);
top+=this.__hy(U,bt);
X-=this.__hy(U,bl);
Y-=this.__hy(U,bm);
break;
case by:bd-=this.__hy(U,bq);
top-=this.__hy(U,br);
X+=this.__hy(U,bz);
Y+=this.__hy(U,bE);
break;
}}return {left:bd,top:top,right:X,bottom:Y};
},__hC:qx.core.Variant.select(bo,{"default":function(c){var top=c.offsetTop+this.__hy(c,br);
var d=c.offsetLeft+this.__hy(c,bq);
return {left:d,top:top};
},"mshtml":function(S){var top=S.offsetTop;
var T=S.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hy(S,br);
T+=this.__hy(S,bq);
}return {left:T,top:top};
},"gecko":function(bJ){var top=bJ.offsetTop+this.__hy(bJ,br)+this.__hy(bJ,bs);
var bK=bJ.offsetLeft+this.__hy(bJ,bq)+this.__hy(bJ,bt);
return {left:bK,top:top};
}}),getLeft:function(x,y){return this.get(x,y).left;
},getTop:function(q,r){return this.get(q,r).top;
},getRight:function(s,t){return this.get(s,t).right;
},getBottom:function(bO,bP){return this.get(bO,bP).bottom;
},getRelative:function(J,K,L,M){var O=this.get(J,L);
var N=this.get(K,M);
return {left:O.left-N.left,top:O.top-N.top,right:O.right-N.right,bottom:O.bottom-N.bottom};
},getPosition:function(m){return this.getRelative(m,this.getOffsetParent(m));
},getOffsetParent:function(n){var p=n.offsetParent||document.body;
var o=qx.bom.element.Style;

while(p&&(!/^body|html$/i.test(p.tagName)&&o.get(p,bx)===bF)){p=p.offsetParent;
}return p;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(bg){return bg.selection;
},"default":function(by){return qx.dom.Node.getWindow(by).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(z){var A=qx.bom.Range.get(qx.dom.Node.getDocument(z));
return A.text;
},"default":function(X){if(this.__jO(X)){return X.value.substring(X.selectionStart,X.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(X)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(v){var x=this.get(v);
var w=qx.util.StringSplit.split(x,/\r\n/);
return x.length-(w.length-1);
},"opera":function(br){var bw,bu,bs;

if(this.__jO(br)){var bv=br.selectionStart;
var bt=br.selectionEnd;
bw=br.value.substring(bv,bt);
bu=bt-bv;
}else{bw=qx.bom.Selection.get(br);
bu=bw.length;
}bs=qx.util.StringSplit.split(bw,/\r\n/);
return bu-(bs.length-1);
},"default":function(a){if(this.__jO(a)){return a.selectionEnd-a.selectionStart;
}else{return this.get(a).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(m){if(this.__jO(m)){var r=qx.bom.Range.get();
if(!m.contains(r.parentElement())){return -1;
}var s=qx.bom.Range.get(m);
var q=m.value.length;
s.moveToBookmark(r.getBookmark());
s.moveEnd(f,q);
return q-s.text.length;
}else{var s=qx.bom.Range.get(m);
var o=s.parentElement();
var t=qx.bom.Range.get();
t.moveToElementText(o);
var n=qx.bom.Range.get(qx.dom.Node.getBodyElement(m));
n.setEndPoint(g,s);
n.setEndPoint(j,t);
if(t.compareEndPoints(g,n)==0){return 0;
}var p;
var u=0;

while(true){p=n.moveStart(k,-1);
if(t.compareEndPoints(g,n)==0){break;
}if(p==0){break;
}else{u++;
}}return ++u;
}},"gecko|webkit":function(F){if(this.__jO(F)){return F.selectionStart;
}else{var H=qx.dom.Node.getDocument(F);
var G=this.getSelectionObject(H);
if(G.anchorOffset<G.focusOffset){return G.anchorOffset;
}else{return G.focusOffset;
}}},"default":function(bx){if(this.__jO(bx)){return bx.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bx)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(J){if(this.__jO(J)){var O=qx.bom.Range.get();
if(!J.contains(O.parentElement())){return -1;
}var P=qx.bom.Range.get(J);
var N=J.value.length;
P.moveToBookmark(O.getBookmark());
P.moveStart(f,-N);
return P.text.length;
}else{var P=qx.bom.Range.get(J);
var L=P.parentElement();
var Q=qx.bom.Range.get();
Q.moveToElementText(L);
var N=Q.text.length;
var K=qx.bom.Range.get(qx.dom.Node.getBodyElement(J));
K.setEndPoint(j,P);
K.setEndPoint(g,Q);
if(Q.compareEndPoints(j,K)==0){return N-1;
}var M;
var R=0;

while(true){M=K.moveEnd(k,1);
if(Q.compareEndPoints(j,K)==0){break;
}if(M==0){break;
}else{R++;
}}return N-(++R);
}},"gecko|webkit":function(bh){if(this.__jO(bh)){return bh.selectionEnd;
}else{var bj=qx.dom.Node.getDocument(bh);
var bi=this.getSelectionObject(bj);
if(bi.focusOffset>bi.anchorOffset){return bi.focusOffset;
}else{return bi.anchorOffset;
}}},"default":function(y){if(this.__jO(y)){return y.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(y)).focusOffset;
}}}),__jO:function(Y){return qx.dom.Node.isElement(Y)&&(Y.nodeName.toLowerCase()==i||Y.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(S,T,U){var V;
if(qx.dom.Node.isDocument(S)){S=S.body;
}
if(qx.dom.Node.isElement(S)||qx.dom.Node.isText(S)){switch(S.nodeName.toLowerCase()){case i:case h:case d:if(U===undefined){U=S.value.length;
}
if(T>=0&&T<=S.value.length&&U>=0&&U<=S.value.length){V=qx.bom.Range.get(S);
V.collapse(true);
V.moveStart(k,T);
V.moveEnd(k,U-T);
V.select();
return true;
}break;
case c:if(U===undefined){U=S.nodeValue.length;
}
if(T>=0&&T<=S.nodeValue.length&&U>=0&&U<=S.nodeValue.length){V=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
V.moveToElementText(S.parentNode);
V.collapse(true);
V.moveStart(k,T);
V.moveEnd(k,U-T);
V.select();
return true;
}break;
default:if(U===undefined){U=S.childNodes.length-1;
}if(S.childNodes[T]&&S.childNodes[U]){V=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
V.moveToElementText(S.childNodes[T]);
V.collapse(true);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
W.moveToElementText(S.childNodes[U]);
V.setEndPoint(j,W);
V.select();
return true;
}}}return false;
},"default":function(bk,bl,bm){var bq=bk.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bk)&&(bq==i||bq==h)){if(bm===undefined){bm=bk.value.length;
}if(bl>=0&&bl<=bk.value.length&&bm>=0&&bm<=bk.value.length){bk.focus();
bk.select();
bk.setSelectionRange(bl,bm);
return true;
}}else{var bo=false;
var bp=qx.dom.Node.getWindow(bk).getSelection();
var bn=qx.bom.Range.get(bk);
if(qx.dom.Node.isText(bk)){if(bm===undefined){bm=bk.length;
}
if(bl>=0&&bl<bk.length&&bm>=0&&bm<=bk.length){bo=true;
}}else if(qx.dom.Node.isElement(bk)){if(bm===undefined){bm=bk.childNodes.length-1;
}
if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;
}}else if(qx.dom.Node.isDocument(bk)){bk=bk.body;

if(bm===undefined){bm=bk.childNodes.length-1;
}
if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;
}}
if(bo){if(!bp.isCollapsed){bp.collapseToStart();
}bn.setStart(bk,bl);
if(qx.dom.Node.isText(bk)){bn.setEnd(bk,bm);
}else{bn.setEndAfter(bk.childNodes[bm]);
}if(bp.rangeCount>0){bp.removeAllRanges();
}bp.addRange(bn);
return true;
}}return false;
}}),setAll:function(I){return qx.bom.Selection.set(I,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(B){var C=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B));
var D=qx.bom.Range.get(B);
var parent=D.parentElement();
var E=qx.bom.Range.get(qx.dom.Node.getDocument(B));
if(parent==E.parentElement()&&parent==B){C.empty();
}},"default":function(ba){var bc=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(ba));
var be=ba.nodeName.toLowerCase();
if(qx.dom.Node.isElement(ba)&&(be==i||be==h)){ba.setSelectionRange(0,0);
qx.bom.Element.blur(ba);
}else if(qx.dom.Node.isDocument(ba)||be==b){bc.collapse(ba.body?ba.body:ba,0);
}else{var bd=qx.bom.Range.get(ba);

if(!bd.collapsed){var bf;
var bb=bd.commonAncestorContainer;
if(qx.dom.Node.isElement(ba)&&qx.dom.Node.isText(bb)){bf=bb.parentNode;
}else{bf=bb;
}
if(bf==ba){bc.collapse(ba,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hq:{},remove:function(c){delete this.__hq[c.$$hash];
},add:function(g){var h=this.__hq;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__hq;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__hq={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hc:{},__hd:{},remove:function(l){var m=l.$$hash;
delete this.__hd[m];
delete this.__hc[m];
},isVisible:function(p){return this.__hd[p.$$hash]||false;
},__he:function(h){var j=this.__hd;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__he(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(n){var o=this.__hc;

if(o[n.$$hash]){return;
}o[n.$$hash]=n;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hc;
var g=this.__hd;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__he(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hc={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gz:{},remove:function(f){delete this.__gz[f.$$hash];
},add:function(c){var d=this.__gz;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__gz[e.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gz;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__em:{},add:function(c){var d=this.__em;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__em;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__em={};
}}});
})();
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}qx.html.Element.call(this,null,i);
this.__jf=g;
this.__jg=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__jg:null,__jf:null,getId:function(){return this.__jg;
},getDecorator:function(){return this.__jf;
},resize:function(e,f){this.__jf.resize(this.getDomElement(),e,f);
},tint:function(a){this.__jf.tint(this.getDomElement(),a);
},getInsets:function(){return this.__jf.getInsets();
}},destruct:function(){this.__jf=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dE=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dE:null,__dF:{focusin:1,focusout:1,focus:1,blur:1},__dG:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(n){var s=n.getTarget();
var r=qx.ui.core.Widget.getWidgetByElement(s);
var t=false;

while(r&&r.isAnonymous()){var t=true;
r=r.getLayoutParent();
}if(r&&t&&n.getType()==a){r.getContainerElement().activate();
}if(this.__dF[n.getType()]){r=r&&r.getFocusTarget();
if(!r){return;
}}if(n.getRelatedTarget){var A=n.getRelatedTarget();
var z=qx.ui.core.Widget.getWidgetByElement(A);

while(z&&z.isAnonymous()){z=z.getLayoutParent();
}
if(z){if(this.__dF[n.getType()]){z=z.getFocusTarget();
}if(z===r){return;
}}}var v=n.getCurrentTarget();
var x=qx.ui.core.Widget.getWidgetByElement(v);

if(!x||x.isAnonymous()){return;
}if(this.__dF[n.getType()]){x=x.getFocusTarget();
}var y=n.getType();

if(!x||!(x.isEnabled()||this.__dG[y])){return;
}var o=n.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var u=this.__dE.getListeners(x,y,o);

if(!u||u.length===0){return;
}var p=qx.event.Pool.getInstance().getObject(n.constructor);
n.clone(p);
p.setTarget(r);
p.setRelatedTarget(z||null);
p.setCurrentTarget(x);
var B=n.getOriginalTarget();

if(B){var q=qx.ui.core.Widget.getWidgetByElement(B);

while(q&&q.isAnonymous()){q=q.getLayoutParent();
}p.setOriginalTarget(q);
}else{p.setOriginalTarget(s);
}for(var i=0,l=u.length;i<l;i++){var w=u[i].context||x;
u[i].handler.call(w,p);
}if(p.getPropagationStopped()){n.stopPropagation();
}
if(p.getDefaultPrevented()){n.preventDefault();
}qx.event.Pool.getInstance().poolObject(p);
},registerEvent:function(h,j,k){var m;

if(j===e||j===f){m=h.getFocusElement();
}else if(j===c||j===d){m=h.getContentElement();
}else{m=h.getContainerElement();
}
if(m){m.addListener(j,this._dispatchEvent,this,k);
}},unregisterEvent:function(C,D,E){var F;

if(D===e||D===f){F=C.getFocusElement();
}else if(D===c||D===d){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this.__dE=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var l="/",k="mshtml",j="",i="qx.client",h="?",g="string",f="qx.util.ResourceManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bP:qx.$$resources||{},__bQ:{}},members:{has:function(q){return !!this.self(arguments).__bP[q];
},getData:function(r){return this.self(arguments).__bP[r]||null;
},getImageWidth:function(A){var B=this.self(arguments).__bP[A];
return B?B[0]:null;
},getImageHeight:function(s){var t=this.self(arguments).__bP[s];
return t?t[1]:null;
},getImageFormat:function(o){var p=this.self(arguments).__bP[o];
return p?p[2]:null;
},isClippedImage:function(m){var n=this.self(arguments).__bP[m];
return n&&n.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__bP[a];

if(!b){return a;
}
if(typeof b===g){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=j;

if(qx.core.Variant.isSet(i,k)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__bQ[d];
}return c+qx.$$libraries[d].resourceUri+l+a;
}},defer:function(u){if(qx.core.Variant.isSet(i,k)){if(qx.bom.client.Feature.SSL){for(var y in qx.$$libraries){var w;

if(qx.$$libraries[y].resourceUri){w=qx.$$libraries[y].resourceUri;
}else{u.__bQ[y]=j;
continue;
}if(w.match(/^\/\//)!=null){u.__bQ[y]=window.location.protocol;
}else if(w.match(/^\.\//)!=null){var v=document.URL;
u.__bQ[y]=v.substring(0,v.lastIndexOf(l)+1);
}else if(w.match(/^http/)!=null){}else{var z=window.location.href.indexOf(h);
var x;

if(z==-1){x=window.location.href;
}else{x=window.location.href.substring(0,z);
}u.__bQ[y]=x.substring(0,x.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kn:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__kn();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o='toLocaleUpperCase',n='search',m='replace',e='toLowerCase',k='charCodeAt',h='split',d='substring',c='lastIndexOf',g='substr',f='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(z){var z=z||v;
this.__kL=z;
this.length=z.length;
},members:{$$isString:true,length:0,__kL:null,toString:function(){return this.__kL;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(a,b){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(w,x){{};
var y=[j,k,s,u,c,p,m,n,t,h,g,d,e,f,r,o];
x.valueOf=x.toString;

if(new w(v).valueOf()==null){delete x.valueOf;
}
for(var i=0,l=y.length;i<l;i++){x[y[i]]=String.prototype[y[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__dH=c;
this.__dI=d;
},members:{__dH:null,__dI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dH,this.__dI);
}}});
})();
(function(){var l="_",k="",j="_applyLocale",h="changeLocale",g="C",f="qx.dynlocale",e="on",d="qx.locale.Manager",c="String",b="singleton";
qx.Class.define(d,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hD=qx.$$translations||{};
this.__hE=qx.$$locales||{};
var H=qx.bom.client.Locale;
var F=H.LOCALE;
var G=H.VARIANT;

if(G!==k){F+=l+G;
}this.setLocale(F||this.__hF);
},statics:{tr:function(U,V){var W=qx.lang.Array.fromArguments(arguments);
W.splice(0,1);
return qx.locale.Manager.getInstance().translate(U,W);
},trn:function(s,t,u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,3);
if(u!=1){return qx.locale.Manager.getInstance().translate(t,w);
}else{return qx.locale.Manager.getInstance().translate(s,w);
}},trc:function(x,y,z){var A=qx.lang.Array.fromArguments(arguments);
A.splice(0,2);
return qx.locale.Manager.getInstance().translate(y,A);
},marktr:function(a){return a;
}},properties:{locale:{check:c,nullable:true,apply:j,event:h}},members:{__hF:g,__hG:null,__hH:null,__hD:null,__hE:null,getLanguage:function(){return this.__hH;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__hE){if(bf!=this.__hF){bg.push(bf);
}}return bg;
},__hI:function(bc){var be;
var bd=bc.indexOf(l);

if(bd==-1){be=bc;
}else{be=bc.substring(0,bd);
}return be;
},_applyLocale:function(q,r){this.__hG=q;
this.__hH=this.__hI(q);
},addTranslation:function(m,n){var o=this.__hD;

if(o[m]){for(var p in n){o[m][p]=n[p];
}}else{o[m]=n;
}},addLocale:function(Q,R){var S=this.__hE;

if(S[Q]){for(var T in R){S[Q][T]=R[T];
}}else{S[Q]=R;
}},translate:function(B,C,D){var E=this.__hD;
return this.__hJ(E,B,C,D);
},localize:function(X,Y,ba){var bb=this.__hE;
return this.__hJ(bb,X,Y,ba);
},__hJ:function(I,J,K,L){var M;

if(!I){return J;
}
if(L){var O=this.__hI(L);
}else{L=this.__hG;
O=this.__hH;
}if(!M&&I[L]){M=I[L][J];
}if(!M&&I[O]){M=I[O][J];
}if(!M&&I[this.__hF]){M=I[this.__hF][J];
}
if(!M){M=J;
}
if(K.length>0){var N=[];

for(var i=0;i<K.length;i++){var P=K[i];

if(P&&P.translate){N[i]=P.translate();
}else{N[i]=P;
}}M=qx.lang.String.format(M,N);
}
if(qx.core.Variant.isSet(f,e)){M=new qx.locale.LocalizedString(M,J,K);
}return M;
}},destruct:function(){this.__hD=this.__hE=null;
}});
})();
(function(){var p="px",o="qx.client",n="div",m="img",l="",k="no-repeat",j="scale-x",i="mshtml",h="scale",g="scale-y",L="qx/icon",K="repeat",J=".png",I="crop",H="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",G='<div style="',F="repeat-y",E='<img src="',D="qx.bom.element.Decoration",C="', sizingMethod='",w="png",x="')",u='"></div>',v='"/>',s='" style="',t="none",q="webkit",r=" ",y="repeat-x",z="DXImageTransform.Microsoft.AlphaImageLoader",B="qx/static/blank.gif",A="absolute";
qx.Class.define(D,{statics:{DEBUG:false,__gl:{},__gm:qx.core.Variant.isSet(o,i),__gn:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__go:{"scale-x":m,"scale-y":m,"scale":m,"repeat":n,"no-repeat":n,"repeat-x":n,"repeat-y":n},update:function(bs,bt,bu,bv){var bx=this.getTagName(bu,bt);

if(bx!=bs.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var by=this.getAttributes(bt,bu,bv);

if(bx===m){bs.src=by.src||qx.util.ResourceManager.getInstance().toUri(B);
}if(bs.style.backgroundPosition!=l&&by.style.backgroundPosition===undefined){by.style.backgroundPosition=null;
}if(bs.style.clip!=l&&by.style.clip===undefined){by.style.clip=null;
}var bw=qx.bom.element.Style;
bw.setStyles(bs,by.style);
if(this.__gm){try{bs.filters[z].apply();
}catch(e){}}},create:function(bU,bV,bW){var bX=this.getTagName(bV,bU);
var ca=this.getAttributes(bU,bV,bW);
var bY=qx.bom.element.Style.compile(ca.style);

if(bX===m){return E+ca.src+s+bY+v;
}else{return G+bY+u;
}},getTagName:function(bS,bT){if(qx.core.Variant.isSet(o,i)){if(bT&&this.__gm&&this.__gn[bS]&&qx.lang.String.endsWith(bT,J)){return n;
}}return this.__go[bS];
},getAttributes:function(a,b,c){if(!c){c={};
}
if(!c.position){c.position=A;
}
if(qx.core.Variant.isSet(o,i)){c.fontSize=0;
c.lineHeight=0;
}else if(qx.core.Variant.isSet(o,q)){c.WebkitUserDrag=t;
}var f=qx.util.ResourceManager.getInstance().getImageFormat(a)||qx.io.ImageLoader.getFormat(a);
{};
var d;
if(this.__gm&&this.__gn[b]&&f===w){d=this.__gr(c,b,a);
}else{if(b===h){d=this.__gs(c,b,a);
}else if(b===j||b===g){d=this.__gt(c,b,a);
}else{d=this.__gw(c,b,a);
}}return d;
},__gp:function(bb,bc,bd){if(bb.width==null&&bc!=null){bb.width=bc+p;
}
if(bb.height==null&&bd!=null){bb.height=bd+p;
}return bb;
},__gq:function(Q){var R=qx.util.ResourceManager.getInstance().getImageWidth(Q)||qx.io.ImageLoader.getWidth(Q);
var S=qx.util.ResourceManager.getInstance().getImageHeight(Q)||qx.io.ImageLoader.getHeight(Q);
return {width:R,height:S};
},__gr:function(bz,bA,bB){var bE=this.__gq(bB);
bz=this.__gp(bz,bE.width,bE.height);
var bD=bA==k?I:h;
var bC=H+qx.util.ResourceManager.getInstance().toUri(bB)+C+bD+x;
bz.filter=bC;
bz.backgroundImage=bz.backgroundRepeat=l;
return {style:bz};
},__gs:function(be,bf,bh){var bi=qx.util.ResourceManager.getInstance().toUri(bh);
var bj=this.__gq(bh);
be=this.__gp(be,bj.width,bj.height);
return {src:bi,style:be};
},__gt:function(bK,bL,bM){var bQ=qx.util.ResourceManager.getInstance();
var bP=bQ.isClippedImage(bM);
var bR=this.__gq(bM);

if(bP){var bO=bQ.getData(bM);
var bN=bQ.toUri(bO[4]);

if(bL===j){bK=this.__gu(bK,bO,bR.height);
}else{bK=this.__gv(bK,bO,bR.width);
}return {src:bN,style:bK};
}else{{};

if(bL==j){bK.height=bR.height==null?null:bR.height+p;
}else if(bL==g){bK.width=bR.width==null?null:bR.width+p;
}var bN=bQ.toUri(bM);
return {src:bN,style:bK};
}},__gu:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+p;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+p;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+p;
}return bF;
},__gv:function(M,N,O){var P=qx.util.ResourceManager.getInstance().getImageWidth(N[4]);
M.clip={left:-N[5],width:O};
M.width=P+p;
if(M.left!=null){M.left=(parseInt(M.left,10)+N[5])+p;
}else if(M.right!=null){M.right=(parseInt(M.right,10)+O-P-N[5])+p;
}return M;
},__gw:function(bk,bl,bm){var br=qx.util.ResourceManager.getInstance().isClippedImage(bm);
var bq=this.__gq(bm);
if(br&&bl!==K){var bp=qx.util.ResourceManager.getInstance().getData(bm);
var bo=qx.bom.element.Background.getStyles(bp[4],bl,bp[5],bp[6]);

for(var bn in bo){bk[bn]=bo[bn];
}
if(bq.width!=null&&bk.width==null&&(bl==F||bl===k)){bk.width=bq.width+p;
}
if(bq.height!=null&&bk.height==null&&(bl==y||bl===k)){bk.height=bq.height+p;
}return {style:bk};
}else{{};
bk=this.__gp(bk,bq.width,bq.height);
bk=this.__gx(bk,bm,bl);
return {style:bk};
}},__gx:function(T,U,V){var top=null;
var ba=null;

if(T.backgroundPosition){var W=T.backgroundPosition.split(r);
ba=parseInt(W[0]);

if(isNaN(ba)){ba=W[0];
}top=parseInt(W[1]);

if(isNaN(top)){top=W[1];
}}var Y=qx.bom.element.Background.getStyles(U,V,ba,top);

for(var X in Y){T[X]=Y[X];
}if(T.filter){T.filter=l;
}return T;
},__gy:function(bJ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bJ)&&bJ.indexOf(L)==-1){if(!this.__gl[bJ]){qx.log.Logger.debug("Potential clipped image candidate: "+bJ);
this.__gl[bJ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(o,{"mshtml":function(){return qx.bom.element.Decoration.__gm;
},"default":function(){return false;
}})}});
})();
(function(){var h="qx.client",g="load",f="qx.io.ImageLoader";
qx.Bootstrap.define(f,{statics:{__jV:{},__jW:{width:null,height:null},__jX:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(G){var H=this.__jV[G];
return !!(H&&H.loaded);
},isFailed:function(B){var C=this.__jV[B];
return !!(C&&C.failed);
},isLoading:function(r){var s=this.__jV[r];
return !!(s&&s.loading);
},getFormat:function(y){var z=this.__jV[y];
return z?z.format:null;
},getSize:function(v){var w=this.__jV[v];
return w?
{width:w.width,height:w.height}:this.__jW;
},getWidth:function(t){var u=this.__jV[t];
return u?u.width:null;
},getHeight:function(D){var E=this.__jV[D];
return E?E.height:null;
},load:function(j,k,m){var n=this.__jV[j];

if(!n){n=this.__jV[j]={};
}if(k&&!m){m=window;
}if(n.loaded||n.loading||n.failed){if(k){if(n.loading){n.callbacks.push(k,m);
}else{k.call(m,j,n);
}}}else{n.loading=true;
n.callbacks=[];

if(k){n.callbacks.push(k,m);
}var p=new Image();
var o=qx.lang.Function.listener(this.__jY,this,p,j);
p.onload=o;
p.onerror=o;
p.src=j;
}},__jY:qx.event.GlobalError.observeMethod(function(event,a,b){var c=this.__jV[b];
if(event.type===g){c.loaded=true;
c.width=this.__ka(a);
c.height=this.__kb(a);
var d=this.__jX.exec(b);

if(d!=null){c.format=d[1];
}}else{c.failed=true;
}a.onload=a.onerror=null;
var e=c.callbacks;
delete c.loading;
delete c.callbacks;
for(var i=0,l=e.length;i<l;i+=2){e[i].call(e[i+1],b,c);
}}),__ka:qx.core.Variant.select(h,{"gecko":function(F){return F.naturalWidth;
},"default":function(x){return x.width;
}}),__kb:qx.core.Variant.select(h,{"gecko":function(q){return q.naturalHeight;
},"default":function(A){return A.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cs:[i,null,h,b,null,j,e,null,j],__ct:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cu:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==m){top+=0.01;
}
if(t){var v=(typeof t==m)?t+k:t;
}else{v=l;
}
if(top){var w=(typeof top==m)?top+k:top;
}else{w=l;
}return v+d+w;
},compile:function(D,E,F,top){var G=this.__cu(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__cs;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__ct;
}var A=this.__cu(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var p="source",o="scale",n="no-repeat",m="qx.client",l="mshtml",k="webkit",j="backgroundImage",i="div",h="qx.html.Image",g="qx/static/blank.gif";
qx.Class.define(h,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name===p){var e=this.getDomElement();
var b=this.getAllStyles();

if(this.getNodeName()==i&&this.getStyle(j)){b.backgroundPosition=null;
b.backgroundRepeat=null;
}var c=this._getProperty(p);
var d=this._getProperty(o);
var f=d?o:n;
if(c!=null){qx.bom.element.Decoration.update(e,c,f,b);
}}},_createDomElement:function(){var r=this._getProperty(o);
var s=r?o:n;

if(qx.core.Variant.isSet(m,l)){var q=this._getProperty(p);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(t){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(u){this._setProperty(p,u);
return this;
},getSource:function(){return this._getProperty(p);
},resetSource:function(){if(qx.core.Variant.isSet(m,k)){this._setProperty(p,qx.util.ResourceManager.getInstance().toUri(g));
}else{this._removeProperty(p,true);
}return this;
},setScale:function(v){this._setProperty(o,v);
return this;
},getScale:function(){return this._getProperty(o);
}}});
})();
(function(){var p="nonScaled",o="scaled",n="alphaScaled",m=".png",l="qx.client",k="div",j="replacement",i="hidden",h="Boolean",g="px",B="scale",A="changeSource",z="qx.ui.basic.Image",y="__hK",x="-disabled.$1",w="String",v="_applySource",u="img",t="image",s="mshtml",q="_applyScale",r="no-repeat";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(bm){this.__hK={};
qx.ui.core.Widget.call(this);

if(bm){this.setSource(bm);
}},properties:{source:{check:w,init:null,nullable:true,event:A,apply:v,themeable:true},scale:{check:h,init:false,themeable:true,apply:q},appearance:{refine:true,init:t},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hL:null,__hM:null,__hN:null,__hK:null,getContentElement:function(){return this.__hR();
},_createContentElement:function(){return this.__hR();
},_getContentHint:function(){return {width:this.__hL||0,height:this.__hM||0};
},_applyEnabled:function(c,d){qx.ui.core.Widget.prototype._applyEnabled.call(this,c,d);

if(this.getSource()){this._styleSource();
}},_applySource:function(bb){this._styleSource();
},_applyScale:function(J){this._styleSource();
},__hO:function(bl){this.__hN=bl;
},__hP:function(){if(this.__hN==null){var bf=this.getSource();
var be=false;

if(bf!=null){be=qx.lang.String.endsWith(bf,m);
}
if(this.getScale()&&be&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hN=n;
}else if(this.getScale()){this.__hN=o;
}else{this.__hN=p;
}}return this.__hN;
},__hQ:function(T){var U;
var V;

if(T==n){U=true;
V=k;
}else if(T==p){U=false;
V=k;
}else{U=true;
V=u;
}var W=new qx.html.Image(V);
W.setScale(U);
W.setStyles({"overflowX":i,"overflowY":i});
return W;
},__hR:function(){var bc=this.__hP();

if(this.__hK[bc]==null){this.__hK[bc]=this.__hQ(bc);
}return this.__hK[bc];
},_styleSource:function(){var e=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!e){this.getContentElement().resetSource();
return;
}this.__hS(e);

if(qx.core.Variant.isSet(l,s)){var f=this.getScale()?B:r;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(f,e);
}if(qx.util.ResourceManager.getInstance().has(e)){this.__hU(this.getContentElement(),e);
}else if(qx.io.ImageLoader.isLoaded(e)){this.__hV(this.getContentElement(),e);
}else{this.__hW(this.getContentElement(),e);
}},__hS:qx.core.Variant.select(l,{"mshtml":function(M){var O=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var N=qx.lang.String.endsWith(M,m);

if(O&&N){if(this.getScale()&&this.__hP()!=n){this.__hO(n);
}else if(!this.getScale()&&this.__hP()!=p){this.__hO(p);
}}else{if(this.getScale()&&this.__hP()!=o){this.__hO(o);
}else if(!this.getScale()&&this.__hP()!=p){this.__hO(p);
}}this.__hT(this.__hR());
},"default":function(bd){if(this.getScale()&&this.__hP()!=o){this.__hO(o);
}else if(!this.getScale()&&this.__hP(p)){this.__hO(p);
}this.__hT(this.__hR());
}}),__hT:function(C){var F=this.getContainerElement();
var G=F.getChild(0);

if(G!=C){if(G!=null){var I=g;
var D={};
var E=this.getInnerSize();

if(E!=null){D.width=E.width+I;
D.height=E.height+I;
}var H=this.getInsets();
D.left=H.left+I;
D.top=H.top+I;
D.zIndex=10;
C.setStyles(D,true);
C.setSelectable(this.getSelectable());
}F.removeAt(0);
F.addAt(C,0);
}},__hU:function(P,Q){var S=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var R=Q.replace(/\.([a-z]+)$/,x);

if(S.has(R)){Q=R;
this.addState(j);
}else{this.removeState(j);
}}if(P.getSource()===Q){return;
}P.setSource(Q);
this.__hY(S.getImageWidth(Q),S.getImageHeight(Q));
},__hV:function(bg,bh){var bj=qx.io.ImageLoader;
bg.setSource(bh);
var bi=bj.getWidth(bh);
var bk=bj.getHeight(bh);
this.__hY(bi,bk);
},__hW:function(X,Y){var self;
var ba=qx.io.ImageLoader;
{};
if(!ba.isFailed(Y)){ba.load(Y,this.__hX,this);
}else{if(X!=null){X.resetSource();
}}},__hX:function(a,b){if(this.$$disposed===true){return;
}if(a!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(b.failed){this.warn("Image could not be loaded: "+a);
}this._styleSource();
},__hY:function(K,L){if(K!==this.__hL||L!==this.__hM){this.__hL=K;
this.__hM=L;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(y);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(f,this._onInterval,this);
h.start();
this.__jw=h;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jw:null,_applyTimeoutInterval:function(g){this.__jw.setInterval(g);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jw){this.__jw.stop();
}this.__jw=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d='__gA',b="keep-align",a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gA=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__gB:null,compute:function(B,C,D,E,F,G,H){this.__gB=this.__gB||new qx.util.placement.Placement();
var K=F.split(f);
var J=K[0];
var I=K[1];
this.__gB.set({axisX:this.__gF(G),axisY:this.__gF(H),edge:J,align:I});
return this.__gB.compute(B,C,D,E);
},__gC:null,__gD:null,__gE:null,__gF:function(r){switch(r){case a:this.__gC=this.__gC||new qx.util.placement.DirectAxis();
return this.__gC;
case b:this.__gD=this.__gD||new qx.util.placement.KeepAlignAxis();
return this.__gD;
case c:this.__gE=this.__gE||new qx.util.placement.BestFitAxis();
return this.__gE;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__gA:null,compute:function(s,t,u,v){{};
var w=this.getAxisX()||this.__gA;
var y=w.computeStart(s.width,{start:u.left,end:u.right},{start:v.left,end:v.right},t.width,this.__gG());
var x=this.getAxisY()||this.__gA;
var top=x.computeStart(s.height,{start:u.top,end:u.bottom},{start:v.top,end:v.bottom},t.height,this.__gH());
return {left:y,top:top};
},__gG:function(){var q=this.getEdge();
var p=this.getAlign();

if(q==l){return i;
}else if(q==n){return g;
}else if(p==l){return k;
}else if(p==n){return h;
}},__gH:function(){var A=this.getEdge();
var z=this.getAlign();

if(A==o){return i;
}else if(A==m){return g;
}else if(z==o){return k;
}else if(z==m){return h;
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__pS",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pS={};
qx.event.Registration.addListener(document.documentElement,f,this.__pU,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__pS:null,add:function(r){{};
this.__pS[r.$$hash]=r;
this.__pT();
},remove:function(k){{};
var l=this.__pS;

if(l){delete l[k.$$hash];
this.__pT();
}},hideAll:function(){var q=this.__pS;

if(q){for(var p in q){q[p].exclude();
}}},__pT:function(){var o=1e7;
var n=this.__pS;

for(var m in n){n[m].setZIndex(o++);
}},__pU:function(e){var i=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var j=this.__pS;

for(var h in j){var g=j[h];

if(!g.getAutoHide()||i==g||qx.ui.core.Widget.contains(g,i)){continue;
}g.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__pU,this,true);
this._disposeMap(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__fI:null,_invalidChildrenCache:null,__fJ:null,invalidateLayoutCache:function(){this.__fI=null;
},renderLayout:function(g,h){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fI){return this.__fI;
}return this.__fI=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(i){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var c=this.__fJ;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(e,f){this.__fJ.renderSeparator(e,f);
},connectToWidget:function(d){if(d&&this.__fJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__fJ=d;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fJ;
},_applyLayoutChange:function(){if(this.__fJ){this.__fJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fJ.getLayoutChildren();
}},destruct:function(){this.__fJ=this.__fI=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(L,M){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(L!=null){this.setLabel(L);
}
if(M!=null){this.setIcon(M);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(z){var A;

switch(z){case j:A=new qx.ui.basic.Label(this.getLabel());
A.setAnonymous(true);
A.setRich(this.getRich());
this._add(A);

if(this.getLabel()==null||this.getShow()===i){A.exclude();
}break;
case i:A=new qx.ui.basic.Image(this.getIcon());
A.setAnonymous(true);
this._addAt(A,0);

if(this.getIcon()==null||this.getShow()===j){A.exclude();
}break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(B,C){var D=this.getChildControl(j,true);

if(D){D.setValue(B);
}this._handleLabel();
},_applyRich:function(G,H){var I=this.getChildControl(j,true);

if(I){I.setRich(G);
}},_applyIcon:function(P,Q){var R=this.getChildControl(i,true);

if(R){R.setSource(P);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(x,y){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(J,K){this._getLayout().setIconPosition(J);
},_applyCenter:function(E,F){this._getLayout().setCenter(E);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var G=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,H,A;
var M,F;
var K=this.getGap();
var P=this.getCenter();
if(z===k||z===f){var I=length-1;
var D=-1;
var B=-1;
}else{var I=0;
var D=length;
var B=1;
}if(z==h||z==k){if(P){var L=0;

for(var i=I;i!=D;i+=B){A=C[i].getSizeHint().height;

if(A>0){L+=A;

if(i!=I){L+=K;
}}}top=Math.round((x-L)/2);
}else{top=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
H=Math.min(F.maxWidth,Math.max(w,F.minWidth));
A=F.height;
Q=G.computeHorizontalAlignOffset(d,H,w);
M.renderLayout(Q,top,H,A);
if(A>0){top+=A+K;
}}}else{var E=w;
var y=null;
var O=0;

for(var i=I;i!=D;i+=B){M=C[i];
H=M.getSizeHint().width;

if(H>0){if(!y&&M instanceof qx.ui.basic.Label){y=M;
}else{E-=H;
}O++;
}}
if(O>1){var N=(O-1)*K;
E-=N;
}
if(y){var F=y.getSizeHint();
var J=Math.max(F.minWidth,Math.min(E,F.maxWidth));
E-=J;
}
if(P&&E>0){Q=Math.round(E/2);
}else{Q=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
A=Math.min(F.maxHeight,Math.max(x,F.minHeight));

if(M===y){H=J;
}else{H=F.width;
}top=G.computeVerticalAlignOffset(e,F.height,x);
M.renderLayout(Q,top,H,A);
if(H>0){Q+=H+K;
}}}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var length=v.length;
var n,t;
if(length===1){var n=v[0].getSizeHint();
t={width:n.width,height:n.height,minWidth:n.minWidth,minHeight:n.minHeight};
}else{var r=0,s=0;
var o=0,q=0;
var p=this.getIconPosition();
var u=this.getGap();

if(p===h||p===k){var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
s=Math.max(s,n.width);
r=Math.max(r,n.minWidth);
if(n.height>0){q+=n.height;
o+=n.minHeight;
l++;
}}
if(l>1){var m=(l-1)*u;
q+=m;
o+=m;
}}else{var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
q=Math.max(q,n.height);
o=Math.max(o,n.minHeight);
if(n.width>0){s+=n.width;
r+=n.minWidth;
l++;
}}
if(l>1){var m=(l-1)*u;
s+=m;
r+=m;
}}t={minWidth:r,width:s,minHeight:o,height:q};
}return t;
}}});
})();
(function(){var u="middle",t="qx.ui.layout.Util",s="left",r="center",q="top",p="bottom",o="right";
qx.Class.define(t,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(a,b,c){var e,j,d,k;
var f=b>c;
var m=Math.abs(b-c);
var n,g;
var h={};

for(j in a){e=a[j];
h[j]={potential:f?e.max-e.value:e.value-e.min,flex:f?e.flex:1/e.flex,offset:0};
}while(m!=0){k=Infinity;
d=0;

for(j in h){e=h[j];

if(e.potential>0){d+=e.flex;
k=Math.min(k,e.potential/e.flex);
}}if(d==0){break;
}k=Math.min(m,k*d)/d;
n=0;

for(j in h){e=h[j];

if(e.potential>0){g=Math.min(m,e.potential,Math.ceil(k*e.flex));
n+=g-k*e.flex;

if(n>=1){n-=1;
g-=1;
}e.potential-=g;

if(f){e.offset+=g;
}else{e.offset-=g;
}m-=g;
}}}return h;
},computeHorizontalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case s:bp=bn;
break;
case o:bp=bm-bl-bo;
break;
case r:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},computeVerticalAlignOffset:function(z,A,B,C,D){if(C==null){C=0;
}
if(D==null){D=0;
}var E=0;

switch(z){case q:E=C;
break;
case p:E=B-A-D;
break;
case u:E=Math.round((B-A)/2);
if(E<C){E=C;
}else if(E<D){E=Math.max(C,B-A-D);
}break;
}return E;
},collapseMargins:function(V){var W=0,Y=0;

for(var i=0,l=arguments.length;i<l;i++){var X=arguments[i];

if(X<0){Y=Math.min(Y,X);
}else if(X>0){W=Math.max(W,X);
}}return W+Y;
},computeHorizontalGaps:function(v,w,x){if(w==null){w=0;
}var y=0;

if(x){y+=v[0].getMarginLeft();

for(var i=1,l=v.length;i<l;i+=1){y+=this.collapseMargins(w,v[i-1].getMarginRight(),v[i].getMarginLeft());
}y+=v[l-1].getMarginRight();
}else{for(var i=1,l=v.length;i<l;i+=1){y+=v[i].getMarginLeft()+v[i].getMarginRight();
}y+=(w*(l-1));
}return y;
},computeVerticalGaps:function(ba,bb,bc){if(bb==null){bb=0;
}var bd=0;

if(bc){bd+=ba[0].getMarginTop();

for(var i=1,l=ba.length;i<l;i+=1){bd+=this.collapseMargins(bb,ba[i-1].getMarginBottom(),ba[i].getMarginTop());
}bd+=ba[l-1].getMarginBottom();
}else{for(var i=1,l=ba.length;i<l;i+=1){bd+=ba[i].getMarginTop()+ba[i].getMarginBottom();
}bd+=(bb*(l-1));
}return bd;
},computeHorizontalSeparatorGaps:function(N,O,P){var S=qx.theme.manager.Decoration.getInstance().resolve(P);
var R=S.getInsets();
var Q=R.left+R.right;
var T=0;

for(var i=0,l=N.length;i<l;i++){var U=N[i];
T+=U.getMarginLeft()+U.getMarginRight();
}T+=(O+Q+O)*(l-1);
return T;
},computeVerticalSeparatorGaps:function(F,G,H){var K=qx.theme.manager.Decoration.getInstance().resolve(H);
var J=K.getInsets();
var I=J.top+J.bottom;
var L=0;

for(var i=0,l=F.length;i<l;i++){var M=F[i];
L+=M.getMarginTop()+M.getMarginBottom();
}L+=(G+I+G)*(l-1);
return L;
},arrangeIdeals:function(be,bf,bg,bh,bi,bj){if(bf<be||bi<bh){if(bf<be&&bi<bh){bf=be;
bi=bh;
}else if(bf<be){bi-=(be-bf);
bf=be;
if(bi<bh){bi=bh;
}}else if(bi<bh){bf-=(bh-bi);
bi=bh;
if(bf<be){bf=be;
}}}
if(bf>bg||bi>bj){if(bf>bg&&bi>bj){bf=bg;
bi=bj;
}else if(bf>bg){bi+=(bf-bg);
bf=bg;
if(bi>bj){bi=bj;
}}else if(bi>bj){bf+=(bi-bj);
bi=bj;
if(bf>bg){bf=bg;
}}}return {begin:bf,end:bi};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="qx.dynlocale",k="text",j="Boolean",i="qx.client",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",J="_applyTextAlign",I="qx.ui.core.Widget",H="nowrap",G="gecko",F="changeTextAlign",E="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="A",s="whiteSpace",t="_applyValue",q="center",r="_applyBuddy",o="String",p="textAlign",m="right",n="changeRich",u="normal",v="_applyRich",x="click",w="label",z="webkit",y="left";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(K){qx.ui.core.Widget.call(this);

if(K!=null){this.setValue(K);
}
if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:n,apply:v},wrap:{check:j,init:true,apply:E},value:{check:o,apply:t,event:D,nullable:true},buddy:{check:I,apply:r,nullable:true,init:null},textAlign:{check:[y,q,m],nullable:true,themeable:true,apply:J,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fR:null,__fS:null,__fT:null,__fU:null,_getContentHint:function(){if(this.__fS){this.__fV=this.__fW();
delete this.__fS;
}return {width:this.__fV.width,height:this.__fV.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bf){if(qx.core.Variant.isSet(i,G)){if(bf&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bf);
if(qx.core.Variant.isSet(i,z)){this.getContainerElement().setStyle(g,bf?k:c);
this.getContentElement().setStyle(g,bf?k:c);
}},_getContentHeightForWidth:function(be){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fW(be).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bc,bd){this.getContentElement().setStyle(p,bc);
},_applyTextColor:function(bg,bh){if(bg){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(bg));
}else{this.getContentElement().removeStyle(h);
}},__fV:{width:0,height:0},_applyFont:function(Q,R){var S;

if(Q){this.__fR=qx.theme.manager.Font.getInstance().resolve(Q);
S=this.__fR.getStyles();
}else{this.__fR=null;
S=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(S);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},__fW:function(L){var P=qx.bom.Label;
var N=this.getFont();
var M=N?this.__fR.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||A;
var O=this.getRich();
return O?P.getHtmlSize(content,M,L):P.getTextSize(content,M);
},_applyBuddy:function(V,W){if(W!=null){W.removeBinding(this.__fT);
this.__fT=null;
this.removeListenerById(this.__fU);
this.__fU=null;
}
if(V!=null){this.__fT=V.bind(d,this,d);
this.__fU=this.addListener(x,function(){if(V.isFocusable()){V.focus.apply(V);
}},this);
}},_applyRich:function(a){this.getContentElement().setRich(a);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(Y,ba){if(Y&&!this.isRich()){{};
}
if(this.isRich()){var bb=Y?u:H;
this.getContentElement().setStyle(s,bb);
}},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(T,U){this.getContentElement().setValue(T);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,T,U);
}},destruct:function(){if(qx.core.Variant.isSet(l,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__fT!=null){var X=this.getBuddy();

if(X!=null&&!X.isDisposed()){X.removeBinding(this.__fT);
}}this.__fR=this.__fT=null;
}});
})();
(function(){var e="value",d="Please use the getValue() method instead.",c="qx.html.Label",b="Please use the setValue() method instead.";
qx.Class.define(c,{extend:qx.html.Element,members:{__di:null,_applyProperty:function(name,j){qx.html.Element.prototype._applyProperty.call(this,name,j);

if(name==e){var k=this.getDomElement();
qx.bom.Label.setValue(k,j);
}},_createDomElement:function(){var g=this.__di;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(m){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__di==h){return;
}this.__di=h;
return this;
},setValue:function(l){this._setProperty(e,l);
return this;
},getValue:function(){return this._getProperty(e);
},setContent:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.setValue(a);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.getValue();
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",G="auto",F="0",E="ellipsis",D="normal",C="label",B="px",A="crop",z="end",y="100%",x="visible",v="qx.bom.Label",w="Please use the setValue() method instead.",t="opera",u="Please use the getValue() method instead.",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(v,{statics:{__ia:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ib:function(){var N=this.__id(false);
document.body.insertBefore(N,document.body.firstChild);
return this._textElement=N;
},__ic:function(){var bi=this.__id(true);
document.body.insertBefore(bi,document.body.firstChild);
return this._htmlElement=bi;
},__id:function(a){var b=qx.bom.Element.create(m);
var c=b.style;
c.width=c.height=G;
c.left=c.top=p;
c.visibility=h;
c.position=q;
c.overflow=x;

if(a){c.whiteSpace=D;
}else{c.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var d=document.createElementNS(g,C);
var c=d.style;
c.padding=F;

for(var e in this.__ia){c[e]=l;
}b.appendChild(d);
}}return b;
},__ie:function(bg){var bh={};

if(bg){bh.whiteSpace=D;
}else if(qx.core.Variant.isSet(o,n)){bh.display=r;
}else{bh.overflow=h;
bh.whiteSpace=f;
bh.textOverflow=E;
bh.userSelect=s;
if(qx.core.Variant.isSet(o,t)){bh.OTextOverflow=E;
}}return bh;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(m);
Y.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var Y=X.document.createElement(m);
var bb=X.document.createElementNS(g,C);
var ba=bb.style;
ba.cursor=l;
ba.color=l;
ba.overflow=h;
ba.maxWidth=y;
ba.padding=F;
for(var bc in this.__ia){bb.style[bc]=l;
}bb.setAttribute(A,z);
Y.appendChild(bb);
}else{var Y=X.document.createElement(m);
qx.bom.element.Style.setStyles(Y,this.__ie(W));
}
if(content){this.setValue(Y,content);
}return Y;
},setValue:function(R,S){S=S||i;

if(R.useHtml){R.innerHTML=S;
}else if(qx.core.Variant.isSet(o,n)){R.firstChild.setAttribute(j,S);
}else{qx.bom.element.Attribute.set(R,k,S);
}},getValue:function(H){if(H.useHtml){return H.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return H.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(H,k);
}},getHtmlSize:function(content,T,U){var V=this._htmlElement||this.__ic();
V.style.width=U!==undefined?U+B:G;
V.innerHTML=content;
return this.__if(V,T);
},getTextSize:function(bd,be){var bf=this._textElement||this.__ib();

if(qx.core.Variant.isSet(o,n)){bf.firstChild.setAttribute(j,bd);
}else{qx.bom.element.Attribute.set(bf,k,bd);
}return this.__if(bf,be);
},__if:function(I,J){var K=this.__ia;

if(!J){J={};
}
for(var L in K){I.style[L]=J[L]||i;
}var M=qx.bom.element.Dimension.getSize(I);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){M.width++;
}}return M;
},setContent:function(O,P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.setValue(O,P);
},getContent:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getValue(Q);
}}});
})();
(function(){var h="0px",g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(v){if(v.getBoundingClientRect){var w=v.getBoundingClientRect();
return Math.round(w.right)-Math.round(w.left);
}else{return v.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(j){if(j.getBoundingClientRect){var k=j.getBoundingClientRect();
return Math.round(k.bottom)-Math.round(k.top);
}else{return j.offsetHeight;
}},"default":function(t){return t.offsetHeight;
}}),getSize:function(i){return {width:this.getWidth(i),height:this.getHeight(i)};
},__gX:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,c)||h,10);
var D=parseInt(z.get(x,d)||h,10);

if(this.__gX[A]){return x.clientWidth-B-D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-D;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===g&&y.VERSION==6){C-=D;
}return C;
}}},getContentHeight:function(m){var o=qx.bom.element.Style;
var q=qx.bom.element.Overflow.getY(m);
var r=parseInt(o.get(m,b)||h,10);
var p=parseInt(o.get(m,a)||h,10);

if(this.__gX[q]){return m.clientHeight-r-p;
}else{if(m.clientHeight>=m.scrollHeight){return Math.max(m.clientHeight,m.scrollHeight)-r-p;
}else{var s=m.scrollHeight-r;
var n=qx.bom.client.Engine;

if(n.NAME===g&&n.VERSION==6){s-=p;
}return s;
}}},getContentSize:function(u){return {width:this.getContentWidth(u),height:this.getContentHeight(u)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__qm";
qx.Mixin.define(d,{construct:function(){this.__qm=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__qm:null,_applyBlockerColor:function(l,m){this.__qm.setColor(l);
},_applyBlockerOpacity:function(i,j){this.__qm.setOpacity(i);
},block:function(){this.__qm.block();
},isBlocked:function(){return this.__qm.isBlocked();
},unblock:function(){this.__qm.unblock();
},forceUnblock:function(){this.__qm.forceUnblock();
},blockContent:function(k){this.__qm.blockContent(k);
},isContentBlocked:function(){return this.__qm.isContentBlocked();
},unblockContent:function(){this.__qm.unblockContent();
},forceUnblockContent:function(){this.__qm.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__qm.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__qm.getBlockerElement();
},getBlocker:function(){return this.__qm;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__mk",b="__ml",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__mk:null,__ml:null,getWindowManager:function(){if(!this.__ml){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ml;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__ml){this.__ml.setDesktop(null);
}o.setDesktop(this);
this.__ml=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);

if(k){k.setActive(true);
}
if(l){l.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._addWindow(j);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__mk){this.__mk=[];
}return this.__mk;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__lb:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(y,z){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__lb;

if(!v){this.__lb=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(A,B){if(B===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(A===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__lb=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var p="resize",o="position",n="0px",m="webkit",l="paddingLeft",k="$$widget",j="qx.ui.root.Application",i="hidden",h="qx.client",g="div",c="paddingTop",f="100%",d="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(q){this.__qn=qx.dom.Node.getWindow(q);
this.__qo=q;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qn,p,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qn:null,__qo:null,_createContainerElement:function(){var r=this.__qo;
if(qx.core.Variant.isSet(h,m)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=i;
v.padding=v.margin=s.padding=s.margin=n;
v.width=v.height=s.width=s.height=f;
var u=r.createElement(g);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(o,d);
t.setAttribute(k,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var z=qx.bom.Viewport.getWidth(this.__qn);
var A=qx.bom.Viewport.getHeight(this.__qn);
return {minWidth:z,width:z,maxWidth:z,minHeight:A,height:A,maxHeight:A};
},_applyPadding:function(a,b,name){if(a&&(name==c||name==l)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,a,b,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qn=this.__qo=null;
}});
})();
(function(){var r="zIndex",q="px",p="keydown",o="deactivate",n="This method is not needed anymore.",m="resize",l="keyup",k="keypress",j="backgroundColor",h="_applyOpacity",E="Use 'getBlockerElement' instead.",D="__nT",C="opacity",B="interval",A="__nO",z="Tab",y="Color",x="qx.ui.root.Page",w="Use 'getContentBlockerElement' instead.",v="Number",t="qx.ui.core.Blocker",u="__nQ",s="_applyColor";
qx.Class.define(t,{extend:qx.core.Object,construct:function(Q){qx.core.Object.call(this);
this._widget=Q;
this._isPageRoot=(qx.Class.isDefined(x)&&Q instanceof qx.ui.root.Page);

if(this._isPageRoot){Q.addListener(m,this.__nU,this);
}this.__nL=[];
this.__nM=[];
this.__nN=[];
},properties:{color:{check:y,init:null,nullable:true,apply:s,themeable:true},opacity:{check:v,init:1,apply:h,themeable:true}},members:{__nO:null,__nP:0,__nQ:null,__nN:null,__nL:null,__nM:null,__nR:null,__nS:0,__nT:null,_isPageRoot:false,_widget:null,__nU:function(e){var R=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:R.width,height:R.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:R.width,height:R.height});
}},_applyColor:function(d,f){var g=qx.theme.manager.Color.getInstance().resolve(d);
this.__nV(j,g);
},_applyOpacity:function(J,K){this.__nV(C,J);
},__nV:function(L,M){var N=[];
this.__nO&&N.push(this.__nO);
this.__nQ&&N.push(this.__nQ);

for(var i=0;i<N.length;i++){N[i].setStyle(L,M);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.__nS+=1;

if(this.__nS==1){this.__nR=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.__nS-=1;

if(this.__nS==0){this._widget.setAnonymous(this.__nR);
}},_backupActiveWidget:function(){var S=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nL.push(S.getActive());
this.__nM.push(S.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var H=this.__nL.length;

if(H>0){var G=this.__nL[H-1];

if(G){qx.bom.Element.activate(G);
}this.__nL.pop();
}var F=this.__nM.length;

if(F>0){var G=this.__nM[F-1];

if(G){qx.bom.Element.focus(this.__nM[F-1]);
}this.__nM.pop();
}},__nW:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__nO){this.__nO=this.__nW();
this.__nO.setStyle(r,15);
this._widget.getContainerElement().add(this.__nO);
this.__nO.exclude();
}return this.__nO;
},block:function(){this.__nP++;

if(this.__nP<2){this._backupActiveWidget();
var I=this.getBlockerElement();
I.include();
I.activate();
I.addListener(o,this.__oc,this);
I.addListener(k,this.__ob,this);
I.addListener(p,this.__ob,this);
I.addListener(l,this.__ob,this);
}},isBlocked:function(){return this.__nP>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nP--;

if(this.__nP<1){this.__nX();
this.__nP=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nP=0;
this.__nX();
},__nX:function(){this._restoreActiveWidget();
var V=this.getBlockerElement();
V.removeListener(o,this.__oc,this);
V.removeListener(k,this.__ob,this);
V.removeListener(p,this.__ob,this);
V.removeListener(l,this.__ob,this);
V.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__nQ){this.__nQ=this.__nW();
this._widget.getContentElement().add(this.__nQ);
this.__nQ.exclude();
}return this.__nQ;
},blockContent:function(T){var U=this.getContentBlockerElement();
U.setStyle(r,T);
this.__nN.push(T);

if(this.__nN.length<2){U.include();

if(this._isPageRoot){if(!this.__nT){this.__nT=new qx.event.Timer(300);
this.__nT.addListener(B,this.__oa,this);
}this.__nT.start();
this.__oa();
}}},isContentBlocked:function(){return this.__nN.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nN.pop();
var a=this.__nN[this.__nN.length-1];
var b=this.getContentBlockerElement();
b.setStyle(r,a);

if(this.__nN.length<1){this.__nY();
this.__nN=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nN=[];
var c=this.getContentBlockerElement();
c.setStyle(r,null);
this.__nY();
},__nY:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nT.stop();
}},__oa:function(){var O=this._widget.getContainerElement().getDomElement();
var P=qx.dom.Node.getDocument(O);
this.getContentBlockerElement().setStyles({height:P.documentElement.scrollHeight+q,width:P.documentElement.scrollWidth+q});
},__ob:function(e){if(e.getKeyIdentifier()==z){e.stop();
}},__oc:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(m,this.__nU,this);
}this._disposeObjects(u,A,D);
this.__nR=this.__nL=this.__nM=this._widget=this.__nN=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__pb,this);
this.addListener(n,this.__pb,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pb:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var R="keypress",Q="focusout",P="activate",O="Tab",N="__bg",M="singleton",L="deactivate",K="focusin",J="qx.ui.core.FocusHandler";
qx.Class.define(J,{extend:qx.core.Object,type:M,construct:function(){qx.core.Object.call(this);
this.__bg={};
},members:{__bg:null,__bh:null,__bi:null,__bj:null,connectTo:function(a){a.addListener(R,this.__bk,this);
a.addListener(K,this._onFocusIn,this,true);
a.addListener(Q,this._onFocusOut,this,true);
a.addListener(P,this._onActivate,this,true);
a.addListener(L,this._onDeactivate,this,true);
},addRoot:function(S){this.__bg[S.$$hash]=S;
},removeRoot:function(u){delete this.__bg[u.$$hash];
},getActiveWidget:function(){return this.__bh;
},isActive:function(t){return this.__bh==t;
},getFocusedWidget:function(){return this.__bi;
},isFocused:function(A){return this.__bi==A;
},isFocusRoot:function(o){return !!this.__bg[o.$$hash];
},_onActivate:function(e){var w=e.getTarget();
this.__bh=w;
var v=this.__bl(w);

if(v!=this.__bj){this.__bj=v;
}},_onDeactivate:function(e){var z=e.getTarget();

if(this.__bh==z){this.__bh=null;
}},_onFocusIn:function(e){var I=e.getTarget();

if(I!=this.__bi){this.__bi=I;
I.visualizeFocus();
}},_onFocusOut:function(e){var j=e.getTarget();

if(j==this.__bi){this.__bi=null;
j.visualizeBlur();
}},__bk:function(e){if(e.getKeyIdentifier()!=O){return;
}
if(!this.__bj){return;
}e.stopPropagation();
e.preventDefault();
var b=this.__bi;

if(!e.isShiftPressed()){var c=b?this.__bp(b):this.__bn();
}else{var c=b?this.__bq(b):this.__bo();
}if(c){c.tabFocus();
}},__bl:function(x){var y=this.__bg;

while(x){if(y[x.$$hash]){return x;
}x=x.getLayoutParent();
}return null;
},__bm:function(T,U){if(T===U){return 0;
}var W=T.getTabIndex()||0;
var V=U.getTabIndex()||0;

if(W!=V){return W-V;
}var bc=T.getContainerElement().getDomElement();
var bb=U.getContainerElement().getDomElement();
var ba=qx.bom.element.Location;
var Y=ba.get(bc);
var X=ba.get(bb);
if(Y.top!=X.top){return Y.top-X.top;
}if(Y.left!=X.left){return Y.left-X.left;
}var bd=T.getZIndex();
var be=U.getZIndex();

if(bd!=be){return bd-be;
}return 0;
},__bn:function(){return this.__bt(this.__bj,null);
},__bo:function(){return this.__bu(this.__bj,null);
},__bp:function(d){var f=this.__bj;

if(f==d){return this.__bn();
}
while(d&&d.getAnonymous()){d=d.getLayoutParent();
}
if(d==null){return [];
}var g=[];
this.__br(f,d,g);
g.sort(this.__bm);
var h=g.length;
return h>0?g[0]:this.__bn();
},__bq:function(bf){var bg=this.__bj;

if(bg==bf){return this.__bo();
}
while(bf&&bf.getAnonymous()){bf=bf.getLayoutParent();
}
if(bf==null){return [];
}var bh=[];
this.__bs(bg,bf,bh);
bh.sort(this.__bm);
var bi=bh.length;
return bi>0?bh[bi-1]:this.__bo();
},__br:function(parent,p,q){var r=parent.getLayoutChildren();
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];
if(!(s instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(s)&&s.isEnabled()&&s.isVisible()){if(s.isTabable()&&this.__bm(p,s)<0){q.push(s);
}this.__br(s,p,q);
}}},__bs:function(parent,E,F){var G=parent.getLayoutChildren();
var H;

for(var i=0,l=G.length;i<l;i++){H=G[i];
if(!(H instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(H)&&H.isEnabled()&&H.isVisible()){if(H.isTabable()&&this.__bm(E,H)>0){F.push(H);
}this.__bs(H,E,F);
}}},__bt:function(parent,B){var C=parent.getLayoutChildren();
var D;

for(var i=0,l=C.length;i<l;i++){D=C[i];
if(!(D instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(D)&&D.isEnabled()&&D.isVisible()){if(D.isTabable()){if(B==null||this.__bm(D,B)<0){B=D;
}}B=this.__bt(D,B);
}}return B;
},__bu:function(parent,k){var m=parent.getLayoutChildren();
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];
if(!(n instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(n)&&n.isEnabled()&&n.isVisible()){if(n.isTabable()){if(k==null||this.__bm(n,k)>0){k=n;
}}k=this.__bu(n,k);
}}return k;
}},destruct:function(){this._disposeMap(N);
this.__bi=this.__bh=this.__bj=null;
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(B,C){if(!C){C=document;
}var D=C.createElement(e);
D.type=m;
D.rel=l;
D.href=qx.util.ResourceManager.getInstance().toUri(B);
var E=C.getElementsByTagName(n)[0];
E.appendChild(D);
},createElement:qx.core.Variant.select(o,{"mshtml":function(I){var J=document.createStyleSheet();

if(I){J.cssText=I;
}return J;
},"default":function(P){var Q=document.createElement(d);
Q.type=m;

if(P){Q.appendChild(document.createTextNode(P));
}document.getElementsByTagName(n)[0].appendChild(Q);
return Q.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(F,G,H){F.addRule(G,H);
},"default":function(R,S,T){R.insertRule(S+h+T+k,R.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(U,V){var W=U.rules;
var X=W.length;

for(var i=X-1;i>=0;--i){if(W[i].selectorText==V){U.removeRule(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;--i){if(bb[i].selectorText==ba){Y.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(y){var z=y.rules;
var A=z.length;

for(var i=A-1;i>=0;i--){y.removeRule(i);
}},"default":function(p){var q=p.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){p.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(K,L){K.addImport(L);
},"default":function(w,x){w.insertRule(j+x+g,w.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(s,t){var u=s.cssRules;
var v=u.length;

for(var i=v-1;i>=0;i--){if(u[i].href==t){s.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(M){var N=M.imports;
var O=N.length;

for(var i=O-1;i>=0;i--){M.removeImport(i);
}},"default":function(a){var b=a.cssRules;
var c=b.length;

for(var i=c-1;i>=0;i--){if(b[i].type==b[i].IMPORT_RULE){a.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){qx.html.Element.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){qx.html.Element.prototype.useElement.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var L="scrollbar-y",K="scrollbar-x",J="pane",I="auto",H="corner",G="on",F="changeVisibility",E="scroll",D="_computeScrollbars",C="off",v="scrollY",B="qx.ui.core.scroll.AbstractScrollArea",y="abstract",t="update",s="scrollX",x="mousewheel",w="scrollbarY",z="scrollbarX",r="horizontal",A="scrollarea",u="vertical";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:y,construct:function(){qx.ui.core.Widget.call(this);
var d=new qx.ui.layout.Grid();
d.setColumnFlex(0,1);
d.setRowFlex(0,1);
this._setLayout(d);
this.addListener(x,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:A},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbarY:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbar:{group:[z,w]}},members:{_createChildControlImpl:function(g){var h;

switch(g){case J:h=new qx.ui.core.scroll.ScrollPane();
h.addListener(t,this._computeScrollbars,this);
h.addListener(s,this._onScrollPaneX,this);
h.addListener(v,this._onScrollPaneY,this);
this._add(h,{row:0,column:0});
break;
case K:h=this._createScrollBar(r);
h.setMinWidth(0);
h.exclude();
h.addListener(E,this._onScrollBarX,this);
h.addListener(F,this._onChangeScrollbarXVisibility,this);
this._add(h,{row:1,column:0});
break;
case L:h=this._createScrollBar(u);
h.setMinHeight(0);
h.exclude();
h.addListener(E,this._onScrollBarY,this);
h.addListener(F,this._onChangeScrollbarYVisibility,this);
this._add(h,{row:0,column:1});
break;
case H:h=new qx.ui.core.Widget();
h.setWidth(0);
h.setHeight(0);
h.exclude();
this._add(h,{row:1,column:1});
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
},getPaneSize:function(){return this.getChildControl(J).getInnerSize();
},getItemTop:function(o){return this.getChildControl(J).getItemTop(o);
},getItemBottom:function(p){return this.getChildControl(J).getItemBottom(p);
},getItemLeft:function(ba){return this.getChildControl(J).getItemLeft(ba);
},getItemRight:function(c){return this.getChildControl(J).getItemRight(c);
},scrollToX:function(j){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollTo(j);
},scrollByX:function(q){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollBy(q);
},getScrollX:function(){var k=this.getChildControl(K,true);
return k?k.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollTo(f);
},scrollByY:function(l){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollBy(l);
},getScrollY:function(){var i=this.getChildControl(L,true);
return i?i.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(J).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(J).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var N=this._isChildControlVisible(K);
var O=this._isChildControlVisible(L);
var M=(O)?this.getChildControl(L,true):(N?this.getChildControl(K,true):null);

if(M){M.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var m=this._isChildControlVisible(K);
var n=this._isChildControlVisible(L);

if(!m){this.scrollToX(0);
}m&&n?this._showChildControl(H):this._excludeChildControl(H);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(K);
var b=this._isChildControlVisible(L);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(H):this._excludeChildControl(H);
},_computeScrollbars:function(){var V=this.getChildControl(J);
var content=V.getChildren()[0];

if(!content){this._excludeChildControl(K);
this._excludeChildControl(L);
return;
}var P=this.getInnerSize();
var U=V.getInnerSize();
var S=V.getScrollSize();
if(!U||!S){return;
}var W=this.getScrollbarX();
var X=this.getScrollbarY();

if(W===I&&X===I){var T=S.width>P.width;
var Y=S.height>P.height;
if((T||Y)&&!(T&&Y)){if(T){Y=S.height>U.height;
}else if(Y){T=S.width>U.width;
}}}else{var T=W===G;
var Y=X===G;
if(S.width>(T?U.width:P.width)&&W===I){T=true;
}
if(S.height>(T?U.height:P.height)&&X===I){Y=true;
}}if(T){var R=this.getChildControl(K);
R.show();
R.setMaximum(Math.max(0,S.width-U.width));
R.setKnobFactor((S.width===0)?0:U.width/S.width);
}else{this._excludeChildControl(K);
}
if(Y){var Q=this.getChildControl(L);
Q.show();
Q.setMaximum(Math.max(0,S.height-U.height));
Q.setKnobFactor((S.height===0)?0:U.height/S.height);
}else{this._excludeChildControl(L);
}}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ch:function(v,w,x,y){var z=this.getChildrenContainer();

if(z===this){v=h+v;
}return (z[v])(w,x,y);
},getChildren:function(){return this.__ch(c);
},hasChildren:function(){return this.__ch(f);
},add:function(D,E){return this.__ch(j,D,E);
},remove:function(q){return this.__ch(a,q);
},removeAll:function(){return this.__ch(d);
},indexOf:function(p){return this.__ch(l,p);
},addAt:function(s,t,u){this.__ch(g,s,t,u);
},addBefore:function(A,B,C){this.__ch(i,A,B,C);
},addAfter:function(m,n,o){this.__ch(k,m,n,o);
},removeAt:function(r){this.__ch(e,r);
}}});
})();
(function(){var y="single",x="Boolean",w="one",v="changeSelection",u="__lK",t="mouseup",s="mousedown",r="losecapture",q="multi",p="_applyQuickSelection",h="mouseover",o="_applySelectionMode",l="_applyDragSelection",g="qx.ui.core.MMultiSelectionHandling",f="removeItem",k="keypress",j="qx.event.type.Data",m="addItem",d="additive",n="mousemove";
qx.Mixin.define(g,{construct:function(){var c=this.SELECTION_MANAGER;
var b=this.__lK=new c(this);
this.addListener(s,b.handleMouseDown,b);
this.addListener(t,b.handleMouseUp,b);
this.addListener(h,b.handleMouseOver,b);
this.addListener(n,b.handleMouseMove,b);
this.addListener(r,b.handleLoseCapture,b);
this.addListener(k,b.handleKeyPress,b);
this.addListener(m,b.handleAddItem,b);
this.addListener(f,b.handleRemoveItem,b);
b.addListener(v,this._onSelectionChange,this);
},events:{"changeSelection":j},properties:{selectionMode:{check:[y,q,d,w],init:y,apply:o},dragSelection:{check:x,init:false,apply:l},quickSelection:{check:x,init:false,apply:p}},members:{__lK:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__lK.selectAll();
},isSelected:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not test if "+L+" is selected, because it is not a child element!");
}return this.__lK.isItemSelected(L);
},addToSelection:function(F){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not add + "+F+" to selection, because it is not a child element!");
}this.__lK.addItem(F);
},removeFromSelection:function(G){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,G)){throw new Error("Could not remove "+G+" from selection, because it is not a child element!");
}this.__lK.removeItem(G);
},selectRange:function(z,A){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lK.selectItemRange(z,A);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__lK.clearSelection();
},setSelection:function(B){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<B.length;i++){if(!qx.ui.core.Widget.contains(this,B[i])){throw new Error("Could not select "+B[i]+", because it is not a child element!");
}}
if(B.length===0){this.resetSelection();
}else{var C=this.getSelection();

if(!qx.lang.Array.equals(C,B)){this.__lK.replaceSelection(B);
}}},getSelection:function(){return this.__lK.getSelection();
},getSortedSelection:function(){return this.__lK.getSortedSelection();
},isSelectionEmpty:function(){return this.__lK.isSelectionEmpty();
},getSelectionContext:function(){return this.__lK.getSelectionContext();
},_getManager:function(){return this.__lK;
},getSelectables:function(){return this.__lK.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lK.invertSelection();
},_getLeadItem:function(){var a=this.__lK.getMode();

if(a===y||a===w){return this.__lK.getSelectedItem();
}else{return this.__lK.getLeadItem();
}},_applySelectionMode:function(D,E){this.__lK.setMode(D);
},_applyDragSelection:function(H,I){this.__lK.setDrag(H);
},_applyQuickSelection:function(J,K){this.__lK.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(v,e.getData());
}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var e="change",d="__kO",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__kO=new qx.data.Array();
this.__kO.addListener(e,this.__kR,this);
this.addListener(a,this.__kQ,this);
},events:{changeModelSelection:c},members:{__kO:null,__kP:false,__kQ:function(){if(this.__kP){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}if(f.length===h.length){this.setModelSelection(f);
}},__kR:function(){this.__kP=true;
var m=this.getSelectables();
var o=[];
var n=this.__kO.toArray();

for(var i=0;i<n.length;i++){var q=n[i];

for(var j=0;j<m.length;j++){var r=m[j];
var l=r.getModel?r.getModel():null;

if(q===l){o.push(r);
break;
}}}this.setSelection(o);
this.__kP=false;
var p=this.getSelection();

if(!qx.lang.Array.equals(p,o)){this.__kQ();
}},getModelSelection:function(){return this.__kO;
},setModelSelection:function(s){if(!s){this.__kO.removeAll();
return;
}{};
s.unshift(this.__kO.getLength());
s.unshift(0);
var t=this.__kO.splice.apply(this.__kO,s);
t.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var cm="one",cl="single",ck="selected",cj="additive",ci="multi",ch="PageUp",cg="under",cf="Left",ce="lead",cd="Down",cK="Up",cJ="Boolean",cI="PageDown",cH="anchor",cG="End",cF="Home",cE="Right",cD="right",cC="click",cB="above",ct="left",cu="Escape",cr="__nn",cs="A",cp="Space",cq="_applyMode",cn="interval",co="changeSelection",cv="qx.event.type.Data",cw="quick",cy="key",cx="abstract",cA="drag",cz="qx.ui.core.selection.Abstract";
qx.Class.define(cz,{type:cx,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nk={};
},events:{"changeSelection":cv},properties:{mode:{check:[cl,ci,cj,cm],init:cl,apply:cq},drag:{check:cJ,init:false},quick:{check:cJ,init:false}},members:{__nl:0,__nm:0,__nn:null,__no:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nk:null,__nC:null,__nD:null,getSelectionContext:function(){return this.__nA;
},selectAll:function(){var E=this.getMode();

if(E==cl||E==cm){throw new Error("Can not select all items in selection mode: "+E);
}this._selectAllItems();
this._fireChange();
},selectItem:function(bH){this._setSelectedItem(bH);
var bI=this.getMode();

if(bI!==cl&&bI!==cm){this._setLeadItem(bH);
this._setAnchorItem(bH);
}this._scrollItemIntoView(bH);
this._fireChange();
},addItem:function(C){var D=this.getMode();

if(D===cl||D===cm){this._setSelectedItem(C);
}else{if(!this._getAnchorItem()){this._setAnchorItem(C);
}this._setLeadItem(C);
this._addToSelection(C);
}this._scrollItemIntoView(C);
this._fireChange();
},removeItem:function(f){this._removeFromSelection(f);

if(this.getMode()===cm&&this.isSelectionEmpty()){var g=this._getFirstSelectable();

if(g){this.addItem(g);
}if(g==f){return;
}}
if(this.getLeadItem()==f){this._setLeadItem(null);
}
if(this._getAnchorItem()==f){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bV,bW){var bX=this.getMode();

if(bX==cl||bX==cm){throw new Error("Can not select multiple items in selection mode: "+bX);
}this._selectItemRange(bV,bW);
this._setAnchorItem(bV);
this._setLeadItem(bW);
this._scrollItemIntoView(bW);
this._fireChange();
},clearSelection:function(){if(this.getMode()==cm){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cW){var cX=this.getMode();

if(cX==cm||cX===cl){if(cW.length>1){throw new Error("Could not select more than one items in mode: "+cX+"!");
}
if(cW.length==1){this.selectItem(cW[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cW);
}},getSelectedItem:function(){var z=this.getMode();

if(z===cl||z===cm){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__nk);
},getSortedSelection:function(){var bz=this.getSelectables();
var by=qx.lang.Object.getValues(this.__nk);
by.sort(function(a,b){return bz.indexOf(a)-bz.indexOf(b);
});
return by;
},isItemSelected:function(bR){var bS=this._selectableToHashCode(bR);
return this.__nk[bS]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__nk);
},invertSelection:function(){var bD=this.getMode();

if(bD===cl||bD===cm){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bC=this.getSelectables();

for(var i=0;i<bC.length;i++){this._toggleInSelection(bC[i]);
}this._fireChange();
},_setLeadItem:function(bm){var bn=this.__nB;

if(bn!==null){this._styleSelectable(bn,ce,false);
}
if(bm!==null){this._styleSelectable(bm,ce,true);
}this.__nB=bm;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__nB!==null?this.__nB:null;
},_setAnchorItem:function(x){var y=this.__nC;

if(y){this._styleSelectable(y,cH,false);
}
if(x){this._styleSelectable(x,cH,true);
}this.__nC=x;
},_getAnchorItem:function(){return this.__nC!==null?this.__nC:null;
},_isSelectable:function(bG){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bc=event.getTarget();
return this._isSelectable(bc)?bc:null;
},_selectableToHashCode:function(bb){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bL,bM,bN){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(K){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(U){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bE,bF){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cc){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(I,J){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cL,cM){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bp,bq){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(R,S){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(R===cm){var T=this._getFirstSelectable();

if(T){this._setSelectedItem(T);
this._scrollItemIntoView(T);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bB=this.getMode();

if(bB!==cm&&bB!==cl){return;
}var bA=this._getSelectableFromMouseEvent(event);

if(bA===null){return;
}this._setSelectedItem(bA);
this._fireChange(cw);
},handleMouseDown:function(event){var W=this._getSelectableFromMouseEvent(event);

if(W===null){return;
}var Y=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var V=event.isShiftPressed();
if(this.isItemSelected(W)&&!V&&!Y&&!this.getDrag()){this.__nD=W;
return;
}else{this.__nD=null;
}this._scrollItemIntoView(W);
switch(this.getMode()){case cl:case cm:this._setSelectedItem(W);
break;
case cj:this._setLeadItem(W);
this._setAnchorItem(W);
this._toggleInSelection(W);
break;
case ci:this._setLeadItem(W);
if(V){var X=this._getAnchorItem();

if(X===null){X=this._getFirstSelectable();
this._setAnchorItem(X);
}this._selectItemRange(X,W,Y);
}else if(Y){this._setAnchorItem(W);
this._toggleInSelection(W);
}else{this._setAnchorItem(W);
this._setSelectedItem(W);
}break;
}var ba=this.getMode();

if(this.getDrag()&&ba!==cl&&ba!==cm&&!V&&!Y){this.__nr=this._getLocation();
this.__no=this._getScroll();
this.__ns=event.getDocumentLeft()+this.__no.left;
this.__nt=event.getDocumentTop()+this.__no.top;
this.__nu=true;
this._capture();
}this._fireChange(cC);
},handleMouseUp:function(event){var O=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var L=event.isShiftPressed();

if(!O&&!L&&this.__nD){var M=this._getSelectableFromMouseEvent(event);

if(M===null||!this.isItemSelected(M)){return;
}var N=this.getMode();

if(N===cj){this._removeFromSelection(M);
}else{this._setSelectedItem(M);

if(this.getMode()===ci){this._setLeadItem(M);
this._setAnchorItem(M);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__nu){return;
}this.__nv=event.getDocumentLeft();
this.__nw=event.getDocumentTop();
var w=this.__nv+this.__no.left;

if(w>this.__ns){this.__nx=1;
}else if(w<this.__ns){this.__nx=-1;
}else{this.__nx=0;
}var v=this.__nw+this.__no.top;

if(v>this.__nt){this.__ny=1;
}else if(v<this.__nt){this.__ny=-1;
}else{this.__ny=0;
}var location=this.__nr;

if(this.__nv<location.left){this.__nl=this.__nv-location.left;
}else if(this.__nv>location.right){this.__nl=this.__nv-location.right;
}else{this.__nl=0;
}
if(this.__nw<location.top){this.__nm=this.__nw-location.top;
}else if(this.__nw>location.bottom){this.__nm=this.__nw-location.bottom;
}else{this.__nm=0;
}if(!this.__nn){this.__nn=new qx.event.Timer(100);
this.__nn.addListener(cn,this._onInterval,this);
}this.__nn.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var bd=e.getData();

if(this.getMode()===cm&&this.isSelectionEmpty()){this.addItem(bd);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__nu){return;
}if(this.__nz){this._fireChange(cC);
}delete this.__nu;
delete this.__np;
delete this.__nq;
this._releaseCapture();
if(this.__nn){this.__nn.stop();
}},_onInterval:function(e){this._scrollBy(this.__nl,this.__nm);
this.__no=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var r=this._getDimension();
var j=Math.max(0,Math.min(this.__nv-this.__nr.left,r.width))+this.__no.left;
var h=Math.max(0,Math.min(this.__nw-this.__nr.top,r.height))+this.__no.top;
if(this.__np===j&&this.__nq===h){return;
}this.__np=j;
this.__nq=h;
var t=this._getAnchorItem();
var m=t;
var p=this.__nx;
var s,k;

while(p!==0){s=p>0?this._getRelatedSelectable(m,cD):this._getRelatedSelectable(m,ct);
if(s!==null){k=this._getSelectableLocationX(s);
if((p>0&&k.left<=j)||(p<0&&k.right>=j)){m=s;
continue;
}}break;
}var q=this.__ny;
var o,n;

while(q!==0){o=q>0?this._getRelatedSelectable(m,cg):this._getRelatedSelectable(m,cB);
if(o!==null){n=this._getSelectableLocationY(o);
if((q>0&&n.top<=h)||(q<0&&n.bottom>=h)){m=o;
continue;
}}break;
}var u=this.getMode();

if(u===ci){this._selectItemRange(t,m);
}else if(u===cj){if(this.isItemSelected(t)){this._selectItemRange(t,m,true);
}else{this._deselectItemRange(t,m);
}this._setAnchorItem(m);
}this._fireChange(cA);
},__nE:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cS,cR;
var cU=event.getKeyIdentifier();
var cT=this.getMode();
var cO=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cP=event.isShiftPressed();
var cQ=false;

if(cU===cs&&cO){if(cT!==cl&&cT!==cm){this._selectAllItems();
cQ=true;
}}else if(cU===cu){if(cT!==cl&&cT!==cm){this._clearSelection();
cQ=true;
}}else if(cU===cp){var cN=this.getLeadItem();

if(cN&&!cP){if(cO||cT===cj){this._toggleInSelection(cN);
}else{this._setSelectedItem(cN);
}cQ=true;
}}else if(this.__nE[cU]){cQ=true;

if(cT===cl||cT==cm){cS=this._getSelectedItem();
}else{cS=this.getLeadItem();
}
if(cS!==null){switch(cU){case cF:cR=this._getFirstSelectable();
break;
case cG:cR=this._getLastSelectable();
break;
case cK:cR=this._getRelatedSelectable(cS,cB);
break;
case cd:cR=this._getRelatedSelectable(cS,cg);
break;
case cf:cR=this._getRelatedSelectable(cS,ct);
break;
case cE:cR=this._getRelatedSelectable(cS,cD);
break;
case ch:cR=this._getPage(cS,true);
break;
case cI:cR=this._getPage(cS,false);
break;
}}else{switch(cU){case cF:case cd:case cE:case cI:cR=this._getFirstSelectable();
break;
case cG:case cK:case cf:case ch:cR=this._getLastSelectable();
break;
}}if(cR!==null){switch(cT){case cl:case cm:this._setSelectedItem(cR);
break;
case cj:this._setLeadItem(cR);
break;
case ci:if(cP){var cV=this._getAnchorItem();

if(cV===null){this._setAnchorItem(cV=this._getFirstSelectable());
}this._setLeadItem(cR);
this._selectItemRange(cV,cR,cO);
}else{this._setAnchorItem(cR);
this._setLeadItem(cR);

if(!cO){this._setSelectedItem(cR);
}}break;
}this._scrollItemIntoView(cR);
}}
if(cQ){event.stop();
this._fireChange(cy);
}},_selectAllItems:function(){var d=this.getSelectables();

for(var i=0,l=d.length;i<l;i++){this._addToSelection(d[i]);
}},_clearSelection:function(){var bJ=this.__nk;

for(var bK in bJ){this._removeFromSelection(bJ[bK]);
}this.__nk={};
},_selectItemRange:function(br,bs,bt){var bw=this._getSelectableRange(br,bs);
if(!bt){var bv=this.__nk;
var bx=this.__nF(bw);

for(var bu in bv){if(!bx[bu]){this._removeFromSelection(bv[bu]);
}}}for(var i=0,l=bw.length;i<l;i++){this._addToSelection(bw[i]);
}},_deselectItemRange:function(bO,bP){var bQ=this._getSelectableRange(bO,bP);

for(var i=0,l=bQ.length;i<l;i++){this._removeFromSelection(bQ[i]);
}},__nF:function(bY){var cb={};
var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];
cb[this._selectableToHashCode(ca)]=ca;
}return cb;
},_getSelectedItem:function(){for(var c in this.__nk){return this.__nk[c];
}return null;
},_setSelectedItem:function(F){if(this._isSelectable(F)){var G=this.__nk;
var H=this._selectableToHashCode(F);

if(!G[H]||qx.lang.Object.hasMinLength(G,2)){this._clearSelection();
this._addToSelection(F);
}}},_addToSelection:function(A){var B=this._selectableToHashCode(A);

if(!this.__nk[B]&&this._isSelectable(A)){this.__nk[B]=A;
this._styleSelectable(A,ck,true);
this.__nz=true;
}},_toggleInSelection:function(P){var Q=this._selectableToHashCode(P);

if(!this.__nk[Q]){this.__nk[Q]=P;
this._styleSelectable(P,ck,true);
}else{delete this.__nk[Q];
this._styleSelectable(P,ck,false);
}this.__nz=true;
},_removeFromSelection:function(bT){var bU=this._selectableToHashCode(bT);

if(this.__nk[bU]!=null){delete this.__nk[bU];
this._styleSelectable(bT,ck,false);
this.__nz=true;
}},_replaceMultiSelection:function(be){var bh=false;
var bk,bj;
var bf={};

for(var i=0,l=be.length;i<l;i++){bk=be[i];

if(this._isSelectable(bk)){bj=this._selectableToHashCode(bk);
bf[bj]=bk;
}}var bl=be[0];
var bg=bk;
var bi=this.__nk;

for(var bj in bi){if(bf[bj]){delete bf[bj];
}else{bk=bi[bj];
delete bi[bj];
this._styleSelectable(bk,ck,false);
bh=true;
}}for(var bj in bf){bk=bi[bj]=bf[bj];
this._styleSelectable(bk,ck,true);
bh=true;
}if(!bh){return false;
}this._scrollItemIntoView(bg);
this._setLeadItem(bl);
this._setAnchorItem(bl);
this.__nz=true;
this._fireChange();
},_fireChange:function(bo){if(this.__nz){this.__nA=bo||null;
this.fireDataEvent(co,this.getSelection());
delete this.__nz;
}}},destruct:function(){this._disposeObjects(cr);
this.__nk=this.__nD=this.__nC=null;
this.__nB=null;
}});
})();
(function(){var g="vertical",f="under",e="above",d="qx.ui.core.selection.Widget",c="left",b="right";
qx.Class.define(d,{extend:qx.ui.core.selection.Abstract,construct:function(w){qx.ui.core.selection.Abstract.call(this);
this.__mb=w;
},members:{__mb:null,_isSelectable:function(h){return h.isEnabled()&&h.isVisible()&&h.getLayoutParent()===this.__mb;
},_selectableToHashCode:function(F){return F.$$hash;
},_styleSelectable:function(x,y,z){z?x.addState(y):x.removeState(y);
},_capture:function(){this.__mb.capture();
},_releaseCapture:function(){this.__mb.releaseCapture();
},_getWidget:function(){return this.__mb;
},_getLocation:function(){var v=this.__mb.getContentElement().getDomElement();
return v?qx.bom.element.Location.get(v):null;
},_getDimension:function(){return this.__mb.getInnerSize();
},_getSelectableLocationX:function(m){var n=m.getBounds();

if(n){return {left:n.left,right:n.left+n.width};
}},_getSelectableLocationY:function(j){var k=j.getBounds();

if(k){return {top:k.top,bottom:k.top+k.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(C){this.__mb.scrollChildIntoView(C);
},getSelectables:function(){var N=this.__mb.getChildren();
var O=[];
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];

if(M.isEnabled()&&M.isVisible()){O.push(M);
}}return O;
},_getSelectableRange:function(G,H){if(G===H){return [G];
}var L=this.__mb.getChildren();
var I=[];
var K=false;
var J;

for(var i=0,l=L.length;i<l;i++){J=L[i];

if(J===G||J===H){if(K){I.push(J);
break;
}else{K=true;
}}
if(K&&J.isEnabled()&&J.isVisible()){I.push(J);
}}return I;
},_getFirstSelectable:function(){var a=this.__mb.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var u=this.__mb.getChildren();

for(var i=u.length-1;i>0;i--){if(u[i].isEnabled()&&u[i].isVisible()){return u[i];
}}return null;
},_getRelatedSelectable:function(o,p){var s=this.__mb.getOrientation()===g;
var r=this.__mb.getChildren();
var q=r.indexOf(o);
var t;

if((s&&p===e)||(!s&&p===c)){for(var i=q-1;i>=0;i--){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}else if((s&&p===f)||(!s&&p===b)){for(var i=q+1;i<r.length;i++){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}return null;
},_getPage:function(D,E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__mb=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(a){return (a.isEnabled()&&a.isVisible()&&a.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var s=this._getWidget();
return {left:s.getScrollX(),top:s.getScrollY()};
},_scrollBy:function(c,d){var e=this._getWidget();
e.scrollByX(c);
e.scrollByY(d);
},_getPage:function(f,g){var l=this.getSelectables();
var length=l.length;
var o=l.indexOf(f);
if(o===-1){throw new Error("Invalid lead item: "+f);
}var h=this._getWidget();
var q=h.getScrollY();
var innerHeight=h.getInnerSize().height;
var top,k,p;

if(g){var n=q;
var i=o;
while(1){for(;i>=0;i--){top=h.getItemTop(l[i]);
if(top<n){p=i+1;
break;
}}if(p==null){var r=this._getFirstSelectable();
return r==f?null:r;
}if(p>=o){n-=innerHeight+q-h.getItemBottom(f);
p=null;
continue;
}return l[p];
}}else{var m=innerHeight+q;
var i=o;
while(1){for(;i<length;i++){k=h.getItemBottom(l[i]);
if(k>m){p=i-1;
break;
}}if(p==null){var j=this._getLastSelectable();
return j==f?null:j;
}if(p<=o){m+=h.getItemTop(f)-q;
p=null;
continue;
}return l[p];
}}}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="Boolean",d="one",c="addChildWidget",b="_applySpacing",a="Enter",y="Integer",x="action",w="__lT",v="keyinput",u="addItem",t="removeChildWidget",s="_applyOrientation",r="single",q="keypress",p="list",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(J){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__lT=new qx.ui.container.Composite();
this.__lT.addListener(c,this._onAddChild,this);
this.__lT.addListener(t,this._onRemoveChild,this);
this.getChildControl(n).add(this.__lT);
if(J){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(q,this._onKeyPress);
this.addListener(v,this._onKeyInput);
this.__lU=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:s},spacing:{check:y,init:0,apply:b,themeable:true},enableInlineFind:{check:f,init:true}},members:{__lU:null,__lV:null,__lT:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__lT;
},_onAddChild:function(e){this.fireDataEvent(u,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(F,G){var H=F===m;
var I=H?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__lT;
content.setLayout(I);
content.setAllowGrowX(!H);
content.setAllowGrowY(H);
this._applySpacing(this.getSpacing());
},_applySpacing:function(K,L){this.__lT.getLayout().setSpacing(K);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==a&&!e.isAltPressed()){var C=this.getSelection();

for(var i=0;i<C.length;i++){C[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var D=this.getSelectionMode();

if(!(D===r||D===d)){return;
}if(((new Date).valueOf()-this.__lV)>1000){this.__lU=h;
}this.__lU+=e.getChar();
var E=this.findItemByLabelFuzzy(this.__lU);
if(E){this.setSelection([E]);
}this.__lV=(new Date).valueOf();
},findItemByLabelFuzzy:function(z){z=z.toLowerCase();
var A=this.getChildren();
for(var i=0,l=A.length;i<l;i++){var B=A[i].getLabel();
if(B&&B.toLowerCase().indexOf(z)==0){return A[i];
}}return null;
},findItem:function(M,N){if(N!==false){M=M.toLowerCase();
}var O=this.getChildren();
var Q;
for(var i=0,l=O.length;i<l;i++){Q=O[i];
var P=Q.getLabel();

if(P!=null){if(P.translate){P=P.translate();
}
if(N!==false){P=P.toLowerCase();
}
if(P.toString()==M.toString()){return Q;
}}}return null;
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="__oH",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",p="mouseup",q="Number",n="_applyPosition",o="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(Q){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(Q!=null){this.setOrientation(Q);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[l,i],init:l,apply:v},maximum:{check:s,apply:w,init:100},position:{check:q,init:0,apply:n,event:j},singleStep:{check:y,init:20},knobFactor:{check:A,nullable:true}},members:{__oG:null,__oH:null,_getScrollPaneElement:function(){if(!this.__oH){this.__oH=new qx.html.Element();
}return this.__oH;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var N=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__oG?100:N,maxWidth:this.__oG?null:N,minWidth:this.__oG?null:N,height:this.__oG?N:100,maxHeight:this.__oG?N:null,minHeight:this.__oG?N:null};
},_applyEnabled:function(O,P){qx.ui.core.Widget.prototype._applyEnabled.call(this,O,P);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(R){var content=this.getContentElement();

if(this.__oG){content.scrollToX(R);
}else{content.scrollToY(R);
}},_applyOrientation:function(T,U){var V=this.__oG=T===l;
this.set({allowGrowX:V,allowShrinkX:V,allowGrowY:!V,allowShrinkY:!V});

if(V){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:V?j:d,overflowY:V?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var I=this.__oG;
var J=this.getBounds();

if(!J){return;
}
if(this.isEnabled()){var K=I?J.width:J.height;
var H=this.getMaximum()+K;
}else{H=0;
}if(qx.core.Variant.isSet(g,r)){var J=this.getBounds();
this.getContentElement().setStyles({left:I?f:h,top:I?h:f,width:(I?J.width:J.width+1)+k,height:(I?J.height+1:J.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(I?H:1)+k,height:(I?1:H)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(W){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));
},scrollBy:function(a){this.scrollTo(this.getPosition()+a);
},scrollBySteps:function(F){var G=this.getSingleStep();
this.scrollBy(F*G);
},_onScroll:function(e){var M=this.getContentElement();
var L=this.__oG?M.getScrollX():M.getScrollY();
this.setPosition(L);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(z);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(O){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__mi:2,_createChildControlImpl:function(Q){var R;

switch(Q){case l:R=new qx.ui.core.scroll.ScrollSlider();
R.setPageStep(100);
R.setFocusable(false);
R.addListener(y,this._onChangeSliderValue,this);
this._add(R,{flex:1});
break;
case j:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(f,this._onExecuteBegin,this);
this._add(R);
break;
case h:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(f,this._onExecuteEnd,this);
this._add(R);
break;
}return R||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Q);
},_applyMaximum:function(a){this.getChildControl(l).setMaximum(a);
},_applyPosition:function(G){this.getChildControl(l).setValue(G);
},_applyKnobFactor:function(P){this.getChildControl(l).setKnobFactor(P);
},_applyPageStep:function(E){this.getChildControl(l).setPageStep(E);
},_applyOrientation:function(B,C){var D=this._getLayout();

if(D){D.dispose();
}if(B===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(B);
},scrollTo:function(F){this.getChildControl(l).slideTo(F);
},scrollBy:function(H){this.getChildControl(l).slideBy(H);
},scrollBySteps:function(M){var N=this.getSingleStep();
this.getChildControl(l).slideBy(M*N);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var I=this.getChildControl(l).getChildControl(v);
var L=I.getSizeHint();
var J=false;
var K=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(K.height<L.minHeight+this.__mi){J=true;
}}else{if(K.width<L.minWidth+this.__mi){J=true;
}}
if(J){I.exclude();
}else{I.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(a){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var p="knob",o="horizontal",n="vertical",m="Integer",l="hovered",k="left",j="top",i="mouseup",h="pressed",g="px",ba="mousemove",Y="resize",X="slider",W="mousedown",V="PageUp",U="mouseout",T="changeValue",S="Left",R="Down",Q="Up",w="dblclick",x="qx.ui.form.Slider",u="PageDown",v="mousewheel",s="interval",t="_applyValue",q="_applyKnobFactor",r="End",y="height",z="Right",G="width",E="_applyOrientation",K="Home",I="mouseover",M="floor",L="_applyMinimum",B="click",P="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",O="keypress",N="ceil",A="losecapture",C="contextmenu",D="_applyMaximum",F="Number",H="changeMaximum",J="changeMinimum";
qx.Class.define(x,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(cd){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(O,this._onKeyPress);
this.addListener(v,this._onMouseWheel);
this.addListener(W,this._onMouseDown);
this.addListener(i,this._onMouseUp);
this.addListener(A,this._onMouseUp);
this.addListener(Y,this._onUpdate);
this.addListener(C,this._onStopEvent);
this.addListener(B,this._onStopEvent);
this.addListener(w,this._onStopEvent);
if(cd!=null){this.setOrientation(cd);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:X},focusable:{refine:true,init:true},orientation:{check:[o,n],init:o,apply:E},value:{check:P,init:0,apply:t,event:T,nullable:true},minimum:{check:m,init:0,apply:L,event:J},maximum:{check:m,init:100,apply:D,event:H},singleStep:{check:m,init:1},pageStep:{check:m,init:10},knobFactor:{check:F,apply:q,nullable:true}},members:{__mH:null,__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bL){var bM;

switch(bL){case p:bM=new qx.ui.core.Widget();
bM.addListener(Y,this._onUpdate,this);
bM.addListener(I,this._onMouseOver);
bM.addListener(U,this._onMouseOut);
this._add(bM);
break;
}return bM||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bL);
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onMouseWheel:function(e){var bK=e.getWheelDelta()>0?1:-1;
this.slideBy(bK*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var f=this.getOrientation()===o;
var d=f?S:Q;
var forward=f?z:R;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case d:this.slideBack();
break;
case u:this.slidePageForward();
break;
case V:this.slidePageBack();
break;
case K:this.slideToBegin();
break;
case r:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__mK){return;
}var bg=this.__mR;
var be=this.getChildControl(p);
var bf=bg?k:j;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__mH=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__mI=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__mK=true;
this.__mL=bi+bj-bh;
be.addState(h);
}else{this.__mM=true;
this.__mN=bi<=bh?-1:1;
this.__mS(e);
this._onInterval();
if(!this.__mP){this.__mP=new qx.event.Timer(100);
this.__mP.addListener(s,this._onInterval,this);
}this.__mP.start();
}this.addListener(ba,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__mK){this.releaseCapture();
delete this.__mK;
delete this.__mL;
this.getChildControl(p).removeState(h);
if(e.getType()===i){var b;
var c;
var a;

if(this.__mR){b=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__mH);
a=qx.bom.element.Location.get(this.getContentElement().getDomElement())[j];
c=e.getDocumentTop()-(a+this.getChildControl(p).getBounds().top);
}else{b=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__mH);
a=qx.bom.element.Location.get(this.getContentElement().getDomElement())[k];
c=e.getDocumentLeft()-(a+this.getChildControl(p).getBounds().left);
}
if(c<0||c>this.__mJ||b<0||b>this.__mJ){this.getChildControl(p).removeState(l);
}}}else if(this.__mM){this.__mP.stop();
this.releaseCapture();
delete this.__mM;
delete this.__mN;
delete this.__mO;
}this.removeListener(ba,this._onMouseMove);
if(e.getType()===i){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__mK){var bQ=this.__mR?e.getDocumentLeft():e.getDocumentTop();
var bP=bQ-this.__mL;
this.slideTo(this._positionToValue(bP));
}else if(this.__mM){this.__mS(e);
}e.stopPropagation();
},_onInterval:function(e){var bR=this.getValue()+(this.__mN*this.getPageStep());
if(bR<this.getMinimum()){bR=this.getMinimum();
}else if(bR>this.getMaximum()){bR=this.getMaximum();
}var bS=this.__mN==-1;

if((bS&&bR<=this.__mO)||(!bS&&bR>=this.__mO)){bR=this.__mO;
}this.slideTo(bR);
},_onUpdate:function(e){var bn=this.getInnerSize();
var bo=this.getChildControl(p).getBounds();
var bm=this.__mR?G:y;
this._updateKnobSize();
this.__mQ=bn[bm]-bo[bm];
this.__mJ=bo[bm];
this._updateKnobPosition();
},__mR:false,__mQ:0,__mS:function(e){var by=this.__mR;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__mH;
var bz=this.__mI;
var bJ=this.__mJ;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__mN<0?M:N;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__mO==null||(this.__mN==-1&&bD<=this.__mO)||(this.__mN==1&&bD>=this.__mO)){this.__mO=bD;
}},_positionToValue:function(bY){var ca=this.__mQ;
if(ca==null||ca==0){return 0;
}var cc=bY/ca;

if(cc<0){cc=0;
}else if(cc>1){cc=1;
}var cb=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(cb*cc);
},_valueToPosition:function(bq){var br=this.__mQ;

if(br==null){return 0;
}var bs=this.getMaximum()-this.getMinimum();
if(bs==0){return 0;
}var bq=bq-this.getMinimum();
var bt=bq/bs;

if(bt<0){bt=0;
}else if(bt>1){bt=1;
}return Math.round(br*bt);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bN){var bO=this.getChildControl(p).getContainerElement();

if(this.__mR){bO.setStyle(k,bN+g,true);
}else{bO.setStyle(j,bN+g,true);
}},_updateKnobSize:function(){var bc=this.getKnobFactor();

if(bc==null){return;
}var bb=this.getInnerSize();

if(bb==null){return;
}if(this.__mR){this.getChildControl(p).setWidth(Math.round(bc*bb.width));
}else{this.getChildControl(p).setHeight(Math.round(bc*bb.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bp){this.slideTo(this.getValue()+bp);
},slideTo:function(bd){if(bd<this.getMinimum()){bd=this.getMinimum();
}else if(bd>this.getMaximum()){bd=this.getMaximum();
}else{bd=this.getMinimum()+Math.round((bd-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bd);
},_applyOrientation:function(bV,bW){var bX=this.getChildControl(p);
this.__mR=bV===o;
if(this.__mR){this.removeState(n);
bX.removeState(n);
this.addState(o);
bX.addState(o);
bX.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(o);
bX.removeState(o);
this.addState(n);
bX.addState(n);
bX.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bT,bU){if(bT!=null){this._updateKnobSize();
}else{if(this.__mR){this.getChildControl(p).resetWidth();
}else{this.getChildControl(p).resetHeight();
}}},_applyValue:function(bu,bv){if(bu!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bw,bx){if(this.getValue()<bw){this.setValue(bw);
}this._updateKnobPosition();
},_applyMaximum:function(bk,bl){if(this.getValue()>bk){this.setValue(bk);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jx:null,__jy:false,__jz:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jy){this.__jy=false;
}else{this.__jy=true;
o.execute(this);
}}this.fireEvent(n);
},__jA:function(e){if(this.__jy){this.__jy=false;
return;
}this.__jy=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jz);
}
if(p!=null){this.__jz=p.addListener(n,this.__jA,this);
}var t=this.__jx;

if(t==null){this.__jx=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jx=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){qx.ui.basic.Atom.call(this,r,s);

if(t!=null){this.setCommand(t);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__lW",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){qx.ui.form.Button.call(this,q,r);
this.__lW=new qx.event.AcceleratingTimer();
this.__lW.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lX:null,__lW:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lY();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lX){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ma();
},_applyEnabled:function(o,p){qx.ui.form.Button.prototype._applyEnabled.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__ma();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lW.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lW.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lY();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lX){this.execute();
}}this.__ma();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lX){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ma();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lY();
}},_onInterval:function(e){this.__lX=true;
this.fireEvent(b);
},__lY:function(){this.fireEvent(g);
this.__lX=false;
this.__lW.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ma:function(){this.fireEvent(d);
this.__lW.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__oY",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oY=new qx.event.Timer(this.getInterval());
this.__oY.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oY:null,__pa:null,start:function(){this.__oY.setInterval(this.getFirstInterval());
this.__oY.start();
},stop:function(){this.__oY.stop();
this.__pa=null;
},_onInterval:function(){this.__oY.stop();

if(this.__pa==null){this.__pa=this.getInterval();
}this.__pa=Math.max(this.getMinimum(),this.__pa-this.getDecrease());
this.__oY.setInterval(this.__pa);
this.__oY.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(M,N,O){qx.ui.layout.Abstract.call(this);

if(M){this.setSpacing(M);
}
if(N){this.setAlignX(N);
}
if(O){this.setSeparator(O);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__fd:null,__fe:null,__ff:null,__fg:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fh:function(){var U=this._getLayoutChildren();
var length=U.length;
var R=false;
var P=this.__fd&&this.__fd.length!=length&&this.__fe&&this.__fd;
var S;
var Q=P?this.__fd:new Array(length);
var T=P?this.__fe:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.width!=null){Q[i]=parseFloat(S.width)/100;
}
if(S.flex!=null){T[i]=S.flex;
R=true;
}else{T[i]=0;
}}if(!P){this.__fd=Q;
this.__fe=T;
}this.__ff=R;
this.__fg=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(o,p){if(this._invalidChildrenCache){this.__fh();
}var v=this.__fg;
var length=v.length;
var E=qx.ui.layout.Util;
var D=this.getSpacing();
var H=this.getSeparator();

if(H){var s=E.computeHorizontalSeparatorGaps(v,D,H);
}else{var s=E.computeHorizontalGaps(v,D,true);
}var i,q,B,A;
var G=[];
var w=s;

for(i=0;i<length;i+=1){A=this.__fd[i];
B=A!=null?Math.floor((o-s)*A):v[i].getSizeHint().width;
G.push(B);
w+=B;
}if(this.__ff&&w!=o){var y={};
var C,F;

for(i=0;i<length;i+=1){C=this.__fe[i];

if(C>0){x=v[i].getSizeHint();
y[i]={min:x.minWidth,value:G[i],max:x.maxWidth,flex:C};
}}var t=E.computeFlexOffsets(y,o,w);

for(i in t){F=t[i].offset;
G[i]+=F;
w+=F;
}}var L=v[0].getMarginLeft();
if(w<o&&this.getAlignX()!=m){L=o-w;

if(this.getAlignX()===k){L=Math.round(L/2);
}}var x,top,r,B,u,J,z;
var D=this.getSpacing();
this._clearSeparators();
if(H){var I=qx.theme.manager.Decoration.getInstance().resolve(H).getInsets();
var K=I.left+I.right;
}for(i=0;i<length;i+=1){q=v[i];
B=G[i];
x=q.getSizeHint();
J=q.getMarginTop();
z=q.getMarginBottom();
r=Math.max(x.minHeight,Math.min(p-J-z,x.maxHeight));
top=E.computeVerticalAlignOffset(q.getAlignY()||this.getAlignY(),r,p,J,z);
if(i>0){if(H){L+=u+D;
this._renderSeparator(H,{left:L,top:0,width:K,height:p});
L+=K+D+q.getMarginLeft();
}else{L+=E.collapseMargins(D,u,q.getMarginLeft());
}}q.renderLayout(L,top,B,r);
L+=B;
u=q.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fh();
}var bc=qx.ui.layout.Util;
var bk=this.__fg;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__fe[i];
var X=this.__fd[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__fd=this.__fe=this.__fg=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(D,E,F){qx.ui.layout.Abstract.call(this);

if(D){this.setSpacing(D);
}
if(E){this.setAlignY(E);
}
if(F){this.setSeparator(F);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__eh:null,__ei:null,__ej:null,__ek:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__el:function(){var L=this._getLayoutChildren();
var length=L.length;
var H=false;
var G=this.__eh&&this.__eh.length!=length&&this.__ei&&this.__eh;
var J;
var I=G?this.__eh:new Array(length);
var K=G?this.__ei:new Array(length);
if(this.getReversed()){L=L.concat().reverse();
}for(var i=0;i<length;i++){J=L[i].getLayoutProperties();

if(J.height!=null){I[i]=parseFloat(J.height)/100;
}
if(J.flex!=null){K[i]=J.flex;
H=true;
}else{K[i]=0;
}}if(!G){this.__eh=I;
this.__ei=K;
}this.__ej=H;
this.__ek=L;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__el();
}var U=this.__ek;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__eh[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__ej&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__ei[i];

if(bd>0){V=U[i].getSizeHint();
W[i]={min:V.minHeight,value:ba[i],max:V.maxHeight,flex:bd};
}}var S=bf.computeFlexOffsets(W,N,bg);

for(i in S){bh=S[i].offset;
ba[i]+=bh;
bg+=bh;
}}var top=U[0].getMarginTop();
if(bg<N&&this.getAlignY()!=m){top=N-bg;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var V,bk,bb,Q,X,bc,T;
this._clearSeparators();
if(bi){var bj=qx.theme.manager.Decoration.getInstance().resolve(bi).getInsets();
var O=bj.top+bj.bottom;
}for(i=0;i<length;i+=1){P=U[i];
Q=ba[i];
V=P.getSizeHint();
bc=P.getMarginLeft();
T=P.getMarginRight();
bb=Math.max(V.minWidth,Math.min(M-bc-T,V.maxWidth));
bk=bf.computeHorizontalAlignOffset(P.getAlignX()||this.getAlignX(),bb,M,bc,T);
if(i>0){if(bi){top+=X+be;
this._renderSeparator(bi,{top:top,left:0,height:O,width:M});
top+=O+be+P.getMarginTop();
}else{top+=bf.collapseMargins(be,X,P.getMarginTop());
}}P.renderLayout(bk,top,bb,Q);
top+=Q;
X=P.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__el();
}var u=qx.ui.layout.Util;
var C=this.__ek;
var q=0,t=0,s=0;
var o=0,v=0;
var z,p,B;
for(var i=0,l=C.length;i<l;i+=1){z=C[i];
p=z.getSizeHint();
t+=p.height;
var y=this.__ei[i];
var r=this.__eh[i];

if(y){q+=p.minHeight;
}else if(r){s=Math.max(s,Math.round(p.minHeight/r));
}else{q+=p.height;
}B=z.getMarginLeft()+z.getMarginRight();
if((p.width+B)>v){v=p.width+B;
}if((p.minWidth+B)>o){o=p.minWidth+B;
}}q+=s;
var x=this.getSpacing();
var A=this.getSeparator();

if(A){var w=u.computeVerticalSeparatorGaps(C,x,A);
}else{var w=u.computeVerticalGaps(C,x,true);
}return {minHeight:q+w,height:t+w,minWidth:o,width:v};
}},destruct:function(){this.__eh=this.__ei=this.__ek=null;
}});
})();
(function(){var V="left",U="top",T="_applyLayoutChange",S="hAlign",R="flex",Q="vAlign",P="Integer",O="minWidth",N="width",M="minHeight",J="qx.ui.layout.Grid",L="height",K="maxHeight",I="maxWidth";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,construct:function(dw,dx){qx.ui.layout.Abstract.call(this);
this.__hf=[];
this.__hg=[];

if(dw){this.setSpacingX(dw);
}
if(dx){this.setSpacingY(dx);
}},properties:{spacingX:{check:P,init:0,apply:T},spacingY:{check:P,init:0,apply:T}},members:{__hh:null,__hf:null,__hg:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,verifyLayoutProperty:null,__ho:function(){var p=[];
var o=[];
var q=[];
var m=-1;
var k=-1;
var s=this._getLayoutChildren();

for(var i=0,l=s.length;i<l;i++){var n=s[i];
var r=n.getLayoutProperties();
var t=r.row;
var h=r.column;
r.colSpan=r.colSpan||1;
r.rowSpan=r.rowSpan||1;
if(t==null||h==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+n+"' must be defined!");
}
if(p[t]&&p[t][h]){throw new Error("Cannot add widget '"+n+"'!. "+"There is already a widget '"+p[t][h]+"' in this cell ("+t+", "+h+")");
}
for(var x=h;x<h+r.colSpan;x++){for(var y=t;y<t+r.rowSpan;y++){if(p[y]==undefined){p[y]=[];
}p[y][x]=n;
k=Math.max(k,x);
m=Math.max(m,y);
}}
if(r.rowSpan>1){q.push(n);
}
if(r.colSpan>1){o.push(n);
}}for(var y=0;y<=m;y++){if(p[y]==undefined){p[y]=[];
}}this.__hh=p;
this.__hi=o;
this.__hj=q;
this.__hk=m;
this.__hl=k;
this.__hm=null;
this.__hn=null;
delete this._invalidChildrenCache;
},_setRowData:function(dQ,dR,dS){var dT=this.__hf[dQ];

if(!dT){this.__hf[dQ]={};
this.__hf[dQ][dR]=dS;
}else{dT[dR]=dS;
}},_setColumnData:function(be,bf,bg){var bh=this.__hg[be];

if(!bh){this.__hg[be]={};
this.__hg[be][bf]=bg;
}else{bh[bf]=bg;
}},setSpacing:function(dP){this.setSpacingY(dP);
this.setSpacingX(dP);
return this;
},setColumnAlign:function(F,G,H){{};
this._setColumnData(F,S,G);
this._setColumnData(F,Q,H);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bi){var bj=this.__hg[bi]||{};
return {vAlign:bj.vAlign||U,hAlign:bj.hAlign||V};
},setRowAlign:function(bb,bc,bd){{};
this._setRowData(bb,S,bc);
this._setRowData(bb,Q,bd);
this._applyLayoutChange();
return this;
},getRowAlign:function(dN){var dO=this.__hf[dN]||{};
return {vAlign:dO.vAlign||U,hAlign:dO.hAlign||V};
},getCellWidget:function(bP,bQ){if(this._invalidChildrenCache){this.__ho();
}var bP=this.__hh[bP]||{};
return bP[bQ]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hk+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hl+1;
},getCellAlign:function(cU,cV){var dc=U;
var da=V;
var db=this.__hf[cU];
var cX=this.__hg[cV];
var cW=this.__hh[cU][cV];

if(cW){var cY={vAlign:cW.getAlignY(),hAlign:cW.getAlignX()};
}else{cY={};
}if(cY.vAlign){dc=cY.vAlign;
}else if(db&&db.vAlign){dc=db.vAlign;
}else if(cX&&cX.vAlign){dc=cX.vAlign;
}if(cY.hAlign){da=cY.hAlign;
}else if(cX&&cX.hAlign){da=cX.hAlign;
}else if(db&&db.hAlign){da=db.hAlign;
}return {vAlign:dc,hAlign:da};
},setColumnFlex:function(Y,ba){this._setColumnData(Y,R,ba);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dU){var dV=this.__hg[dU]||{};
return dV.flex!==undefined?dV.flex:0;
},setRowFlex:function(bT,bU){this._setRowData(bT,R,bU);
this._applyLayoutChange();
return this;
},getRowFlex:function(cR){var cS=this.__hf[cR]||{};
var cT=cS.flex!==undefined?cS.flex:0;
return cT;
},setColumnMaxWidth:function(u,v){this._setColumnData(u,I,v);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dY){var ea=this.__hg[dY]||{};
return ea.maxWidth!==undefined?ea.maxWidth:Infinity;
},setColumnWidth:function(bR,bS){this._setColumnData(bR,N,bS);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dy){var dz=this.__hg[dy]||{};
return dz.width!==undefined?dz.width:null;
},setColumnMinWidth:function(bJ,bK){this._setColumnData(bJ,O,bK);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bL){var bM=this.__hg[bL]||{};
return bM.minWidth||0;
},setRowMaxHeight:function(dd,de){this._setRowData(dd,K,de);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dA){var dB=this.__hf[dA]||{};
return dB.maxHeight||Infinity;
},setRowHeight:function(bV,bW){this._setRowData(bV,L,bW);
this._applyLayoutChange();
return this;
},getRowHeight:function(W){var X=this.__hf[W]||{};
return X.height!==undefined?X.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,M,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dW){var dX=this.__hf[dW]||{};
return dX.minHeight||0;
},__hp:function(df){var dj=df.getSizeHint();
var di=df.getMarginLeft()+df.getMarginRight();
var dh=df.getMarginTop()+df.getMarginBottom();
var dg={height:dj.height+dh,width:dj.width+di,minHeight:dj.minHeight+dh,minWidth:dj.minWidth+di,maxHeight:dj.maxHeight+dh,maxWidth:dj.maxWidth+di};
return dg;
},_fixHeightsRowSpan:function(cD){var cO=this.getSpacingY();

for(var i=0,l=this.__hj.length;i<l;i++){var cG=this.__hj[i];
var cI=this.__hp(cG);
var cJ=cG.getLayoutProperties();
var cF=cJ.row;
var cM=cO*(cJ.rowSpan-1);
var cE=cM;
var cL={};

for(var j=0;j<cJ.rowSpan;j++){var cQ=cJ.row+j;
var cH=cD[cQ];
var cP=this.getRowFlex(cQ);

if(cP>0){cL[cQ]={min:cH.minHeight,value:cH.height,max:cH.maxHeight,flex:cP};
}cM+=cH.height;
cE+=cH.minHeight;
}if(cM<cI.height){var cN=qx.ui.layout.Util.computeFlexOffsets(cL,cI.height,cM);

for(var j=0;j<cJ.rowSpan;j++){var cK=cN[cF+j]?cN[cF+j].offset:0;
cD[cF+j].height+=cK;
}}if(cE<cI.minHeight){var cN=qx.ui.layout.Util.computeFlexOffsets(cL,cI.minHeight,cE);

for(var j=0;j<cJ.rowSpan;j++){var cK=cN[cF+j]?cN[cF+j].offset:0;
cD[cF+j].minHeight+=cK;
}}}},_fixWidthsColSpan:function(bv){var bz=this.getSpacingX();

for(var i=0,l=this.__hi.length;i<l;i++){var bw=this.__hi[i];
var by=this.__hp(bw);
var bB=bw.getLayoutProperties();
var bx=bB.column;
var bH=bz*(bB.colSpan-1);
var bA=bH;
var bC={};
var bE;

for(var j=0;j<bB.colSpan;j++){var bI=bB.column+j;
var bG=bv[bI];
var bF=this.getColumnFlex(bI);
if(bF>0){bC[bI]={min:bG.minWidth,value:bG.width,max:bG.maxWidth,flex:bF};
}bH+=bG.width;
bA+=bG.minWidth;
}if(bH<by.width){var bD=qx.ui.layout.Util.computeFlexOffsets(bC,by.width,bH);

for(var j=0;j<bB.colSpan;j++){bE=bD[bx+j]?bD[bx+j].offset:0;
bv[bx+j].width+=bE;
}}if(bA<by.minWidth){var bD=qx.ui.layout.Util.computeFlexOffsets(bC,by.minWidth,bA);

for(var j=0;j<bB.colSpan;j++){bE=bD[bx+j]?bD[bx+j].offset:0;
bv[bx+j].minWidth+=bE;
}}}},_getRowHeights:function(){if(this.__hm!=null){return this.__hm;
}var bt=[];
var bm=this.__hk;
var bl=this.__hl;

for(var bu=0;bu<=bm;bu++){var bn=0;
var bp=0;
var bo=0;

for(var bs=0;bs<=bl;bs++){var bk=this.__hh[bu][bs];

if(!bk){continue;
}var bq=bk.getLayoutProperties().rowSpan||0;

if(bq>1){continue;
}var br=this.__hp(bk);

if(this.getRowFlex(bu)>0){bn=Math.max(bn,br.minHeight);
}else{bn=Math.max(bn,br.height);
}bp=Math.max(bp,br.height);
}var bn=Math.max(bn,this.getRowMinHeight(bu));
var bo=this.getRowMaxHeight(bu);

if(this.getRowHeight(bu)!==null){var bp=this.getRowHeight(bu);
}else{var bp=Math.max(bn,Math.min(bp,bo));
}bt[bu]={minHeight:bn,height:bp,maxHeight:bo};
}
if(this.__hj.length>0){this._fixHeightsRowSpan(bt);
}this.__hm=bt;
return bt;
},_getColWidths:function(){if(this.__hn!=null){return this.__hn;
}var dG=[];
var dD=this.__hl;
var dF=this.__hk;

for(var dL=0;dL<=dD;dL++){var dJ=0;
var dI=0;
var dE=Infinity;

for(var dM=0;dM<=dF;dM++){var dC=this.__hh[dM][dL];

if(!dC){continue;
}var dH=dC.getLayoutProperties().colSpan||0;

if(dH>1){continue;
}var dK=this.__hp(dC);

if(this.getColumnFlex(dL)>0){dI=Math.max(dI,dK.minWidth);
}else{dI=Math.max(dI,dK.width);
}dJ=Math.max(dJ,dK.width);
}var dI=Math.max(dI,this.getColumnMinWidth(dL));
var dE=this.getColumnMaxWidth(dL);

if(this.getColumnWidth(dL)!==null){var dJ=this.getColumnWidth(dL);
}else{var dJ=Math.max(dI,Math.min(dJ,dE));
}dG[dL]={minWidth:dI,width:dJ,maxWidth:dE};
}
if(this.__hi.length>0){this._fixWidthsColSpan(dG);
}this.__hn=dG;
return dG;
},_getColumnFlexOffsets:function(w){var z=this.getSizeHint();
var D=w-z.width;

if(D==0){return {};
}var B=this._getColWidths();
var A={};

for(var i=0,l=B.length;i<l;i++){var E=B[i];
var C=this.getColumnFlex(i);

if((C<=0)||(E.width==E.maxWidth&&D>0)||(E.width==E.minWidth&&D<0)){continue;
}A[i]={min:E.minWidth,value:E.width,max:E.maxWidth,flex:C};
}return qx.ui.layout.Util.computeFlexOffsets(A,w,z.width);
},_getRowFlexOffsets:function(a){var b=this.getSizeHint();
var e=a-b.height;

if(e==0){return {};
}var f=this._getRowHeights();
var c={};

for(var i=0,l=f.length;i<l;i++){var g=f[i];
var d=this.getRowFlex(i);

if((d<=0)||(g.height==g.maxHeight&&e>0)||(g.height==g.minHeight&&e<0)){continue;
}c[i]={min:g.minHeight,value:g.height,max:g.maxHeight,flex:d};
}return qx.ui.layout.Util.computeFlexOffsets(c,a,b.height);
},renderLayout:function(bX,bY){if(this._invalidChildrenCache){this.__ho();
}var cn=qx.ui.layout.Util;
var cb=this.getSpacingX();
var ch=this.getSpacingY();
var cs=this._getColWidths();
var cr=this._getColumnFlexOffsets(bX);
var cc=[];
var cu=this.__hl;
var ca=this.__hk;
var ct;

for(var cv=0;cv<=cu;cv++){ct=cr[cv]?cr[cv].offset:0;
cc[cv]=cs[cv].width+ct;
}var ck=this._getRowHeights();
var cm=this._getRowFlexOffsets(bY);
var cB=[];

for(var ci=0;ci<=ca;ci++){ct=cm[ci]?cm[ci].offset:0;
cB[ci]=ck[ci].height+ct;
}var cC=0;

for(var cv=0;cv<=cu;cv++){var top=0;

for(var ci=0;ci<=ca;ci++){var cp=this.__hh[ci][cv];
if(!cp){top+=cB[ci]+ch;
continue;
}var cd=cp.getLayoutProperties();
if(cd.row!==ci||cd.column!==cv){top+=cB[ci]+ch;
continue;
}var cA=cb*(cd.colSpan-1);

for(var i=0;i<cd.colSpan;i++){cA+=cc[cv+i];
}var cq=ch*(cd.rowSpan-1);

for(var i=0;i<cd.rowSpan;i++){cq+=cB[ci+i];
}var ce=cp.getSizeHint();
var cy=cp.getMarginTop();
var co=cp.getMarginLeft();
var cl=cp.getMarginBottom();
var cg=cp.getMarginRight();
var cj=Math.max(ce.minWidth,Math.min(cA-co-cg,ce.maxWidth));
var cz=Math.max(ce.minHeight,Math.min(cq-cy-cl,ce.maxHeight));
var cw=this.getCellAlign(ci,cv);
var cx=cC+cn.computeHorizontalAlignOffset(cw.hAlign,cj,cA,co,cg);
var cf=top+cn.computeVerticalAlignOffset(cw.vAlign,cz,cq,cy,cl);
cp.renderLayout(cx,cf,cj,cz);
top+=cB[ci]+ch;
}cC+=cc[cv]+cb;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hn=null;
this.__hm=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ho();
}var dp=this._getColWidths();
var dr=0,ds=0;

for(var i=0,l=dp.length;i<l;i++){var dt=dp[i];

if(this.getColumnFlex(i)>0){dr+=dt.minWidth;
}else{dr+=dt.width;
}ds+=dt.width;
}var du=this._getRowHeights();
var dm=0,dq=0;

for(var i=0,l=du.length;i<l;i++){var dv=du[i];

if(this.getRowFlex(i)>0){dm+=dv.minHeight;
}else{dm+=dv.height;
}dq+=dv.height;
}var dl=this.getSpacingX()*(dp.length-1);
var dk=this.getSpacingY()*(du.length-1);
var dn={minWidth:dr+dl,width:ds+dl,minHeight:dm+dk,height:dq+dk};
return dn;
}},destruct:function(){this.__hh=this.__hf=this.__hg=this.__hi=this.__hj=this.__hn=this.__hm=null;
}});
})();
(function(){var G="resize",F="scrollY",E="update",D="scrollX",C="_applyScrollX",B="_applyScrollY",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",z="appear",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",v="qx.event.type.Event",t="qx.ui.core.scroll.ScrollPane",u="scroll";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(G,this._onUpdate);
var n=this.getContentElement();
n.addListener(u,this._onScroll,this);
n.addListener(z,this._onAppear,this);
},events:{update:v},properties:{scrollX:{check:A,apply:C,event:D,init:0},scrollY:{check:w,apply:B,event:F,init:0}},members:{add:function(h){var i=this._getChildren()[0];

if(i){this._remove(i);
i.removeListener(G,this._onUpdate,this);
}
if(h){this._add(h);
h.addListener(G,this._onUpdate,this);
}},remove:function(g){if(g){this._remove(g);
g.removeListener(G,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(E);
},_onScroll:function(e){var j=this.getContentElement();
this.setScrollX(j.getScrollX());
this.setScrollY(j.getScrollY());
},_onAppear:function(e){var K=this.getContentElement();
var H=this.getScrollX();
var I=K.getScrollX();

if(H!=I){K.scrollToX(H);
}var L=this.getScrollY();
var J=K.getScrollY();

if(L!=J){K.scrollToY(L);
}},getItemTop:function(o){var top=0;

do{top+=o.getBounds().top;
o=o.getLayoutParent();
}while(o&&o!==this);
return top;
},getItemBottom:function(k){return this.getItemTop(k)+k.getBounds().height;
},getItemLeft:function(a){var b=0;
var parent;

do{b+=a.getBounds().left;
parent=a.getLayoutParent();

if(parent){b+=parent.getInsets().left;
}a=parent;
}while(a&&a!==this);
return b;
},getItemRight:function(f){return this.getItemLeft(f)+f.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.width-d.width);
}return 0;
},getScrollMaxY:function(){var m=this.getInnerSize();
var l=this.getScrollSize();

if(m&&l){return Math.max(0,l.height-m.height);
}return 0;
},scrollToX:function(r){var s=this.getScrollMaxX();

if(r<0){r=0;
}else if(r>s){r=s;
}this.setScrollX(r);
},scrollToY:function(p){var q=this.getScrollMaxY();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollY(p);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(N){this.getContentElement().scrollToX(N);
},_applyScrollY:function(M){this.getContentElement().scrollToY(M);
}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__la,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__la:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var o="change",n="add",m="remove",l="order",k="",j="qx.data.Array",h="?",g="changeBubble",f="qx.event.type.Event",e="number",c="changeLength",d="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(b){qx.core.Object.call(this);
if(b==undefined){this.__kM=[];
}else if(arguments.length>1){this.__kM=[];

for(var i=0;i<arguments.length;i++){this.__kM.push(arguments[i]);
}}else if(typeof b==e){this.__kM=new Array(b);
}else if(b instanceof Array){this.__kM=qx.lang.Array.clone(b);
}else{this.__kM=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(this.__kM[i],null,i);
}this.__kN();
},events:{"change":d,"changeLength":f},members:{__kM:null,concat:function(bd){if(bd){var be=this.__kM.concat(bd);
}else{var be=this.__kM.concat();
}return new qx.data.Array(be);
},join:function(D){return this.__kM.join(D);
},pop:function(){var y=this.__kM.pop();
this.__kN();
this._applyEventPropagation(null,y,this.length-1);
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[y]},null);
return y;
},push:function(B){for(var i=0;i<arguments.length;i++){this.__kM.push(arguments[i]);
this.__kN();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:n,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kM.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:null},null);
},shift:function(){var J=this.__kM.shift();
this.__kN();
this._applyEventPropagation(null,J,this.length-1);
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[J]},null);
return J;
},slice:function(M,N){return new qx.data.Array(this.__kM.slice(M,N));
},splice:function(T,U,V){var bc=this.__kM.length;
var Y=this.__kM.splice.apply(this.__kM,arguments);
if(this.__kM.length!=bc){this.__kN();
}var ba=U>0;
var W=arguments.length>2;
var X=null;

if(ba||W){if(this.__kM.length>bc){var bb=n;
}else if(this.__kM.length<bc){var bb=m;
X=Y;
}else{var bb=l;
}this.fireDataEvent(o,{start:T,end:this.length-1,type:bb,items:X},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,T+i);
}this.fireDataEvent(g,{value:this,name:h,old:Y});
for(var i=0;i<Y.length;i++){this._applyEventPropagation(null,Y[i],i);
}return (new qx.data.Array(Y));
},sort:function(C){this.__kM.sort.apply(this.__kM,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:null},null);
},unshift:function(r){for(var i=arguments.length-1;i>=0;i--){this.__kM.unshift(arguments[i]);
this.__kN();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(o,{start:0,end:this.length-1,type:n,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kM;
},getItem:function(I){return this.__kM[I];
},setItem:function(Q,R){var S=this.__kM[Q];
this.__kM[Q]=R;
this._applyEventPropagation(R,S,Q);
if(this.length!=this.__kM.length){this.__kN();
}this.fireDataEvent(o,{start:Q,end:Q,type:n,items:[R]},null);
},getLength:function(){return this.length;
},indexOf:function(O){return this.__kM.indexOf(O);
},toString:function(){if(this.__kM!=null){return this.__kM.toString();
}return k;
},contains:function(bi){return this.__kM.indexOf(bi)!==-1;
},copy:function(){return this.concat();
},insertAt:function(p,q){this.splice(p,0,q);
},insertBefore:function(s,t){var u=this.indexOf(s);

if(u==-1){this.push(t);
}else{this.splice(u,0,t);
}},insertAfter:function(v,w){var x=this.indexOf(v);

if(x==-1||x==(this.length-1)){this.push(w);
}else{this.splice(x+1,0,w);
}},removeAt:function(bh){return this.splice(bh,1)[0];
},removeAll:function(){for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(null,this.__kM[i],i);
}var H=this.getLength();
var G=this.__kM.concat();
this.__kM.length=0;
this.__kN();
this.fireDataEvent(o,{start:0,end:H-1,type:m,items:G},null);
},append:function(E){if(E instanceof qx.data.Array){E=E.toArray();
}{};
for(var i=0;i<E.length;i++){this._applyEventPropagation(E[i],null,this.__kM.length+i);
}Array.prototype.push.apply(this.__kM,E);
var F=this.length;
this.__kN();
this.fireDataEvent(o,{start:F,end:this.length-1,type:n,items:E},null);
},remove:function(z){var A=this.indexOf(z);

if(A!=-1){this.splice(A,1);
return z;
}},equals:function(a){if(this.length!==a.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==a.getItem(i)){return false;
}}return true;
},sum:function(){var bg=0;

for(var i=0;i<this.length;i++){bg+=this.getItem(i);
}return bg;
},max:function(){var P=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>P){P=this.getItem(i);
}}return P===undefined?null:P;
},min:function(){var bf=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bf){bf=this.getItem(i);
}}return bf===undefined?null:bf;
},forEach:function(K,L){for(var i=0;i<this.__kM.length;i++){K.call(L,this.__kM[i]);
}},__kN:function(){this.length=this.__kM.length;
this.fireEvent(c,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(null,this.__kM[i],i);
}this.__kM=null;
}});
})();
(function(){var f="changeSelection",e="change",d="qx.data.Array",c="qx.data.controller.MSelection",b="_applySelection",a="target";
qx.Mixin.define(c,{construct:function(){if(!qx.Class.hasProperty(this.constructor,a)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:d,event:f,apply:b,init:null}},members:{_modifingSelection:0,__mx:null,__my:null,_applySelection:function(k,l){if(this.__my!=undefined&&l!=undefined){l.removeListenerById(this.__my);
}this.__my=k.addListener(e,this.__mz,this);
},__mz:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this.getTarget()==null){return;
}if(!this.__mA()&&!this.__mB()){return;
}if(this._inSelectionModification()){return;
}var q=this.getTarget().getSelection();
var p=this.getSelection();

if(p==null){p=new qx.data.Array();
this.setSelection(p);
}if(q.length>0){p.toArray().splice(0,p.getLength());
}else{p.splice(0,this.getSelection().getLength());
}for(var i=0;i<q.length;i++){var o=q[i].getModel();

if(i+1==q.length){p.push(o);
}else{p.toArray().push(o);
}}this.fireDataEvent(f,this.getSelection());
},_addChangeTargetListener:function(g,h){if(this.__mx!=undefined&&h!=undefined){h.removeListenerById(this.__mx);
}
if(g!=null){if(this.__mA()||this.__mB()){this.__mx=g.addListener(f,this._changeTargetSelection,this);
}}},_updateSelection:function(){this._startSelectionModification();
if(this.__mA()){var v=[];
for(var i=0;i<this.getSelection().length;i++){var u=this.getSelection().getItem(i);
var w=this.__mD(u);

if(w!=null){v.push(w);
}}this.getTarget().setSelection(v);
v=this.getTarget().getSelection();
var x=[];

for(var i=0;i<v.length;i++){x[i]=v[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(x,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__mB()){this.__mC(this.getSelection().getItem(this.getSelection().length-1));
this.getSelection().splice(0,this.getSelection().getLength()-1);
}this._endSelectionModification();
},__mA:function(){var j=this.getTarget().constructor;
return qx.Class.implementsInterface(j,qx.ui.core.IMultiSelection);
},__mB:function(){var r=this.getTarget().constructor;
return qx.Class.implementsInterface(r,qx.ui.core.ISingleSelection);
},__mC:function(m){var n=this.__mD(m);
if(n==null){return;
}if(this.__mA()){this.getTarget().addToSelection(n);
}else if(this.__mB()){this.getTarget().setSelection([n]);
}},__mD:function(s){var t=this.getTarget().getSelectables();
for(var i=0;i<t.length;i++){if(t[i].getModel()==s){return t[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var A="change",z="ReverseBindingId",y="BindingId",x="",w="]",v="model[",u="String",t=".",s="changeModel",r="_applyLabelOptions",N="_applyLabelPath",M="changeTarget",L="changeLength",K="_applyModel",J="icon",I="qx.data.controller.List",H="_applyIconPath",G="_applyDelegate",F="changeDelegate",E="_applyTarget",C="qx.data.IListData",D="label",B="_applyIconOptions";
qx.Class.define(I,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(ca,cb,cc){qx.core.Object.call(this);
this.__oI=[];
this.__oJ=[];
this.__oK=[];
this.__oL={};

if(cc!=null){this.setLabelPath(cc);
}
if(ca!=null){this.setModel(ca);
}
if(cb!=null){this.setTarget(cb);
}},properties:{model:{check:C,apply:K,event:s,nullable:true},target:{apply:E,event:M,nullable:true,init:null},labelPath:{check:u,apply:N,nullable:true},iconPath:{check:u,apply:H,nullable:true},labelOptions:{apply:r,nullable:true},iconOptions:{apply:B,nullable:true},delegate:{apply:G,event:F,init:null,nullable:true}},members:{__oM:null,__oN:null,__oI:null,__oL:null,__oJ:null,__oK:null,update:function(){this.__oP();
this.__oT();
this._updateSelection();
},_applyDelegate:function(Y,ba){this._setConfigureItem(Y,ba);
this._setFilter(Y,ba);
this._setCreateItem(Y,ba);
this._setBindItem(Y,ba);
},_applyIconOptions:function(bL,bM){this.__oT();
},_applyLabelOptions:function(bJ,bK){this.__oT();
},_applyIconPath:function(bT,bU){this.__oT();
},_applyLabelPath:function(n,o){this.__oT();
},_applyModel:function(bt,bu){if(bu!=undefined){if(this.__oM!=undefined){bu.removeListenerById(this.__oM);
}
if(this.__oN!=undefined){bu.removeListenerById(this.__oN);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}if(bt!=null){this.__oM=bt.addListener(L,this.__oP,this);
this.__oN=bt.addListener(A,this.__oO,this);
this.__oV();
this.__oP();
if(this.getTarget()!=null){var bx=this.getModel();
var by=this.getTarget().getChildren();

for(var i=0,l=this.__oI.length;i<l;i++){var bz=bx.getItem(this.__oW(i));
var bw=by[i];
bw.setModel(bz);
}}this._changeTargetSelection();
}else{var bv=this.getTarget();
if(bv!=null){var length=bv.getChildren().length;

for(var i=0;i<length;i++){this.__oS();
}}}},_applyTarget:function(bV,bW){this._addChangeTargetListener(bV,bW);
if(bW!=undefined){bW.removeAll();
this.removeAllBindings();
}
if(bV!=null){if(this.getModel()!=null){for(var i=0;i<this.__oI.length;i++){this.__oR(this.__oW(i));
}}}},__oO:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}qx.ui.core.queue.Widget.add(this);
if(this.__oI.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){this._updateSelection();
},__oP:function(){if(this.getTarget()==null){return;
}this.__oV();
var U=this.__oI.length;
var T=this.getTarget().getChildren().length;
if(U>T){for(var j=T;j<U;j++){this.__oR(this.__oW(j));
}}else if(U<T){for(var j=T;j>U;j--){this.__oS();
}}},__oQ:function(){var S=this.getModel();
if(S!=null){S.removeListenerById(this.__oN);
this.__oN=S.addListener(A,this.__oO,this);
}},_createItem:function(){var bI=this.getDelegate();
if(bI!=null&&bI.createItem!=null){var bH=bI.createItem();
}else{var bH=new qx.ui.form.ListItem();
}if(bI!=null&&bI.configureItem!=null){bI.configureItem(bH);
}return bH;
},__oR:function(bX){var bY=this._createItem();
bY.setModel(this.getModel().getItem(bX)||null);
this._bindListItem(bY,bX);
this.getTarget().add(bY);
},__oS:function(){this._startSelectionModification();
var bF=this.getTarget().getChildren();
var bE=bF.length-1;
var bG=bF[bE];
this._removeBindingsFrom(bG);
this.getTarget().removeAt(bE);
bG.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var bq=[];
var br=this.getTarget();

if(br!=null){var bs=br.getChildren();

for(var i=0;i<bs.length;i++){bq.push(bs[i].getModel());
}}return new qx.data.Array(bq);
},_bindListItem:function(a,b){var c=this.getDelegate();
if(c!=null&&c.bindItem!=null){c.bindItem(this,a,b);
}else{this.bindDefaultProperties(a,b);
}},bindDefaultProperties:function(bo,bp){this.bindProperty(this.getLabelPath(),D,this.getLabelOptions(),bo,bp);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),J,this.getIconOptions(),bo,bp);
}},bindProperty:function(d,e,f,g,h){g.setModel(this.getModel().getItem(h));
if(f!=null){var f=qx.lang.Object.clone(f);
this.__oL[e]=f.onUpdate;
delete f.onUpdate;
}else{f={};
this.__oL[e]=null;
}f.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,h);
var k=v+h+w;

if(d!=null&&d!=x){k+=t+d;
}var m=this.bind(k,g,e,f);
g.setUserData(e+y,m);
if(!qx.lang.Array.contains(this.__oJ,e)){this.__oJ.push(e);
}},bindPropertyReverse:function(bh,bi,bj,bk,bl){var bm=v+bl+w;

if(bh!=null&&bh!=x){bm+=t+bh;
}var bn=bk.bind(bi,this,bm,bj);
bk.setUserData(bh+z,bn);
if(!qx.lang.Array.contains(this.__oK,bh)){this.__oK.push(bh);
}},_onBindingSet:function(bA,bB,bC){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__oJ.length;i++){if(this.__oL[this.__oJ[i]]!=null){this.__oL[this.__oJ[i]]();
}}var bD=this.getModel().getItem(bA);
bC.setModel(bD==undefined?null:bD);
},_removeBindingsFrom:function(p){for(var i=0;i<this.__oJ.length;i++){var q=p.getUserData(this.__oJ[i]+y);

if(q!=null){this.removeBinding(q);
}}for(var i=0;i<this.__oK.length;i++){var q=p.getUserData(this.__oK[i]+z);

if(q!=null){p.removeBinding(q);
}}},__oT:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var X=this.getTarget().getChildren();
for(var i=0;i<X.length;i++){this._removeBindingsFrom(X[i]);
this._bindListItem(X[i],this.__oW(i));
}this.__oQ();
},_setConfigureItem:function(be,bf){if(be!=null&&be.configureItem!=null&&this.getTarget()!=null){var bg=this.getTarget().getChildren();

for(var i=0;i<bg.length;i++){be.configureItem(bg[i]);
}}},_setBindItem:function(V,W){if(V!=null&&V.bindItem!=null){if(W!=null&&W.bindItem!=null&&V.bindItem==W.bindItem){return;
}this.__oT();
}},_setCreateItem:function(bb,bc){if(this.getTarget()==null||this.getModel()==null||bb==null||bb.createItem==null){return;
}this._startSelectionModification();
var bd=this.getTarget().getChildren();

for(var i=0,l=bd.length;i<l;i++){this._removeBindingsFrom(bd[i]);
}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(bN,bO){if((bN==null||bN.filter==null)&&(bO!=null&&bO.filter!=null)){this.__oU();
}if(this.getTarget()==null||this.getModel()==null||bN==null||bN.filter==null){return;
}this._startSelectionModification();
var bS=this.getTarget().getChildren();

for(var i=0,l=bS.length;i<l;i++){this._removeBindingsFrom(bS[i]);
}var bQ=this.__oI;
this.__oV();
if(bQ.length>this.__oI.length){for(var j=bQ.length;j>this.__oI.length;j--){this.getTarget().removeAt(j-1);
}}else if(bQ.length<this.__oI.length){for(var j=bQ.length;j<this.__oI.length;j++){var bR=this._createItem();
this.getTarget().add(bR);
}}var bP=this.getTarget().getChildren();

for(var i=0;i<bP.length;i++){this._bindListItem(bP[i],this.__oW(i));
}this.__oQ();
this._endSelectionModification();
this._updateSelection();
},__oU:function(){this.__oV();
this.__oP();
this.__oT();
qx.ui.core.queue.Widget.add(this);
},__oV:function(){var Q=this.getModel();

if(Q==null){return;
}var R=this.getDelegate();

if(R!=null){var P=R.filter;
}this.__oI=[];

for(var i=0;i<Q.getLength();i++){if(P==null||P(Q.getItem(i))){this.__oI.push(i);
}}},__oW:function(O){return this.__oI[O];
}},destruct:function(){this.__oI=this.__oL=this.__oJ=null;
this.__oK=null;
}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){qx.ui.basic.Atom.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var u="configured",t="completed",s="changeState",r="changeModel",q="qx.data.store.Json",p="GET",o="_marshaler",n="sending",m="application/json",l="changeUrl",e="failed",k="loaded",h="timeout",d="__mc",c="queued",g="String",f="aborted",i="_applyUrl",b="receiving",j="qx.event.type.Data";
qx.Class.define(q,{extend:qx.core.Object,construct:function(x,y){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(y);
this._delegate=y;

if(x!=null){this.setUrl(x);
}},events:{"loaded":j},properties:{model:{nullable:true,event:r},state:{check:[u,c,n,b,t,f,h,e],init:u,event:s},url:{check:g,apply:i,event:l}},members:{__mc:null,_delegate:null,_applyUrl:function(D,E){if(D!=null){this._createRequest(D);
}},_createRequest:function(v){this.__mc=new qx.io.remote.Request(v,p,m);
var w=this._delegate;

if(w&&qx.lang.Type.isFunction(w.configureRequest)){this._delegate.configureRequest(this.__mc);
}this.__mc.addListener(t,this.__md,this);
this.__mc.addListener(s,function(C){this.setState(C.getData());
},this);
this.__mc.send();
},__md:function(z){var B=z.getContent();
var A=this._delegate;

if(A&&qx.lang.Type.isFunction(A.manipulateData)){B=this._delegate.manipulateData(B);
}this._marshaler.toClass(B,true);
this.setModel(this._marshaler.toModel(B));
this.fireDataEvent(k,this.getModel());
},reload:function(){var a=this.getUrl();

if(a!=null){this._createRequest(a);
}}},destruct:function(){this._disposeObjects(o,d);
this._delegate=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var g="qx.data.model.",f="",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(h){qx.core.Object.call(this);
this.__lD=h;
},statics:{__lE:null,createModel:function(y,z){if(this.__lE===null){this.__lE=new qx.data.marshal.Json();
}this.__lE.toClass(y,z);
return this.__lE.toModel(y);
}},members:{__lD:null,__lF:function(j){var k=[];

for(var l in j){k.push(l);
}return k.sort().join(e);
},toClass:function(m,n){if(qx.lang.Type.isNumber(m)||qx.lang.Type.isString(m)||qx.lang.Type.isBoolean(m)||m==null||m instanceof qx.core.Object){return;
}if(qx.lang.Type.isArray(m)){for(var i=0;i<m.length;i++){this.toClass(m[i],n);
}return ;
}var p=this.__lF(m);
if(this.__lD&&this.__lD.getModelClass&&this.__lD.getModelClass(p)!=null){return;
}for(var t in m){this.toClass(m[t],n);
}if(qx.Class.isDefined(g+p)){return;
}var u={};

for(var t in m){t=t.replace(/-/g,f);
u[t]={};
u[t].nullable=true;
u[t].event=d+qx.lang.String.firstUp(t);

if(n){u[t].apply=a;
}}if(this.__lD&&this.__lD.getModelSuperClass){var s=this.__lD.getModelSuperClass(p)||qx.core.Object;
}else{var s=qx.core.Object;
}var q=[];

if(this.__lD&&this.__lD.getModelMixins){var r=this.__lD.getModelMixins(p);
if(!qx.lang.Type.isArray(r)){if(r!=null){q=[r];
}}}if(n){q.push(qx.data.marshal.MEventBubbling);
}var o={extend:s,include:q,properties:u};
qx.Class.define(g+p,o);
},__lG:function(v){var w;
if(this.__lD&&this.__lD.getModelClass){w=this.__lD.getModelClass(v);
}
if(w!=null){return (new w());
}else{var x=qx.Class.getByName(g+v);
return (new x());
}},toModel:function(A){if(qx.lang.Type.isNumber(A)||qx.lang.Type.isString(A)||qx.lang.Type.isBoolean(A)||qx.lang.Type.isDate(A)||A==null||A instanceof qx.core.Object){return A;
}else if(qx.lang.Type.isArray(A)){var E=new qx.data.Array();

for(var i=0;i<A.length;i++){E.push(this.toModel(A[i]));
}return E;
}else if(qx.lang.Type.isObject(A)){var B=this.__lF(A);
var F=this.__lG(B);
for(var D in A){var C=D.replace(/-/g,f);
F[b+qx.lang.String.firstUp(C)](this.toModel(A[D]));
}return F;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__lD=null;
}});
})();
(function(){var D="qx.event.type.Event",C="Boolean",B="queued",A="String",z="sending",y="receiving",x="aborted",w="failed",u="nocache",t="completed",bi="qx.io.remote.Response",bh="POST",bg="configured",bf="timeout",be="GET",bd="Pragma",bc="no-url-params-on-post",bb="no-cache",ba="Cache-Control",Y="Content-Type",K="text/plain",L="application/xml",I="application/json",J="text/html",G="application/x-www-form-urlencoded",H="qx.io.remote.Exchange",E="Integer",F="X-Qooxdoo-Response-Type",M="HEAD",N="qx.io.remote.Request",Q="_applyResponseType",P="_applyState",S="text/javascript",R="changeState",U="PUT",T="_applyProhibitCaching",O="",X="_applyMethod",W="DELETE",V="boolean";
qx.Class.define(N,{extend:qx.core.Object,construct:function(bo,bp,bq){qx.core.Object.call(this);
this.__qw={};
this.__qx={};
this.__qy={};
this.__qz={};

if(bo!==undefined){this.setUrl(bo);
}
if(bp!==undefined){this.setMethod(bp);
}
if(bq!==undefined){this.setResponseType(bq);
}this.setProhibitCaching(true);
this.__qA=++qx.io.remote.Request.__qA;
},events:{"created":D,"configured":D,"sending":D,"receiving":D,"completed":bi,"aborted":D,"failed":bi,"timeout":bi},statics:{__qA:0},properties:{url:{check:A,init:O},method:{check:[be,bh,U,M,W],apply:X,init:be},asynchronous:{check:C,init:true},data:{check:A,nullable:true},username:{check:A,nullable:true},password:{check:A,nullable:true},state:{check:[bg,B,z,y,t,x,bf,w],init:bg,apply:P,event:R},responseType:{check:[K,S,I,L,J],init:K,apply:Q},timeout:{check:E,nullable:true},prohibitCaching:{check:function(v){return typeof v==V||v===bc;
},init:true,apply:T},crossDomain:{check:C,init:false},fileUpload:{check:C,init:false},transport:{check:H,nullable:true},useBasicHttpAuth:{check:C,init:false}},members:{__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case z:case y:this.error("Aborting already sent request!");
case B:this.abort();
break;
}},isConfigured:function(){return this.getState()===bg;
},isQueued:function(){return this.getState()===B;
},isSending:function(){return this.getState()===z;
},isReceiving:function(){return this.getState()===y;
},isCompleted:function(){return this.getState()===t;
},isAborted:function(){return this.getState()===x;
},isTimeout:function(){return this.getState()===bf;
},isFailed:function(){return this.getState()===w;
},__qB:function(e){var bj=e.clone();
bj.setTarget(this);
this.dispatchEvent(bj);
},_onqueued:function(e){this.setState(B);
this.__qB(e);
},_onsending:function(e){this.setState(z);
this.__qB(e);
},_onreceiving:function(e){this.setState(y);
this.__qB(e);
},_oncompleted:function(e){this.setState(t);
this.__qB(e);
this.dispose();
},_onaborted:function(e){this.setState(x);
this.__qB(e);
this.dispose();
},_ontimeout:function(e){this.setState(bf);
this.__qB(e);
this.dispose();
},_onfailed:function(e){this.setState(w);
this.__qB(e);
this.dispose();
},_applyState:function(q,r){{};
},_applyProhibitCaching:function(m,n){if(!m){this.removeParameter(u);
this.removeRequestHeader(bd);
this.removeRequestHeader(ba);
return;
}if(m!==bc||this.getMethod()!=bh){this.setParameter(u,new Date().valueOf());
}else{this.removeParameter(u);
}this.setRequestHeader(bd,bb);
this.setRequestHeader(ba,bb);
},_applyMethod:function(br,bs){if(br===bh){this.setRequestHeader(Y,G);
}else{this.removeRequestHeader(Y);
}var bt=this.getProhibitCaching();
this._applyProhibitCaching(bt,bt);
},_applyResponseType:function(d,f){this.setRequestHeader(F,d);
},setRequestHeader:function(b,c){this.__qw[b]=c;
},removeRequestHeader:function(h){delete this.__qw[h];
},getRequestHeader:function(g){return this.__qw[g]||null;
},getRequestHeaders:function(){return this.__qw;
},setParameter:function(bl,bm,bn){if(bn){this.__qy[bl]=bm;
}else{this.__qx[bl]=bm;
}},removeParameter:function(i,j){if(j){delete this.__qy[i];
}else{delete this.__qx[i];
}},getParameter:function(o,p){if(p){return this.__qy[o]||null;
}else{return this.__qx[o]||null;
}},getParameters:function(a){return (a?this.__qy:this.__qx);
},setFormField:function(k,l){this.__qz[k]=l;
},removeFormField:function(s){delete this.__qz[s];
},getFormField:function(bk){return this.__qz[bk]||null;
},getFormFields:function(){return this.__qz;
},getSequenceNumber:function(){return this.__qA;
}},destruct:function(){this.setTransport(null);
this.__qw=this.__qx=this.__qy=this.__qz=null;
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var v="Integer",u="aborted",t="_onaborted",s="_on",r="_applyEnabled",q="Boolean",p="sending",o="__nJ",n="interval",m="failed",g="qx.io.remote.RequestQueue",l="timeout",k="completed",f="__nH",d="queued",j="receiving",h="singleton";
qx.Class.define(g,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nG=[];
this.__nH=[];
this.__nI=0;
this.__nJ=new qx.event.Timer(500);
this.__nJ.addListener(n,this._oninterval,this);
},properties:{enabled:{init:true,check:q,apply:r},maxTotalRequests:{check:v,nullable:true},maxConcurrentRequests:{check:v,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:v,init:5000}},members:{__nG:null,__nH:null,__nI:null,__nJ:null,getRequestQueue:function(){return this.__nG;
},getActiveQueue:function(){return this.__nH;
},_debug:function(){var N;
{};
},_check:function(){this._debug();
if(this.__nH.length==0&&this.__nG.length==0){this.__nJ.stop();
}if(!this.getEnabled()){return;
}if(this.__nG.length==0||(this.__nG[0].isAsynchronous()&&this.__nH.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__nI>=this.getMaxTotalRequests()){return;
}var G=this.__nG.shift();
var H=new qx.io.remote.Exchange(G);
this.__nI++;
this.__nH.push(H);
this._debug();
H.addListener(p,this._onsending,this);
H.addListener(j,this._onreceiving,this);
H.addListener(k,this._oncompleted,this);
H.addListener(u,this._oncompleted,this);
H.addListener(l,this._oncompleted,this);
H.addListener(m,this._oncompleted,this);
H._start=(new Date).valueOf();
H.send();
if(this.__nG.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__nH,x);
x.dispose();
this._check();
},__nK:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var c=e.getTarget().getRequest();
var b=s+e.getType();
try{if(c[b]){c[b](e);
}}catch(w){var a=qx.dev.StackTrace.getStackTraceFromError(w);
this.error("Request "+c+" handler "+b+" threw an error: "+w+"\nStack Trace:\n"+a);
try{if(c[t]){var event=qx.event.Registration.createEvent(u,qx.event.type.Event);
c[t](event);
}}catch(K){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var E=this.__nH;

if(E.length==0){this.__nJ.stop();
return;
}var z=(new Date).valueOf();
var C;
var A;
var D=this.getDefaultTimeout();
var B;
var y;

for(var i=E.length-1;i>=0;i--){C=E[i];
A=C.getRequest();

if(A.isAsynchronous()){B=A.getTimeout();
if(B==0){continue;
}
if(B==null){B=D;
}y=z-C._start;

if(y>B){this.warn("Timeout: transport "+C.toHashCode());
this.warn(y+"ms > "+B+"ms");
C.timeout();
}}}},_applyEnabled:function(I,J){if(I){this._check();
}this.__nJ.setEnabled(I);
},add:function(F){F.setState(d);

if(F.isAsynchronous()){this.__nG.push(F);
}else{this.__nG.unshift(F);
}this._check();

if(this.getEnabled()){this.__nJ.start();
}},abort:function(L){var M=L.getTransport();

if(M){M.abort();
}else if(qx.lang.Array.contains(this.__nG,L)){qx.lang.Array.remove(this.__nG,L);
}}},destruct:function(){this._disposeArray(f);
this._disposeObjects(o);
this.__nG=null;
}});
})();
(function(){var z="failed",y="sending",x="completed",w="receiving",v="aborted",u="timeout",t="qx.event.type.Event",s="Connection dropped",r="qx.io.remote.Response",q="configured",bw="=",bv="Proxy authentication required",bu="qx.io.remote.transport.Abstract",bt="MSHTML-specific HTTP status code",bs="Not available",br="Precondition failed",bq="Server error",bp="Moved temporarily",bo="&",bn="qx.io.remote.Exchange",G="Bad gateway",H="Gone",E="See other",F="Partial content",C="Server timeout",D="qx.io.remote.transport.Script",A="HTTP version not supported",B="Unauthorized",K="Multiple choices",L="Payment required",T="Not implemented",R="Request-URL too large",bc="Length required",W="_applyState",bj="changeState",bh="Not modified",N="qx.io.remote.Request",bm="Connection closed by server",bl="Moved permanently",bk="_applyImplementation",M="Method not allowed",P="Forbidden",Q="Use proxy",S="Ok",U="Not found",X="Not acceptable",be="Request time-out",bi="Bad request",I="Conflict",J="No content",O="qx.io.remote.transport.XmlHttp",bb="qx.io.remote.transport.Iframe",ba="Request entity too large",Y="Unknown status code",bg="Unsupported media type",bf="Gateway time-out",V="created",bd="Out of resources",p="undefined";
qx.Class.define(bn,{extend:qx.core.Object,construct:function(bX){qx.core.Object.call(this);
this.setRequest(bX);
bX.setTransport(this);
},events:{"sending":t,"receiving":t,"completed":r,"aborted":t,"failed":r,"timeout":r},statics:{typesOrder:[O,bb,D],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bK,bL){qx.io.remote.Exchange.typesAvailable[bL]=bK;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bT in qx.io.remote.Exchange.typesAvailable){var bS=qx.io.remote.Exchange.typesAvailable[bT];

if(bS.isSupported()){qx.io.remote.Exchange.typesSupported[bT]=bS;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(k,m,n){if(!qx.lang.Array.contains(k.handles.responseTypes,n)){return false;
}
for(var o in m){if(!k.handles[o]){return false;
}}return true;
},_nativeMap:{0:V,1:q,2:y,3:w,4:x},wasSuccessful:function(bF,bG,bH){if(bH){switch(bF){case null:case 0:return true;
case -1:return bG<4;
default:return typeof bF===p;
}}else{switch(bF){case -1:{};
return bG<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bG!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bF>206&&bF<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bF+" ("+bG+")");
return false;
}}},statusCodeToString:function(bW){switch(bW){case -1:return bs;
case 200:return S;
case 304:return bh;
case 206:return F;
case 204:return J;
case 300:return K;
case 301:return bl;
case 302:return bp;
case 303:return E;
case 305:return Q;
case 400:return bi;
case 401:return B;
case 402:return L;
case 403:return P;
case 404:return U;
case 405:return M;
case 406:return X;
case 407:return bv;
case 408:return be;
case 409:return I;
case 410:return H;
case 411:return bc;
case 412:return br;
case 413:return ba;
case 414:return R;
case 415:return bg;
case 500:return bq;
case 501:return T;
case 502:return G;
case 503:return bd;
case 504:return bf;
case 505:return A;
case 12002:return C;
case 12029:return s;
case 12030:return s;
case 12031:return s;
case 12152:return bm;
case 13030:return bt;
default:return Y;
}}},properties:{request:{check:N,nullable:true},implementation:{check:bu,nullable:true,apply:bk},state:{check:[q,y,w,x,v,u,z],init:q,event:bj,apply:W}},members:{send:function(){var bA=this.getRequest();

if(!bA){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var by=qx.io.remote.Exchange.typesOrder;
var bx=qx.io.remote.Exchange.typesSupported;
var bC=bA.getResponseType();
var bD={};

if(bA.getAsynchronous()){bD.asynchronous=true;
}else{bD.synchronous=true;
}
if(bA.getCrossDomain()){bD.crossDomain=true;
}
if(bA.getFileUpload()){bD.fileUpload=true;
}for(var bB in bA.getFormFields()){bD.programaticFormFields=true;
break;
}var bE,bz;

for(var i=0,l=by.length;i<l;i++){bE=bx[by[i]];

if(bE){if(!qx.io.remote.Exchange.canHandle(bE,bD,bC)){continue;
}
try{{};
bz=new bE;
this.setImplementation(bz);
bz.setUseBasicHttpAuth(bA.getUseBasicHttpAuth());
bz.send();
return true;
}catch(bV){this.error("Request handler throws error");
this.error(bV);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bA);
},abort:function(){var bI=this.getImplementation();

if(bI){{};
bI.abort();
}else{{};
this.setState(v);
}},timeout:function(){var bJ=this.getImplementation();

if(bJ){this.warn("Timeout: implementation "+bJ.toHashCode());
bJ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(u);
}this.__pI();
},__pI:function(){var bU=this.getRequest();

if(bU){bU.setTimeout(0);
}},_onsending:function(e){this.setState(y);
},_onreceiving:function(e){this.setState(w);
},_oncompleted:function(e){this.setState(x);
},_onabort:function(e){this.setState(v);
},_onfailed:function(e){this.setState(z);
},_ontimeout:function(e){this.setState(u);
},_applyImplementation:function(a,b){if(b){b.removeListener(y,this._onsending,this);
b.removeListener(w,this._onreceiving,this);
b.removeListener(x,this._oncompleted,this);
b.removeListener(v,this._onabort,this);
b.removeListener(u,this._ontimeout,this);
b.removeListener(z,this._onfailed,this);
}
if(a){var d=this.getRequest();
a.setUrl(d.getUrl());
a.setMethod(d.getMethod());
a.setAsynchronous(d.getAsynchronous());
a.setUsername(d.getUsername());
a.setPassword(d.getPassword());
a.setParameters(d.getParameters(false));
a.setFormFields(d.getFormFields());
a.setRequestHeaders(d.getRequestHeaders());
var h=d.getData();

if(h===null){var j=d.getParameters(true);
var g=[];

for(var c in j){var f=j[c];

if(f instanceof Array){for(var i=0;i<f.length;i++){g.push(encodeURIComponent(c)+bw+encodeURIComponent(f[i]));
}}else{g.push(encodeURIComponent(c)+bw+encodeURIComponent(f));
}}
if(g.length>0){a.setData(g.join(bo));
}}else{a.setData(h);
}a.setResponseType(d.getResponseType());
a.addListener(y,this._onsending,this);
a.addListener(w,this._onreceiving,this);
a.addListener(x,this._oncompleted,this);
a.addListener(v,this._onabort,this);
a.addListener(u,this._ontimeout,this);
a.addListener(z,this._onfailed,this);
}},_applyState:function(bN,bO){{};

switch(bN){case y:this.fireEvent(y);
break;
case w:this.fireEvent(w);
break;
case x:case v:case u:case z:var bQ=this.getImplementation();

if(!bQ){break;
}this.__pI();

if(this.hasListener(bN)){var bR=qx.event.Registration.createEvent(bN,qx.io.remote.Response);

if(bN==x){var bP=bQ.getResponseContent();
bR.setContent(bP);
if(bP===null){{};
bN=z;
}}else if(bN==z){bR.setContent(bQ.getResponseContent());
}bR.setStatusCode(bQ.getStatusCode());
bR.setResponseHeaders(bQ.getResponseHeaders());
this.dispatchEvent(bR);
}this.setImplementation(null);
bQ.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bM=this.getImplementation();

if(bM){this.setImplementation(null);
bM.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(l);
},timeout:function(){{};
this.setState(n);
},failed:function(){{};
this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){{};

switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var bb="failed",ba="completed",Y="=",X="aborted",W="",V="sending",U="&",T="configured",S="timeout",R="application/xml",bw="qx.io.remote.transport.XmlHttp",bv="application/json",bu="text/html",bt="qx.client",bs="receiving",br="text/plain",bq="text/javascript",bp="?",bo="created",bn='Referer',bi='Basic ',bj="\n</pre>",bg="string",bh='Authorization',be="<pre>Could not execute json: \n",bf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bc=':',bd="parseerror",bk="file:",bl="webkit",bm="object";
qx.Class.define(bw,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[br,bq,bv,R,bu]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bt,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__lm:false,__ln:0,__lo:null,getRequest:function(){if(this.__lo===null){this.__lo=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__lo.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__lo;
},send:function(){this.__ln=0;
var k=this.getRequest();
var f=this.getMethod();
var o=this.getAsynchronous();
var n=this.getUrl();
var h=(window.location.protocol===bk&&!(/^http(s){0,1}\:/.test(n)));
this.__lm=h;
var r=this.getParameters(false);
var p=[];

for(var g in r){var m=r[g];

if(m instanceof Array){for(var i=0;i<m.length;i++){p.push(encodeURIComponent(g)+Y+encodeURIComponent(m[i]));
}}else{p.push(encodeURIComponent(g)+Y+encodeURIComponent(m));
}}
if(p.length>0){n+=(n.indexOf(bp)>=0?U:bp)+p.join(U);
}if(this.getData()===null){var r=this.getParameters(true);
var p=[];

for(var g in r){var m=r[g];

if(m instanceof Array){for(var i=0;i<m.length;i++){p.push(encodeURIComponent(g)+Y+encodeURIComponent(m[i]));
}}else{p.push(encodeURIComponent(g)+Y+encodeURIComponent(m));
}}
if(p.length>0){this.setData(p.join(U));
}}var q=function(bD){var bI=bf;
var bM=W;
var bG,bF,bE;
var bJ,bK,bL,bH;
var i=0;

do{bG=bD.charCodeAt(i++);
bF=bD.charCodeAt(i++);
bE=bD.charCodeAt(i++);
bJ=bG>>2;
bK=((bG&3)<<4)|(bF>>4);
bL=((bF&15)<<2)|(bE>>6);
bH=bE&63;

if(isNaN(bF)){bL=bH=64;
}else if(isNaN(bE)){bH=64;
}bM+=bI.charAt(bJ)+bI.charAt(bK)+bI.charAt(bL)+bI.charAt(bH);
}while(i<bD.length);
return bM;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){k.open(f,n,o);
k.setRequestHeader(bh,bi+q(this.getUsername()+bc+this.getPassword()));
}else{k.open(f,n,o,this.getUsername(),this.getPassword());
}}else{k.open(f,n,o);
}}catch(by){this.error("Failed with exception: "+by);
this.failed();
return;
}if(!qx.core.Variant.isSet(bt,bl)){k.setRequestHeader(bn,window.location.href);
}var j=this.getRequestHeaders();

for(var g in j){k.setRequestHeader(g,j[g]);
}try{{};
k.send(this.getData());
}catch(bQ){if(h){this.failedLocally();
}else{this.error("Failed to send data: "+bQ,"send");
this.failed();
}return;
}if(!o){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bb){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case ba:case X:case bb:case S:{};
return;
}var Q=this.getReadyState();

if(Q==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),Q,this.__lm)){if(this.getState()===T){this.setState(V);
}return this.failed();
}}while(this.__ln<Q){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ln]);
}}),getReadyState:function(){var bA=null;

try{bA=this.getRequest().readyState;
}catch(y){}return bA;
},setRequestHeader:function(c,d){this.getRequestHeaders()[c]=d;
},getResponseHeader:function(O){var P=null;

try{P=this.getRequest().getResponseHeader(O)||null;
}catch(bz){}return P;
},getStringResponseHeaders:function(){var b=null;

try{var a=this.getRequest().getAllResponseHeaders();

if(a){b=a;
}}catch(B){}return b;
},getResponseHeaders:function(){var v=this.getStringResponseHeaders();
var w={};

if(v){var t=v.split(/[\r\n]+/g);

for(var i=0,l=t.length;i<l;i++){var u=t[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(u){w[u[1]]=u[2];
}}}return w;
},getStatusCode:function(){var G=-1;

try{G=this.getRequest().status;
}catch(F){}return G;
},getStatusText:function(){var bN=W;

try{bN=this.getRequest().statusText;
}catch(bO){}return bN;
},getResponseText:function(){var C=null;

try{C=this.getRequest().responseText;
}catch(bx){C=null;
}return C;
},getResponseXml:function(){var N=null;
var L=this.getStatusCode();
var M=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(L,M,this.__lm)){try{N=this.getRequest().responseXML;
}catch(bP){}}if(typeof N==bm&&N!=null){if(!N.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,W);
N.loadXML(s);
}if(!N.documentElement){throw new Error("Missing Document Element!");
}
if(N.documentElement.tagName==bd){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return N;
},getFetchedLength:function(){var K=this.getResponseText();
return typeof K==bg?K.length:0;
},getResponseContent:function(){var H=this.getState();

if(H!==ba&&H!=bb){{};
return null;
}{};
var J=this.getResponseText();

if(H==bb){{};
return J;
}
switch(this.getResponseType()){case br:case bu:{};
return J;
case bv:{};

try{if(J&&J.length>0){var I=qx.util.Json.parse(J,false);
return (I===0?0:(I||null));
}else{return null;
}}catch(A){this.error("Could not execute json: ["+J+"]",A);
return be+J+bj;
}case bq:{};

try{if(J&&J.length>0){var I=window.eval(J);
return (I===0?0:(I||null));
}else{return null;
}}catch(z){this.error("Could not execute javascript: ["+J+"]",z);
return null;
}case R:J=this.getResponseXml();
{};
return (J===0?0:(J||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bB,bC){{};

switch(bB){case bo:this.fireEvent(bo);
break;
case T:this.fireEvent(T);
break;
case V:this.fireEvent(V);
break;
case bs:this.fireEvent(bs);
break;
case ba:this.fireEvent(ba);
break;
case bb:this.fireEvent(bb);
break;
case X:this.getRequest().abort();
this.fireEvent(X);
break;
case S:this.getRequest().abort();
this.fireEvent(S);
break;
}}},defer:function(D,E){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bw);
},destruct:function(){var x=this.getRequest();

if(x){x.onreadystatechange=qx.lang.Function.empty;
switch(x.readyState){case 1:case 2:case 3:x.abort();
}}this.__lo=null;
}});
})();
(function(){var q=",",p="",o="string",n="null",m='"',k="qx.jsonDebugging",j='\\u00',h="__mX",g="new Date(Date.UTC(",f='\\\\',M='\\f',L="__nh",K='\\"',J="))",I="__mV",H="}",G='(',F=":",E="{",D='\\r',x='\\t',y="]",v="[",w="Use 'parse' instead!",t="qx.jsonEncodeUndefined",u='\\b',r="__mW",s="qx.util.Json",z=')',A='\\n',C="__ng",B="__mY";
qx.Class.define(s,{statics:{__mT:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__mU:{"function":I,"boolean":r,"number":h,"string":B,"object":C,"undefined":L},__mV:function(bp,bq){return String(bp);
},__mW:function(N,O){return String(N);
},__mX:function(bn,bo){return isFinite(bn)?String(bn):n;
},__mY:function(P,Q){var R;

if(/["\\\x00-\x1f]/.test(P)){R=P.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__nb);
}else{R=P;
}return m+R+m;
},__na:{'\b':u,'\t':x,'\n':A,'\f':M,'\r':D,'"':K,'\\':f},__nb:function(a,b){var bA=qx.util.Json.__na[b];

if(bA){return bA;
}bA=b.charCodeAt();
return j+Math.floor(bA/16).toString(16)+(bA%16).toString(16);
},__nc:function(ba,bb){var bd=[],bg=true,bf,bc;
var be=qx.util.Json.__nj;
bd.push(v);

if(be){qx.util.Json.__nd+=qx.util.Json.BEAUTIFYING_INDENT;
bd.push(qx.util.Json.__nd);
}
for(var i=0,l=ba.length;i<l;i++){bc=ba[i];
bf=this.__mU[typeof bc];

if(bf){bc=this[bf](bc,i+p);

if(typeof bc==o){if(!bg){bd.push(q);

if(be){bd.push(qx.util.Json.__nd);
}}bd.push(bc);
bg=false;
}}}
if(be){qx.util.Json.__nd=qx.util.Json.__nd.substring(0,qx.util.Json.__nd.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bd.push(qx.util.Json.__nd);
}bd.push(y);
return bd.join(p);
},__ne:function(c,d){var e=c.getUTCFullYear()+q+c.getUTCMonth()+q+c.getUTCDate()+q+c.getUTCHours()+q+c.getUTCMinutes()+q+c.getUTCSeconds()+q+c.getUTCMilliseconds();
return g+e+J;
},__nf:function(bt,bu){var bx=[],bz=true,bw,bv;
var by=qx.util.Json.__nj;
bx.push(E);

if(by){qx.util.Json.__nd+=qx.util.Json.BEAUTIFYING_INDENT;
bx.push(qx.util.Json.__nd);
}
for(var bu in bt){bv=bt[bu];
bw=this.__mU[typeof bv];

if(bw){bv=this[bw](bv,bu);

if(typeof bv==o){if(!bz){bx.push(q);

if(by){bx.push(qx.util.Json.__nd);
}}bx.push(this.__mY(bu),F,bv);
bz=false;
}}}
if(by){qx.util.Json.__nd=qx.util.Json.__nd.substring(0,qx.util.Json.__nd.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bx.push(qx.util.Json.__nd);
}bx.push(H);
return bx.join(p);
},__ng:function(bl,bm){if(bl){if(qx.lang.Type.isFunction(bl.toJSON)&&bl.toJSON!==this.__mT){return this.__ni(bl.toJSON(bm),bm);
}else if(qx.lang.Type.isDate(bl)){return this.__ne(bl,bm);
}else if(qx.lang.Type.isArray(bl)){return this.__nc(bl,bm);
}else if(qx.lang.Type.isObject(bl)){return this.__nf(bl,bm);
}return p;
}return n;
},__nh:function(br,bs){if(qx.core.Setting.get(t)){return n;
}},__ni:function(U,V){return this[this.__mU[typeof U]](U,V);
},stringify:function(bi,bj){this.__nj=bj;
this.__nd=this.BEAUTIFYING_LINE_END;
var bk=this.__ni(bi,p);

if(typeof bk!=o){bk=null;
}if(qx.core.Setting.get(k)){qx.log.Logger.debug(this,"JSON request: "+bk);
}return bk;
},parse:function(W,X){if(X===undefined){X=true;
}
if(qx.core.Setting.get(k)){qx.log.Logger.debug(this,"JSON response: "+W);
}
if(X){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(W.replace(/"(\\.|[^"\\])*"/g,p))){throw new Error("Could not parse JSON string!");
}}
try{var Y=(W&&W.length>0)?eval(G+W+z):null;
return Y;
}catch(S){throw new Error("Could not evaluate JSON string: "+S.message);
}},parseQx:function(T){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return qx.util.Json.parse(T,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bh){bh.__mT=Date.prototype.toJSON;
}});
})();
(function(){var l="=",k="&",j="application/xml",h="application/json",g="text/html",f="qx.client",d="textarea",c="none",b="text/plain",a="text/javascript",F="",E="completed",D="?",C="qx.io.remote.transport.Iframe",B="gecko",A="frame_",z="aborted",y="_data_",x="pre",w="javascript:void(0)",s="sending",t="form",q="failed",r='<iframe name="',o="mshtml",p="form_",m='"></iframe>',n="iframe",u="timeout",v="qx/static/blank.gif";
qx.Class.define(C,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var G=(new Date).valueOf();
var H=A+G;
var I=p+G;
if(qx.core.Variant.isSet(f,o)){this.__mm=document.createElement(r+H+m);
}else{this.__mm=document.createElement(n);
}this.__mm.src=w;
this.__mm.id=this.__mm.name=H;
this.__mm.onload=qx.lang.Function.bind(this._onload,this);
this.__mm.style.display=c;
document.body.appendChild(this.__mm);
this.__mn=document.createElement(t);
this.__mn.target=H;
this.__mn.id=this.__mn.name=I;
this.__mn.style.display=c;
document.body.appendChild(this.__mn);
this.__mo=document.createElement(d);
this.__mo.id=this.__mo.name=y;
this.__mn.appendChild(this.__mo);
this.__mm.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[b,a,h,j,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__mo:null,__mp:0,__mn:null,__mm:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(D)>=0?k:D)+R.join(k);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(k));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(d);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__mn.appendChild(Q);
}this.__mn.action=O;
this.__mn.method=M;
this.__mo.appendChild(document.createTextNode(this.getData()));
this.__mn.submit();
this.setState(s);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__mn.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__mm.readyState]);
}),_switchReadyState:function(U){switch(this.getState()){case E:case z:case q:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__mp<U){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mp]);
}},setRequestHeader:function(Y,ba){},getResponseHeader:function(K){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return F;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__mm);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__mm);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__mm);
},getIframeTextContent:function(){var bc=this.getIframeBody();

if(!bc){return null;
}
if(!bc.firstChild){return F;
}if(bc.firstChild.tagName&&bc.firstChild.tagName.toLowerCase()==x){return bc.firstChild.innerHTML;
}else{return bc.innerHTML;
}},getIframeHtmlContent:function(){var bd=this.getIframeBody();
return bd?bd.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==E){{};
return null;
}{};
var bb=this.getIframeTextContent();

switch(this.getResponseType()){case b:{};
return bb;
break;
case g:bb=this.getIframeHtmlContent();
{};
return bb;
break;
case h:bb=this.getIframeHtmlContent();
{};

try{return bb&&bb.length>0?qx.util.Json.parse(bb,false):null;
}catch(J){return this.error("Could not execute json: ("+bb+")",J);
}case a:bb=this.getIframeHtmlContent();
{};

try{return bb&&bb.length>0?window.eval(bb):null;
}catch(T){return this.error("Could not execute javascript: ("+bb+")",T);
}case j:bb=this.getIframeDocument();
{};
return bb;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(V,W,X){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,C);
},destruct:function(){if(this.__mm){this.__mm.onload=null;
this.__mm.onreadystatechange=null;
if(qx.core.Variant.isSet(f,B)){this.__mm.src=qx.util.ResourceManager.getInstance().toUri(v);
}document.body.removeChild(this.__mm);
}
if(this.__mn){document.body.removeChild(this.__mn);
}this.__mm=this.__mn=this.__mo=null;
}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(k){qx.event.Registration.fireEvent(k,b);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===a;
},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var g="qx.client",f="webkit",e="body",d="iframe",c="qx.bom.Iframe";
qx.Class.define(c,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(t,u){var t=t?qx.lang.Object.clone(t):{};
var v=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var w in v){if(t[w]==null){t[w]=v[w];
}}return qx.bom.Element.create(d,t,u);
},getWindow:qx.core.Variant.select(g,{"mshtml|gecko":function(A){try{return A.contentWindow;
}catch(i){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(h){return null;
}}}),getDocument:qx.core.Variant.select(g,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(j){return null;
}},"default":function(z){try{return z.contentDocument;
}catch(y){return null;
}}}),getBody:function(l){try{var m=this.getDocument(l);
return m?m.getElementsByTagName(e)[0]:null;
}catch(o){return null;
}},setSource:function(B,C){try{if(this.getWindow(B)&&qx.dom.Hierarchy.isRendered(B)){try{if(qx.core.Variant.isSet(g,f)&&qx.bom.client.Platform.MAC){var D=this.getContentWindow();

if(D){D.stop();
}}this.getWindow(B).location.replace(C);
}catch(x){B.src=C;
}}else{B.src=C;
}}catch(k){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(r){var s=this.getDocument(r);

try{if(s&&s.location){return s.location.href;
}}catch(n){}return null;
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var t=++qx.io.remote.transport.Script.__mE;

if(t>=2000000000){qx.io.remote.transport.Script.__mE=t=1;
}this.__mF=null;
this.__mE=t;
},statics:{__mE:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(v,content){var w=qx.io.remote.transport.Script._instanceRegistry[v];

if(w==null){{};
}else{w._responseContent=content;
w._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__mG:0,__mF:null,__mE:null,send:function(){var F=this.getUrl();
F+=(F.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__mE;
var I=this.getParameters();
var H=[];

for(var E in I){if(E.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var G=I[E];

if(G instanceof Array){for(var i=0;i<G.length;i++){H.push(encodeURIComponent(E)+q+encodeURIComponent(G[i]));
}}else{H.push(encodeURIComponent(E)+q+encodeURIComponent(G));
}}
if(H.length>0){F+=r+H.join(r);
}var D=this.getData();

if(D!=null){F+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(D);
}qx.io.remote.transport.Script._instanceRegistry[this.__mE]=this;
this.__mF=document.createElement(c);
this.__mF.charset=e;
this.__mF.src=F;
{};
document.body.appendChild(this.__mF);
},_switchReadyState:function(C){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__mG<C){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mG]);
}},setRequestHeader:function(x,y){},getResponseHeader:function(s){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var u=this._responseContent;
return (u===0?0:(u||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(z,A,B){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__mF){delete qx.io.remote.transport.Script._instanceRegistry[this.__mE];
document.body.removeChild(this.__mF);
}this.__mF=this._responseContent=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(z,this.formatOffset(R.offset,6),e);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(E+S.$$hash+l,S.classname,k,S.$$hash,w);
}}else if(R.clazz){bc.push(H+R.clazz.classname,v);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===D){V.push(p+this.escapeHTML(T)+g);
}else if(T.key){V.push(n+T.key+u+T.type+l+this.escapeHTML(T.text)+g);
}else{V.push(f+T.type+l+this.escapeHTML(T.text)+g);
}}bc.push(f+Y.type+l);

if(Y.type===I){bc.push(a,V.join(h),d);
}else{bc.push(k,V.join(h),b);
}bc.push(g);
}else{bc.push(f+Y.type+l+this.escapeHTML(bb)+e);
}}var W=document.createElement(o);
W.innerHTML=bc.join(c);
W.className=C+R.level;
return W;
},formatOffset:function(N,length){var Q=N.toString();
var O=(length||6)-Q.length;
var P=c;

for(var i=0;i<O;i++){P+=B;
}return P+Q;
},escapeHTML:function(K){return String(K).replace(/[<>&"']/g,this.__tA);
},__tA:function(L){var M={"<":A,">":F,"&":q,"'":r,'"':m};
return M[L]||y;
},toText:function(J){return this.toTextArray(J).join(x);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+k+be.$$hash+G);
}}else if(bd.clazz){bl.push(bd.clazz.classname+s);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===I){bl.push(a,bg.join(h),d);
}else{bl.push(k,bg.join(h),b);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var g="debug",f="log",e="qx.log.appender.Native",d="qx.client";
qx.Class.define(e,{statics:{process:qx.core.Variant.select(d,{"gecko":function(h){if(window.console&&console.firebug){console[h.level].call(console,qx.log.appender.Util.toText(h));
}},"mshtml":function(a){if(window.console){var c=a.level;

if(c==g){c=f;
}var b=qx.log.appender.Util.toText(a);
console[c](b);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==g){k=f;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(m){}})},defer:function(l){qx.log.Logger.register(l);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,T,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__FX=X;
this.__FY=X.childNodes[1];
this.__Ga=X.childNodes[2].firstChild;
this.__Gf();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gg,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__FY.innerHTML=k;
},process:function(bc){this.__FY.appendChild(qx.log.appender.Util.toHtml(bc));
this.__Gb();
},__Gb:function(){this.__FY.scrollTop=this.__FY.scrollHeight;
},__Gc:true,toggle:function(){if(!this.__FX){this.init();
}else if(this.__FX.style.display==h){this.show();
}else{this.__FX.style.display=h;
}},show:function(){if(!this.__FX){this.init();
}else{this.__FX.style.display=K;
this.__FY.scrollTop=this.__FY.scrollHeight;
}},__Gd:[],execute:function(){var bg=this.__Ga.value;

if(bg==k){return;
}
if(bg==u){return this.clear();
}var be=document.createElement(V);
be.innerHTML=qx.log.appender.Util.escapeHTML(C+bg);
be.className=U;
this.__Gd.push(bg);
this.__Ge=this.__Gd.length;
this.__FY.appendChild(be);
this.__Gb();

try{var bf=window.eval(bg);
}catch(bb){qx.log.Logger.error(bb);
}
if(bf!==undefined){qx.log.Logger.debug(bf);
}},__Gf:function(e){this.__FY.style.height=(this.__FX.clientHeight-this.__FX.firstChild.offsetHeight-this.__FX.lastChild.offsetHeight)+c;
},__Gg:function(e){var bi=e.getKeyIdentifier();
if((bi==H)||(bi==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__FX){return;
}if(!qx.dom.Hierarchy.contains(this.__FX,e.getTarget())){return;
}if(bi==d&&this.__Ga.value!=k){this.execute();
this.__Ga.value=k;
}if(bi==i||bi==E){this.__Ge+=bi==i?-1:1;
this.__Ge=Math.min(Math.max(0,this.__Ge),this.__Gd.length);
var bh=this.__Gd[this.__Ge];
this.__Ga.value=bh||k;
this.__Ga.select();
}}},defer:function(bd){qx.event.Registration.addListener(document.documentElement,g,bd.__Gg,bd);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cl="window",ck="",cj="childNodes",ci="nodeName",ch="nodeType",cg="document",cf="function",ce="firstChild",cd="qx.client",cc="external",bt="location",bs="[native code]",br="lastChild",bq="scrollY",bp="scrollWidth",bo="defaultView",bn="closed",bm="content",bl="qx",bk="</td><td>",cs="filters",ct="locationbar",cq="screenX",cr="previousSibling",co="scrollX",cp="Global namespace is polluted by the following unknown objects:\n\n",cm="doctype",cn="parent",cu="qx.dev.Pollution",cv="outerText",bR="applets",bQ="parentElement",bT="designMode",bS="cookie",bV="fullScreen",bU="links",bX="pageXOffset",bW="frames",bP="documentElement",bO="screenY",a="statusbar",b="history",c="sun",d="pkcs11",e="java",f="style",g="innerWidth",h="plugins",j="implementation",k="clientWidth",cz="compatMode",cy="length",cx="textContent",cw="controllers",cD="netscape",cC="self",cB="domConfig",cA="attributes",cF="clientHeight",cE="outerHeight",J="parentNode",K="innerHeight",H="title",I="ownerDocument",N="<table>",O="globalStorage",L="Global namespace is not polluted by any unknown objects.",M="toolbar",F="outerHTML",G="crypto",s="forms",r="scrollbars",u="frameElement",t="Components",o="body",n="clientInformation",q="offscreenBuffering",p="embeds",m="localName",l="scrollTop",T="isMultiLine",U="scrollLeft",V="images",W="event",P="offsetHeight",Q="scrollMaxY",R="sessionStorage",S="screen",X="name",Y="offsetLeft",C="console",B="XMLHttpRequest",A="mshtml",z="nextSibling",y="innerText",x="menubar",w="scopeName",v="top",E="outerWidth",D=": ",ba="\n",bb="status",bc="contentEditable",bd="anchors",be="</table>",bf="<tr style='vertical-align:top'><td>",bg="scrollMaxX",bh="screenTop",bi="defaultStatus",bj="styleSheets",bx="className",bw="personalbar",bv="</td></tr>",bu="currentStyle",bB="directories",bA="navigator",bz="pageYOffset",by="screenLeft",bD="opener",bC="scrollHeight",bK="__firebug__",bL="Option",bI="innerHTML",bJ="tabIndex",bG="offsetTop",bH="[function]",bE="clipboardData",bF="Packages",bM="tagName",bN="offsetWidth",ca="mshtml|opera",bY="undefined",cb="Image";
qx.Class.define(cu,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bl,e,c,bF,bK,t,cw,R,O,C,W,q,bE,n,bL,cb,cc,bh,by,cy,cl,cg,bt,bA,cD,cn,bW,v,r,X,co,bq,cC,S,b,bm,x,M,ct,bw,a,bB,bn,G,d,bD,bb,bi,g,K,E,cE,cq,bO,bX,bz,bg,Q,bV,u,B],"document":[cB,bt,cz,j,bo,H,o,bj,bP,ci,ch,ce,br,cm,V,bR,bU,s,bd,bS,p,h,bT,cj],"body":[cx,bI,F,y,cv,w,bQ,bM,cs,bc,cg,bu,T,cF,k,br,ce,bG,Y,bN,P,bJ,bx,cA,cr,z,I,m,cj,J,ch,ci,f,l,U,bp,bC]},getInfo:function(cG){var cH=qx.dev.Pollution.getTextList(cG||cl);

if(cH){return cp+cH;
}else{return L;
}},extract:function(cI){var cK=[];
var cJ=qx.dev.Pollution.ignore[cI];
if(qx.core.Variant.isSet(cd,A)){if(cI==cl){cJ=cJ.slice(0);

for(var cL=0;cL<window.length;cL++){cJ.push(ck+cL);
}}}var cM=qx.dev.Pollution.names[cI];

for(var cN in cM){try{if(qx.core.Variant.isSet(cd,ca)){if(cI==cl&&cN==cc){continue;
}}if(typeof cM[cN]==bY||cM[cN]===null){continue;
}if(typeof cM[cN]==cf&&cM[cN].toString().indexOf(bs)!=-1){continue;
}if(typeof cM[cN].constructor==cf){if((cM[cN].constructor.toString().indexOf(bs)!=-1)||(cM[cN].constructor.toString().indexOf(bH)!=-1)){continue;
}}if(qx.lang.Array.contains(cJ,cN)){continue;
}}catch(cT){continue;
}cK.push({"key":cN,"value":cM[cN]});
}return cK;
},getHtmlTable:function(cU){var cW=[];
var cV=bf;
var cY=bk;
var da=bv;
cW.push(N);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(be);
return cW.join(ck);
},getTextList:function(cO){var cQ=[];
var cR=D;
var cS=ba;
var cP=this.extract(cO);

for(var i=0;i<cP.length;i++){cQ.push(cP[i].key+cR+cP[i].value+cS);
}return cQ.join(ck);
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__me:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__me=null;
},getInsets:function(){if(this.__me){return this.__me;
}var j=this._getDefaultInsets();
return this.__me={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__me=null;
}},destruct:function(){this.__me=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(s,t,u){qx.ui.decoration.Abstract.call(this);
if(s!=null){this.setWidth(s);
}
if(t!=null){this.setStyle(t);
}
if(u!=null){this.setColor(u);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__ql:null,_getDefaultInsets:function(){var v=this.getWidth();
return {top:v,right:v,bottom:v,left:v};
},_isInitialized:function(){return !!this.__ql;
},getMarkup:function(){if(this.__ql){return this.__ql;
}var B={position:a,top:0,left:0};
var C=this.getWidth();
{};
var E=qx.theme.manager.Color.getInstance();
B.border=C+c+this.getStyle()+e+(E.resolve(this.getColor())||n);
var D=this._generateBackgroundMarkup(B);
return this.__ql=D;
},resize:function(w,x,y){var A=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(A||qx.bom.client.Feature.CONTENT_BOX){var z=this.getWidth()*2;
x-=z;
y-=z;
if(x<0){x=0;
}
if(y<0){y=0;
}}w.style.width=x+l;
w.style.height=y+l;
},tint:function(p,q){var r=qx.theme.manager.Color.getInstance();

if(q==null){q=this.getBackgroundColor();
}p.style.backgroundColor=r.resolve(q)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__ql=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(g){qx.ui.decoration.Abstract.call(this);

if(g!=null){this.setBackgroundColor(g);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__mj:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mj;
},getMarkup:function(){if(this.__mj){return this.__mj;
}var k={position:a,top:0,left:0};
var l=this._generateBackgroundMarkup(k);
return this.__mj=l;
},resize:function(h,i,j){h.style.width=i+f;
h.style.height=j+f;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__mj=null;
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="",k="double",j="px ",i="dotted",h="_applyWidth",g="dashed",f="Number",K=" ",J="shorthand",I="px",H="widthTop",G="styleRight",F="styleLeft",E="widthLeft",D="widthBottom",C="styleTop",B="colorBottom",v="styleBottom",w="widthRight",t="colorLeft",u="colorRight",r="colorTop",s="scale",p="border-top",q="border-left",x="border-right",y="qx.ui.decoration.Single",A="border-bottom",z="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){qx.ui.decoration.Abstract.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:f,init:0,apply:h},widthRight:{check:f,init:0,apply:h},widthBottom:{check:f,init:0,apply:h},widthLeft:{check:f,init:0,apply:h},styleTop:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleRight:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleBottom:{nullable:true,check:[n,i,g,k],init:n,apply:o},styleLeft:{nullable:true,check:[n,i,g,k],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[E,F,t]},right:{group:[w,G,u]},top:{group:[H,C,r]},bottom:{group:[D,v,B]},width:{group:[H,w,D,E],mode:J},style:{group:[C,G,v,F],mode:J},color:{group:[r,u,B,t],mode:J}},members:{__od:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__od;
},getMarkup:function(O){if(this.__od){return this.__od;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[p]=S+j+this.getStyleTop()+K+(P.resolve(this.getColorTop())||l);
}var S=this.getWidthRight();

if(S>0){Q[x]=S+j+this.getStyleRight()+K+(P.resolve(this.getColorRight())||l);
}var S=this.getWidthBottom();

if(S>0){Q[A]=S+j+this.getStyleBottom()+K+(P.resolve(this.getColorBottom())||l);
}var S=this.getWidthLeft();

if(S>0){Q[q]=S+j+this.getStyleLeft()+K+(P.resolve(this.getColorLeft())||l);
}{};
Q.position=z;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__od=R;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==s;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+I;
a.style.height=c+I;
},tint:function(L,M){var N=qx.theme.manager.Color.getInstance();

if(M==null){M=this.getBackgroundColor();
}L.style.backgroundColor=N.resolve(M)||l;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__od=null;
}});
})();
(function(){var p="Number",o="_applyInsets",n="-l",m="insetRight",l="insetTop",k="_applyBaseImage",j="insetBottom",i="set",h="shorthand",g="-t",d="insetLeft",f="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(C,D){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__lR=new qx.ui.decoration.css3.BorderImage();

if(C){this.__lS(C);
}}else{this.__lR=new qx.ui.decoration.GridDiv(C);
}
if(D!=null){this.__lR.setInsets(D);
}},properties:{baseImage:{check:f,nullable:true,apply:k},insetLeft:{check:p,nullable:true,apply:o},insetRight:{check:p,nullable:true,apply:o},insetBottom:{check:p,nullable:true,apply:o},insetTop:{check:p,nullable:true,apply:o},insets:{group:[l,m,j,d],mode:h}},members:{__lR:null,getMarkup:function(){return this.__lR.getMarkup();
},resize:function(a,b,c){this.__lR.resize(a,b,c);
},tint:function(q,r){},getInsets:function(){return this.__lR.getInsets();
},_applyInsets:function(E,F,name){var G=i+qx.lang.String.firstUp(name);
this.__lR[G](E);
},_applyBaseImage:function(s,t){if(this.__lR instanceof qx.ui.decoration.GridDiv){this.__lR.setBaseImage(s);
}else{this.__lS(s);
}},__lS:function(u){this.__lR.setBorderImage(u);
var y=qx.util.AliasManager.getInstance().resolve(u);
var z=/(.*)(\.[a-z]+)$/.exec(y);
var w=z[1];
var x=z[2];
var v=qx.util.ResourceManager.getInstance();
var A=v.getImageHeight(w+g+x);
var B=v.getImageWidth(w+n+x);
this.__lR.setSlice([A,B]);
}},destruct:function(){this.__lR=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(K,L,M){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setOuterColor(K);
}
if(L!=null){this.setInnerColor(L);
}
if(M!=null){this.setInnerOpacity(M);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__pR:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__pR;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__pR){return this.__pR;
}var N=qx.theme.manager.Color.getInstance();
var O=[];
var R=d+N.resolve(this.getOuterColor())+b;
var Q=d+N.resolve(this.getInnerColor())+b;
O.push(k);
O.push(f);
O.push(e,R);
O.push(qx.bom.element.Opacity.compile(0.35));
O.push(i);
O.push(n);
O.push(q,R);
O.push(r,R);
O.push(i);
O.push(f);
O.push(m);
O.push(p,R);
O.push(s,R);
O.push(i);
var P={position:l,top:g,left:g};
O.push(this._generateBackgroundMarkup(P));
O.push(t);
O.push(e,Q);
O.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
O.push(i);
O.push(v);
return this.__pR=O.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(H,I){var J=qx.theme.manager.Color.getInstance();

if(I==null){I=this.getBackgroundColor();
}H.childNodes[3].style.backgroundColor=J.resolve(I)||c;
}},destruct:function(){this.__pR=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var eM="button-frame",eL="atom",eK="widget",eJ="main",eI="button",eH="text-selected",eG="image",eF="bold",eE="middle",eD="background-light",dq="text-disabled",dp="groupbox",dn="decoration/arrows/down.png",dm="cell",dl="selected",dk="border-invalid",dj="input",di="input-disabled",dh="menu-button",dg="input-focused-invalid",eT="toolbar-button",eU="spinner",eR="input-focused",eS="popup",eP="tooltip",eQ="label",eN="list",eO="tree-item",eV="treevirtual-contract",eW="scrollbar",em="datechooser/nav-button",el="text-hovered",eo="center",en="treevirtual-expand",eq="textfield",ep="decoration/arrows/right.png",es="background-application",er="radiobutton",ek="white",ej="invalid",bm="combobox",bn="right-top",bo="checkbox",bp="text-title",bq="qx/static/blank.gif",br="scrollbar/button",bs="right",bt="combobox/button",bu="icon/16/places/folder.png",bv="text-label",fl="decoration/tree/closed.png",fk="scrollbar-slider-horizontal",fj="decoration/arrows/left.png",fi="button-focused",fp="text-light",fo="menu-slidebar-button",fn="text-input",fm="slidebar/button-forward",fr="background-splitpane",fq=".png",co="decoration/tree/open.png",cp="default",cm="decoration/arrows/down-small.png",cn="datechooser",cs="slidebar/button-backward",ct="selectbox",cq="treevirtual-folder",cr="shadow-popup",ck="icon/16/mimetypes/office-document.png",cl="background-medium",bP="table",bO="decoration/arrows/up.png",bR="decoration/form/",bQ="",bL="-invalid",bK="icon/16/places/folder-open.png",bN="button-checked",bM="decoration/window/maximize-active-hovered.png",bJ="radiobutton-hovered",bI="keyboard-focus",cz="decoration/cursors/",cA="slidebar",cB="tooltip-error-arrow",cC="table-scroller-focus-indicator",cv="move-frame",cw="nodrop",cx="decoration/table/boolean-true.png",cy="table-header-cell",cD="menu",cE="app-header",cd="row-layer",cc="text-inactive",cb="move",ca="radiobutton-checked-focused",bY="decoration/window/restore-active-hovered.png",bX="shadow-window",bW="table-column-button",bV="right.png",ch="tabview-page-button-bottom-inactive",cg="tooltip-error",cF="window-statusbar",cG="button-hovered",cH="decoration/scrollbar/scrollbar-",cI="background-tip",cJ="scrollbar-slider-horizontal-disabled",cK="table-scroller-header",cL="button-pressed",cM="table-pane",cN="decoration/window/close-active.png",cO="native",dy="checkbox-hovered",dx="button-invalid-shadow",dw="checkbox-checked",dv="decoration/window/minimize-active-hovered.png",dC="menubar",dB="icon/16/actions/dialog-cancel.png",dA="tabview-page-button-top-inactive",dz="tabview-page-button-left-inactive",dG="menu-slidebar",dF="toolbar-button-checked",ee="decoration/tree/open-selected.png",ef="radiobutton-checked",ec="decoration/window/minimize-inactive.png",ed="icon/16/apps/office-calendar.png",ea="group",eb="tabview-page-button-right-inactive",dX="decoration/window/minimize-active.png",dY="decoration/window/restore-inactive.png",eg="checkbox-checked-focused",eh="splitpane",ew="combobox/textfield",ev="button-preselected-focused",ey="decoration/window/close-active-hovered.png",ex="qx/icon/Tango/16/actions/window-close.png",eA="checkbox-pressed",ez="button-disabled",eC="selected-dragover",eB="border-separator",eu="decoration/window/maximize-inactive.png",et="dragover",fe="scrollarea",ff="scrollbar-vertical",fg="decoration/menu/checkbox-invert.gif",fh="decoration/toolbar/toolbar-handle-knob.gif",fa="icon/22/mimetypes/office-document.png",fb="button-preselected",fc="button-checked-focused",fd="up.png",eX="best-fit",eY="decoration/tree/closed-selected.png",bl="qx.theme.modern.Appearance",bk="text-active",bj="toolbar-button-hovered",bi="progressive-table-header",bh="decoration/table/select-column-order.png",bg="decoration/menu/radiobutton.gif",bf="decoration/arrows/forward.png",be="decoration/table/descending.png",bd="window-captionbar-active",bc="checkbox-checked-hovered",by="scrollbar-slider-vertical",bz="toolbar",bw="alias",bx="decoration/window/restore-active.png",bC="decoration/table/boolean-false.png",bD="checkbox-checked-disabled",bA="icon/32/mimetypes/office-document.png",bB="radiobutton-checked-disabled",bF="tabview-pane",bG="decoration/arrows/rewind.png",dK="checkbox-focused",dE="top",dR="#EEE",dN="icon/16/actions/dialog-ok.png",dt="radiobutton-checked-hovered",dr="table-header-cell-hovered",bT="window",du="text-gray",cf="decoration/menu/radiobutton-invert.gif",ce="text-placeholder",cX="slider",cY="keep-align",da="down.png",db="tabview-page-button-top-active",dc="icon/32/places/folder-open.png",dd="icon/22/places/folder.png",de="decoration/window/maximize-active.png",df="checkbox-checked-pressed",cV="decoration/window/close-inactive.png",cW="tabview-page-button-left-active",ds="toolbar-part",dQ="decoration/splitpane/knob-vertical.png",dP=".gif",dO="icon/22/places/folder-open.png",dV="radiobutton-checked-pressed",dU="table-statusbar",dT="radiobutton-pressed",dS="window-captionbar-inactive",dM="copy",dL="radiobutton-focused",bE="decoration/arrows/down-invert.png",cj="decoration/menu/checkbox.gif",ci="decoration/splitpane/knob-horizontal.png",dD="icon/32/places/folder.png",cu="toolbar-separator",dJ="tabview-page-button-bottom-active",dI="decoration/arrows/up-small.png",dH="decoration/table/ascending.png",bS="decoration/arrows/up-invert.png",dW="small",bH="tabview-page-button-right-active",bU="-disabled",cP="scrollbar-horizontal",cQ="progressive-table-header-cell",cR="menu-separator",cS="pane",cT="decoration/arrows/right-invert.png",cU="left.png",ei="icon/16/actions/view-refresh.png";
qx.Theme.define(bl,{appearances:{"widget":{},"root":{style:function(fH){return {backgroundColor:es,textColor:bv,font:cp};
}},"label":{style:function(gy){return {textColor:gy.disabled?dq:undefined};
}},"move-frame":{style:function(hk){return {decorator:eJ};
}},"resize-frame":cv,"dragdrop-cursor":{style:function(A){var B=cw;

if(A.copy){B=dM;
}else if(A.move){B=cb;
}else if(A.alias){B=bw;
}return {source:cz+B+dP,position:bn,offset:[2,16,2,6]};
}},"image":{style:function(gw){return {opacity:!gw.replacement&&gw.disabled?0.3:1};
}},"atom":{},"atom/label":eQ,"atom/icon":eG,"popup":{style:function(L){return {decorator:eJ,backgroundColor:eD,shadow:cr};
}},"button-frame":{alias:eL,style:function(s){var u,t;

if(s.checked&&s.focused&&!s.inner){u=fc;
t=undefined;
}else if(s.disabled){u=ez;
t=undefined;
}else if(s.pressed){u=cL;
t=el;
}else if(s.checked){u=bN;
t=undefined;
}else if(s.hovered){u=cG;
t=el;
}else if(s.preselected&&s.focused&&!s.inner){u=ev;
t=el;
}else if(s.preselected){u=fb;
t=el;
}else if(s.focused&&!s.inner){u=fi;
t=undefined;
}else{u=eI;
t=undefined;
}return {decorator:u,textColor:t,shadow:s.invalid&&!s.disabled?dx:undefined};
}},"button-frame/image":{style:function(fV){return {opacity:!fV.replacement&&fV.disabled?0.5:1};
}},"button":{alias:eM,include:eM,style:function(G){return {padding:[2,8],center:true};
}},"hover-button":{alias:eL,include:eL,style:function(hO){return {decorator:hO.hovered?dl:undefined,textColor:hO.hovered?eH:undefined};
}},"splitbutton":{},"splitbutton/button":eI,"splitbutton/arrow":{alias:eI,include:eI,style:function(hJ){return {icon:dn,padding:2,marginLeft:1};
}},"checkbox":{alias:eL,style:function(hf){var hh;

if(hf.checked&&hf.focused){hh=eg;
}else if(hf.checked&&hf.disabled){hh=bD;
}else if(hf.checked&&hf.pressed){hh=df;
}else if(hf.checked&&hf.hovered){hh=bc;
}else if(hf.checked){hh=dw;
}else if(hf.focused){hh=dK;
}else if(hf.pressed){hh=eA;
}else if(hf.hovered){hh=dy;
}else{hh=bo;
}var hg=hf.invalid&&!hf.disabled?bL:bQ;
return {icon:bR+hh+hg+fq,gap:6};
}},"radiobutton":{alias:eL,style:function(c){var e;

if(c.checked&&c.focused){e=ca;
}else if(c.checked&&c.disabled){e=bB;
}else if(c.checked&&c.pressed){e=dV;
}else if(c.checked&&c.hovered){e=dt;
}else if(c.checked){e=ef;
}else if(c.focused){e=dL;
}else if(c.pressed){e=dT;
}else if(c.hovered){e=bJ;
}else{e=er;
}var d=c.invalid&&!c.disabled?bL:bQ;
return {icon:bR+e+d+fq,gap:6};
}},"textfield":{style:function(gA){var gF;
var gD=!!gA.focused;
var gE=!!gA.invalid;
var gB=!!gA.disabled;

if(gD&&gE&&!gB){gF=dg;
}else if(gD&&!gE&&!gB){gF=eR;
}else if(gB){gF=di;
}else if(!gD&&gE&&!gB){gF=dk;
}else{gF=dj;
}var gC;

if(gA.disabled){gC=dq;
}else if(gA.showingPlaceholder){gC=ce;
}else{gC=fn;
}return {decorator:gF,padding:[2,4,1],textColor:gC};
}},"textarea":{include:eq,style:function(gu){return {padding:4};
}},"spinner":{style:function(fy){var fC;
var fA=!!fy.focused;
var fB=!!fy.invalid;
var fz=!!fy.disabled;

if(fA&&fB&&!fz){fC=dg;
}else if(fA&&!fB&&!fz){fC=eR;
}else if(fz){fC=di;
}else if(!fA&&fB&&!fz){fC=dk;
}else{fC=dj;
}return {decorator:fC};
}},"spinner/textfield":{style:function(hc){return {marginRight:2,padding:[2,4,1],textColor:hc.disabled?dq:fn};
}},"spinner/upbutton":{alias:eM,include:eM,style:function(m){return {icon:dI,padding:m.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eM,include:eM,style:function(ia){return {icon:cm,padding:ia.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bm,"datefield/button":{alias:bt,include:bt,style:function(fM){return {icon:ed,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ew,"datefield/list":{alias:cn,include:cn,style:function(hW){return {decorator:undefined};
}},"groupbox":{style:function(ie){return {legendPosition:dE};
}},"groupbox/legend":{alias:eL,style:function(w){return {padding:[1,0,1,4],textColor:w.invalid?ej:bp,font:eF};
}},"groupbox/frame":{style:function(o){return {padding:12,decorator:ea};
}},"check-groupbox":dp,"check-groupbox/legend":{alias:bo,include:bo,style:function(fx){return {padding:[1,0,1,4],textColor:fx.invalid?ej:bp,font:eF};
}},"radio-groupbox":dp,"radio-groupbox/legend":{alias:er,include:er,style:function(fF){return {padding:[1,0,1,4],textColor:fF.invalid?ej:bp,font:eF};
}},"scrollarea":{style:function(fv){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(fP){return {backgroundColor:es};
}},"scrollarea/pane":eK,"scrollarea/scrollbar-x":eW,"scrollarea/scrollbar-y":eW,"scrollbar":{style:function(go){if(go[cO]){return {};
}return {width:go.horizontal?undefined:16,height:go.horizontal?16:undefined,decorator:go.horizontal?cP:ff,padding:1};
}},"scrollbar/slider":{alias:cX,style:function(T){return {padding:T.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eM,style:function(gr){var gs=gr.horizontal?fk:by;

if(gr.disabled){gs+=bU;
}return {decorator:gs,minHeight:gr.horizontal?undefined:9,minWidth:gr.horizontal?9:undefined};
}},"scrollbar/button":{alias:eM,include:eM,style:function(J){var K=cH;

if(J.left){K+=cU;
}else if(J.right){K+=bV;
}else if(J.up){K+=fd;
}else{K+=da;
}
if(J.left||J.right){return {padding:[0,0,0,J.left?3:4],icon:K,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:K,width:14,height:15};
}}},"scrollbar/button-begin":br,"scrollbar/button-end":br,"slider":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=dg;
}else if(W&&!X&&!V){Y=eR;
}else if(V){Y=di;
}else if(!W&&X&&!V){Y=dk;
}else{Y=dj;
}return {decorator:Y};
}},"slider/knob":{include:eM,style:function(ft){return {decorator:ft.disabled?cJ:fk,shadow:undefined,height:14,width:14};
}},"list":{alias:fe,style:function(gN){var gR;
var gP=!!gN.focused;
var gQ=!!gN.invalid;
var gO=!!gN.disabled;

if(gP&&gQ&&!gO){gR=dg;
}else if(gP&&!gQ&&!gO){gR=eR;
}else if(gO){gR=di;
}else if(!gP&&gQ&&!gO){gR=dk;
}else{gR=dj;
}return {backgroundColor:eD,decorator:gR};
}},"list/pane":eK,"listitem":{alias:eL,style:function(hP){var hQ;

if(hP.dragover){hQ=hP.selected?eC:et;
}else{hQ=hP.selected?dl:undefined;
}return {padding:hP.dragover?[4,4,2,4]:4,textColor:hP.selected?eH:undefined,decorator:hQ};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eM,include:eM,style:function(hE){return {padding:5,center:true,icon:hE.vertical?dn:ep};
}},"slidebar/button-backward":{alias:eM,include:eM,style:function(gG){return {padding:5,center:true,icon:gG.vertical?bO:fj};
}},"tabview":{style:function(hu){return {contentPadding:16};
}},"tabview/bar":{alias:cA,style:function(gh){var gi={marginBottom:gh.barTop?-1:0,marginTop:gh.barBottom?-4:0,marginLeft:gh.barRight?-3:0,marginRight:gh.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gh.barTop||gh.barBottom){gi.paddingLeft=5;
gi.paddingRight=7;
}else{gi.paddingTop=5;
gi.paddingBottom=7;
}return gi;
}},"tabview/bar/button-forward":{include:fm,alias:fm,style:function(fS){if(fS.barTop||fS.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cs,alias:cs,style:function(fK){if(fK.barTop||fK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gH){return {decorator:bF,minHeight:100,marginBottom:gH.barBottom?-1:0,marginTop:gH.barTop?-1:0,marginLeft:gH.barLeft?-1:0,marginRight:gH.barRight?-1:0};
}},"tabview-page":eK,"tabview-page/button":{alias:eL,style:function(gU){var hb,gW=0;
var ha=0,gV=0,gX=0,gY=0;

if(gU.checked){if(gU.barTop){hb=db;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barBottom){hb=dJ;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barRight){hb=bH;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}else{hb=cW;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}}else{if(gU.barTop){hb=dA;
gW=[4,10];
ha=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barBottom){hb=ch;
gW=[4,10];
gV=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barRight){hb=eb;
gW=[4,10];
gY=5;
ha=gU.firstTab?5:1;
gV=1;
gX=1;
}else{hb=dz;
gW=[4,10];
gX=5;
ha=gU.firstTab?5:1;
gV=1;
gY=1;
}}return {zIndex:gU.checked?10:5,decorator:hb,padding:gW,marginTop:ha,marginBottom:gV,marginLeft:gX,marginRight:gY,textColor:gU.checked?bk:cc};
}},"tabview-page/button/label":{alias:eQ,style:function(q){return {padding:[0,1,0,1],margin:q.focused?0:1,decorator:q.focused?bI:undefined};
}},"tabview-page/button/close-button":{alias:eL,style:function(hp){return {icon:ex};
}},"toolbar":{style:function(fY){return {decorator:bz,spacing:2};
}},"toolbar/part":{style:function(hi){return {decorator:ds,spacing:2};
}},"toolbar/part/container":{style:function(hV){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hN){return {source:fh,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eL,style:function(D){return {marginTop:2,marginBottom:2,padding:(D.pressed||D.checked||D.hovered)&&!D.disabled||(D.disabled&&D.checked)?3:5,decorator:D.pressed||(D.checked&&!D.hovered)||(D.checked&&D.disabled)?dF:D.hovered&&!D.disabled?bj:undefined};
}},"toolbar-menubutton":{alias:eT,include:eT,style:function(E){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eG,include:eG,style:function(gm){return {source:cm};
}},"toolbar-splitbutton":{style:function(i){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eT,include:eT,style:function(fJ){return {icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eT,include:eT,style:function(h){return {padding:h.pressed||h.checked?1:h.hovered?1:3,icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gL){return {decorator:cu,margin:7};
}},"tree":eN,"tree-item":{style:function(fE){return {padding:[2,6],textColor:fE.selected?eH:undefined,decorator:fE.selected?dl:undefined};
}},"tree-item/icon":{include:eG,style:function(hn){return {paddingRight:5};
}},"tree-item/label":eQ,"tree-item/open":{include:eG,style:function(gb){var gc;

if(gb.selected&&gb.opened){gc=ee;
}else if(gb.selected&&!gb.opened){gc=eY;
}else if(gb.opened){gc=co;
}else{gc=fl;
}return {padding:[0,5,0,2],source:gc};
}},"tree-folder":{include:eO,alias:eO,style:function(gp){var gq;

if(gp.small){gq=gp.opened?bK:bu;
}else if(gp.large){gq=gp.opened?dc:dD;
}else{gq=gp.opened?dO:dd;
}return {icon:gq};
}},"tree-file":{include:eO,alias:eO,style:function(hX){return {icon:hX.small?ck:hX.large?bA:fa};
}},"treevirtual":bP,"treevirtual-folder":{style:function(fX){return {icon:fX.opened?bK:bu};
}},"treevirtual-file":{include:cq,alias:cq,style:function(hx){return {icon:ck};
}},"treevirtual-line":{style:function(F){return {icon:bq};
}},"treevirtual-contract":{style:function(fD){return {icon:co,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fN){return {icon:fl,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eV,"treevirtual-only-expand":en,"treevirtual-start-contract":eV,"treevirtual-start-expand":en,"treevirtual-end-contract":eV,"treevirtual-end-expand":en,"treevirtual-cross-contract":eV,"treevirtual-cross-expand":en,"treevirtual-end":{style:function(hH){return {icon:bq};
}},"treevirtual-cross":{style:function(hs){return {icon:bq};
}},"tooltip":{include:eS,style:function(r){return {backgroundColor:cI,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eL,"tooltip-error":{include:eP,style:function(H){return {textColor:eH,placeMethod:eK,offset:[0,0,0,14],marginTop:-2,position:bn,showTimeout:100,hideTimeout:10000,decorator:cg,shadow:cB,font:eF};
}},"tooltip-error/atom":eL,"window":{style:function(gg){return {shadow:bX,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(ic){return {decorator:bT};
}},"window/captionbar":{style:function(fG){return {decorator:fG.active?bd:dS,textColor:fG.active?ek:du,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hT){return {margin:[5,0,3,6]};
}},"window/title":{style:function(he){return {alignY:eE,font:eF,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eL,style:function(z){return {icon:z.active?z.hovered?dv:dX:ec,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eL,style:function(id){return {icon:id.active?id.hovered?bY:bx:dY,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eL,style:function(j){return {icon:j.active?j.hovered?bM:de:eu,margin:[4,8,2,0]};
}},"window/close-button":{alias:eL,style:function(p){return {icon:p.active?p.hovered?ey:cN:cV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(fs){return {padding:[2,6],decorator:cF,minHeight:18};
}},"window/statusbar-text":{style:function(fu){return {font:dW};
}},"iframe":{style:function(hw){return {decorator:eJ};
}},"resizer":{style:function(fQ){return {decorator:cS};
}},"splitpane":{style:function(n){return {decorator:eh};
}},"splitpane/splitter":{style:function(R){return {width:R.horizontal?3:undefined,height:R.vertical?3:undefined,backgroundColor:fr};
}},"splitpane/splitter/knob":{style:function(gS){return {source:gS.horizontal?ci:dQ};
}},"splitpane/slider":{style:function(hd){return {width:hd.horizontal?3:undefined,height:hd.vertical?3:undefined,backgroundColor:fr};
}},"selectbox":{alias:eM,include:eM,style:function(fW){return {padding:[2,8]};
}},"selectbox/atom":eL,"selectbox/popup":eS,"selectbox/list":{alias:eN},"selectbox/arrow":{include:eG,style:function(ht){return {source:dn,paddingLeft:5};
}},"datechooser":{style:function(hz){var hD;
var hB=!!hz.focused;
var hC=!!hz.invalid;
var hA=!!hz.disabled;

if(hB&&hC&&!hA){hD=dg;
}else if(hB&&!hC&&!hA){hD=eR;
}else if(hA){hD=di;
}else if(!hB&&hC&&!hA){hD=dk;
}else{hD=dj;
}return {padding:2,decorator:hD,backgroundColor:eD};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eM,alias:eM,style:function(hF){var hG={padding:[2,4],shadow:undefined};

if(hF.lastYear){hG.icon=bG;
hG.marginRight=1;
}else if(hF.lastMonth){hG.icon=fj;
}else if(hF.nextYear){hG.icon=bf;
hG.marginLeft=1;
}else if(hF.nextMonth){hG.icon=ep;
}return hG;
}},"datechooser/last-year-button-tooltip":eP,"datechooser/last-month-button-tooltip":eP,"datechooser/next-year-button-tooltip":eP,"datechooser/next-month-button-tooltip":eP,"datechooser/last-year-button":em,"datechooser/last-month-button":em,"datechooser/next-month-button":em,"datechooser/next-year-button":em,"datechooser/month-year-label":{style:function(ge){return {font:eF,textAlign:eo,textColor:ge.disabled?dq:undefined};
}},"datechooser/date-pane":{style:function(l){return {textColor:l.disabled?dq:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hS){return {textColor:hS.disabled?dq:hS.weekend?fp:undefined,textAlign:eo,paddingTop:2,backgroundColor:cl};
}},"datechooser/week":{style:function(v){return {textAlign:eo,padding:[2,4],backgroundColor:cl};
}},"datechooser/day":{style:function(ba){return {textAlign:eo,decorator:ba.disabled?undefined:ba.selected?dl:undefined,textColor:ba.disabled?dq:ba.selected?eH:ba.otherMonth?fp:undefined,font:ba.today?eF:undefined,padding:[2,4]};
}},"combobox":{style:function(M){var Q;
var O=!!M.focused;
var P=!!M.invalid;
var N=!!M.disabled;

if(O&&P&&!N){Q=dg;
}else if(O&&!P&&!N){Q=eR;
}else if(N){Q=di;
}else if(!O&&P&&!N){Q=dk;
}else{Q=dj;
}return {decorator:Q};
}},"combobox/popup":eS,"combobox/list":{alias:eN},"combobox/button":{include:eM,alias:eM,style:function(x){var y={icon:dn,padding:2};

if(x.selected){y.decorator=fi;
}return y;
}},"combobox/textfield":{include:eq,style:function(hM){return {decorator:undefined};
}},"menu":{style:function(hK){var hL={decorator:cD,shadow:cr,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hK.submenu||hK.contextmenu?eX:cY};

if(hK.submenu){hL.position=bn;
hL.offset=[-2,-3];
}return hL;
}},"menu/slidebar":dG,"menu-slidebar":eK,"menu-slidebar-button":{style:function(ga){return {decorator:ga.hovered?dl:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fo,style:function(hy){return {icon:hy.hovered?bS:bO};
}},"menu-slidebar/button-forward":{include:fo,style:function(gx){return {icon:gx.hovered?bE:dn};
}},"menu-separator":{style:function(gv){return {height:0,decorator:cR,margin:[4,2]};
}},"menu-button":{alias:eL,style:function(k){return {decorator:k.selected?dl:undefined,textColor:k.selected?eH:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eG,style:function(fR){return {alignY:eE};
}},"menu-button/label":{include:eQ,style:function(C){return {alignY:eE,padding:1};
}},"menu-button/shortcut":{include:eQ,style:function(gt){return {alignY:eE,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eG,style:function(ib){return {source:ib.selected?cT:ep,alignY:eE};
}},"menu-checkbox":{alias:dh,include:dh,style:function(gk){return {icon:!gk.checked?undefined:gk.selected?fg:cj};
}},"menu-radiobutton":{alias:dh,include:dh,style:function(hl){return {icon:!hl.checked?undefined:hl.selected?cf:bg};
}},"menubar":{style:function(gK){return {decorator:dC};
}},"menubar-button":{alias:eL,style:function(gd){return {decorator:gd.pressed||gd.hovered?dl:undefined,textColor:gd.pressed||gd.hovered?eH:undefined,padding:[3,8]};
}},"colorselector":eK,"colorselector/control-bar":eK,"colorselector/control-pane":eK,"colorselector/visual-pane":dp,"colorselector/preset-grid":eK,"colorselector/colorbucket":{style:function(hR){return {decorator:eJ,width:16,height:16};
}},"colorselector/preset-field-set":dp,"colorselector/input-field-set":dp,"colorselector/preview-field-set":dp,"colorselector/hex-field-composite":eK,"colorselector/hex-field":eq,"colorselector/rgb-spinner-composite":eK,"colorselector/rgb-spinner-red":eU,"colorselector/rgb-spinner-green":eU,"colorselector/rgb-spinner-blue":eU,"colorselector/hsb-spinner-composite":eK,"colorselector/hsb-spinner-hue":eU,"colorselector/hsb-spinner-saturation":eU,"colorselector/hsb-spinner-brightness":eU,"colorselector/preview-content-old":{style:function(I){return {decorator:eJ,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bb){return {decorator:eJ,backgroundColor:eD,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(a){return {decorator:eJ,margin:5};
}},"colorselector/brightness-field":{style:function(gf){return {decorator:eJ,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eK,"colorselector/hue-saturation-handle":eK,"colorselector/brightness-pane":eK,"colorselector/brightness-handle":eK,"colorpopup":{alias:eS,include:eS,style:function(gM){return {padding:5,backgroundColor:es};
}},"colorpopup/field":{style:function(fI){return {decorator:eJ,margin:2,width:14,height:14,backgroundColor:eD};
}},"colorpopup/selector-button":eI,"colorpopup/auto-button":eI,"colorpopup/preview-pane":dp,"colorpopup/current-preview":{style:function(S){return {height:20,padding:4,marginLeft:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fT){return {height:20,padding:4,marginRight:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eI,include:eI,style:function(hI){return {icon:dN};
}},"colorpopup/colorselector-cancelbutton":{alias:eI,include:eI,style:function(fL){return {icon:dB};
}},"table":{alias:eK,style:function(g){return {decorator:bP};
}},"table-header":{},"table/statusbar":{style:function(hq){return {decorator:dU,padding:[0,2]};
}},"table/column-button":{alias:eM,style:function(hm){return {decorator:bW,padding:3,icon:bh};
}},"table-column-reset-button":{include:dh,alias:dh,style:function(){return {icon:ei};
}},"table-scroller":eK,"table-scroller/scrollbar-x":eW,"table-scroller/scrollbar-y":eW,"table-scroller/header":{style:function(gJ){return {decorator:cK};
}},"table-scroller/pane":{style:function(fU){return {backgroundColor:cM};
}},"table-scroller/focus-indicator":{style:function(gj){return {decorator:cC};
}},"table-scroller/resize-line":{style:function(fO){return {backgroundColor:eB,width:2};
}},"table-header-cell":{alias:eL,style:function(b){return {minWidth:13,minHeight:20,padding:b.hovered?[3,4,2,4]:[3,4],decorator:b.hovered?dr:cy,sortIcon:b.sorted?(b.sortedAscending?dH:be):undefined};
}},"table-header-cell/label":{style:function(gl){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ho){return {alignY:eE,alignX:bs};
}},"table-header-cell/icon":{style:function(fw){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-editor-textfield":{include:eq,style:function(hY){return {decorator:undefined,padding:[2,2],backgroundColor:eD};
}},"table-editor-selectbox":{include:ct,alias:ct,style:function(gz){return {padding:[0,2],backgroundColor:eD};
}},"table-editor-combobox":{include:bm,alias:bm,style:function(gI){return {decorator:undefined,backgroundColor:eD};
}},"progressive-table-header":{alias:eK,style:function(hv){return {decorator:bi};
}},"progressive-table-header-cell":{alias:eL,style:function(ig){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cQ};
}},"app-header":{style:function(hj){return {font:eF,textColor:eH,padding:[8,12],decorator:cE};
}},"virtual-list":eN,"virtual-list/row-layer":cd,"row-layer":{style:function(hr){return {colorEven:ek,colorOdd:dR};
}},"column-layer":eK,"cell":{style:function(gT){return {textColor:gT.selected?eH:bv,padding:[3,6],font:cp};
}},"cell-string":dm,"cell-number":{include:dm,style:function(f){return {textAlign:bs};
}},"cell-image":dm,"cell-boolean":{include:dm,style:function(gn){return {iconTrue:cx,iconFalse:bC};
}},"cell-atom":dm,"cell-date":dm,"cell-html":dm,"htmlarea":{"include":eK,style:function(hU){return {backgroundColor:ek};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var l="_applyStyle",k="stretch",j="Integer",i="px",h=" ",g="repeat",f="round",e="shorthand",d="px ",c="sliceBottom",A=";'></div>",z="<div style='",y="sliceLeft",x="sliceRight",w="repeatX",v="String",u="qx.ui.decoration.css3.BorderImage",t="border-box",s="",r='") ',p="sliceTop",q='url("',n="hidden",o="repeatY",m="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBorderImage(F);
}
if(G!=null){this.setSlice(G);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:v,nullable:true,apply:l},sliceTop:{check:j,init:0,apply:l},sliceRight:{check:j,init:0,apply:l},sliceBottom:{check:j,init:0,apply:l},sliceLeft:{check:j,init:0,apply:l},slice:{group:[p,x,c,y],mode:e},repeatX:{check:[k,g,f],init:k,apply:l},repeatY:{check:[k,g,f],init:k,apply:l},repeat:{group:[w,o],mode:e}},members:{__lN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lN;
},getMarkup:function(){if(this.__lN){return this.__lN;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(h);
this.__lN=[z,qx.bom.element.Style.compile({"borderImage":q+B+r+C.join(h)+h+D,position:m,lineHeight:0,fontSize:0,overflow:n,boxSizing:t,borderWidth:C.join(d)+i}),A].join(s);
return this.__lN;
},resize:function(H,I,J){H.style.width=I+i;
H.style.height=J+i;
},tint:function(a,b){},_applyStyle:function(){{};
},_resolveImageUrl:function(E){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(E));
}},destruct:function(){this.__lN=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="_applyBaseImage",s="-b",r="String",q="",o="-bl",p="qx.ui.decoration.GridDiv",m="-c",n="mshtml";
qx.Class.define(p,{extend:qx.ui.decoration.Abstract,construct:function(a,b){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:r,nullable:true,apply:t}},members:{__lO:null,__lP:null,__lQ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lO;
},getMarkup:function(){if(this.__lO){return this.__lO;
}var H=qx.bom.element.Decoration;
var I=this.__lP;
var J=this.__lQ;
var K=[];
K.push(u);
K.push(H.create(I.tl,i,{top:0,left:0}));
K.push(H.create(I.t,h,{top:0,left:J.left+l}));
K.push(H.create(I.tr,i,{top:0,right:0}));
K.push(H.create(I.bl,i,{bottom:0,left:0}));
K.push(H.create(I.b,h,{bottom:0,left:J.left+l}));
K.push(H.create(I.br,i,{bottom:0,right:0}));
K.push(H.create(I.l,g,{top:J.top+l,left:0}));
K.push(H.create(I.c,c,{top:J.top+l,left:J.left+l}));
K.push(H.create(I.r,g,{top:J.top+l,right:0}));
K.push(d);
return this.__lO=K.join(q);
},resize:function(A,B,C){var D=this.__lQ;
var innerWidth=B-D.left-D.right;
var innerHeight=C-D.top-D.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}A.style.width=B+l;
A.style.height=C+l;
A.childNodes[1].style.width=innerWidth+l;
A.childNodes[4].style.width=innerWidth+l;
A.childNodes[7].style.width=innerWidth+l;
A.childNodes[6].style.height=innerHeight+l;
A.childNodes[7].style.height=innerHeight+l;
A.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(z,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(B%2==1){A.childNodes[2].style.marginRight=j;
A.childNodes[5].style.marginRight=j;
A.childNodes[8].style.marginRight=j;
}else{A.childNodes[2].style.marginRight=k;
A.childNodes[5].style.marginRight=k;
A.childNodes[8].style.marginRight=k;
}
if(C%2==1){A.childNodes[3].style.marginBottom=j;
A.childNodes[4].style.marginBottom=j;
A.childNodes[5].style.marginBottom=j;
}else{A.childNodes[3].style.marginBottom=k;
A.childNodes[4].style.marginBottom=k;
A.childNodes[5].style.marginBottom=k;
}}}},tint:function(F,G){},_applyBaseImage:function(L,M){{};

if(L){var Q=this._resolveImageUrl(L);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var O=R[2];
var N=this.__lP={tl:P+w+O,t:P+x+O,tr:P+f+O,bl:P+o+O,b:P+s+O,br:P+y+O,l:P+e+O,c:P+m+O,r:P+v+O};
this.__lQ=this._computeEdgeSizes(N);
}},_resolveImageUrl:function(E){return qx.util.AliasManager.getInstance().resolve(E);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__lO=this.__lP=this.__lQ=null;
}});
})();


qx.$$loader.init();

