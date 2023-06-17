import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const ArrowLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="m239.596 163.947 56.105-4.962c12.591 0 22.799 10.308 22.799 23.022 0 12.713-10.208 23.021-22.799 23.021l-56.105-4.962c-9.878 0-17.886-8.085-17.886-18.059 0-9.991 8.008-18.06 17.886-18.06Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M51.191 164.859c.877-.885 4.153-4.627 7.23-7.735 17.952-19.463 64.825-51.289 89.345-61.028 3.723-1.554 13.137-4.862 18.183-5.096 4.815 0 9.414 1.12 13.799 3.325 5.476 3.09 9.844 7.969 12.26 13.716 1.539 3.976 3.954 15.921 3.954 16.138 2.399 13.048 3.706 34.265 3.706 57.721 0 22.32-1.307 42.668-3.275 55.933-.216.234-2.631 15.052-5.262 20.131-4.815 9.289-14.229 15.036-24.305 15.036h-.877c-6.568-.217-20.367-5.981-20.367-6.181-23.213-9.74-68.977-40.029-87.375-60.16 0 0-5.196-5.179-7.446-8.404-3.507-4.644-5.261-10.391-5.261-16.138 0-6.415 1.969-12.38 5.691-17.258Z"
    />
  </Svg>
);

export const ArrowRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="m124.404 200.053-56.105 4.962c-12.59 0-22.799-10.308-22.799-23.022 0-12.713 10.208-23.021 22.8-23.021l56.104 4.962c9.878 0 17.886 8.085 17.886 18.059 0 9.991-8.008 18.06-17.886 18.06Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M312.809 199.141c-.877.885-4.153 4.627-7.231 7.735-17.951 19.463-64.824 51.289-89.344 61.029-3.723 1.553-13.137 4.861-18.183 5.095-4.815 0-9.414-1.119-13.799-3.325-5.476-3.09-9.844-7.969-12.26-13.716-1.539-3.976-3.954-15.921-3.954-16.138-2.399-13.048-3.706-34.265-3.706-57.721 0-22.32 1.307-42.668 3.275-55.933.216-.234 2.631-15.052 5.262-20.131C177.684 96.747 187.098 91 197.174 91h.877c6.568.217 20.367 5.98 20.367 6.181 23.213 9.74 68.977 40.029 87.375 60.16 0 0 5.196 5.179 7.446 8.404 3.507 4.644 5.261 10.391 5.261 16.138 0 6.415-1.969 12.38-5.691 17.258Z"
    />
  </Svg>
);

export const Bookmark = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="m181.866 282.427-98.458 49.179c-7.435 4.036-16.71 1.341-20.869-6.064a16.528 16.528 0 0 1-1.873-7.545v-110.08c0 10.914 6.154 17.651 22.34 25.196l98.86 49.314Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M228.553 30.334c41.069 0 74.379 16.168 74.78 57.532v230.131a15.981 15.981 0 0 1-1.873 7.411 15.404 15.404 0 0 1-9.328 7.648 15.286 15.286 0 0 1-11.942-1.45l-98.324-49.179-98.86-49.314c-16.186-7.545-22.34-14.282-22.34-25.196V87.867c0-41.365 33.31-57.534 74.245-57.534h93.642Zm10.301 91.621h-114.11c-6.575 0-11.905 5.369-11.905 11.991 0 6.623 5.33 11.992 11.905 11.992h114.11c6.575 0 11.906-5.369 11.906-11.992 0-6.622-5.331-11.991-11.906-11.991Z"
    />
  </Svg>
);

export const Menu = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M243.812 30.334h51.354c21.268 0 38.501 17.378 38.501 38.826v51.787c0 21.447-17.233 38.826-38.501 38.826h-51.354c-21.268 0-38.501-17.379-38.501-38.826V69.16c0-21.448 17.233-38.826 38.501-38.826Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M120.188 204.227c21.268 0 38.501 17.379 38.501 38.826v51.788c0 21.433-17.233 38.826-38.501 38.826H68.835c-21.268 0-38.501-17.393-38.501-38.826v-51.788c0-21.447 17.233-38.826 38.5-38.826h51.354Zm174.978 0c21.268 0 38.501 17.379 38.501 38.826v51.788c0 21.433-17.233 38.826-38.501 38.826h-51.354c-21.268 0-38.501-17.393-38.501-38.826v-51.788c0-21.447 17.233-38.826 38.501-38.826h51.354ZM120.188 30.333c21.268 0 38.501 17.38 38.501 38.827v51.787c0 21.447-17.233 38.826-38.501 38.826H68.835c-21.268 0-38.501-17.379-38.501-38.826V69.16c0-21.448 17.233-38.826 38.5-38.826h51.354Z"
    />
  </Svg>
);

