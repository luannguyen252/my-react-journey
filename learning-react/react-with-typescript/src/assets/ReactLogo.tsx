import React from "react";

interface IProps {
  color: string;
}

const ReactLogo: React.FC<IProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      fill="none"
      viewBox="0 0 300 300"
    >
      <path
        fill={color}
        d="M299.6 150.434c0-19.847-24.855-38.656-62.961-50.32 8.794-38.84 4.885-69.74-12.336-79.633-3.969-2.32-8.611-3.42-13.679-3.42V30.68c2.809 0 5.068.55 6.962 1.588 8.305 4.763 11.908 22.9 9.099 46.229-.672 5.74-1.771 11.786-3.115 17.954-11.969-2.932-25.038-5.191-38.778-6.657-8.244-11.297-16.794-21.557-25.404-30.534 19.908-18.504 38.595-28.64 51.297-28.64V17c-16.794 0-38.778 11.97-61.007 32.733-22.229-20.641-44.213-32.489-61.007-32.489v13.619c12.641 0 31.389 10.076 51.297 28.457-8.55 8.977-17.099 19.176-25.221 30.473-13.801 1.466-26.87 3.725-38.84 6.718a184.25 184.25 0 01-3.175-17.71c-2.87-23.328.672-41.465 8.916-46.29 1.832-1.099 4.214-1.588 7.023-1.588V17.306c-5.13 0-9.771 1.1-13.802 3.42-17.16 9.893-21.007 40.733-12.152 79.45C24.733 111.9 0 130.648 0 150.434c0 19.847 24.855 38.656 62.961 50.32-8.794 38.839-4.885 69.74 12.336 79.633 3.97 2.32 8.61 3.419 13.74 3.419 16.794 0 38.778-11.969 61.007-32.732 22.229 20.641 44.214 32.488 61.007 32.488 5.13 0 9.771-1.099 13.802-3.42 17.16-9.893 21.007-40.732 12.152-79.449 37.862-11.664 62.595-30.473 62.595-50.259zm-79.511-40.733c-2.259 7.878-5.068 16-8.244 24.122-2.504-4.885-5.13-9.771-8-14.656-2.809-4.886-5.801-9.649-8.794-14.29 8.672 1.282 17.038 2.87 25.038 4.824zm-27.969 65.038c-4.763 8.244-9.649 16.061-14.717 23.328a317.715 317.715 0 01-27.603 1.221c-9.221 0-18.443-.427-27.481-1.16-5.068-7.267-10.015-15.023-14.778-23.206-4.641-8-8.855-16.122-12.702-24.305 3.786-8.183 8.061-16.366 12.641-24.366 4.763-8.244 9.649-16.061 14.717-23.328a317.714 317.714 0 0127.603-1.222c9.221 0 18.443.428 27.481 1.161 5.068 7.267 10.015 15.022 14.778 23.206 4.641 8 8.855 16.122 12.702 24.305-3.847 8.183-8.061 16.366-12.641 24.366zm19.725-7.939a261.718 261.718 0 018.428 24.305 274.38 274.38 0 01-25.16 4.886c2.992-4.703 5.984-9.527 8.793-14.474 2.809-4.885 5.435-9.832 7.939-14.717zm-61.923 65.16c-5.679-5.863-11.359-12.397-16.977-19.542 5.496.244 11.115.427 16.794.427 5.74 0 11.42-.122 16.977-.427a238.469 238.469 0 01-16.794 19.542zm-45.435-35.969c-8.671-1.283-17.037-2.871-25.037-4.825 2.26-7.878 5.068-16 8.244-24.122 2.504 4.886 5.13 9.771 8 14.657a406.122 406.122 0 008.793 14.29zm45.13-127.083c5.679 5.862 11.358 12.397 16.977 19.542-5.496-.245-11.115-.428-16.794-.428-5.74 0-11.42.122-16.977.428a238.381 238.381 0 0116.794-19.542zm-45.191 35.969c-2.992 4.702-5.984 9.527-8.793 14.473a345.51 345.51 0 00-7.94 14.656 261.681 261.681 0 01-8.427-24.305c8-1.893 16.428-3.542 25.16-4.824zM49.16 181.334c-21.618-9.221-35.603-21.313-35.603-30.9 0-9.588 13.985-21.74 35.603-30.901 5.252-2.259 10.992-4.274 16.916-6.168 3.48 11.97 8.06 24.428 13.74 37.191-5.618 12.702-10.137 25.099-13.557 37.007-6.046-1.893-11.786-3.969-17.1-6.229zM82.014 268.6c-8.305-4.763-11.908-22.9-9.099-46.228.672-5.74 1.771-11.786 3.115-17.954 11.97 2.931 25.038 5.191 38.778 6.656 8.244 11.298 16.794 21.557 25.404 30.534-19.908 18.504-38.595 28.641-51.297 28.641-2.748-.061-5.069-.61-6.9-1.649zm144.854-46.533c2.87 23.328-.672 41.465-8.916 46.289-1.832 1.099-4.214 1.588-7.023 1.588-12.641 0-31.389-10.076-51.297-28.458 8.549-8.977 17.099-19.175 25.221-30.473 13.801-1.465 26.87-3.725 38.839-6.717 1.405 6.168 2.504 12.091 3.176 17.771zm23.511-40.733c-5.252 2.26-10.992 4.275-16.916 6.168-3.481-11.969-8.061-24.427-13.74-37.19 5.618-12.703 10.137-25.099 13.557-37.008 6.046 1.893 11.786 3.97 17.16 6.229 21.618 9.222 35.603 21.313 35.603 30.901-.061 9.587-14.046 21.74-35.664 30.9z"
      ></path>
      <path
        fill={color}
        d="M149.739 178.342c15.413 0 27.908-12.495 27.908-27.908 0-15.414-12.495-27.909-27.908-27.909-15.413 0-27.908 12.495-27.908 27.909 0 15.413 12.495 27.908 27.908 27.908z"
      ></path>
    </svg>
  );
};

export default ReactLogo;
