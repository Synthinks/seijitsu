<div class="text-center margin-bottom-20">
<h3>Advertise</h3>
KODE IKLAN DISINI
  </div>

<div class="row margin-bottom-20">
  <div class="col-md-6">
<div class="panel panel-primary">
    <div class="panel-heading text-center"><h2><i class="fa fa-shield"></i> Safe Link Converter <i class="fa fa-shield"></i></h2></div>
        <div class="panel-body text-center">
          <p class="text-primary margin-bottom-20">Encrypting your link and protect the link from viruses, malware, thief, etc!<br/>Made your link safe to visit.</p>

<div class="progress" id="daplong">
    <div class="progress-bar progress-bar-striped active six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
</div>
<button id="download2" class="alert alert-dismissible alert-success btn-lg" style='display:none'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <strong>Well done!</strong> you have successfully gained access to Decrypted Link. <i class="fa fa-hand-o-down slideInDownThumb" aria-hidden="true"></i></button>

        </div>
      </div>
</div>
  <div class="col-md-6 text-left">
<div class="panel panel-info">
  <!-- Default panel contents -->
  <div class="panel-heading"><h2><i class="fa fa-question-circle-o" aria-hidden="true"></i> How to use our tool:</h2></div>
  <div class="panel-body">
<ol>
<li>Click on <strong>How To Use</strong> menu above.</li>
<li>Click on the code and <kbd><kbd>CTRL</kbd> + <kbd>C</kbd></kbd> on your keyboard.</li>
<li>Paste the code in your HTML blog theme before the <mark>&lt;/body&gt;</mark>.</li>
<li>Save your HTML blog theme. you are done!</li>
<li>Now, your blog's outbound links was encrypted!</li>
</ol>
  </div>
</div>
</div><div class="clear"></div>
</div>

<div class="row margin-bottom-20">
  <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
  <div class="col-md-4 margin-top-25">
<div class="panel panel-success text-center">
<div class="panel-heading">
<h3 class="panel-title">
<b>Your link show here</b> <i aria-hidden="true" class="fa fa-hand-o-down"></i></h3>
</div>
<div class="panel-body">
<script src="https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js" type="text/javascript"></script>
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("http://sajitsu.blogspot.com/p/generate.html?url=", "");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
</script>
  </div>
</div>
</div>
 <div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="clear"></div>
</div>

<div class="container">
  <div class="text-left">

  </div>
</div>
6. Setelah memasukan kode diatas kedalam halaman Page lalu pilih Publish.

7. Selanjutnya membuat JavaScript untuk safelink Converter dengan cara Copy Kode berikut ini kedalam NotePad

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://alamat-url.blogspot.com/p/generate.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
8. Ubah kode http://alamat-url.blogspot.com/p/generate.html dengan url halaman yang anda buat tadi. Save Notepad dan rename ekstensi notepad .txt (Text File) menjadi .js (JavaScript)

9. Setelah anda membuat JavaScript menggunakan Notepad tadi Upload file tersebut keadlam Hosting JavaScript disini saya merekomendasikan untuk menggunakan GitHub. Daftar dan Upload JavaScript di Github. Agar JavaScript bisa digunakan dan dibaca oleh browser dengan sempurna maka gunakan Rawgit untuk mendapatkan url JavaScript blog anda.
Bagi anda yang belum paham cara Host JavaScript silahkan baca artikel Tutorial Upload JavaScrip di GitHub Gratis terbaru

10. PENTING : Setelah anda mendapatkan url JavaScript dari Rawgit yang telah anda Upload di GitHub tadi ganti seluruh kode

Java Script [Terdapat 2 Kode] https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js yang terdapat pada Template HTML Blog Safelink anda dan


Page Safelink (generate) [Terdapat 4 Kode] dengan url yang anda miliki tadi.


Dan Juga url di halaman safelink (…/p/generate.html) yang telah anda buat. Jangan lupa perhatikan apakah page anda ssl (HTTPS atau HTTP). Ganti url :

1 url rawgit javascript
1 url page safelink /p/generate.html

NB : Setelah melakukan tutorial di atas, sebenarnya anda sudah bisa langsung menggunakan Safelink dengan Convert Link secara manual di halaman utama blog safelink anda.

11. Setelah anda mengganti Link JavaScript di Template HTML dan di Blog Page Safelink (Halaman : Generate) Copy Kode dibawah ini kedalam Template HTML blog Utama yang akan di Convert di atas kode </body>

<script src='https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>
12. Ubah Url Java Script dengan Url JavaScript yang anda miliki. Tambahkan list Domain yang tidak ingin anda Redirect secara otomatis oleh safelink dengan menambahkan url di “Protected_Links”. Untuk menempatkan Iklan pada Blog Safelink silahkan ganti tulisan yang terdapat di HTML Template dan Page Sefelink (Halaman : generate) “KODE IKLAN DISINI” dengan kode iklan yang anda miliki.

DEMO
Kalau anda masih tidak bisa, contact dan beli blog safelink dengan Admin. Harga Rp. 100.000 untuk 1 blog safelink.

