(function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e,n,i){var r,o;this.form=e,this.codeOut=n,this.oldPgkernel=i,this._appCacheUpdated=t(this._appCacheUpdated,this),this._initAppcache=t(this._initAppcache,this),this._notSizeValues=t(this._notSizeValues,this),this._formatedValue=t(this._formatedValue,this),this._hightlightCode=t(this._hightlightCode,this),this._kernelSettings=t(this._kernelSettings,this),this._postgresSettings=t(this._postgresSettings,this),this._generateConfig=t(this._generateConfig,this),this._mobileNextButton=t(this._mobileNextButton,this),this._generateConfigForm=t(this._generateConfigForm,this),this.form.submit(this._generateConfigForm),Modernizr.touch&&($("#pgtTotalMemValue").on("keydown",this._mobileNextButton),$("#pgtConnectionsValue").on("keydown",this._mobileNextButton)),this._initAppcache(),this.constSize={KB:1024,MB:1048576,GB:1073741824,TB:1099511627776,KB_PER_GB:1048576,KB_PER_MB:1024},this.conByType={web:200,oltp:300,dw:20,desktop:5,mixed:100};try{$(document).foundation()}catch(o){r=o,null!=console.warn&&console.warn("Too old browser :(")}}return e.prototype._generateConfigForm=function(e){return e.preventDefault(),$("span.clearHintForUser").remove(),this._generateConfig()},e.prototype._mobileNextButton=function(e){return null!=e.which&&9===e.which?this.form.submit():void 0},e.prototype._generateConfig=function(){var e,t;return this.dbVersion=parseFloat($("#pgtDbVersionValue").val()),this.osType=$("#pgtOsTypeValue").val(),-1===jQuery.inArray(this.osType,["linux","windows"])&&(this.osType="linux"),this.dbType=$("#pgtDbTypeValue").val(),null==this.conByType[this.dbType]&&(this.dbType="mixed",$("#pgtDbTypeValue").val(this.dbType)),e=this.constSize[$("#pgtTotalMemMeasValue").val()],null==e&&(e=this.constSize.GB),t=parseInt($("#pgtTotalMemValue").val(),10),(1>t||t>9999)&&(t=2,$("#pgtTotalMemValue").val(t)),this.totalMemory=parseInt(t,10)*e,this._postgresSettings(),this._kernelSettings(),this._hightlightCode()},e.prototype._postgresSettings=function(){var e,t,n,i,r,o,s,a;return t={max_connections:this.conByType[this.dbType]},$("#pgtConnectionsValue").val().length&&(t.max_connections=parseInt($("#pgtConnectionsValue").val(),10)),(t.max_connections<1||t.max_connections>9999)&&(t.max_connections=this.conByType[this.dbType]),r=this.totalMemory/this.constSize.KB,n="",this.totalMemory>=256*this.constSize.MB?(t.shared_buffers={web:Math.floor(r/4),oltp:Math.floor(r/4),dw:Math.floor(r/4),desktop:Math.floor(r/16),mixed:Math.floor(r/4)}[this.dbType],"windows"===this.osType&&t.shared_buffers>512*this.constSize.MB/this.constSize.KB&&(t.shared_buffers=512*this.constSize.MB/this.constSize.KB),t.effective_cache_size={web:Math.floor(3*r/4),oltp:Math.floor(3*r/4),dw:Math.floor(3*r/4),desktop:Math.floor(r/4),mixed:Math.floor(3*r/4)}[this.dbType],a=(r-t.shared_buffers)/(3*t.max_connections),t.work_mem={web:Math.floor(a),oltp:Math.floor(a),dw:Math.floor(a/2),desktop:Math.floor(a/6),mixed:Math.floor(a/2)}[this.dbType],t.maintenance_work_mem={web:Math.floor(r/16),oltp:Math.floor(r/16),dw:Math.floor(r/8),desktop:Math.floor(r/16),mixed:Math.floor(r/16)}[this.dbType],t.maintenance_work_mem>2*this.constSize.GB/this.constSize.KB&&(t.maintenance_work_mem=Math.floor(2*this.constSize.GB/this.constSize.KB))):n="# WARNING\n# this tool not being optimal \n# for low memory systems\n",this.dbVersion<9.5?t.checkpoint_segments={web:32,oltp:64,dw:128,desktop:3,mixed:32}[this.dbType]:(t.min_wal_size={web:1024*this.constSize.MB/this.constSize.KB,oltp:2048*this.constSize.MB/this.constSize.KB,dw:4096*this.constSize.MB/this.constSize.KB,desktop:100*this.constSize.MB/this.constSize.KB,mixed:1024*this.constSize.MB/this.constSize.KB}[this.dbType],t.max_wal_size={web:2048*this.constSize.MB/this.constSize.KB,oltp:4096*this.constSize.MB/this.constSize.KB,dw:8192*this.constSize.MB/this.constSize.KB,desktop:100*this.constSize.MB/this.constSize.KB,mixed:2048*this.constSize.MB/this.constSize.KB}[this.dbType]),t.checkpoint_completion_target={web:.7,oltp:.9,dw:.9,desktop:.5,mixed:.9}[this.dbType],null!=t.shared_buffers&&(t.wal_buffers=Math.floor(3*t.shared_buffers/100),t.wal_buffers>16*this.constSize.MB/this.constSize.KB&&(t.wal_buffers=Math.floor(16*this.constSize.MB/this.constSize.KB)),14*this.constSize.MB/this.constSize.KB<(o=t.wal_buffers)&&o<16*this.constSize.MB/this.constSize.KB&&(t.wal_buffers=Math.floor(16*this.constSize.MB/this.constSize.KB))),t.default_statistics_target={web:100,oltp:100,dw:500,desktop:100,mixed:100}[this.dbType],e=function(){var e;e=[];for(i in t)s=t[i],e.push(i+" = "+this._formatedValue(i,s));return e}.call(this),this.codeOut.text(""+n+e.join("\n"))},e.prototype._kernelSettings=function(){var e,t,n;return t=$("#oldPostgresBlock"),"windows"===this.osType||this.dbVersion>9.3?t.hide():(n=Math.floor(this.totalMemory/8192),e="kernel.shmmax="+4096*n+"\nkernel.shmall="+n,this.oldPgkernel.text(e),t.find(".pg_version").text(this.dbVersion),t.show())},e.prototype._hightlightCode=function(){return $("pre code").each(function(e,t){return $(t).removeClass("hljs"),hljs.highlightBlock(t)})},e.prototype._formatedValue=function(e,t){var n;return-1!==jQuery.inArray(e,this._notSizeValues())?""+t:(t%this.constSize.KB_PER_GB===0?(t=Math.floor(t/this.constSize.KB_PER_GB),n="GB"):t%this.constSize.KB_PER_MB===0?(t=Math.floor(t/this.constSize.KB_PER_MB),n="MB"):n="kB",""+t+n)},e.prototype._notSizeValues=function(){return["max_connections","checkpoint_segments","checkpoint_completion_target","default_statistics_target","random_page_cost","seq_page_cost"]},e.prototype._initAppcache=function(){return Modernizr.applicationcache===!0?window.applicationCache.addEventListener("updateready",this._appCacheUpdated,!1):void 0},e.prototype._appCacheUpdated=function(e){return window.applicationCache.status===window.applicationCache.UPDATEREADY&&confirm("A new version of this app is available. Load it?")?window.location.reload():void 0},e}(),$(function(){return $("#pgTuneForm").length&&$("#postgresConfigOut").length&&$("#postgresOldkernelOut").length?new e($("#pgTuneForm"),$("#postgresConfigOut"),$("#postgresOldkernelOut")):void 0})}).call(this);