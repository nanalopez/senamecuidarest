const Email = require("../../Email/Email")

exports.emailSend = (data) => {
    const oEmail = new Email({
        service: 'gmail',
        auth:
        {
            user: "senamecuida@gmail.com",
            pass: "fabrica2020"
        }
    })
    let email =
    {
        from: "senamecuida@gmail.com",
        to: data.email,
        subject: "¡Bienvenido a Sena me cuida!",
        html: `                  
          <!DOCTYPE html>
          <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
          <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
          <!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
          <!--[if gt IE 8]><!-->
          <html class="no-js" lang="en">
          <!--<![endif]-->

          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charset="UTF-8">
            <meta http-equiv="content-type" content="text/html;charset=UTF-8">
            <meta name="robots" content="index, follow">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <link href="/cassette.axd/asset/Content/OnlineView.css?1wx1B6J9LBOeL7nsQUlOHgZ9KFg=" type="text/css" rel="stylesheet"/>
            <link rel="icon" type="image/x-icon" href="/doppler_favicon.ico" />	
            <title>RSS 02</title>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width"/><style type="text/css">@media only screen and (min-width: 480px){td#whatsapp{display: none !important;}}@media screen and (max-width: 414px){.column--2 .col,.column--3 .col {max-width: 100% !important;}.column--2 .col img,.column--3 .col img {max-width: 100% !important;}}@media only screen and (max-width: 480px){.table_center{text-align:center !important;margin: 0 auto !important;}.column_padding{padding-bottom:30px !important;}}</style><!--[if gte mso 9]><style type="text/css">table.spacer{border-top-style: solid !important;}</style><![endif]-->

          </head>
          <body class="view-online--templates">
            <script src="/cassette.axd/asset/Scripts/jquery.js?v8jR9EUzPm5mr46kmM5MzJ9TTSg=" type="text/javascript"></script>
            <div class="center">
              <div style="background-color:#ffffff;"><table bgcolor="#ffffff" height="100%" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top" align="center" bgcolor="#ffffff" background="" style="background-color:#ffffff;background-image: url('');background-position:top center;background-repeat:repeat;"><center class="wrapper" style="width:100%;table-layout:fixed;text-align:inherit;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="vertical-align: top">
                                <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 0;" align="center">
                                  <table class="spacer" style="border-spacing: 0;border-collapse: collapse;vertical-align:top;border-top-style:solid;border-top-width:0;border-top-color:#333333;width:100%" align="center" border="0" cellspacing="0">
                                    <tbody>
                                      <tr style="vertical-align:top">
                                        <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top" align="center">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tbody><tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table cellpadding="0" cellspacing="0" class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tbody><tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tbody><tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tbody><tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                <td class="wrapper--inner" align="center" style="padding:0;line-height:0px;border-collapse:collapse !important;word-break:break-word;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;">
                                  <img ondragstart="return false;" width="170" src="https://app2.dopplerfiles.com/Templates/218419/ccb4e23c8aa216f1e96d31ab209c036b_XL.jpg" alt="logorss" style="clear:both;width:170px;max-width:100%;text-decoration:none;border-style:none;outline-style:none;-ms-interpolation-mode:bicubic;text-align:center;">
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </tbody></table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                <td align="center" class="wrapper--inner" style="padding:0;line-height:120%;font-size:12px;border-collapse:collapse !important;word-break:break-word;word-wrap:break-word; margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;">
                                  <span style="display: block;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal;"><div style="text-align: center;"><span style="font-size: 11px; font-family: georgia, times, &quot;times new roman&quot;, serif; line-height: 15.62px;"><span style="color: rgb(255, 255, 255);"></span></span></div></span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#FFFFFF" style="background-color:#FFFFFF;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#FFFFFF" bgcolor="#FFFFFF">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="vertical-align: top">
                                <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 0;" align="center">
                                  <table class="spacer" style="border-spacing: 0;border-collapse: collapse;vertical-align:top;border-top-style:solid;border-top-width:1px;border-top-color:#333333;width:100%" align="center" border="0" cellspacing="0">
                                    <tbody>
                                      <tr style="vertical-align:top">
                                        <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top" align="center">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                <td align="center" class="wrapper--inner" style="padding:0;line-height:120%;font-size:12px;border-collapse:collapse !important;word-break:break-word;word-wrap:break-word; margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;">
                                  <span style="display: block;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal;"><div style="text-align: center;"><b style="color: rgb(144, 143, 179); font-family: georgia, times, &quot;times new roman&quot;, serif;"><span style="font-size: 30px; line-height: 1.2;" class="font-line-height-large">¡Bienvenido a Sena me cuida!, ${data.nombre} </span></b></div><div style="text-align: center;"><br></div></span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#FFFFFF" style="background-color:#FFFFFF;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#FFFFFF" bgcolor="#FFFFFF">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                <td align="center" class="wrapper--inner" style="padding:0;line-height:120%;font-size:12px;border-collapse:collapse !important;word-break:break-word;word-wrap:break-word; margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;">
                                  <span style="display: block;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal;"><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><b style="font-size: 30px; font-family: georgia, times, &quot;times new roman&quot;, serif; color: rgb(144, 143, 179);">Gracias por registrarse en Sena me cuida, sus datos será tratados bajo la normativa de la ley de habeas data vigente en el país.</b></div><div style="text-align: center;"><br></div><div style="text-align: center;"><br></div><div style="text-align: center;"><span style="color: rgb(21, 111, 79); font-family: georgia, times, &quot;times new roman&quot;, serif;"><b><u><span style="font-size: 18px; line-height: 1.2;" class="font-line-height-large"><a href="[[[RSSITEM:URL]]]" target="_blank" style="text-decoration: none; color: rgb(21, 111, 79);">S</a>ervicio Nacional De Aprendizaje SENA</span></u></b></span></div><div style="text-align: center;"><span style="font-family: georgia, times, &quot;times new roman&quot;, serif; font-size: 30px; line-height: 1.2;" class="font-line-height-large"><b><span style="color: rgb(188, 159, 17);">~</span></b></span></div></span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="vertical-align: top">
                                <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 0;" align="center">
                                  <table class="spacer" style="border-spacing: 0;border-collapse: collapse;vertical-align:top;border-top-style:solid;border-top-width:0;border-top-color:#333333;width:100%" align="center" border="0" cellspacing="0">
                                    <tbody>
                                      <tr style="vertical-align:top">
                                        <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top" align="center">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tbody><tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" align="center" valign="top"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tbody><tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tbody><tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:5px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tbody><tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 0;" align="center">
                                  <table class="table_center" border="0" cellpadding="0" cellspacing="0" style="text-align: center">
                                    <tbody><tr>
                                      <td style="display: inline-block; padding-right: 5px; padding-top: 5px; line-height: 0px;" valign="middle">
                                        <a ondragstart="return false;" href="http://linkedin.com/" target="_blank">
                                          <img ondragstart="return false;" width="32" src="https://app2.dopplerfiles.com/MSEditor/images/color_rounded_linkedin.png" alt="Linkedin">
                                        </a>
                                      </td>
                                      <td style="display: inline-block; padding-right: 5px; padding-top: 5px; line-height: 0px;" valign="middle">
                                        <a ondragstart="return false;" href="http://facebook.com/" target="_blank">
                                          <img ondragstart="return false;" width="32" src="https://app2.dopplerfiles.com/MSEditor/images/color_rounded_facebook.png" alt="Facebook">
                                        </a>
                                      </td>
                                      <td style="display: inline-block; padding-right: 5px; padding-top: 5px; line-height: 0px;" valign="middle">
                                        <a ondragstart="return false;" href="http://instagram.com/" target="_blank">
                                          <img ondragstart="return false;" width="32" src="https://app2.dopplerfiles.com/MSEditor/images/color_rounded_instagram.png" alt="Instagram">
                                        </a>
                                      </td>
                                      <td style="display: inline-block; padding-right: 0px; padding-top: 5px; line-height: 0px;" valign="middle">
                                        <a ondragstart="return false;" href="http://youtube.com/" target="_blank">
                                          <img ondragstart="return false;" width="32" src="https://app2.dopplerfiles.com/MSEditor/images/color_rounded_youtube.png" alt="Youtube">
                                        </a>
                                      </td>
                                      
                                      
                                      
                                      
                                      
                                      
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </tbody></table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                <td align="center" class="wrapper--inner" style="padding:0;line-height:120%;font-size:12px;border-collapse:collapse !important;word-break:break-word;word-wrap:break-word; margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;">
                                  <span style="display: block;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal;"><div style="text-align: center;"><span style="font-size: 13px; line-height: 18.46px;"><span style="font-family: georgia, times, &quot;times new roman&quot;, serif;"><span style="color: rgb(255, 255, 255);">Tu Empresa. 2016</span></span></span></div></span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff">
            <tr>
              <td style="background-color: #ffffff">
                <!--[if (gte mso 9)|(IE)]> <table class="outlook-container " width="600" align="center" bgcolor="#ffffff" style="background-color:#ffffff;box-sizing:border-box;border-spacing:0;border-collapse:collapse;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" > <tr><td width="100%" valign="top" align="center"> <![endif]-->
                <table class="wrapper--outer" align="center" style="box-sizing:border-box;border-spacing:0;border-collapse:collapse;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto; background-color:#ffffff" bgcolor="#ffffff">
                  <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <td class="column--1" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;font-size:0;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;">
                      <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;">
                        <tr style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <td class="wrapper--column" style="border-collapse:collapse !important;word-break:break-word;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#333333;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                            <table class="wrapper--content" style="border-spacing:0;border-collapse:collapse;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:400;line-height:15.6px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#333333;width:100%;">
                              <tr style="vertical-align: top">
                                <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 0;" align="center">
                                  <table class="spacer" style="border-spacing: 0;border-collapse: collapse;vertical-align:top;border-top-style:solid;border-top-width:0;border-top-color:#333333;width:100%" align="center" border="0" cellspacing="0">
                                    <tbody>
                                      <tr style="vertical-align:top">
                                        <td style="line-height:0;word-break: break-word;border-collapse: collapse !important;vertical-align: top" align="center">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
              </td>
            </tr>
          </table>
          </td></tr></table></center></td></tr></table></div>
            </div>
          </body>
        `
    }
    oEmail.enviarCorreo(email)

  }

  // const sendEmail = (req, res) =>
  // {
  //     emailSend(req.body);

  //     Aprendiz.findOneAndUpdate({ email: req.body.email},(err, usuario) => {
  //         if (err) return res.status(500).send({ message: 'err' })
  //     })
  //     return res.send("Ok")
  // }
