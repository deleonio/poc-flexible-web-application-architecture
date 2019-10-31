export SSHPASS=${SFTP_PASSWORD}
sshpass -e sftp -oBatchMode=no -b scripts/batchfile.sftp ${SFTP_USER}@${SFTP_HOST}:poc