module.exports = (req, res, next) => {
  if (req.user) {
    res.locals.isAuthenticated = true;
    res.locals.authUser = req.user;

    if(req.user.Kind === "Subcriber"){
      res.locals.kind = "subcriber";
    }
    else if(req.user.Kind === "writer"){
      res.locals.kind = "writer";
    }
    else if(req.user.Kind === "editer"){
      res.locals.kind = "editer";
      res.locals.isEditer = true;
    }
    
    else{
      res.locals.kind = "admin";
      res.locals.isAdmin = true;
    }

  //  console.log(res.locals.kind);
  }

  next();
}
