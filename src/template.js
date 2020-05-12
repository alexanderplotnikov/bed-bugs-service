function renderTemplate(insertContent) {
    const idContent = document.getElementById('content');
    const wrapper = document.createElement('DIV'); wrapper.classList.add("wrapper");
    const navbar = document.createElement('HEADER'); navbar.classList.add('navbar');
    const logo = document.createElement('DIV'); logo.classList.add('logo');
    const logoText = document.createElement('P'); logoText.innerHTML = "Bed Bugs and Beyond";
    const logoImg = document.createElement('IMG');
    logoImg.src = '../assets/logo.png';
    logoImg.classList.add('logoImg');
    logo.appendChild(logoImg);
    logo.append(logoText);
    navbar.appendChild(logo);
    const menu = document.createElement('NAV'); menu.classList.add('menu');
    const menuUl = document.createElement('UL'); menuUl.classList.add('menuItems');
    const menuItems = ['Home', 'Services', 'Contact'];
    for(let elem of menuItems){
        const menuLi = document.createElement('LI');
        menuLi.classList.add('tabItem');
        menuLi.id = `${elem.toLocaleLowerCase()}`
        menuLi.innerHTML = elem;
        menuUl.appendChild(menuLi);
    };
    menu.appendChild(menuUl);
    navbar.appendChild(menu);
    wrapper.appendChild(navbar);

    const templateContent = document.createElement('ARTICLE');
    templateContent.innerHTML = insertContent;
    wrapper.appendChild(templateContent);
    idContent.appendChild(wrapper);

    const footer = document.createElement('FOOTER');
    const footerLogo = document.createElement('DIV'); footerLogo.classList.add('footerLogo')
    footerLogo.innerHTML = '&copy; 2020 Bed Bugs and Beyond';
    footer.appendChild(footerLogo);
    idContent.appendChild(footer);    
};

export {renderTemplate};