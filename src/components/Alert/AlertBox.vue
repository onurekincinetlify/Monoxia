<template>
   <div v-if="!isAccapted" id="rootofbox" :class="[{active2:isActive2 === false, notActive2:isActive2 === true}]">
      <div class="box">

         <div id="header">
            <h1>{{headerText}}</h1>
         </div>

         <div id="picture">
            <img width="200" height="315" :src="pictureUrl" alt="Monoxia">
            <div id="description">
               <p>{{descriptionText}}</p>
            </div>
         </div>

         <div id="buttons">
            <button id="settings" @click="show=true">Çerezleri Ayarla</button>
            <button :class="{active: bvn==='Önceki', notActive : bvn===''}" id="back" @click="backFunc">{{bvn}}</button>
            <button id="next" @click="nextFunc">{{svd}}</button>
         </div>

      </div>

      <div :class="{active : show == true, notActive:show==false}" id="CookieSettingsBox">
         <input checked type="checkbox" id="vehicle1" name="vehicle1">
            <label for="vehicle1"> Verilerim alınabilir ve kaydedilebilir.</label><br>
         <input checked type="checkbox" id="vehicle2" name="vehicle2">
            <label for="vehicle2"> Verilerim paylaşılabilir ve incelenebilir.</label><br>
         <input checked type="checkbox" id="vehicle3" name="vehicle3">
            <label for="vehicle3"> Verilerim silinebilir ya da değiştirilebilir.</label><br><br>
         <button @click="show = false" class="close">Save and Close</button>
      </div>

   </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useCookieStore } from '/src/stores/cookieStore';
import axios from 'axios';

// Çerezler için gerekli değişkenler.
const isAccapted = ref(localStorage.getItem('isCookieAccepted')); // Çerezler kabul edildi mi yoksa daha önce hiç onaylanmadı mı ?
const isActive2 = ref(true);

// Çerez kutusu için gerekli değişkenler.
const count = ref(1);
const show = ref(false)
const svd = ref("Sonraki")
const bvn = ref("")


