# watchwithme

To run:
1. Run the following commands
	1. ```docker build -t <IMAGE_NAME>``` to build image.
	2. ```docker run -p 8080:8080 -d <IMAGE_NAME>``` to start up container and run process within that container.
		- maps local port 8080 (left) to container port 8080 (right)
	3. Get Container ID with ```docker ps``` or ```docker ps | grep '<IMAGE_NAME>' | awk '{ print $1 }'```
	4. See logs with ```docker logs <CONTAINER_ID>```
	5. Enter existing container to run commands with ```docker exec -it <CONTAINER_ID> /bin/bash```
	6. Can call app using curl ```curl -i localhost:<LOCAL_PORT>```
	7. ```docker stop <CONTAINER_ID>``` to stop container.