import subprocess

def build_docker_image(image_name, dockerfile_path):
    cmd = f'docker build -t {image_name} {dockerfile_path}'
    subprocess.run(cmd, shell=True)

if __name__ == '__main__':
    build_docker_image('nasa-api-ng-viewer', '.')