// Çerez kutusunun içeriği.
const obj = reactive({
   hayvan1 : {
      name : "Kullanım Koşulları",
      description : "Lütfen aşağıdaki kullanım koşullarını dikkatlice okuyunuz. 'Monoxia' adlı grafik tasarım projesini kullanarak, aşağıdaki şartlara uymayı kabul etmiş sayılırsınız:Telif Hakkı: Monoxia grafik tasarım projesi, telif hakkı ile korunmaktadır. Proje içerisindeki tüm grafikler, logolar, görseller ve diğer materyaller Monoxia veya ilgili telif hakkı sahibi tarafından mülkiyeti korunan materyallerdir. Bu materyalleri kullanma hakkı, size proje sahibi tarafından verilen izinle sınırlıdır. Tüm telif hakkı ve diğer mülkiyet hakları Monoxia veya ilgili telif hakkı sahibine aittir.Kullanım İzinleri: Monoxia grafik tasarım projesi, sadece kişisel veya ticari kullanım amaçlı olarak kullanılabilir. Proje, herhangi bir şekilde yeniden dağıtılamaz, satılamaz veya kiralanamaz. Monoxia'nın veya ilgili telif hakkı sahibinin izni olmadan, proje içerisindeki materyallerin herhangi bir şekilde değiştirilmesi, kopyalanması veya dağıtılması yasaktır.Sorumluluk Reddi: Monoxia grafik tasarım projesinin kullanımından kaynaklanan herhangi bir zarar veya kayıptan Monoxia veya ilgili telif hakkı sahibi sorumlu tutulamaz. Projeyi kullanırken, tüm riskleri ve sorumlulukları kabul ettiğinizi beyan edersiniz. Monoxia, proje içerisindeki materyallerin doğruluğu, güvenilirliği veya uygunluğu konusunda herhangi bir garanti vermez.Fikri Mülkiyet: Monoxia grafik tasarım projesi içerisinde bulunan fikirler, tasarımlar veya diğer materyaller üzerinde herhangi bir fikri mülkiyet hakları talebi bulunmamaktadır. Projeyi kullanarak, Monoxia'ya veya ilgili telif hakkı sahibine herhangi bir fikri mülkiyet hakları talep etme hakkı verilmez. Yetki ve Değişiklik: Monoxia, bu kullanım koşullarını istediği zaman değiştirme veya güncelleme hakkını saklı tutar. Güncellenmiş kullanım koşulları, Monoxia web sitesinde yayınlandıktan sonra geçerli olacaktır. Projeyi kullanmaya devam etmek, güncellenmiş kullanım koşullarını kabul ettiğiniz anlamına gelir.",
      picture : "/images/greek1.png"
   },
   hayvan2 : {
      name : "Kullanıcı Sözleşmesi",
      description : 'Lütfen aşağıdaki kullanıcı sözleşmesini dikkatlice okuyunuz. "Monoxia" adlı web sitesini veya hizmetlerini kullanarak, aşağıdaki şartlara uymayı kabul etmiş sayılırsınız: Hizmet Kullanımı: Monoxia web sitesi ve hizmetleri, yalnızca kişisel veya ticari kullanım amaçlı olarak kullanılabilir. Web sitesinde yer alan içeriği, yasalara ve bu sözleşmeye uygun olarak kullanmanız gerekmektedir. Monoxia, web sitesinin sürekli ve kesintisiz erişilebilir olacağını garanti etmez. Ayrıca, herhangi bir bildirimde bulunmadan web sitesini veya hizmetleri değiştirme veya sonlandırma hakkını saklı tutar. Hesap Oluşturma: Bazı hizmetlerimizi kullanmak için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizi doğru, güncel ve güvenli tutmanız önemlidir. Hesabınızın güvenliğinden siz sorumlusunuz ve hesabınızı başkalarıyla paylaşmamalısınız. Monoxia, hesap bilgilerinizin yetkisiz kullanımından kaynaklanan herhangi bir sorumluluğu kabul etmez. Kullanıcı Sorumluluğu: Web sitesini veya hizmetleri kullanırken, aşağıdaki davranışları sergilememeniz gerekmektedir: a. Yasadışı faaliyetlerde bulunmak veya yasadışı içerik yayınlamak. b. Başka kullanıcıların gizlilik haklarını ihlal etmek veya taciz etmek. c. Monoxia veya üçüncü şahıslara zarar verecek veya itibarlarını zedeleyecek davranışlarda bulunmak. d. Monoxia web sitesine veya hizmetlerine zarar verecek veya işleyişini engelleyecek faaliyetlerde bulunmak. e. İzinsiz olarak Monoxia`nın telif hakkıyla korunan içeriğini kullanmak veya dağıtmak. Fikri Mülkiyet Hakları: Monoxia web sitesi ve hizmetleri, telif hakkı ve diğer fikri mülkiyet hakları ile korunmaktadır. Web sitesinde yer alan tüm içerik ve materyaller, Monoxia veya ilgili telif hakkı sahibinin mülkiyetindedir. Bu içeriği kullanma hakkı, size Monoxia tarafından sınırlı bir lisans verildiği sürece geçerlidir. Herhangi bir şekilde Monoxia`nın veya ilgili telif hakkı sahibinin izni olmadan içeriği kopyalamak, dağıtmak veya değiştirmek yasaktır. Gizlilik Politikası: Monoxia`nın gizlilik politikasını okuyunuz. Gizlilik politikası, web sitesi ve hizmetlerin kullanımı sırasında kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar. Sorumluluk Reddi: Monoxia, web sitesi veya hizmetlerin kullanımından kaynaklanan herhangi bir zarardan veya kayıptan sorumlu tutulamaz. Monoxia, web sitesinde yer alan bilgilerin doğruluğunu, güncelliğini veya eksiksizliğini garanti etmez. Değişiklikler: Monoxia, kullanıcı sözleşmesini istediği zaman değiştirme veya güncelleme hakkını saklı tutar. Güncellenmiş sözleşme, Monoxia web sitesinde yayınlandıktan sonra geçerli olacaktır. Web sitesini veya hizmetleri kullanmaya devam etmek, güncellenmiş sözleşmeyi kabul ettiğinizi gösterir.',
      picture : "/images/greek3.png"
   },
   hayvan3 : {
      name : "Gizlilik Sözleşmesi",
      description : 'Bu gizlilik sözleşmesi, "Monoxia" adlı web sitesinin kullanıcıları için geçerlidir. Lütfen aşağıdaki gizlilik politikasını dikkatlice okuyunuz: Toplanan Bilgiler: Monoxia, web sitesini ziyaret ettiğinizde kişisel olarak tanımlanabilir bilgileri toplayabilir. Bu bilgiler arasında adınız, e-posta adresiniz, demografik bilgiler ve diğer kişisel bilgiler yer alabilir. Bu bilgiler, web sitesindeki hizmetlerden yararlanmanızı sağlamak, taleplerinizi yerine getirmek, size bilgi sağlamak veya pazarlama amaçlarıyla kullanılabilir. Çerezler: Monoxia, web sitesinde çerezleri kullanabilir. Çerezler, web tarayıcınız tarafından bilgisayarınıza kaydedilen küçük metin dosyalarıdır. Bu çerezler, tercihlerinizi hatırlamak, web sitesinin kullanımını analiz etmek ve size daha iyi bir kullanıcı deneyimi sunmak için kullanılabilir. Çerezleri reddetmek veya silmek için tarayıcı ayarlarınızı değiştirebilirsiniz, ancak bu durumda bazı web sitesi fonksiyonlarından tam olarak yararlanamayabilirsiniz. Bilgi Paylaşımı: Monoxia, topladığı kişisel bilgileri üçüncü taraflarla paylaşmayacaktır, ancak aşağıdaki durumlarda bilgilerinizi paylaşabilir: Kanunun gerektirdiği durumlarda veya yasal taleplere uymak için. Web sitesinin sağladığı hizmetleri yürütmek veya geliştirmek için yetkilendirilmiş hizmet sağlayıcılarla. Kullanıcının açık iznini aldığı durumlarda. Güvenlik: Monoxia, kişisel bilgilerinizin güvenliğini korumak için uygun teknik ve idari önlemleri alır. Bununla birlikte, internet üzerinden iletilen bilgilerin tam güvenliğini garanti etmek mümkün değildir. Monoxia, bilgilerinizi korumak için makul çabayı sarf eder, ancak herhangi bir güvenlik ihlali durumunda sorumluluk kabul etmez. Harici Bağlantılar: Monoxia web sitesi, diğer web sitelerine veya kaynaklara bağlantılar içerebilir. Bu harici bağlantılar üzerinde kontrolümüz olmadığından, bu sitelerin gizlilik uygulamaları veya içeriklerinden sorumlu değiliz. Harici siteleri ziyaret ettiğinizde, o sitenin gizlilik politikasını okumanız önerilir. Değişiklikler: Monoxia, gizlilik politikasını istediği zaman değiştirme veya güncelleme hakkını saklı tutar. Güncellenmiş politika, Monoxia web sitesinde yayınlandıktan sonra geçerli olacaktır. Web sitesini kullanmaya devam etmek, güncellenmiş politikayı kabul ettiğinizi gösterir.',
      picture : "/images/greek2.png"
   }
})