export const Bin = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M297.923 143.908c0 1.031-8.083 103.266-12.7 146.293-2.891 26.404-19.913 42.419-45.446 42.874-19.618.44-38.823.592-57.718.592-20.06 0-39.678-.152-58.721-.592-24.677-.591-41.714-16.925-44.458-42.874-4.75-43.178-12.685-145.262-12.833-146.293-.147-3.109.856-6.066 2.892-8.463 2.006-2.214 4.897-3.549 7.935-3.549h210.37c3.024 0 5.767 1.335 7.936 3.549 2.021 2.397 3.038 5.354 2.743 8.463Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M318.5 90.65c0-6.234-4.912-11.118-10.812-11.118h-44.222c-8.997 0-16.815-6.4-18.821-15.423l-2.478-11.057c-3.467-13.361-15.429-22.718-28.852-22.718H150.7c-13.571 0-25.415 9.357-29.014 23.446l-2.316 10.344c-2.021 9.008-9.839 15.408-18.822 15.408H56.327c-5.915 0-10.827 4.884-10.827 11.117v5.763c0 6.082 4.912 11.117 10.827 11.117h251.361c5.9 0 10.812-5.035 10.812-11.117V90.65Z"
    />
  </Svg>
);

export const Edit = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M304.054 287.458h-86.601c-8.449 0-15.321 6.961-15.321 15.521 0 8.575 6.872 15.521 15.321 15.521h86.601c8.449 0 15.321-6.946 15.321-15.521 0-8.56-6.872-15.521-15.321-15.521Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="m156.783 104.709 82.062 66.128c1.98 1.581 2.318 4.483.773 6.505l-97.287 126.419c-6.116 7.81-15.128 12.228-24.785 12.391l-53.109.653c-2.832.032-5.31-1.925-5.955-4.729l-12.07-52.335c-2.092-9.619 0-19.564 6.116-27.227l97.769-127.023c1.577-2.038 4.49-2.396 6.486-.782Z"
    />
    <Path
      fill={props.accentColor || '#494B4B'}
      d="m275.584 131.426-15.82 19.695c-1.593 2.005-4.458 2.331-6.438.733-19.232-15.521-68.479-55.35-82.142-66.389-1.996-1.63-2.269-4.532-.66-6.554l15.257-18.896c13.841-17.77 37.981-19.401 57.455-3.913l22.37 17.772c9.173 7.173 15.289 16.63 17.381 26.575 2.414 10.939-.161 21.684-7.403 30.977Z"
    />
  </Svg>
);

export const Home = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill="#FEFEFE"
      d="M30 130.12c0-15.145 18.438-22.587 28.95-11.685l32.365 33.563c7.433 7.708 20.079 6.609 26.07-2.267l50.163-74.316c6.674-9.887 21.23-9.887 27.904 0l50.163 74.316c5.991 8.876 18.637 9.975 26.07 2.267l32.364-33.563C314.562 107.533 333 114.975 333 130.12v149.07c0 9.297-7.537 16.833-16.833 16.833H46.833c-9.297 0-16.833-7.536-16.833-16.833V130.12Z"
    />
  </Svg>
);

export const Notification = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.primaryColor || '#fff'}
      d="M299.838 176.621c-11.079-12.938-16.114-24.15-16.114-43.197v-6.477c0-24.822-5.713-40.814-18.133-56.807-19.144-24.837-51.371-39.806-82.92-39.806h-1.342c-30.885 0-62.103 14.281-81.578 38.11-13.099 16.314-19.475 32.994-19.475 58.503v6.477c0 19.047-4.703 30.259-16.113 43.197-8.396 9.532-11.08 21.782-11.08 35.041 0 13.274 4.357 25.845 13.1 36.064 11.41 12.25 27.524 20.071 43.984 21.43 23.831 2.719 47.663 3.743 71.841 3.743 24.163 0 47.994-1.711 71.84-3.743 16.446-1.359 32.559-9.18 43.97-21.43 8.727-10.219 13.099-22.79 13.099-36.064 0-13.259-2.683-25.509-11.079-35.041Z"
    />
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M212.465 291.63c-7.582-1.619-53.782-1.619-61.364 0-6.482 1.497-13.491 4.98-13.491 12.617.377 7.287 4.643 13.717 10.551 17.796l-.015.015a55.146 55.146 0 0 0 26.002 11.105c5.005.687 10.099.657 15.285 0a55.157 55.157 0 0 0 25.987-11.105l-.015-.015c5.908-4.079 10.174-10.509 10.551-17.796 0-7.637-7.009-11.12-13.491-12.617Z"
    />
  </Svg>
);

