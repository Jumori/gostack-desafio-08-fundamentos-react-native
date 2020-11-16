import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:3333',
});

export default api;
/**
 * Which baseURL to use:
 *
 * iOS emulator: localhost
 * iOS device: http://{machine IP}:3333
 * Android emulator: http://localhost:3333 (+ command adb reverse)
 * Android emulator (Android Studio): http://10.0.2.2:3333
 * Android emulator (Genymotion): http://10.0.3.2:3333
 * Android device: http://{machine IP}:3333
 */

/**
 * Starting json server with the same local IP & port
 * yarn json-server --host {machine IP} server.json -p 3333
 */
