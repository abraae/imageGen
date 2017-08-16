Sample image generator to dynamically create images suitable for Aotal assessment apps (as described at http://talentappstore.github.io/tas-tenant-apis/doc/assessment-apps.html), using node-canvas.

To run on server:
````
git clone https://github.com/talentappstore/imageGen.git
cd imageGen
docker build -t imagegen .
docker run -d -p 8081:8081 imagegen
```
Images are now served (e.g. for a score of 77) at: **http://<your server>:8081/scoreWithIcon.png?score=77&label=A1**

Areas for improvement:
- add a signature param, so that only users with the generator's secret key can create working urls
- add varnish to cache images
