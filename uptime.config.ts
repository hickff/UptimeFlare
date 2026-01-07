// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Uptime Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://xg.afc.qzz.io/status/public/1', label: 'Xugou' },
    { link: 'https://blog.test.net/', label: 'Blog' },
    { link: 'mailto:me@test.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'foo_monitor',
      // `name` is used at status page and callback message
      name: 'kod-k.opp.pp.ua',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://k.opp.pp.ua',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://k.opp.pp.ua',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    { id: 'influxdb_serv00', name: 'influxdb_serv00', method: 'GET', target: 'https://if.ffc.pp.ua/health', tooltip: 'This is a tooltip for this monitor', statusPageLink: 'https://if.ffc.pp.ua/health', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'rd153p1_onrender', name: 'rd153p1_onrender', method: 'GET', target: 'https://rd.afc.qzz.io', tooltip: 'tooltip', statusPageLink: 'https://rd.afc.qzz.io', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'rdapp4_onrender', name: 'rdapp4_onrender', method: 'GET', target: 'https://rdapp4.onrender.com', tooltip: 'tooltip', statusPageLink: 'https://rdapp4.onrender.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'GeminiBalance_onrender', name: 'GeminiBalance_onrender', method: 'GET', target: 'https://gm-bls.onrender.com', tooltip: 'tooltip', statusPageLink: 'https://gm-bls.onrender.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'lu_fffc_lunes', name: 'lu_fffc_lunes', method: 'GET', target: 'https://lu.fffc.eu.org:3042', tooltip: 'tooltip', statusPageLink: 'https://lu.fffc.eu.org:3042', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'lu2_afc_lunes', name: 'lu2_afc_lunes', method: 'GET', target: 'https://lu2.afc.qzz.io:3292', tooltip: 'tooltip', statusPageLink: 'https://lu2.afc.qzz.io:3292', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'bab_JP_axwikqaavxsz', name: 'bab_JP_axwikqaavxsz', method: 'GET', target: 'https://axwikqaavxsz.ap-northeast-1.clawcloudrun.com/health', tooltip: 'tooltip', statusPageLink: 'https://axwikqaavxsz.ap-northeast-1.clawcloudrun.com/health', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'bab_SG_puxyrfzwbrwf', name: 'bab_SG_puxyrfzwbrwf', method: 'GET', target: 'https://puxyrfzwbrwf.ap-southeast-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://puxyrfzwbrwf.ap-southeast-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'rd1_JP_mipzhqxqnupq', name: 'rd1_JP_mipzhqxqnupq', method: 'GET', target: 'https://mipzhqxqnupq.ap-northeast-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://mipzhqxqnupq.ap-northeast-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'rd1_SG_pvmnwjvhsnfk', name: 'rd1_SG_pvmnwjvhsnfk', method: 'GET', target: 'https://pvmnwjvhsnfk.ap-southeast-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://pvmnwjvhsnfk.ap-southeast-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'rd1_SG_omkqqvygbeil_olst', name: 'rd1_SG_omkqqvygbeil_olst', method: 'GET', target: 'https://omkqqvygbeil.ap-southeast-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://omkqqvygbeil.ap-southeast-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'hic_JP_nasgvijavsvt', name: 'hic_JP_nasgvijavsvt', method: 'GET', target: 'https://nasgvijavsvt.ap-northeast-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://nasgvijavsvt.ap-northeast-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    { id: 'hic_US_rvbjvhgubypb', name: 'hic_US_rvbjvhgubypb', method: 'GET', target: 'https://rvbjvhgubypb.us-east-1.clawcloudrun.com', tooltip: 'tooltip', statusPageLink: 'https://rvbjvhgubypb.us-east-1.clawcloudrun.com', expectedCodes: [200], timeout: 10000, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',},},
    // Example TCP Monitor
    //{
    //  id: 'home_kod_tcp',
    //  name: 'Home TCP Monitor',
    //  // `method` should be `TCP_PING` for tcp monitors
    //  method: 'TCP_PING',
    //  // `target` should be `host:port` for tcp monitors
    //  target: 'kod.ffff.dev.tc:58386',
    //  tooltip: 'tcp port test',
    //  statusPageLink: 'https://google.com',
    //  timeout: 5000,
    //},
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// const maintenances: MaintenanceConfig[] = [
//   {
//     // [Optional] Monitor IDs to be affected by this maintenance
//     monitors: ['foo_monitor', 'bar_monitor'],
//     // [Optional] default to "Scheduled Maintenance" if not specified
//     title: 'Test Maintenance',
//     // Description of the maintenance, will be shown at status page
//     body: 'This is a test maintenance, server software upgrade',
//     // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
//     start: '2020-01-01T00:00:00+08:00',
//     // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
//     // if not specified, the maintenance will be considered as on-going
//     end: '2050-01-01T00:00:00+08:00',
//     // [Optional] color of the maintenance alert at status page, default to "yellow"
//     color: 'blue',
//   },
// ]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
