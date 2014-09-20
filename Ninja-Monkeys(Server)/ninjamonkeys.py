# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# IMPORTS AND ENVIRONMENT
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

import jinja2
import os
import webapp2
import logging
import datetime
import urlparse
import json
from google.appengine.api import users
from google.appengine.ext import ndb
# import enchant

LOADER = jinja2.FileSystemLoader(os.path.dirname(__file__))
jinja_environment = jinja2.Environment(loader = LOADER)

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# DATA STRUCTURES / CLASSES
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# class ExampleClass(ndb.Model):
    # data
    # methods

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# HANDLERS
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

class HomeHandler(webapp2.RequestHandler):    
    def get(self):
      template_values={};
      template = jinja_environment.get_template('templates/index.html')
      self.response.out.write(template.render(template_values))
        
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# SEND TO HANDLERS
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

routes = [
    ('.*', HomeHandler), 

]
app = webapp2.WSGIApplication(routes, debug=True)
