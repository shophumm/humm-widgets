// when doing local test, set:
//   baseContentUrl = "./dist/au' (or './dist/nz' for New Zealand)

// When deploying to server:
//   baseContentUrl = 'https://YOUR-URL'

export class Config {
    public static baseContentUrl = 'https://widgets.shophumm.com.au';    // for remote deploy
    // public static baseContentUrl = 'https://s3-ap-southeast-2.amazonaws.com/widgets.oxipay.com.au';    // for remote deploy
    // public static baseContentUrl = 'https://s3-ap-southeast-2.amazonaws.com/widgets.shophumm.com.au/dist/au';    // for remote demo
    // public static baseContentUrl = './dist/au';       // for local testing

    // price-info modal
    public static priceInfoModalId = 'humm-price-info-modal';
    public static priceInfoUrl = Config.baseContentUrl + '/content/html/priceInfoModal.html';

    // price-info-more modal
    public static priceInfoMoreModalId = 'humm-price-info-more-modal';
    public static priceInfoMoreUrl = Config.baseContentUrl + '/content/html/priceInfoMoreModal.html';

    // price-info-api modal
    public static priceInfoAPIModalId = 'humm-price-info-api-modal';
    public static priceInfoAPIModalUrl = Config.baseContentUrl + '/content/html/priceInfoAPIModal.html';

    //price-info-v2 modal
    public static priceInfoV2ModalId = 'humm-price-info-v2-modal';
    public static priceInfoV2Url = Config.baseContentUrl + '/content/html/priceInfoV2.html';

    //price-info-v2-black-modal
    public static priceInfoV2BlackModalId = 'humm-price-info-v2-black-modal';
    public static priceInfoV2BlackUrl = Config.baseContentUrl + '/content/html/priceInfoV2-black.html';

    //price-info-myer modal
    public static priceInfoMyerModalId = 'humm-price-info-myer-modal';
    public static priceInfoMyerUrl = Config.baseContentUrl + '/content/html/priceInfoModalMyer.html';

    //price-info-winning-group modal
    public static priceInfoWinningGroupModalId = 'humm-price-info-winning-group-modal';
    public static priceInfoWinningGroupUrl = Config.baseContentUrl + '/content/html/priceInfoModalWinningGroup.html';
    
    //price-info-myer modal
    public static priceInfoMyer5mModalId = 'humm-price-info-myer-5m-modal';
    public static priceInfoMyer5mUrl = Config.baseContentUrl + '/content/html/priceInfoModalMyer-5m.html';

    //price-info-winning-group modal
    public static priceInfoWinningGroup5mModalId = 'humm-price-info-winning-group-5m-modal';
    public static priceInfoWinningGroup5mUrl = Config.baseContentUrl + '/content/html/priceInfoModalWinningGroup-5m.html';


    //price-info-api modal Myer
    public static priceInfoAPIModalMyerId = 'humm-price-info-api-modal-myer';
    public static priceInfoAPIModalMyerUrl = Config.baseContentUrl + '/content/html/priceInfoAPIModalMyer.html';

    //price-info-api modal Winning Group
    public static priceInfoAPIModalWinningGroupId = 'humm-price-info-api-modal-winning-group';
    public static priceInfoAPIModalWinningGroupUrl = Config.baseContentUrl + '/content/html/priceInfoAPIModalWinningGroup.html';

    // more-info modal
    public static moreInfoModalId = 'humm-more-info-modal';
    public static moreInfoUrlNew = Config.baseContentUrl + '/content/html/moreInfoModal.html';

    // top-banner modal
    public static hummBannerTopModalId = Config.moreInfoModalId;
    public static hummBannerTopModalUrl = Config.moreInfoUrlNew;

    // price info api
    public static priceInfoAPIUrl = 'https://buyerapi.shophumm.com.au/api';}