FAQ – Kesalahan Yang Sering Dilakukan :
Saya bisa menjamin bahwa 1000% Tutorial ini Work tanpa ada masalah, yang jadi problemnya saat pengguna tidak mengikuti tutorial dengan benar dan malah ngotot menyalahkan artikel ini. Faktanya saya sudah mengulang-ulang menggunakan Tutorial ini dan hasilnya tetap WORK tanpa ada masalah.

1. Kok pas link di kunjungi malah muncul 404 ?
Jawab : Itu karena anda tidak mengubah http ke https dan kode yang diubah juga masih menggunakan http entah di JavaScript anda di Template atau di Page Safelink belum diganti ke HTTPS.

saya sudah coba menggunakan HTTP dan ternyata memang benar hasilnya 404. Itu kesalahan yang sering dilakukan karena teledor tidak mengganti http ke https.

2. Mau ngubah link menggunakan safelink, tapi Result Link yang di Convert kok tidak Keluar ?
Terdapat kode page generate (.blogspot.com/p/generate.html) yang belum diubah di Template/Tema anda, cek Tutorial Nomor 10 bagian 2

3. Tombol Visit tidak bisa di pencet ?
Kode yang terdapat pada HTML Page Safelink yang anda buat belum diganti dengan benar.

4. Iklan Adsense Tidak muncul ?
Pastikan sudah memasang iklan di blog safelink dengan benar, dan pastikan sudah melakukan pendambahan situs baru di akun adsense anda. Tuggu beberapa menit agar iklan tampil sepenuhnya.

5. Apakah Safelink Rawan Banned akun Ads dan PPC lainnya ?
Selama 1 tahun saya menggunakan safelink tidak ada masalah yang timbul karena ini, pastikan anda tidak curang dengan meambahkan artikel yang memiliki BPK tinggi untuk mengakali pengiklan atau meletakan kode iklan dekat dengan tombol Visite tentunya aman aman saja.

6. 1 Blog Safelink bisa buat berapa Blog
Blog safelink yang dibuat bisa digunakan untuk banyak blog tanpa memiliki batasan penggunaanya

NB : Intinya, jangan ngotot nyalahin artikel orang karena ketidak telitian yang ente lakukan. Kalau pengen gampang sudah disediakan kalau emang mau beli blogspot safelink bisa langsung kontak saya. Kalau menurut agan masih kemahalan bisa gunakan Kupon “akunuub” untuk mendapatkan diskon pembuatan blog safelink 50%.

Itulah tutorial cara membuat safelink Generator di Blog sendiri. Anda juga bisa melakukan Redirect link tertentu dengan cara melakukan Convert link manual di halaman utama blog safelink anda. Jika anda mengalami masalah dalam menerapkan Safelink berikut ini diblog anda silahkan tinggalkan Komentar dibawah posting ini.

Salam kenal dari Adam Muiz !
Support mencapai 10K Subscriber yuk
😁 Terimakasih


TAGSCara Membuat Safelink GeneratorCara Membuat Safelink TerbaruCara Membuat Visit LinkPremium Safelink Blogger TemplateSafelink Converter ScriptScript SafelinkTemplate Blog SafelinkTemplate Safelink Premium Gratis
Previous article
Download Template Safelink Blogger Gratis (Work 100%)
Next article
Pengertian Perbankan : Sektor, Tujuan, Kegiatan dan Contoh
LEAVE A REPLY
Comment:
Comment:
Name:
Name:
Email:
Email:
Website:
Website:
 Save my name, email, and website in this browser for the next time I comment.

Trending
ARTIKEL PILIHAN
+3 Cara Menurunkan Suhu Prosesor PC Overheat 90°C Windows 11
CANON
Download Driver Canon MG3250 [Terbaru 2022]
 
CANON
Download Driver Canon i-SENSYS MF6580PL [Terbaru 2022]
 
CANON
Download Driver Canon MG6370 [Terbaru 2022]
 
GEOGRAFI ALAM
Pengertian Gurun – Komponen, Ciri, Bioma, Flora dan Fauna
Artikel Serupa
BLOGGING
Cara Perpanjang Domain di Niagahoster
 
BLOGGING
Pengertian CMS : Macam Jenis, Fungsi dan Contoh
 
BLOGGING
Pengertian Konten : Macam Jenis, Cara Membuat dan Contoh
 
BLOGGING
Cara Mengetahui Website Terindex Google
Download Gratis
Adam Muiz
ABOUT US
Adammuiz.com merupakan sebuah website personal yang diharapkan berguna untuk membagikan informasi pengetahuan. Konten pada website ini dibuat dengan akurat dan benar sejauh pengetahuan penulis dan tidak dimaksudkan untuk menggantikan saran formal dan individual dari seorang profesional yang memenuhi syarat.

DMCA.com Protection Status
Contact us: mail@adammuiz.com
FOLLOW US
        
Tentang Kami Contact Disclaimer Privacy Policy DM©A
© 2023 adammuiz.com, All rights reserved
