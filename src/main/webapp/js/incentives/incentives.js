/**
 * Created by chokst on 8/19/15.
 */

var incentivesModule = {};

var incentiveModuleInitializer = (function ($, module) {

    var gmpsIncentives = [
        {
            "id": "gmps-86th-street:en_US:35431520",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35431520,
            "ownerType": "dealer",
            "offerType": "inventory",
            "subOfferType": "finance",
            "subTitle": "Dealer finance1 offer",
            "startDate": "08-17-2015 17:00:00.000",
            "expirationDate": "09-29-2015 17:00:00.000",
            "value": "10.0% APR for 60 months",
            "imageLocation": "http://images.dev-sea.cobaltgroup.com/RTT/Chevrolet/2014/1792453/default/ext_GAN_deg01x150.jpg",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": true,
            "isFeaturedLogoIncentive":false,
            "isCustomPricingOffer": false,
            "description": "Dealer finance1 offer",
            "disclaimer": "Dealer finance1 offer",
            "vehicleCriteria": {
                "category": "new",
                "makes": [
                    "Chevrolet"
                ],
                "customModels": [
                    "Camaro"
                ],
                "customTrims": [
                    "2dr Cpe LS w/2LS"
                ],
                "vehicleIds": [
                    "2G1FA1E37E9205921"
                ],
                "vehicleCount": 1
            },
            "localizedFields": {
                "localizedValue": "10.0% APR for 60 months",
                "localizedExpirationDate": "Offer Ends Sep 29, 2015"
            },
            "customConfiguration": {
                "actualOfferTitle": "Dealer finance1 offer",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "tushar.chokshi@cdk.com",
            "createdDate": "08-18-2015 14:21:26.000",
            "modifiedDate": "08-18-2015 14:21:26.000",
            "lastIndexingDate": "08-18-2015 15:22:07.436",
            "hashCode": 1777058526
        },
        {
            "id": "gmps-86th-street:en_US:35429870",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35429870,
            "ownerType": "dealer",
            "offerType": "inventory",
            "subOfferType": "discount",
            "subTitle": "GMPS Dealer Used Disc Offer",
            "startDate": "07-05-2015 17:00:00.000",
            "expirationDate": "08-30-2015 17:00:00.000",
            "value": "100",
            "imageLocation": "http://media.dev-sea.cdk.com/RTT/Chevrolet/2014/1717943/default/ext_GWS_deg01x150.jpg",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": true,
            "isFeaturedLogoIncentive":false,
            "isCustomPricingOffer": false,
            "description": "dealer used disc offer1",
            "disclaimer": "dealer used disc offer1",
            "vehicleCriteria": {
                "category": "used",
                "years": [
                    2015,
                    2014,
                    2012,
                    2009,
                    2006
                ],
                "makes": [
                    "Chevrolet"
                ],
                "models": [
                    "Malibu",
                    "Express Cargo Van",
                    "Tahoe",
                    "Cruze",
                    "Impala",
                    "Equinox",
                    "Suburban",
                    "Traverse"
                ],
                "customModels": [
                    "Express Cargo Van",
                    "Cruze",
                    "Traverse"
                ],
                "pricingCategory": "internetPrice",
                "minPrice": 10000,
                "minMileage": 10,
                "minLotAge": 1,
                "vehicleCount": 4
            },
            "localizedFields": {
                "localizedValue": "$100",
                "localizedExpirationDate": "Offer Ends Aug 30, 2015"
            },
            "customConfiguration": {
                "actualOfferTitle": "dealer used disc offer1",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "lastIndexingDate": "08-17-2015 20:00:05.224",
            "hashCode": 2027437111
        },
        {
            "id": "gmps-86th-street:en_US:35429890",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35429890,
            "ownerType": "dealer",
            "offerType": "inventory",
            "subOfferType": "discount",
            "subTitle": "dealer certified disc offer1",
            "startDate": "07-12-2015 17:00:00.000",
            "value": "300",
            "imageLocation": "http://images.dev-sea.cobaltgroup.com/4/9/2/8550069294x150.jpg",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": false,
            "isFeaturedLogoIncentive":false,
            "isCustomPricingOffer": false,
            "description": "dealer certified disc offer1",
            "disclaimer": "dealer certified disc offer1",
            "vehicleCriteria": {
                "category": "certified",
                "customModels": [
                    "LaCrosse"
                ],
                "customTrims": [
                    "CXS"
                ],
                "vehicleCount": 1
            },
            "localizedFields": {
                "localizedValue": "$300"
            },
            "customConfiguration": {
                "actualOfferTitle": "dealer certified disc offer1",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "offer-service",
            "createdDate": "07-16-2015 10:59:30.000",
            "modifiedDate": "08-20-2015 14:21:40.000",
            "lastIndexingDate": "08-20-2015 14:28:54.656",
            "hashCode": -743487043
        },
        {
            "id": "gmps-86th-street:en_US:35430590",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430590,
            "ownerType": "dealer",
            "offerType": "service",
            "subTitle": "service offer title",
            "startDate": "07-21-2015 17:00:00.000",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "isCustomPricingOffer": false,
            "description": "Includes:something included",
            "disclaimer": "disclaimer",
            "couponCode": "ABC10XY",
            "mainValue": "100",
            "subText": "service offer subtext",
            "assetsInfo": [
                {
                    "assetId": "4CE82318B2A11004895010145EFA6B30",
                    "assetType": "LISTING_IMAGE",
                    "assetUrl": "http://media.dev-sea.cdk.com/teams/repository/export/4ce/82318b2a11004895010145efa6b30/4ce82318b2a11004895010145efa6b30.jpg"
                }
            ],
            "customConfiguration": {
                "actualOfferTitle": "service offer title",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "offer-service",
            "createdDate": "07-24-2015 10:18:38.000",
            "modifiedDate": "08-10-2015 11:59:37.000",
            "lastIndexingDate": "08-20-2015 14:28:54.656",
            "hashCode": -145713010
        },
        {
            "id": "gmps-86th-street:en_US:35430760",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430760,
            "ownerType": "dealer",
            "offerType": "parts",
            "subTitle": "parts offer title",
            "startDate": "07-24-2015 17:00:00.000",
            "expirationDate": "08-30-2015 17:00:00.000",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "isCustomPricingOffer": false,
            "description": "Includes:includes",
            "disclaimer": "disclaimer",
            "tags": [
                "tag1",
                "tag2"
            ],
            "couponCode": "couponcode",
            "mainValue": "100",
            "secondaryValue": "100",
            "subText": "parts offer subtext",
            "localizedFields": {
                "localizedExpirationDate": "Offer Ends Aug 30, 2015"
            },
            "assetsInfo": [
                {
                    "assetId": "D8AE39B808F210048E7A080020C9C24D",
                    "assetType": "LISTING_IMAGE",
                    "assetUrl": "http://media.dev-sea.cdk.com/teams/repository/export/d8a/e39b808f210048e7a080020c9c24d/d8ae39b808f210048e7a080020c9c24d.gif"
                }
            ],
            "customConfiguration": {
                "actualOfferTitle": "parts offer title",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "offer-service",
            "createdDate": "07-29-2015 17:21:13.000",
            "modifiedDate": "08-10-2015 14:28:05.000",
            "lastIndexingDate": "08-20-2015 14:28:54.657",
            "hashCode": -485099724
        },
        {
            "id": "gmps-86th-street:en_US:35430770",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430770,
            "ownerType": "dealer",
            "offerType": "inventory",
            "subOfferType": "other",
            "subTitle": "featured dealer offer",
            "startDate": "08-02-2015 17:00:00.000",
            "imageLocation": "http://images.dev-sea.cobaltgroup.com/RTT/Chevrolet/2014/1717943/default/ext_GWS_deg01x150.jpg",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": true,
            "isFeaturedLogoIncentive":true,
            "isCustomPricingOffer": false,
            "description": "featured dealer offer",
            "disclaimer": "featured dealer offer",
            "vehicleCriteria": {
                "category": "new",
                "makes": [
                    "Chevrolet"
                ],
                "vehicleCount": 193
            },
            "assetsInfo": [
                {
                    "assetId": "6F4CF498CB5010048D5000146EFA6B30",
                    "assetType": "FEATURED_LOGO",
                    "assetUrl": "http://media.dev-sea.cdk.com/teams/repository/export/6f4/cf498cb5010048d5000146efa6b30/6f4cf498cb5010048d5000146efa6b30.png"
                }
            ],
            "customConfiguration": {
                "actualOfferTitle": "featured dealer offer",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "offer-service",
            "createdDate": "08-03-2015 10:45:49.000",
            "modifiedDate": "08-10-2015 16:48:08.000",
            "lastIndexingDate": "08-20-2015 14:28:54.628",
            "hashCode": -975447198
        },
        {
            "id": "gmps-86th-street:en_US:35349050",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35349050,
            "ownerType": "oem",
            "offerType": "banner",
            "subTitle": "Banner Image Test",
            "startDate": "06-23-2015 17:00:00.000",
            "expirationDate": "08-26-2015 17:00:00.000",
            "bannerMarkup": "<img src=\"http://media.dev-sea.cdk.com/teams/repository/d73/ce2d07545100582670050569e2e69/1/CH-RET-TRRET181_000244_July-Phase-I-Inventory-Tiles_270x100v3.jpg\" alt=\"\" />",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": true,
            "isCustomPricingOffer": false,
            "description": "banner offer description",
            "disclaimer": "banner offer disclaimer1",
            "vehicleCriteria": {
                "category": "new",
                "vehicleCount": 193
            },
            "localizedFields": {
                "localizedExpirationDate": "Offer Ends Aug 26, 2015"
            },
            "customConfiguration": {
                "actualOfferTitle": "Banner Image Test",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "austin.browne@cdk.com",
            "modifiedBy": "tushar.chokshi@cdk.com",
            "createdDate": "06-30-2015 11:56:55.000",
            "modifiedDate": "08-05-2015 13:18:07.000",
            "lastIndexingDate": "08-20-2015 14:28:54.657",
            "hashCode": 305052902
        },
        {
            "id": "gmps-86th-street:en_US:35430750",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430750,
            "ownerType": "dealer",
            "offerType": "promotion",
            "subTitle": "promotion offer",
            "startDate": "07-27-2015 17:00:00.000",
            "expirationDate": "08-29-2015 17:00:00.000",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "isCustomPricingOffer": false,
            "disclaimer": "promotion offer",
            "autoMinimize": true,
            "autoMinimizeInterval": "15",
            "displayExpirationDate": true,
            "callToAction": "GET COUPON NOW!",
            "thankYouPageTitle": "promotion offer",
            "thankYouPageDescription": "promotion offer",
            "printToAction": "hi, print coupon",
            "localizedFields": {
                "localizedExpirationDate": "Offer Ends Aug 29, 2015"
            },
            "assetsInfo": [
                {
                    "assetId": "CBC551003E7F10058C6600146EDEF087",
                    "assetType": "PROMO_IMAGE",
                    "assetUrl": "http://media.dev-sea.cdk.com/teams/repository/export/cbc/551003e7f10058c6600146edef087/cbc551003e7f10058c6600146edef087.png"
                },
                {
                    "assetId": "D8AE39B808F210048E7A080020C9C24D",
                    "assetType": "THANK_YOU_IMAGE",
                    "assetUrl": "http://media.dev-sea.cdk.com/teams/repository/export/d8a/e39b808f210048e7a080020c9c24d/d8ae39b808f210048e7a080020c9c24d.gif"
                }
            ],
            "customConfiguration": {
                "actualOfferTitle": "promotion offer",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "offer-service",
            "createdDate": "07-29-2015 17:06:13.000",
            "modifiedDate": "08-06-2015 18:21:28.000",
            "lastIndexingDate": "08-20-2015 14:28:54.657",
            "hashCode": 973402568
        },
        {
            "id": "gmps-86th-street:en_US:35430790",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430790,
            "ownerType": "oem",
            "offerType": "event",
            "subTitle": "sample event",
            "startDate": "08-02-2015 17:00:00.000",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": true,
            "isCustomPricingOffer": false,
            "description": "sample event",
            "disclaimer": "sample event",
            "vehicleCriteria": {
                "category": "new",
                "vehicleCount": 193
            },
            "customConfiguration": {
                "actualOfferTitle": "sample event",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "tushar.chokshi@cdk.com",
            "createdDate": "08-03-2015 11:13:49.000",
            "modifiedDate": "08-03-2015 11:13:49.000",
            "lastIndexingDate": "08-20-2015 14:28:54.658",
            "hashCode": -1805503692
        },
        {
            "id": "gmps-86th-street:en_US:35430980",
            "webId": "gmps-86th-street",
            "locale": "en_US",
            "incentiveId": 35430980,
            "ownerType": "oem",
            "offerType": "ciss",
            "subTitle": "Sample CISS Offer",
            "startDate": "08-09-2015 17:00:00.000",
            "expirationDate": "08-30-2015 17:00:00.000",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "isCustomPricingOffer": false,
            "description": "Sample CISS Offer",
            "disclaimer": "Sample CISS Offer",
            "tags": [
                "tag1",
                "tag2",
                "tag3"
            ],
            "localizedFields": {
                "localizedExpirationDate": "Offer Ends Aug 30, 2015"
            },
            "customConfiguration": {
                "actualOfferTitle": "Sample CISS Offer",
                "showingCustomLogo": false,
                "vinOptOutLocked": false,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "tushar.chokshi@cdk.com",
            "modifiedBy": "tushar.chokshi@cdk.com",
            "createdDate": "08-10-2015 12:09:55.000",
            "modifiedDate": "08-10-2015 12:09:55.000",
            "lastIndexingDate": "08-20-2015 14:28:54.658",
            "hashCode": 1170983859
        }
    ];

    var holdenIncentives = [
        // holden nz OEM offer
        {
            "id": "holdennz-blackwells:en_NZ:35431240",
            "webId": "holdennz-blackwells",
            "locale": "en_NZ",
            "incentiveId": 35431240,
            "ownerType": "oem",
            "offerType": "inventory",
            "subOfferType": "other",
            "subTitle": "HOLDEN NZ OEM Offer - Live Big, Drive Small",
            "startDate": "04-29-2015 17:00:00.000",
            "expirationDate": "08-30-2015 17:00:00.000",
            "value": "$28,990",
            "imageLocation": "http://assets.sea-chokst-m.sea.ds.adp.com/websites/trunk/websitesEar/websitesWebApp/css/common/images/en_NZ/noImage_smallx150.png",
            "displayOnSpecialsListingPage": true,
            "displayOnSpecialsWidgets": true,
            "hideIfNoInventory": false,
            "isFeaturedLogoIncentive":false,
            "isCustomPricingOffer": false,
            "description": "Trax LS Auto",
            "disclaimer": "Offer valid while stocks last at participating dealers. Not available with other offers. Private customers only.",
            "vehicleCriteria": {
                "category": "new",
                "years": [
                    2015
                ],
                "makes": [
                    "Holden"
                ],
                "models": [
                    "Trax"
                ]
            },
            "localizedFields": {
                "localizedValue": "$28,990",
                "localizedExpirationDate": "Offer Ends Aug 30, 2015"
            },
            "customConfiguration": {
                "actualOfferTitle": "HOLDEN NZ OEM Offer - Live Big, Drive Small",
                "actualOfferSubTitle": "Trax LS Auto",
                "primaryPricePrefix": "From RSP",
                "pricingSuffix": "+On Road Costs",
                "offerImageLocation": "http://www.holden.co.nz/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1237341607197&ssbinary=true",
                "offerThumbnailLocation": "http://www.holden.co.nz/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1237341607197&ssbinary=true",
                "primaryHighlights": [
                    "BUILT IN SMARTPHONE APPS",
                    "REAR VIEW CAMERA AND PARKING SENSORS",
                    "16\" ALLOY WHEELS (4)",
                    "MYLINK INFOTAINMENT WITH 7\" COLOUR TOUCH SCREEN"
                ],
                "secondaryHighlights": [
                    "Roof Rails",
                    "Siri Eyes Free Integration",
                    "Maximum 5-star ANCAP Safety Rating",
                    "Rear view Camera and Parking Sensors",
                    "Electronic Stability Control (ESC) Technology"
                ],
                "showingCustomLogo": false,
                "vinOptOutLocked": true,
                "oemAuthorized": false,
                "offerHasException": false
            },
            "createdBy": "HoldenNZOffersLoader",
            "modifiedBy": "HoldenNZOffersLoader",
            "createdDate": "08-18-2015 10:52:42.000",
            "modifiedDate": "08-18-2015 15:26:35.000",
            "lastIndexingDate": "08-18-2015 17:10:01.355",
            "hashCode": -92659526
        }
    ];

    module.getHoldenIncentives = function () {
        return holdenIncentives;
    };
    module.getGmpsIncentives = function () {
        return gmpsIncentives;
    };
    return module;
})(jQuery, incentivesModule || {});
