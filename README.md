# OneLink Delivery Service

Premium website for OneLink Delivery Service, a Dubai delivery company. Bike, car, business, and same-day delivery — fast, safe, and reliable.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run lint
npm run build
```

## Replace the official logo

The official gold lockup is already installed. To replace it later, save a new file here:

```
public/images/logo.png
```

The header and footer render that file at a fixed height with automatic width, so it is not stretched. Until the file is present, the company name is set in type as a stand-in.

Use a light or transparent logo. The background is deep navy.

## Fleet and skyline photos

The bike and car photos are already in place: navy blue, with gold wheels and trim.

```
public/images/hero-bike.png
public/images/hero-car.png
public/images/dubai-skyline.png
```

Replace a file on the same path to swap the picture. Do not put a company logo on the vehicle art unless it is part of the official photograph.

`scripts/render-images.mjs` redraws the old line illustrations and will overwrite the bike and car photos. Do not run it unless you want those drawings back.

## Contact form

The request form validates in the browser, then opens the visitor’s email app with a message addressed to `Onlinkdeliveryservices@gmail.com` and copied to `info@onlinkservices.delivery`. It does not send email by itself.

When a backend or email API is ready, replace `submitDeliveryRequest` in `src/lib/delivery-request.ts`. Keep the success message honest until that call actually delivers the request.

## Contact details

- Dubai, UAE
- Phone: 0562692878
- WhatsApp: https://wa.me/971562692878
- Onlinkdeliveryservices@gmail.com
- info@onlinkservices.delivery
