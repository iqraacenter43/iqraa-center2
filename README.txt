IQRAA CENTER WEBSITE FILES

Included:
- index.html: multilingual landing page
- register.html: registration form page
- level-test.html: written placement test page
- book.html: trial lesson coordination page
- site.css: shared responsive design
- site-config.js: social links, form links, PayPal email, video list and Calendly setting
- site.js: form/social/video setup
- i18n.js: language switcher (English, Arabic, French, German, Russian, Spanish, Turkish, Chinese, Indonesian)
- iqraa-logo.svg: supplied logo asset (included if available)

Important setup:
1. Upload every file to the same GitHub Pages repository root.
2. The registration form link is set to https://forms.gle/yf2jVGhF9KhYW8ZP6
3. The placement test link is set to https://forms.gle/bJcYz4Jd9y3Vrxyo7
4. The social links supplied by you are configured.
5. PayPal email is shown as hishamshukrallah43@gmail.com. This is an account email display only, not a payment checkout link.
6. Calendly is not connected yet because no real Calendly event URL has been supplied. Once you create the event, put its URL in site-config.js as calendlyUrl.
7. YouTube channel URL and video IDs are not yet configured because the channel link was not supplied. Put your channel URL in socials.youtube, and add video objects to videos.shorts and videos.long in site-config.js, e.g. {id:"VIDEO_ID", title:"Video title"}.
8. Test the form embeds on mobile. If an embed is blocked, use the fallback “Open the form in a new page”.
9. The language selector translates the website UI. Google Forms themselves keep their own language/settings.
10. Keep Google Sheets responses private.
