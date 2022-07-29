
$(function(){


    //.video_wrap .intro_box span

    gsap.to(".video_wrap .intro_box span",{
        scrollTrigger:{
            trigger:".main_intro",
            start:"top top",
            end:"bottom top",
           //markers:true,
            scrub:1
        },
        margin:"30px 0",   
        "filter":"blur(32px)",
    })


    gsap.to(".body_bg",{
        scrollTrigger:{
            trigger:"body",
            start:"top top",
            end:"bottom top",
            //markers:true,
            scrub:1
        },
        yPercent:100,
    })

    $('.motion01').each(function(index,item){

        startEl = $(this).data('start') ? $(this).data('start') : item;
        yVal = $(this).data('y') ? $(this).data('y') : 20;


        //다른방식

        //if($(this).data('start')){
       //     startEl = $(this).data('start')
        // }else{
       //     startEl =  item
       //  }

        // alert(startEl);
        
        gsap.to(item,{
            scrollTrigger:{
                trigger:startEl,
                start:"30% 80%",
                end:"bottom top",
                scrub:1,
                //markers:true,
            },
            yPercent:yVal

        })
    })

    $('.motion02').each(function(index,item){

        startEl = $(this).data('start') ? $(this).data('start') : item;
        yVal = $(this).data('y') ? $(this).data('y') : -10;


        gsap.to(item,{
            scrollTrigger:{
                trigger:startEl,
                start:"top 80%",
                end:"bottom top",
                scrub:1,
                //markers:true,
            },
            yPercent:yVal

        })
    })


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3.7,
        spaceBetween: 30,
    });


    gsap.from(".collection .collection_top h2",{
        scrollTrigger:{
            trigger:".collection",
            start:"top 70%",
            end:"15% 10%",
             //markers:true,
            scrub:1
        },
        xPercent:-40,
        opacity:0.6, 
    }) 

    $(".motion03").each(function(index, item){

    gsap.from(item,{
      scrollTrigger:{
        trigger:item,
        start:"-30% 80%",
        end:"center 100%",
        scrub:1,
       // markers:true,
      },
      //y:100,
    
      yPercent:30,
      opacity:0.5, 
      stagger:0.1, 
    }) 

    }) 


    // 하단 마크 x로 이동

    //gsap.registerPlugin(ScrollTrigger);

    

}) 


