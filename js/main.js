/*Menu Bar*/
let nav_menu = document.getElementById('active-sidemenu');
        let menu_btn =  document.getElementById("menu-btn");
        let bar1 = document.getElementById('bar1');
        let bar2 = document.getElementById('bar2');
        let bar3 = document.getElementById('bar3');
        var isOpen = false;
        menu_btn.addEventListener('click',function()
        {
            if(isOpen)
            {
                nav_menu.style.left = '-100%';
                isOpen = false;
                bar1.style.width='35px';
                bar2.style.width='25px';
                bar3.style.width='15px';
            }
            else{
                nav_menu.style.left = '-10px';
                isOpen = true;
                bar1.style.width='15px';
                bar2.style.width='25px';
                bar3.style.width='35px';
            }

        });

        window.addEventListener('scroll',()=>{
            let header  = document.querySelector('header');
            let banner = document.getElementById('banner');
            if(window.pageYOffset>200)
            {
                header.classList.add('sticky');
                banner.classList.add('top'); 
            } else{
                header.classList.remove('sticky');
                banner.classList.remove('top'); 
            }
        })

        