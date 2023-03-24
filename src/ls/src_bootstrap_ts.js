function loadRemoteModuleEntry(remoteEntry) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
    if (containerMap[remoteEntry]) {
      return Promise.resolve();
    }

    return import(
    /* webpackIgnore:true */
    remoteEntry).then(container => {
      initRemote(container, remoteEntry);
      containerMap[remoteEntry] = container;
    });
  });
}
