# OneLink Delivery Service

Website for OneLink Delivery, a Dubai bike and car delivery desk. The public site is a light page: white background, blue pill buttons, gold highlights, and the black-and-gold fleet photos.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Production domain: [onelinkdeliveryservices.com](https://onelinkdeliveryservices.com).

```bash
npm run lint
npm run build
```

## Pages

- `/` homepage
- `/book` pickup request with an indicative fare
- `/track` sends the OL number to the desk on WhatsApp
- `/contact` phone, email, and an enquiry form
- Service, industry, discover, opportunities, and resource pages from the header menus

## Photos and logo

```
public/images/logo.png
public/images/delivery-bike.jpg
public/images/delivery-car.jpg
```

`scripts/render-images.mjs` redraws old line illustrations. Leave that script alone. The site uses the photos above.

## Forms

The booking and contact forms validate in the browser, then open the visitor’s email app addressed to `info@onelinkdeliveryservices.com`. They do not send email by themselves. The fare on the booking page is indicative. The desk confirms the amount before pickup.

## Contact

- Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai
- Phone: +971 56 269 2878
- WhatsApp: https://wa.me/971562692878
- info@onelinkdeliveryservices.com
