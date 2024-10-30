# -------- Apply --------- #

kubectl apply -f mongodb-deployment.yaml
kubectl apply -f api-gateway-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f quiz-service-deployment.yaml
kubectl apply -f user-service-deployment.yaml
kubectl get pods
kubectl get services

# -------- Delete pods --------- #
# Delete individual pods
kubectl delete pod api-gateway-6dd8b78964-rzfdh
kubectl delete pod frontend-d94954c86-rbdmw
kubectl delete pod mongo-6fdb84fb66-5rw78
kubectl delete pod quiz-service-885d5f5c8-5jfj2
kubectl delete pod user-service-5747b7d547-mfjbt

# Delete individual services
kubectl delete service api-gateway-service
kubectl delete service frontend-service
kubectl delete service mongo-service
kubectl delete service quiz-service
kubectl delete service user-service

# Optionally, delete all resources in the current namespace
kubectl delete all --all

# -------- Docker build and push --------- #

# Build images with latest tag
cd api-gateway
docker build -t carldahlqvist/api-gateway:latest .
cd ../frontend-service
docker build -t carldahlqvist/frontend-service:latest .
cd ../quiz-service
docker build -t carldahlqvist/quiz-service:latest .
cd ../user-service
docker build -t carldahlqvist/user-service:latest .

# Push images with latest tag
docker push carldahlqvist/api-gateway:latest
docker push carldahlqvist/frontend-service:latest
docker push carldahlqvist/quiz-service:latest
docker push carldahlqvist/user-service:latest

# Search for images in Docker Hub
docker search carldahlqvist
