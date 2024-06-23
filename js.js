function makeCall(phoneNumber) {
    // Проверка, поддерживается ли протокол для звонков
    if ('href' in HTMLAnchorElement.prototype && 'click' in HTMLAnchorElement.prototype) {
        var link = document.createElement('a');
        link.href = 'tel:' + phoneNumber;
        link.click();
    } else {
        console.log('Протокол tel: не поддерживается в данном браузере.');
    }
}

