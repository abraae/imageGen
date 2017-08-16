Sample image generator to dynamically create images suitable for Aotal assessment apps (as described at http://talentappstore.github.io/tas-tenant-apis/doc/assessment-apps.html).

To run:
````
git clone https://github.com/talentappstore/imageGen.git
cd imageGen
docker build -t imagegen .
docker run -d -p 3000:3000 imagegen
```

