var hesapA = {
    ad: 'Ömer Müştekin',
    bakiye: 2000,
    hesapNo: '12312331',
    ekHesap: 1000 
}

var hesapB = {
    ad: 'Sevgi Yıldırım',
    bakiye: 4000,
    hesapNo: '54416094',
    ekHesap: 2000 
}

function paraCek(hesap,miktar)
{
    console.log(`Hoşgeldiniz sayın ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye -= miktar;                         //para çekme işlemi sonrası çekilen miktarın hesaptan düşmesi gerek.
        console.log('Paranızı çekebilirsiniz.');
    }
    else{
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam >= miktar){
            if(confirm(' Üzgünüz, ana hesabınızdaki bakiye yapmak istediğiniz işlem için yeterli değil. \n İşleme devam etmek için ek hesabınızı kullanmak ister misiniz?')){
                console.log('Paranızı çekebilirsiniz');
                var bakiye = hesap.bakiye;                 //bakiye bilgisini hesap içerisinden aldık
                var ekhesap = miktar - bakiye;             //ek hesaptan ne kadar çekileceğini miktardan bakiyeyi çıkarırsak öğreniriz.
                hesap.bakiye = 0;                          //hesap objesinin bakiyesini sıfırlarız çunku bu kısımda tamamını kullanacağız.
                hesap.ekhesap-=ekhesap;
                }
            else{
                    console.log(`Üzgünüz, ${hesap.hesapNo} numaralı hesabınızda bu işlem için yeterli bakiye bulunmamaktadır`);  
                }
            }
    else{
        console.log('Üzgünüz, bakiye yetersiz'); }
        }
         
}        
paraCek(hesapA,2000);
paraCek(hesapA,1000);
