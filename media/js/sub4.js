// var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 10,
//     slidesPerView: 6,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });
//   var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 10,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//       swiper: galleryThumbs
//     }
//   });




      // swiper_tab
      $(document).ready(function() {
        var swiper_tab = new Swiper('.map_explain', {
          autoHeight: true,
          speed : 500
        });
  
        swiper_tab.on('slideChange', function () {
          $(".tabs .active").removeClass('active');
          $(".tabs a").eq(swiper_tab.activeIndex).addClass('active');
        });
        
        $(".tabs a").on('touchstart mousedown', function(e) {
          e.preventDefault();
          $(".tabs .active").removeClass('active');
          
          $(this).addClass('active');
  
          //swiper.swipeTo($(this).index());					
          swiper_tab.slideTo($(this).index());
        });
        
        $(".tabs a").click(function(e) {
        
          e.preventDefault();
        
        });
     
        var tdata = [ 
          {
              'maptt': 'Broken Moon', 
              'mapexp1': '<span>Boreas&#39; moon, Cleo, was once whole</span>—until a meteor and a myth broke it apart. The impact not only caused surface-level destruction but also sent the entire planet on a path to destruction due to devastating weather events. It wasn&#39;t until researchers discovered the link that the nations of Boreas came together and promised to heal Cleo, naming their efforts Project Hop .', 
              'mapexp2': 'What previously was an unoccupied satellite became a teeming colony of researchers, engineers, and builders. However, long years and slow progress caused the peoples&#39; hearts and wallets to turn from Hope. This forced the Cleo Restoration Committee to privatize the moon for funding, adding townhomes, shopping centers, and prestige burial plots. Now, Cleo is a collection of public and private enterprises, including the Apex Game , all with the hope of saving Cleo and Boreas.', 
              'mapbtn': 'view'
          },
          {
              'maptt': 'E District', 
              'mapexp1': '<span>Electro District was once a populous island</span>district in the city of Suotamo, home to Gaea&#39;s most luxurious shopping mall, a bustling business center, and lively nightlife. The lights faded when a massive storm hit Storm Point and knocked out the District&#39;s primary energy supply, leading to power scarcity, riots, and uprisings about its distribution.', 
              'mapexp2': 'Amidst the turmoil, the Legend Alter crashed a ship into Humbert Labs, causing stored toxic chemicals to spread throughout the district, which led to the area being evacuated. The Syndicate saw potential in the abandoned E-District, purchased rights to the land, and spent a massive sum cleaning up the toxic chemicals and making repairs. Now its neon light  illuminate the clash between Legends as they fight in the Apex Games.',
              'mapbtn': 'view'
          },
          {
              'maptt': 'Kings Canyon', 
              'mapexp1': '<span>Once a simple settlement on Solace,</span>the island known as Kings Canyon only thrived after the IMC chose it as a hub for research and development, housing an airbase, a water treatment plant, and a plethora of other facilities. Secretly, it was also home to underground facilities that hid the IMC&#39;s more radical operations, like a highly classified project on Phase tec  and a program to create a simulacra arm .', 
              'mapexp2': 'In the years since the IMC left, the island has undergone many changes due to Syndicate construction projects and freak incidents, including the destruction of the Repulsor Towe  and an explosion that sank Thunderdome and Skulltow . Now, the Syndicate is further altering the landscape with terraforming projects and salvage operations for Reli  (formerly Skull Town), ensuring Kings Canyon remains the first home of the Apex Games.',
              'mapbtn': 'view'
          },
          {
              'maptt': 'Olympus', 
              'mapexp1': '<span>Once a city built on dreams,</span>Olympus was a utopia floating in clouds above Psamathe, where the brightest minds in the Outlands gathered and exchanged ideas, leading to breakthroughs in the sciences and arts. However, an accident in an experimental research facility led to the creation of the Phase Rif  (a massive bubble of Phase energy), causing the Outlands&#39; best and brightest to quickly abandon the city.', 
              'mapexp2': 'With the support of the Mercenary Syndicate, Hammond Robotics stepped in to transform Olympus into a new stage for the Apex Games. Since then, a ship from the Icarus Fleet brought a deadly virus and powerful Medusa Vine  to the city. Additionally, a disastrous attempt to transport Olympus using phase technology sent the city into a tailspin, littering its structures across the terrain as it stabilized.',
              'mapbtn': 'view'
          },
          {
              'maptt': 'Storm Point', 
              'mapexp1': '<span>This deserted island, beautiful and teeming with resources,</span>was the prime candidate for early IMC expeditions to planet Gaea. However, the IMC quickly discovered that intense tropical storms plague the island, leading them to build power-generating storm catcher  on Storm Point to support the nearby permanent settlement of Suotamo.', 
              'mapexp2': 'When the IMC pulled out, the storm catchers fell into disrepair. The absence of a functional storm catcher exacerbated the storms, causing them to overtake the island. After the Syndicate Treaty, many storm catchers were restored, but a survey revealed previously unknown settlements with no survivors. Now, the island is used for the Apex Games, with Spectre  roaming fully-stocked IMC Armories, presenting competitors with a new challenge amidst the dangerous wildlif .',
              'mapbtn': 'view'
          },
          {
              'maptt': 'Worlds Edge', 
              'mapexp1': '<span>A harsh planet beset by intense volcanic activity,</span>Talos was once deemed uninhabitable until a rare mineral compound was found beneath its surface. The IMC built heat-reducing towers to super-cool Talos&#39;s natural lava flows, allowing resource extraction at the facility optimistically dubbed “New Dawn.  The facility was later abandoned after an explosion caused a lethal flash freez  across the surrounding area.', 
              'mapexp2': 'Over time, World&#39;s Edge drew the attention of the Mercenary Syndicate and Hammond Robotics, who sought to exploit the planet\'s energy-rich soil. Their experimental technologies made the planet unstable, forcing a community of hunters led by Bloodhoun  to relocate. Today, World&#39;s Edge continues to be the second home of the Apex Games and a key operational center for Hammond Robotics, opening a museum in an attempt to divert from controversy.',
              'mapbtn': 'view'
          }
      ]
          var text = document.getElementById('maps_exp');
          var output ='';
          output +='<dl>';
          output +='<dt>'+ tdata[0].maptt +'</dt>';
          output +='<dd>'+ tdata[0].mapexp1 +'</dd>'; 
          output +='<dd>'+ tdata[0].mapexp2 +'</dd>'; 
          // output +='<dd>'+ '<a href="">' + tdata[0].mapbtn + '</a>' +'</dd>'; 
          output +='</dl>';  
          text.innerHTML = output;
  
          swiper_tab.on('transitionEnd', function() {
              //console.log(swiper_tab.realIndex);
              var sind = swiper_tab.realIndex;  // 0~9
              
              output ='<dl>';
              output +='<dt>'+ tdata[sind].maptt +'</dt>';
              output +='<dd>'+ tdata[sind].mapexp1 +'</dd>';
              output +='<dd>'+ tdata[sind].mapexp2 +'</dd>';
              // output +='<dd>'+ '<a href="">' + tdata[sind].mapbtn + '</a>' +'</dd>'; 
              output +='</dl>';  
              text.innerHTML = output;
          });
        });




    //     document.addEventListener('DOMContentLoaded', function() {
    //       // 필요한 DOM 요소 가져오기
    //       var modal = document.getElementById("myModal");
    //       var btn = document.getElementById("openModalBtn");
    //       var span = document.getElementsByClassName("close-btn")[0];
      
    //       // 1. <a> 태그를 클릭하면 모달을 엽니다.
    //       btn.onclick = function(event) {
    //           event.preventDefault(); // a 태그의 기본 동작(페이지 이동/새로고침) 방지
    //           modal.style.display = "block";
    //       }
      
    //       // 2. 닫기 버튼(X)을 클릭하면 모달을 닫습니다.
    //       span.onclick = function() {
    //           modal.style.display = "none";
    //       }
      
    //       // 3. 사용자가 모달 외부(검은 배경)를 클릭하면 모달을 닫습니다.
    //       window.onclick = function(event) {
    //           if (event.target == modal) {
    //               modal.style.display = "none";
    //           }
    //       }
    //   });

    //   var sdata = [ 
    //     {
    //         'NameM':'bm'
    //         'imgsrc': './images/sub4/bm4.png'
    //     },
    //     {
    //       'NameM':'ed'
    //         'maptt': 'E District', 
    //     },
    //     {
    //       'NameM':'kc'
    //         'maptt': 'Kings Canyon', 
    //     },
    //     {
    //         'NameM':'op'
    //         'maptt': 'Olympus', 
    //     },
    //     {
    //         'NameM':'sp'
    //         'maptt': 'Storm Point', 
    //     },
    //     {
    //        'NameM':'we'
    //         'maptt': 'Worlds Edge', 
    //     }
    // ]

    // var text = document.getElementById('"myModal');
    // var output ='';
    // output +='<dl>';
    // output +='<dt>'+ tdata[0].maptt +'</dt>';
    // output +='<dd>'+ tdata[0].mapexp1 +'</dd>'; 
    // output +='<dd>'+ tdata[0].mapexp2 +'</dd>'; 
    // output +='<dd>'+ '<a href="">' + tdata[0].mapbtn + '</a>' +'</dd>'; 
    // output +='</dl>';  
    // text.innerHTML = output;

    // swiper_tab.on('transitionEnd', function() {
    //     //console.log(swiper_tab.realIndex);
    //     var sind = swiper_tab.realIndex;  // 0~9
        
    //     output ='<dl>';
    //     output +='<dt>'+ tdata[sind].maptt +'</dt>';
    //     output +='<dd>'+ tdata[sind].mapexp1 +'</dd>';
    //     output +='<dd>'+ tdata[sind].mapexp2 +'</dd>';
    //     output +='<dd>'+ '<a href="">' + tdata[sind].mapbtn + '</a>' +'</dd>'; 
    //     output +='</dl>';  
    //     text.innerHTML = output;
    // });


    