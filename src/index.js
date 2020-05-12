import {renderTemplate} from './template.js';
import {renderHome} from './home.js';
import {renderServices} from './service.js';
import {renderContact} from './contact.js';

(function component() {
    
    let homePage = renderHome();
    renderTemplate(homePage);
    const contentView = document.querySelector('article');
    const tabItems = document.querySelectorAll('.tabItem');
    const renderFunctions = {
        home: renderHome(),
        services: renderServices(),
        contact: renderContact(),
    }
    for(let item of tabItems){
        item.addEventListener("click", () => {
            let page = renderFunctions[`${item.id}`];
            contentView.innerHTML = page;
            for(let item of tabItems){
                item.classList.remove('active');
            };
            item.classList.add('active');
        });
    };
    tabItems[0].classList.add('active');
})();
  
