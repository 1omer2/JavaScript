/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   Kullanıcı kaç defada tahmin edebileceğini belirtsin ve bu tahmin sayısına göre puanlama yapılsın.
*/

var hak, can;
var tahmin,sayac = 0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('Kaç kerede tahmin edebileceksiniz?'));
hak = can;

//console.log('Tahmin edilecek sayi: ' + sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('0 ile 10 arasında bir sayıyı tahmin ediniz'));
    
    
    if(sayi == tahmin){
        console.log(`Tebrikler! Sayıyı ${sayac} defada doğru tahmin ettiniz...`);
        console.log(`Puanınız: ${100-(100/can)*(sayac-1)}`);
        break;
    }
    else if(sayi > tahmin){
        console.log('Edeceğiniz tahminin yönü: Yukarı');
        console.log('Kalan hak: ' , Number(hak));
    }
    else {
        console.log('Edeceğiniz tahminin yönü: Aşağı');
        console.log('Kalan hak: ' , Number(hak));
    }
   
    if(hak == 0){
        console.log('Üzgünüm, hakkınız tükendi...');
        console.log('Tahmin etmeniz gereken sayı ' + sayi + ' idi.');
    }
}