// Çerez kutusunun değişken yapıları.
const headerText = ref(`${obj.hayvan1.name}`)
const descriptionText = ref(`${obj.hayvan1.description}`)
const pictureUrl = ref(`${obj.hayvan1.picture}`)

// Çerez kutusunun geçişleri ve onayı.
const backFunc = () => {
   if (count.value == 1) {
      count.value = 3
      headerText.value = `${obj.hayvan3.name}`;
      descriptionText.value = `${obj.hayvan3.description}`;
      pictureUrl.value = `${obj.hayvan3.picture}`;
      svd.value = "Sonraki"
   }
   else if (count.value == 2) {
      count.value--
      headerText.value = `${obj.hayvan1.name}`;
      descriptionText.value = `${obj.hayvan1.description}`;
      pictureUrl.value = `${obj.hayvan1.picture}`;
      bvn.value=""
      svd.value = "Sonraki"
   }
   else if (count.value == 3) {
      count.value--
      headerText.value = `${obj.hayvan2.name}`;
      descriptionText.value = `${obj.hayvan2.description}`;
      pictureUrl.value = `${obj.hayvan2.picture}`;
      svd.value = "Sonraki"
   }
}

const nextFunc = () => {
   if (count.value === 1) {
      count.value++
      headerText.value = `${obj.hayvan2.name}`;
      descriptionText.value = `${obj.hayvan2.description}`;
      pictureUrl.value = `${obj.hayvan2.picture}`;
      bvn.value = "Önceki"
   }
   else if (count.value == 2) {
      count.value++
      headerText.value = `${obj.hayvan3.name}`;
      descriptionText.value = `${obj.hayvan3.description}`;
      pictureUrl.value = `${obj.hayvan3.picture}`;
      svd.value = "Kaydet"
   }
   else if (count.value == 3) {
      // Çerezlerin kabul edildiğini Localstorage'a kaydet.
      useCookieStore().acceptCookie();
      // Çerezlerin kabulu hakkındaki bilgileri Firebase'e gönder.
      const vehicle1: HTMLInputElement | null = document.getElementById('vehicle1') as HTMLInputElement;
      const vehicle2: HTMLInputElement | null = document.getElementById('vehicle2') as HTMLInputElement;
      const vehicle3: HTMLInputElement | null = document.getElementById('vehicle3') as HTMLInputElement;
      axios.get('https://api.ipify.org').then((response) => {
         const ip = response.data;
         axios.post('https://monoxia-5c690-default-rtdb.firebaseio.com/cookie.json', {
            'D-R-S': vehicle1?.value,
            'D-S-A': vehicle2?.checked,
            'D-D-C': vehicle3?.checked,
            'Kullanım Koşulları': 'Kabul Edildi',
            'Gizlilik Sözleşmesi': 'Kabul Edildi',
            'Kullanıcı Sözleşmesi': 'Kabul Edildi',
            Time: new Date().toLocaleString(),
            ip: ip
         }).then((res) => {
            isActive2.value = false;
         }).catch((error) => {
            isActive2.value = false;
         });
      }).catch((error) => {
         return false;
      });
   }
}
</script>

<style lang="scss" scoped>
@import "/public/scss/Alert/AlertBoxStyle.scss";
</style>