export const Team = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.primaryColor || '#fff'}
      d="M181.725 220.522c-52.468 0-96.74 8.55-96.74 41.549 0 33.012 44.558 41.262 96.74 41.262 52.469 0 96.739-8.55 96.739-41.549 0-33.012-44.556-41.262-96.739-41.262Z"
    />
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M181.725 189.083c35.528 0 64.016-28.573 64.016-64.208 0-35.649-28.488-64.209-64.016-64.209-35.529 0-64.017 28.56-64.017 64.209 0 35.635 28.488 64.208 64.017 64.208ZM320.713 139.825c9.192-36.058-17.757-68.442-52.074-68.442-3.731 0-7.299.41-10.785 1.106-.463.11-.98.342-1.253.751-.313.52-.081 1.216.259 1.667 10.309 14.505 16.232 32.165 16.232 51.123 0 18.166-5.433 35.102-14.965 49.157-.981 1.448-.109 3.401 1.62 3.701 2.397.424 4.848.642 7.354.711 24.988.655 47.416-15.475 53.612-39.774Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M346.891 224.723c-4.575-9.779-15.619-16.485-32.41-19.777-7.925-1.939-29.373-4.671-49.323-4.302-.299.041-.463.245-.49.382-.041.191.041.519.436.724 9.219 4.576 44.856 24.476 40.376 66.448-.191 1.817 1.266 3.388 3.078 3.114 8.769-1.256 31.334-6.119 38.333-21.266a29.081 29.081 0 0 0 0-25.323Z"
    />
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M107.14 72.493a53.586 53.586 0 0 0-10.785-1.106c-34.316 0-61.266 32.384-52.06 68.443 6.182 24.298 28.61 40.429 53.599 39.773a51.864 51.864 0 0 0 7.353-.71c1.73-.301 2.601-2.254 1.621-3.702-9.532-14.068-14.966-30.991-14.966-49.156 0-18.972 5.937-36.632 16.246-51.124.327-.45.572-1.147.245-1.666-.272-.424-.776-.642-1.253-.752Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M50.516 204.942c-16.791 3.292-27.821 9.998-32.397 19.778a29.021 29.021 0 0 0 0 25.336c7 15.133 29.564 20.01 38.334 21.252 1.81.274 3.254-1.283 3.064-3.114-4.48-41.958 31.157-61.859 40.39-66.434.381-.219.462-.533.422-.738-.028-.136-.177-.341-.477-.369-19.963-.382-41.398 2.35-49.337 4.289Z"
    />
  </Svg>
);

export const Wallet = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 364 364"
    fill="none"
    {...props}>
    <Path
      fill={props.primaryColor || '#fff'}
      d="M250.459 45.5c52.268 0 83.154 30.01 83.154 80.958v.565h-64.226c-29.888.052-54.101 23.66-54.155 52.802-.04 29.207 24.199 52.92 54.155 52.959h64.28v4.64c0 50.949-30.886 81.076-83.154 81.076H113.501c-52.281 0-83.168-30.127-83.168-81.076V126.458c0-50.949 30.887-80.958 83.168-80.958h136.958Zm-62.648 58.769h-85.594c-6.364.027-11.527 5.061-11.554 11.279-.027 6.243 5.15 11.33 11.554 11.356h85.702c6.403-.026 11.58-5.113 11.553-11.37-.027-6.243-5.258-11.291-11.661-11.265Z"
    />
    <Path
      fill={props.accentColor || '#494B4B'}
      d="M243.234 186.499c3.172 14.427 15.82 24.577 30.261 24.313h49.29c6.008 0 10.882-4.976 10.882-11.127V161.29c-.013-6.138-4.874-11.127-10.882-11.14h-50.451c-16.426.053-29.693 13.687-29.667 30.489 0 1.967.193 3.933.567 5.86Z"
    />
    <Path
      fill={props.primaryColor || '#fff'}
      d="M273 195.65c8.376 0 15.167-6.79 15.167-15.166 0-8.377-6.791-15.167-15.167-15.167s-15.167 6.79-15.167 15.167c0 8.376 6.791 15.166 15.167 15.166Z"
    />
  </Svg>
);
