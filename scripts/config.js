Hooks.on("getSceneControlButtons", (controls, b, c) => {
  if (game.user.isGM) {
    basictools = controls.find((x) => x["name"] == "notes").tools;
    basictools.push(
    {
      button: true,
      visible: true,
      icon: "fas fa-circle-book-open",
      name: "createAreaPin",
      title: "Create Area Pin",
      onClick: () => {
        console.log("test");
      }
    });
  }
});