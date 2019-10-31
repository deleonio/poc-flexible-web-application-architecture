export SSHPASS=${SFTP_PASSWORD}
ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" ${SFTP_USER}@${SFTP_HOST}
sshpass -e sftp -oBatchMode=no -b scripts/batchfile.sftp ${SFTP_USER}@${SFTP_HOST}:poc