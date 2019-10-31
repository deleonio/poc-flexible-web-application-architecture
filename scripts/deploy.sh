export SSHPASS=${SFTP_PASSWORD}
sshpass -e sftp -oBatchMode=no -b batchfile.sftp ${SFTP_USER}@${SFTP_HOST}:poc