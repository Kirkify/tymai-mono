interface BaseEmailTemplateInterface {
  body: string;
  title: string;
  username?: string;
  heading: string;
  paragraph: string;
  actionUrl: string;
  actionDisplay: string;
  footer?: string;
}

export const AppName = 'Project One';
export const AppUrl = 'www.com';
export const AppLogoUrl = `${AppName}/logo.png`;

export const BaseTemplateEmail = ({ body, title, username = '', heading, paragraph, actionUrl, actionDisplay, footer = '' }: BaseEmailTemplateInterface) => {
  actionUrl = '' + actionUrl;
  return `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" style="color-scheme: light dark;">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
    <![endif]-->
    <title>${ title }</title>
    <style>
      :root {
        color-scheme: light dark;
      }
      .hover-bg-indigo-500:hover {
        background-color: #6366f1 !important;
      }
      .hover-text-decoration-underline:hover {
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        .sm-w-full {
          width: 100% !important;
        }
        .sm-py-8 {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }
        .sm-px-6 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .sm-leading-8 {
          line-height: 32px !important;
        }
      }
    </style>
  </head>
  <body style="word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; background-color: #f8fafc; padding: 0">
    <div style="display: none">
      ${ body }
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
    </div>
    <div role="article" aria-roledescription="email" aria-label="Confirm your email address" lang="en">
      <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" style="background-color: #f8fafc">
            <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="sm-py-8 sm-px-6" style="padding: 48px; text-align: center">
                  <a href='${AppUrl}'>
                    <img src='${AppLogoUrl}' width='70' alt='${AppName} Logo' style='border: 0; max-width: 100%; vertical-align: middle'>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" class="sm-px-6">
                  <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding: 48px; text-align: left; font-size: 16px; line-height: 24px; color: #334155; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                        <p>
                          Hello${username ? ' ' + username : ''},
                        </p>
                        <p class="sm-leading-8" style="margin: 0; margin-bottom: 24px; font-size: 24px; font-weight: 600; color: #000">
                          ${ heading }
                        </p>
                        <p style="margin: 0; margin-bottom: 24px">
                          ${ paragraph }
                        </p>
                        <div style="line-height: 100%">
                          <a href="${actionUrl}" class="hover-bg-indigo-500" style="text-decoration: none; display: inline-block; border-radius: 4px; background-color: #4338ca; padding-top: 14px; padding-bottom: 14px; padding-left: 16px; padding-right: 16px; text-align: center; font-size: 16px; font-weight: 600; color: #fff">
                            <!--[if mso]>
                              <i style="mso-text-raise: 30px; letter-spacing: 24px">&#8202;</i>
                            <![endif]-->
                            <span style="mso-text-raise: 16px">${ actionDisplay } &rarr;</span>
                            <!--[if mso]>
                              <i style="letter-spacing: 24px">&#8202;</i>
                            <![endif]-->
                          </a>
                        </div>
                        <table role="separator" style="width: 100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-top: 32px; padding-bottom: 32px">
                              <div style="height: 1px; background-color: #e2e8f0; line-height: 1px">&zwnj;</div>
                            </td>
                          </tr>
                        </table>
                        ${ footer ? '<p style="margin: 0; margin-bottom: 16px">' + footer + '</p>' : ''}
                        <p style="margin: 0; margin-bottom: 16px">
                          Thanks, <br>The ${AppName} Team
                        </p>
                      </td>
                    </tr>
                    <tr role="separator">
                      <td style="height: 48px"></td>
                    </tr>
                    <tr>
                      <td style="padding-left: 24px; padding-right: 24px; text-align: center; font-size: 12px; color: #475569">
                        <p style="margin: 0; margin-bottom: 16px; text-transform: uppercase">
                          ${AppName}
                        </p>
                        <p style="margin: 0; font-style: italic">
                          A platform created by ${AppName}.
                        </p>
                        <p style="cursor: default">
                          <a href="${AppUrl}" class="hover-text-decoration-underline" style="text-decoration: none; color: #4338ca">${AppName}</a>
                          &bull;
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`
};
