Template.modal.helpers({
  body: function(){
    var cd = Template.currentData();
    if(cd.footer || cd.title) {
      return Template.parentData(1)
    } else {
      return cd;
    }
  }
})


