import express from "express"
import cors from "cors"
import path from 'path';


// App Config

const app = express()
const port = process.env.PORT || 8080
const __dirname = path.resolve();
app.use('/upload', express.static(__dirname + '/upload'));

//Middleware

app.use(express.json())
app.use(cors())

//Database 

const Urunler = [
    {
    _id: 1, title: 'Kadın Ayakkabı',
    magaza:"Ayakkabı Markası",
    kategori:"kadın",
    resimadresi:"http://localhost:8080/upload/elbiseler/beyazciltderisneaker.jpg",
    oy: 4, fiyat: 180.98,
    indirim:true, indirimtutari:50
},
{
    _id: 2, title: 'Kedi Kapüşon',
    magaza:"TrendMilla",
    kategori:"kadın",
    resimadresi:"http://localhost:8080/upload/elbiseler/kedikapuson.jpg",
    oy: 3, fiyat: 92.50,
    indirim:true, indirimtutari:10
},
{
    _id: 3, title: 'Biskuvi Kapüşon Kışlık',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy: 5, fiyat: 92.58,
    resimadresi:"http://localhost:8080/upload/elbiseler/biskuvikapusonkislik.jpg",
    indirim:true, indirimtutari:10
},
{
    _id: 4, title: 'Tavşan Dokuma Pijama',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy:5,fiyat:215.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/tavsandokumapijama.jpg",
    indirim:false,indirimtutari:0
},
{
    _id: 5, title: 'James 90s Jean',
    magaza:"TrendMilla",
    kategori:"erkek",
    oy:5,fiyat:80.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/james90sjean.jpg",
    indirim:true,indirimtutari:20
}
,
{
    _id: 6, title: 'Balon Kollu Beyaz Kazak',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy:5,fiyat:50.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/balonkollubeyazkazak.jpg",
    indirim:false,indirimtutari:0
},
{
    _id: 7, title: 'Lila Tül Detaylı',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy:5,fiyat:150.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/lilatuldetayli.jpg",
    indirim:false,indirimtutari:0
},
{
    _id: 8, title: 'Sarı Kapüşon',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy:5,fiyat:120.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/sari_kapuson_kadin.jpg",
    indirim:false,indirimtutari:0
},
{
    _id: 9, title: 'Yırtık Jean Pantolon',
    magaza:"TrendMilla",
    kategori:"kadın",
    oy:5,fiyat:120.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/yirtikjean.jpg",
    indirim:true,indirimtutari:20
},
{
    _id: 9, title: 'Erkek Ekru Kapşonlu Kanguru Cepli Kolları Üç şeritli',
    magaza:"TrendMilla",
    kategori:"erkek",
    oy:5,fiyat:120.68,
    resimadresi:"http://localhost:8080/upload/elbiseler/ekrukapsonlukanguruceplikollariseritli.jpg",
    indirim:true,indirimtutari:20
},
{
    _id: 11, title: 'Unisex Güneş Gözlüğü',
    magaza:"TrendMilla",
    kategori:"unisex",
    oy:5,fiyat:195.50,
    resimadresi:"http://localhost:8080/upload/elbiseler/unisexgüneşgözlüğü.jpg",
    indirim:true,indirimtutari:70
},
{
    _id: 12, title: 'Oyun Çadırı',
    magaza:"TrendMilla",
    kategori:"oyuncak",
    oy:5,fiyat:80.25,
    resimadresi:"http://localhost:8080/upload/cocuk/oyuncadiri.jpg",
    indirim:true,indirimtutari:10
},
{
    _id: 13, title: 'Ayıcık',
    magaza:"TrendMilla",
    kategori:"oyuncak",
    oy:5,fiyat:195.50,
    resimadresi:"http://localhost:8080/upload/cocuk/ayicik.jpg",
    indirim:true,indirimtutari:70
},
{
    _id: 14, title: 'Tv Unitesi',
    magaza:"TrendMilla",
    kategori:"mobilya",
    oy:3,fiyat:500.50,
    resimadresi:"http://localhost:8080/upload/mobilya/tvunitesi.jpg",
    indirim:true,indirimtutari:30
},
{
    _id: 14, title: 'Panduflu Ayı Desenli',
    magaza:"TrendMilla",
    kategori:"cocuk",
    oy:3,fiyat:50.50,
    resimadresi:"http://localhost:8080/upload/elbiseler/pandufluayidesenli.jpg",
    indirim:true,indirimtutari:30
},
{
    _id: 15, title: 'Siyah Nice Döngü 4lü Plafonyer Tavana Monte Avize ',
    magaza:"TrendMilla",
    kategori:"mobilya",
    oy:3,fiyat:500.50,
    resimadresi:"http://localhost:8080/upload/mobilya/4luplafonyeraydinlatma.jpg",
    indirim:true,indirimtutari:30
},
{
    _id: 16, title: 'Ahşap Dekoratif 3lü Halat Raf',
    magaza:"TrendMilla",
    kategori:"mobilya",
    oy:3,fiyat:60.50,
    resimadresi:"http://localhost:8080/upload/mobilya/ahsapdekoratif3luhalatliraf.jpg",
    indirim:true,indirimtutari:30
},
{
    _id: 17, title: 'Baskılı Sweatshirt Eşofman Takımı',
    magaza:"TrendMilla",
    kategori:"cocuk",
    oy:3,fiyat:79.50,
    resimadresi:"http://localhost:8080/upload/cocuk/baskilisweatshirtesofmantakimi.jpg",
    indirim:true,indirimtutari:20
},
{
    _id: 18, title: 'Balıklı Yetişkin Kedi Pouch Konserve',
    magaza:"TrendMilla",
    kategori:"kedimamasi",
    oy:3,fiyat:25.50,
    resimadresi:"http://localhost:8080/upload/supermarket/balikliyetiskinkedipouchkonserve.jpg",
    indirim:true,indirimtutari:10
},
{
    _id: 19, title: 'Yüksek Enerji Yetişkin Köpek Maması 15kg',
    magaza:"TrendMilla",
    kategori:"kedimamasi",
    oy:3,fiyat:250,
    resimadresi:"http://localhost:8080/upload/supermarket/yuksekenerjiyetiskinkopekmamasi15kg.jpg",
    indirim:false,indirimtutari:0
},
{
    _id: 20, title: 'Erkek Siyah Yanları Şeritli Cepli Belden Bağlamalı Slim Fit Eşofman Altı',
    magaza:"TrendMilla",
    kategori:"erkek",
    oy:4,fiyat:250,
    resimadresi:"http://localhost:8080/upload/elbiseler/erkeksiyahyanlariseritliceplibeldenbaglamalislimfitesofman.jpg",
    indirim:false,indirimtutari:0
}


]


// Api Requests
app.get("/api/urunler",(req, res) => res.status(200).json(Urunler)) 

// Listen Port

app.listen(port,() => console.log(`Now Working on port:${port}`))