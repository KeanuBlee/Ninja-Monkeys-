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

LOADER = jinja2.FileSystemLoader(os.path.dirname(__file__))
jinja_environment = jinja2.Environment(loader = LOADER, block_start_string='<%',block_end_string='%>',variable_start_string='<%<', variable_end_string='>%>')

class HomeHandler(webapp2.RequestHandler):    
    def get(self):
      if(self.request.get('state')!=''):
        ids = json.loads(self.request.get('state')).get('ids', [])
        template_values = {'id': ids[0]}
      else:
        template_values={'id': ''}
      template = jinja_environment.get_template('templates/test.html')
      self.response.out.write(template.render(template_values))

routes = [
    ('.*', HomeHandler), 

]
app = webapp2.WSGIApplication(routes, debug=True)
